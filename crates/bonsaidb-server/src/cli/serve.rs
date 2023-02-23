use std::marker::PhantomData;
#[cfg(any(feature = "websockets", feature = "acme"))]
use std::net::{Ipv6Addr, SocketAddr, SocketAddrV6};
#[cfg(feature = "acme")]
use std::time::Duration;

use clap::Args;

use crate::{Backend, BackendError, BonsaiListenConfig, CustomServer, TcpService};

/// Execute the server
#[derive(Args, Debug)]
pub struct Serve<B: Backend> {
    /// The socket address to listen for the BonsaiDb protocol. Defaults to a
    /// localhost IP address for UDP port 5645 (not an [officially registered
    /// port](https://github.com/khonsulabs/bonsaidb/issues/48)).
    #[clap(short = 'l', long = "listen-on")]
    pub listen_on: Option<SocketAddr>,

    /// If this option is specified, the `SO_REUSEADDR` flag will be set on the
    /// underlying socket. See [`BonsaiListenConfig::reuse_address`] for more
    /// information.
    #[clap(long = "reuse-address")]
    pub reuse_address: Option<bool>,

    #[cfg(any(feature = "websockets", feature = "acme"))]
    /// The bind port and address for HTTP traffic. Defaults to TCP port 80.
    #[clap(long = "http")]
    pub http_port: Option<SocketAddr>,

    #[cfg(any(feature = "websockets", feature = "acme"))]
    /// The bind port and address for HTTPS traffic. Defaults to TCP port 443.
    #[clap(long = "https")]
    pub https_port: Option<SocketAddr>,

    #[clap(skip)]
    _backend: PhantomData<B>,
}

impl<B: Backend> Serve<B> {
    /// Starts the server.
    pub async fn execute(&self, server: &CustomServer<B>) -> Result<(), BackendError<B::Error>> {
        self.execute_with(server, ()).await
    }

    /// Starts the server using `service` for websocket connections, if enabled.
    #[cfg_attr(
        not(any(feature = "websockets", feature = "acme")),
        allow(unused_variables)
    )]
    pub async fn execute_with<S: TcpService>(
        &self,
        server: &CustomServer<B>,
        service: S,
    ) -> Result<(), BackendError<B::Error>> {
        // Try to initialize a logger, but ignore it if it fails. This API is
        // public and another logger may already be installed.
        drop(env_logger::try_init());
        let mut config = BonsaiListenConfig::default();
        if let Some(address) = self.listen_on {
            config.address = address;
        }
        config.reuse_address = self.reuse_address.unwrap_or(false);

        #[cfg(any(feature = "websockets", feature = "acme"))]
        {
            let listen_address = self.http_port.unwrap_or_else(|| {
                SocketAddr::V6(SocketAddrV6::new(Ipv6Addr::UNSPECIFIED, 80, 0, 0))
            });
            let task_server = server.clone();
            let task_service = service.clone();
            tokio::task::spawn(async move {
                task_server
                    .listen_for_tcp_on(listen_address, task_service)
                    .await
            });

            let listen_address = self.https_port.unwrap_or_else(|| {
                SocketAddr::V6(SocketAddrV6::new(Ipv6Addr::UNSPECIFIED, 443, 0, 0))
            });
            let task_server = server.clone();
            tokio::task::spawn(async move {
                task_server
                    .listen_for_secure_tcp_on(listen_address, service)
                    .await
            });

            #[cfg(feature = "acme")]
            if server.certificate_chain().await.is_err() {
                log::warn!("Server has no certificate chain. Because acme is enabled, waiting for certificate to be acquired.");
                while server.certificate_chain().await.is_err() {
                    tokio::time::sleep(Duration::from_secs(1)).await;
                }
                log::info!("Server certificate acquired. Listening for certificate");
            }
        }

        let task_server = server.clone();
        tokio::task::spawn(async move { task_server.listen_on(config).await });

        server.listen_for_shutdown().await?;

        Ok(())
    }
}
