use std::time::Duration;

use bonsaidb::core::pubsub::{AsyncPubSub, AsyncSubscriber};
use bonsaidb::local::config::{Builder, StorageConfiguration};
use bonsaidb::local::AsyncDatabase;
use tokio::time::sleep;

#[tokio::main]
async fn main() -> Result<(), bonsaidb::local::Error> {
    // This example is using a database with no collections, because PubSub is a
    // system independent of the data stored in the database.
    let db = AsyncDatabase::open::<()>(StorageConfiguration::new("pubsub.bonsaidb")).await?;

    let subscriber = db.create_subscriber().await?;
    // Subscribe for messages sent to the topic "pong"
    subscriber.subscribe_to(&"pong").await?;

    // Launch a task that sends out "ping" messages.
    tokio::spawn(pinger(db.clone()));
    // Launch a task that receives "ping" messages and sends "pong" responses.
    tokio::spawn(ponger(db.clone()));

    // Loop until a we receive a message letting us know when the ponger() has
    // no pings remaining.
    loop {
        let message = subscriber.receiver().receive_async().await?;
        let pings_remaining = message.payload::<usize>()?;
        println!(
            "<-- Received {}, pings remaining: {}",
            message.topic::<String>()?,
            pings_remaining
        );
        if pings_remaining == 0 {
            break;
        }
    }

    println!("Received all pongs.");

    Ok(())
}

async fn pinger<P: AsyncPubSub>(pubsub: P) -> Result<(), bonsaidb::local::Error> {
    let mut ping_count = 0u32;
    loop {
        ping_count += 1;
        println!("-> Sending ping {ping_count}");
        pubsub.publish(&"ping", &ping_count).await?;
        sleep(Duration::from_millis(250)).await;
    }
}

async fn ponger<P: AsyncPubSub<Subscriber = S>, S: AsyncSubscriber + std::fmt::Debug>(
    pubsub: P,
) -> Result<(), bonsaidb::local::Error> {
    const NUMBER_OF_PONGS: usize = 5;
    let subscriber = pubsub.create_subscriber().await?;
    subscriber.subscribe_to(&"ping").await?;
    let mut pings_remaining = NUMBER_OF_PONGS;

    println!("Ponger started, waiting to respond to {pings_remaining} pings");

    while pings_remaining > 0 {
        let message = subscriber.receiver().receive_async().await?;
        println!(
            "<- Received {}, id {}",
            message.topic::<&str>().unwrap(),
            message.payload::<u32>().unwrap()
        );
        pings_remaining -= 1;
        pubsub.publish(&"pong", &pings_remaining).await?;
    }

    println!("Ponger finished.");

    Ok(())
}

#[test]
fn runs() {
    main().unwrap()
}
