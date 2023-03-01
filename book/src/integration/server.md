# Integrating the networked BonsaiDb Server

To access BonsaiDb over the network, you're going to be writing two pieces of code: the server code and the client code.

## Your BonsaiDb Server

The first step is to create a [`Server`][storage], which uses local [`Storage`][storage] under the hood. This means that if you're already using BonsaiDb in local mode, you can swap your usage of [`Storage`][storage] with [`Server`][server] in your server code without running your database through any tools. Here's the setup code from [`basic-server/examples/basic-server.rs`](https://github.com/khonsulabs/bonsaidb/blob/main/examples/basic-server/examples/basic-server.rs)

```rust,noplayground,no_run
{{#include ../../../examples/basic-server/examples/basic-server.rs:setup}}
```

Once you have a server initialized, calling [`listen_on`]({{DOCS_BASE_URL}}/bonsaidb/server/struct.CustomServer.html#method.listen_on) will begin listening for connections on the port specified. This uses the preferred native protocol which uses UDP. If you find that UDP is not working for your setup or want to put BonsaiDb behind a load balancer that doesn't support UDP, you can enable WebSocket support and call [`listen_for_websockets_on`]({{DOCS_BASE_URL}}/bonsaidb/server/struct.CustomServer.html#method.listen_for_websockets_on).

You can call both, but since these functions don't return until the server is shut down, you should spawn them instead:

```rust,noplayground,no_run
let task_server = server.clone();
tokio::spawn(async move {
    task_server.listen_on(5645).await
});
let server = server.clone();
tokio::spawn(async move {
    task_server.listen_for_websockets_on("localhost:8080", false).await
});
```

If you're not running any of your own code on the server, and you're only using one listening method, you can just await the listen method of your choice in your server's main. This code example configures BonsaiDb on UDP port 5645, but this is not [an officially registered port](https://github.com/khonsulabs/bonsaidb/issues/48).

<!-- TODO: Certificates -->

## From the Client

The [`Client`][client] can support both the native protocol and WebSockets. It determines which protocol to use based on the scheme in the URL:

* `bonsaidb://host:port` will connect using the native BonsaiDb protocol.
* `ws://host:port` will connect using WebSockets.

Here's how to connect, from [`examples/basic-server/examples/basic-server.rs`](https://github.com/khonsulabs/bonsaidb/blob/main/examples/basic-server/examples/basic-server.rs):

```rust,noplayground,no_run
Client::new(
    Url::parse("bonsaidb://localhost:5645")?,
    Some(certificate),
)
.await?
```

This is using a pinned certificate to connect. Other methods are supported, but better certificate management is coming soon.

<!-- TODO: Certificates -->

## Common Traits

* [`Server`][server] implements [`StorageConnection`](../traits/storage_connection.md).
* [`Server::database()`]({{DOCS_BASE_URL}}/bonsaidb/server/struct.CustomServer.html#method.database) returns a local [`Database`]({{DOCS_BASE_URL}}/bonsaidb/local/struct.Database.html), which implements [`Connection`](../traits/connection.md), [`KeyValue`](../traits/key-value.md), and [`PubSub`](../traits/pubsub.md). Local access in the server executable doesn't go over the network.
* [`BlockingClient`][client] implements [`StorageConnection`](../traits/storage_connection.md).
* [`Client::database()`]({{DOCS_BASE_URL}}/bonsaidb/client/struct.BlockingClient.html#method.database) returns a [`BlockingRemoteDatabase`]({{DOCS_BASE_URL}}/bonsaidb/client/struct.BlockingRemoteDatabase.html), which implements [`Connection`](../traits/connection.md), [`KeyValue`](../traits/key-value.md), and [`PubSub`](../traits/pubsub.md).

[server]: {{DOCS_BASE_URL}}/bonsaidb/server/type.Server.html
[storage]: {{DOCS_BASE_URL}}/bonsaidb/local/struct.Storage.html
[client]: {{DOCS_BASE_URL}}/bonsaidb/client/struct.BlockingClient.html
