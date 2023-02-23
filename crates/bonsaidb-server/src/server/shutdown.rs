use std::time::Duration;

use async_lock::Mutex;
use bonsaidb_utils::fast_async_lock;
use tokio::sync::watch;

#[derive(Debug)]
pub struct Shutdown {
    sender: watch::Sender<ShutdownState>,
    receiver: Mutex<Option<watch::Receiver<ShutdownState>>>,
}

#[derive(Clone, Debug)]
pub enum ShutdownState {
    Running,
    GracefulShutdown,
    Shutdown,
}

impl Shutdown {
    pub fn new() -> Self {
        let (sender, receiver) = watch::channel(ShutdownState::Running);
        Self {
            sender,
            receiver: Mutex::new(Some(receiver)),
        }
    }

    pub async fn watcher(&self) -> Option<ShutdownStateWatcher> {
        let receiver = fast_async_lock!(self.receiver);
        receiver
            .clone()
            .map(|receiver| ShutdownStateWatcher { receiver })
    }

    async fn stop_watching(&self) {
        let mut receiver = fast_async_lock!(self.receiver);
        *receiver = None;
    }

    pub async fn graceful_shutdown(&self, timeout: Duration) {
        self.stop_watching().await;
        if self.sender.send(ShutdownState::GracefulShutdown).is_ok()
            && tokio::time::timeout(timeout, self.sender.closed())
                .await
                .is_err()
        {
            // Failed to gracefully shut down. If we gracefully shut down, there
            // are no watchers remaining, therefore updating the state doesn't
            // matter.
            self.shutdown().await;
        }
    }

    pub async fn shutdown(&self) {
        self.stop_watching().await;
        drop(self.sender.send(ShutdownState::Shutdown));
    }

    pub fn should_shutdown(&self) -> bool {
        matches!(&*self.sender.borrow(), ShutdownState::Shutdown)
    }
}

#[derive(Clone)]
pub struct ShutdownStateWatcher {
    receiver: watch::Receiver<ShutdownState>,
}

impl ShutdownStateWatcher {
    pub async fn wait_for_shutdown(&mut self) -> ShutdownState {
        if self.receiver.changed().await.is_ok() {
            self.receiver.borrow().clone()
        } else {
            ShutdownState::Shutdown
        }
    }
}
