Networked client for `bonsaidb-server`.

This crate supports two methods for accessing a BonsaiDb server: QUIC and
WebSockets.

QUIC is a new protocol built atop UDP. It is designed to operate more
reliably than TCP, and features TLS built-in at the protocol level.
WebSockets are an established protocol built atop TCP and HTTP.

[`BlockingClient`]($client-type$) provides access to BonsaiDb by implementing
the [`StorageConnection`]($storage-connection-trait$) trait.
[`AsyncClient`]($async-client-type$) provides access to BonsaiDb by implementing
the [`AsyncStorageConnection`]($async-storage-connection-trait$) trait.

## Minimum Supported Rust Version (MSRV)

While this project is alpha, we are actively adopting the current version of
Rust. The current minimum version is `1.64`.

## WASM Support

This crate supports compiling to WebAssembly. When using WebAssembly, the
only protocol available is WebSockets.

### Testing Websockets in a Browser

We have a fully deployed [example
application](https://github.com/khonsulabs/minority-game) available that can be
downloaded and run locally. This example is confirmed to work using Firefox on a
local machine, or any modern browser when accessing
[https://minority-game.gooey.rs/](https://minority-game.gooey.rs/).

- Ensure that the browser is able to talk to the IP/port that you're bound to.
  Browsers try to prevent malicious scripts. You may need to bind `0.0.0.0`
  instead of `localhost`, for example, to circumvent these protections.
- All Chrome-based browsers [require secure
  websockets](https://stackoverflow.com/a/50861413/457) over localhost. This
  makes Chrome not a great candidate for testing WASM applications locally, as
  installing a valid certificate in a test/dev environment can be tricky and/or
  annoying.
