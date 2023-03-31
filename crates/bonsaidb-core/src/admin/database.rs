use serde::{Deserialize, Serialize};

use crate::define_basic_unique_mapped_view;
use crate::document::{CollectionDocument, Emit};
use crate::schema::{Collection, NamedCollection, SchemaName};

/// A database stored in BonsaiDb.
#[derive(Debug, Clone, Eq, PartialEq, Deserialize, Serialize, Collection)]
#[collection(authority = "bonsaidb", name = "databases", views = [ByName], core = crate)]
pub struct Database {
    /// The name of the database.
    pub name: String,
    /// The schema defining the database.
    pub schema: SchemaName,
}

define_basic_unique_mapped_view!(
    ByName,
    Database,
    1,
    "by-name",
    String,
    SchemaName,
    |document: CollectionDocument<Database>| {
        document
            .header
            .emit_key_and_value(document.contents.name, document.contents.schema)
    },
);

impl NamedCollection for Database {
    type ByNameView = ByName;
}
