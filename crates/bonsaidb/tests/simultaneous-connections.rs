//! Tests a single server with multiple simultaneous connections.

use bonsaidb::client::url::Url;
use bonsaidb::client::AsyncClient;
use bonsaidb::core::connection::AsyncStorageConnection;
use bonsaidb::core::test_util::{self, BasicSchema, TestDirectory};
use bonsaidb::local::config::Builder;
use bonsaidb::server::{DefaultPermissions, Server, ServerConfiguration};

#[tokio::test]
async fn simultaneous_connections() -> anyhow::Result<()> {
    let dir = TestDirectory::new("simultaneous-connections.bonsaidb");
    let server = Server::open(
        ServerConfiguration::new(&dir)
            .default_permissions(DefaultPermissions::AllowAll)
            .with_schema::<BasicSchema>()?,
    )
    .await?;
    server.install_self_signed_certificate(false).await?;
    let certificate = server
        .certificate_chain()
        .await?
        .into_end_entity_certificate();
    tokio::spawn(async move { server.listen_on(12345).await });

    let client = AsyncClient::build(Url::parse("bonsaidb://localhost:12345")?)
        .with_certificate(certificate)
        .build()?;

    let mut tasks = Vec::new();
    for i in 0usize..10 {
        tasks.push(test_one_client(client.clone(), format!("test{i}")));
    }

    futures::future::join_all(tasks)
        .await
        .into_iter()
        .collect::<Result<Vec<()>, anyhow::Error>>()?;
    Ok(())
}

async fn test_one_client(client: AsyncClient, database_name: String) -> anyhow::Result<()> {
    for _ in 0u32..50 {
        client
            .create_database::<BasicSchema>(&database_name, false)
            .await
            .unwrap();
        let db = client.database::<BasicSchema>(&database_name).await?;
        test_util::store_retrieve_update_delete_tests(&db)
            .await
            .unwrap();
        client.delete_database(&database_name).await.unwrap();
    }
    Ok(())
}
