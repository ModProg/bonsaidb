initSidebarItems({"enum":[["Error","Errors that arise when interacting with views."],["SerializableValue","Represents either an owned value or a borrowed value. Functionally equivalent to `std::borrow::Cow` except this type doesn't require the wrapped type to implement `Clone`."]],"mod":[["collection","Types for defining a `Collection`."],["view","Types for defining map/reduce-powered `View`s."]],"struct":[["Id","The unique Id of a [`Schema`]. Primarily used to try to protect against using the incorrect data types across a remote connection."],["Map","A document's entry in a View's mappings."],["Schematic","A collection of defined collections and views."]],"trait":[["Collection","A namespaced collection of `Document<Self>` items and views."],["Key","A trait that enables a type to convert itself to a big-endian/network byte order."],["Schema","Defines a group of collections that are stored into a single database."],["Serialized","Wraps a [`View`] with serialization to erase the associated types"],["View","A map/reduce powered indexing and aggregation schema."]],"type":[["MapResult","A type alias for the result of `View::map()`."]]});