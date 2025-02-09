use bonsaidb::core::document::{CollectionDocument, Emit};
use bonsaidb::core::schema::view::CollectionViewSchema;
use bonsaidb::core::schema::{
    Collection, ReduceResult, SerializedCollection, SerializedView, View, ViewMapResult,
    ViewMappedValue,
};
use bonsaidb::local::config::{Builder, StorageConfiguration};
use bonsaidb::local::AsyncDatabase;
use serde::{Deserialize, Serialize};

// begin rustme snippet: snippet-a
#[derive(Debug, Serialize, Deserialize, Collection)]
#[collection(name = "shapes", views = [ShapesByNumberOfSides])]
struct Shape {
    pub sides: u32,
}

#[derive(Debug, Clone, View)]
#[view(collection = Shape, key = u32, value = usize, name = "by-number-of-sides")]
struct ShapesByNumberOfSides;

impl CollectionViewSchema for ShapesByNumberOfSides {
    type View = Self;

    fn map(&self, document: CollectionDocument<Shape>) -> ViewMapResult<Self::View> {
        document
            .header
            .emit_key_and_value(document.contents.sides, 1)
    }

    fn reduce(
        &self,
        mappings: &[ViewMappedValue<Self>],
        _rereduce: bool,
    ) -> ReduceResult<Self::View> {
        Ok(mappings.iter().map(|m| m.value).sum())
    }
}
// end rustme snippet

#[tokio::main]
async fn main() -> Result<(), bonsaidb::core::Error> {
    // begin rustme snippet: snippet-b
    let db =
        AsyncDatabase::open::<Shape>(StorageConfiguration::new("view-examples.bonsaidb")).await?;

    // Insert a new document into the Shape collection.
    Shape { sides: 3 }.push_into_async(&db).await?;
    // end rustme snippet

    // Views in BonsaiDb are written using a Map/Reduce approach. In this
    // example, we take a look at how document mapping can be used to filter and
    // retrieve data
    //
    // Let's start by seeding the database with some shapes of various sizes:
    for sides in 3..=20 {
        Shape { sides }.push_into_async(&db).await?;
    }

    // And, let's add a few shapes with the same number of sides
    Shape { sides: 3 }.push_into_async(&db).await?;
    Shape { sides: 4 }.push_into_async(&db).await?;

    // At this point, our database should have 3 triangles:
    // begin rustme snippet: snippet-c
    let triangles = ShapesByNumberOfSides::entries_async(&db)
        .with_key(&3)
        .query()
        .await?;
    println!("Number of triangles: {}", triangles.len());
    // end rustme snippet

    // What is returned is a list of entries containing the document id
    // (source), the key of the entry, and the value of the entry:
    println!("Triangles: {triangles:#?}");

    // If you want the associated documents, use query_with_collection_docs:
    for entry in &ShapesByNumberOfSides::entries_async(&db)
        .with_key(&3)
        .query_with_collection_docs()
        .await?
    {
        println!(
            "Shape ID {} has {} sides",
            entry.document.header.id, entry.document.contents.sides
        );
    }

    // The reduce() function takes the "values" emitted during the map()
    // function, and reduces a list down to a single value. In this example, the
    // reduce function is acting as a count. So, if you want to query for the
    // number of shapes, we don't need to fetch all the records, we can just
    // retrieve the result of the calculation directly.
    //
    // So, here we're using reduce() to count the number of shapes with 4 sides.
    println!(
        "Number of quads: {} (expected 2)",
        ShapesByNumberOfSides::entries_async(&db)
            .with_key(&4)
            .reduce()
            .await?
    );

    // Or, 5 shapes that are triangles or quads
    println!(
        "Number of quads and triangles: {} (expected 5)",
        ShapesByNumberOfSides::entries_async(&db)
            .with_keys(&[3, 4])
            .reduce()
            .await?
    );

    // And, 10 shapes that have more than 10 sides
    println!(
        "Number of shapes with more than 10 sides: {} (expected 10)",
        ShapesByNumberOfSides::entries_async(&db)
            .with_key_range(11..)
            .reduce()
            .await?
    );

    Ok(())
}

#[test]
fn runs() {
    drop(std::fs::remove_dir_all("view-examples.bonsaidb"));
    main().unwrap()
}
