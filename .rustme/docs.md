![BonsaiDb forbids unsafe code](https://img.shields.io/badge/unsafe-forbid-success)
![BonsaiDb is considered alpha](https://img.shields.io/badge/status-alpha-orange)
[![crate version](https://img.shields.io/crates/v/bonsaidb.svg)](https://crates.io/crates/bonsaidb)
[![Live Build Status](https://img.shields.io/github/actions/workflow/status/khonsulabs/bonsaidb/tests.yml?branch=$ref-name$)](https://github.com/khonsulabs/bonsaidb/actions?query=workflow:Tests)
[![HTML Coverage Report for `$ref-name$`]($pages-base$/coverage/badge.svg)]($pages-base$/coverage/)
[![Documentation for `$ref-name$`](https://img.shields.io/badge/docs-$ref-name$-informational)]($bonsaidb-docs$)

BonsaiDb is a developer-friendly document database for
[Rust](https://rust-lang.org) that grows with you. It offers many features out
of the box that many developers need:

- ACID-compliant, transactional storage of [Collections][collection]
- [Atomic Key-Value storage][key-value] with configurable delayed persistence (similar to Redis)
- At-rest Encryption
- Backup/Restore
- Role-Based Access Control (RBAC)
- Local-only access, networked access via QUIC, or networked access via WebSockets
- And [much more](https://bonsaidb.io/about).

[collection]: $pages-base$/guide/about/concepts/collection.html
[key-value]: $pages-base$/guide/traits/key-value.html

## ⚠️ Status of this project

BonsaiDb is considered alpha software. It is under active development (![GitHub
commit
activity](https://img.shields.io/github/commit-activity/m/khonsulabs/bonsaidb)).
There may still be bugs that result in data loss. All users should regularly
back up their data and test that restoring from backup works correctly.

Around May 2022, a bug and a mistake in benchmarking were discovered. The bug
was promptly fixed, but the net result is that BonsaiDb's transactional write
performance is significantly slower than other databases. Unless you're buliding
a very write-heavy application, the performance will likely still be acceptable.
[Issue #251 on GitHub](https://github.com/khonsulabs/bonsaidb/issues/251) is
where progress of the performance updates are being tracked. From a developer's
perspective, migration is expected to be painless beyond the IO needed to copy
the old database into the new format.

## Example

To get an idea of how it works, let's review the [`view-examples` example][view-examples].
See the [examples README][examples-readme] for a list of all available examples.

The [`view-examples` example][view-examples] shows how to define a simple schema containing a single collection (`Shape`), a view to query the `Shape`s by their `number_of_sides` (`ShapesByNumberOfSides`), and demonstrates multiple ways to query that view.

First, here's how the schema is defined:

```rust,ignore
$../examples/basic-local/examples/view-examples.rs:snippet-a$
```

After you have your collection(s) and view(s) defined, you can open up a database and insert documents:

```rust,ignore
$../examples/basic-local/examples/view-examples.rs:snippet-b$
```

And query data using the Map-Reduce-powered view:

```rust,ignore
$../examples/basic-local/examples/view-examples.rs:snippet-c$
```

You can review the [full example in the repository][view-examples], or see all available examples [in the examples README][examples-readme].

[view-examples]: https://github.com/khonsulabs/bonsaidb/blob/$ref-name$/examples/basic-local/examples/view-examples.rs
[examples-readme]: https://github.com/khonsulabs/bonsaidb/blob/$ref-name$/examples/README.md

## User's Guide

Our user's guide is early in development, but is available at: <$pages-base$/guide/>

## Minimum Supported Rust Version (MSRV)

While this project is alpha, we are actively adopting the current version of
Rust. The current minimum version is `1.64`.

## Feature Flags

No feature flags are enabled by default in the `bonsaidb` crate. This is
because in most Rust executables, you will only need a subset of the
functionality. If you'd prefer to enable everything, you can use the `full`
feature:

```toml
[dependencies]
bonsaidb = { version = "*", features = "full" }
```

- `full`: Enables the features below and `local-full`, `server-full`, and `client-full`.
- `cli`: Enables the `bonsaidb` executable.
- `files`: Enables file storage support with `bonsaidb-files`
- `password-hashing`: Enables the ability to use password authentication using
  Argon2 via `AnyConnection`.
- `token-authentication`: Enables the ability to authenticate using
  authentication tokens, which are similar to API keys.

All other feature flags, listed below, affect each crate individually, but can
be safely combined.

### Local databases only

```toml
[dependencies]
bonsaidb = { version = "*", features = "local-full" }
```

All Cargo features that affect local databases:

- `local-full`: Enables all the flags below
- `local`: Enables the [`local`]($bonsaidb-docs$/local/) module, which re-exports the crate
  `bonsaidb-local`.
- `async`: Enables async support with Tokio.
- `cli`: Enables the `clap` structures for embedding database
  management commands into your own command-line interface.
- `compression`: Enables support for compressed storage using lz4.
- `encryption`: Enables at-rest encryption.
- `instrument`: Enables instrumenting with `tracing`.
- `password-hashing`: Enables the ability to use password authentication
  using Argon2.
- `token-authentication`: Enables the ability to authenticate using
  authentication tokens, which are similar to API keys.

### BonsaiDb server

```toml
[dependencies]
bonsaidb = { version = "*", features = "server-full" }
```

All Cargo features that affect networked servers:

- `server-full`: Enables all the flags below,
- `server`: Enables the [`server`]($bonsaidb-docs$/server/) module, which re-exports the crate
  `bonsaidb-server`.
- `acme`: Enables automtic certificate acquisition through ACME/LetsEncrypt.
- `cli`: Enables the `cli` module.
- `compression`: Enables support for compressed storage using lz4.
- `encryption`: Enables at-rest encryption.
- `hyper`: Enables convenience functions for upgrading websockets using `hyper`.
- `instrument`: Enables instrumenting with `tracing`.
- `pem`: Enables the ability to install a certificate using the PEM format.
- `websockets`: Enables `WebSocket` support.
- `password-hashing`: Enables the ability to use password authentication
  using Argon2.
- `token-authentication`: Enables the ability to authenticate using
  authentication tokens, which are similar to API keys.

### Client for accessing a BonsaiDb server

```toml
[dependencies]
bonsaidb = { version = "*", features = "client-full" }
```

All Cargo features that affect networked clients:

- `client-full`: Enables all flags below.
- `client`: Enables the [`client`]($bonsaidb-docs$/client/) module, which re-exports the crate
  `bonsaidb-client`.
- `trusted-dns`: Enables using trust-dns for DNS resolution. If not
  enabled, all DNS resolution is done with the OS's default name resolver.
- `websockets`: Enables `WebSocket` support for `bonsaidb-client`.
- `password-hashing`: Enables the ability to use password authentication
  using Argon2.
- `token-authentication`: Enables the ability to authenticate using
  authentication tokens, which are similar to API keys.
