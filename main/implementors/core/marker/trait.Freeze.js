(function() {var implementors = {};
implementors["bonsaidb"] = [{"text":"impl&lt;B&gt; Freeze for <a class=\"enum\" href=\"bonsaidb/cli/enum.Command.html\" title=\"enum bonsaidb::cli::Command\">Command</a>&lt;B&gt;","synthetic":true,"types":["bonsaidb::cli::Command"]},{"text":"impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"bonsaidb/cli/struct.Args.html\" title=\"struct bonsaidb::cli::Args\">Args</a>&lt;B&gt;","synthetic":true,"types":["bonsaidb::cli::Args"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb/cli/enum.ConnectionTarget.html\" title=\"enum bonsaidb::cli::ConnectionTarget\">ConnectionTarget</a>","synthetic":true,"types":["bonsaidb::cli::ConnectionTarget"]}];
implementors["bonsaidb_client"] = [{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_client/struct.Builder.html\" title=\"struct bonsaidb_client::Builder\">Builder</a>&lt;A&gt;","synthetic":true,"types":["bonsaidb_client::builder::Builder"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_client/struct.RemoteSubscriber.html\" title=\"struct bonsaidb_client::RemoteSubscriber\">RemoteSubscriber</a>&lt;A&gt;","synthetic":true,"types":["bonsaidb_client::client::remote_database::pubsub::RemoteSubscriber"]},{"text":"impl&lt;DB, A&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_client/struct.RemoteDatabase.html\" title=\"struct bonsaidb_client::RemoteDatabase\">RemoteDatabase</a>&lt;DB, A&gt;","synthetic":true,"types":["bonsaidb_client::client::remote_database::RemoteDatabase"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_client/struct.Client.html\" title=\"struct bonsaidb_client::Client\">Client</a>&lt;A&gt;","synthetic":true,"types":["bonsaidb_client::client::Client"]},{"text":"impl&lt;ApiError&gt; Freeze for <a class=\"enum\" href=\"bonsaidb_client/enum.Error.html\" title=\"enum bonsaidb_client::Error\">Error</a>&lt;ApiError&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ApiError: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_client::error::Error"]}];
implementors["bonsaidb_core"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/permissions/bonsai/enum.BonsaiAction.html\" title=\"enum bonsaidb_core::permissions::bonsai::BonsaiAction\">BonsaiAction</a>","synthetic":true,"types":["bonsaidb_core::permissions::bonsai::BonsaiAction"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/permissions/bonsai/enum.ServerAction.html\" title=\"enum bonsaidb_core::permissions::bonsai::ServerAction\">ServerAction</a>","synthetic":true,"types":["bonsaidb_core::permissions::bonsai::ServerAction"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/permissions/bonsai/enum.DatabaseAction.html\" title=\"enum bonsaidb_core::permissions::bonsai::DatabaseAction\">DatabaseAction</a>","synthetic":true,"types":["bonsaidb_core::permissions::bonsai::DatabaseAction"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/permissions/bonsai/enum.DocumentAction.html\" title=\"enum bonsaidb_core::permissions::bonsai::DocumentAction\">DocumentAction</a>","synthetic":true,"types":["bonsaidb_core::permissions::bonsai::DocumentAction"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/permissions/bonsai/enum.ViewAction.html\" title=\"enum bonsaidb_core::permissions::bonsai::ViewAction\">ViewAction</a>","synthetic":true,"types":["bonsaidb_core::permissions::bonsai::ViewAction"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/permissions/bonsai/enum.TransactionAction.html\" title=\"enum bonsaidb_core::permissions::bonsai::TransactionAction\">TransactionAction</a>","synthetic":true,"types":["bonsaidb_core::permissions::bonsai::TransactionAction"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/permissions/bonsai/enum.PubSubAction.html\" title=\"enum bonsaidb_core::permissions::bonsai::PubSubAction\">PubSubAction</a>","synthetic":true,"types":["bonsaidb_core::permissions::bonsai::PubSubAction"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/permissions/bonsai/enum.KvAction.html\" title=\"enum bonsaidb_core::permissions::bonsai::KvAction\">KvAction</a>","synthetic":true,"types":["bonsaidb_core::permissions::bonsai::KvAction"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/permissions/bonsai/enum.EncryptionKeyAction.html\" title=\"enum bonsaidb_core::permissions::bonsai::EncryptionKeyAction\">EncryptionKeyAction</a>","synthetic":true,"types":["bonsaidb_core::permissions::bonsai::EncryptionKeyAction"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/admin/struct.Database.html\" title=\"struct bonsaidb_core::admin::Database\">Database</a>","synthetic":true,"types":["bonsaidb_core::admin::database::Database"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/admin/struct.PermissionGroup.html\" title=\"struct bonsaidb_core::admin::PermissionGroup\">PermissionGroup</a>","synthetic":true,"types":["bonsaidb_core::admin::group::PermissionGroup"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/admin/struct.Role.html\" title=\"struct bonsaidb_core::admin::Role\">Role</a>","synthetic":true,"types":["bonsaidb_core::admin::role::Role"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/admin/struct.User.html\" title=\"struct bonsaidb_core::admin::User\">User</a>","synthetic":true,"types":["bonsaidb_core::admin::user::User"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/admin/struct.Admin.html\" title=\"struct bonsaidb_core::admin::Admin\">Admin</a>","synthetic":true,"types":["bonsaidb_core::admin::Admin"]},{"text":"impl&lt;'a, Cn, Cl&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/connection/struct.Collection.html\" title=\"struct bonsaidb_core::connection::Collection\">Collection</a>&lt;'a, Cn, Cl&gt;","synthetic":true,"types":["bonsaidb_core::connection::Collection"]},{"text":"impl&lt;'a, Cn, Cl, R&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/connection/struct.List.html\" title=\"struct bonsaidb_core::connection::List\">List</a>&lt;'a, Cn, Cl, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::connection::List"]},{"text":"impl&lt;'a, Cn, V&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/connection/struct.View.html\" title=\"struct bonsaidb_core::connection::View\">View</a>&lt;'a, Cn, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;V as <a class=\"trait\" href=\"bonsaidb_core/schema/view/trait.View.html\" title=\"trait bonsaidb_core::schema::view::View\">View</a>&gt;::<a class=\"type\" href=\"bonsaidb_core/schema/view/trait.View.html#associatedtype.Key\" title=\"type bonsaidb_core::schema::view::View::Key\">Key</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::connection::View"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/connection/enum.Sort.html\" title=\"enum bonsaidb_core::connection::Sort\">Sort</a>","synthetic":true,"types":["bonsaidb_core::connection::Sort"]},{"text":"impl&lt;K&gt; Freeze for <a class=\"enum\" href=\"bonsaidb_core/connection/enum.QueryKey.html\" title=\"enum bonsaidb_core::connection::QueryKey\">QueryKey</a>&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::connection::QueryKey"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/connection/struct.Range.html\" title=\"struct bonsaidb_core::connection::Range\">Range</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::connection::Range"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"bonsaidb_core/connection/enum.Bound.html\" title=\"enum bonsaidb_core::connection::Bound\">Bound</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::connection::Bound"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/connection/enum.AccessPolicy.html\" title=\"enum bonsaidb_core::connection::AccessPolicy\">AccessPolicy</a>","synthetic":true,"types":["bonsaidb_core::connection::AccessPolicy"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/connection/struct.PasswordResult.html\" title=\"struct bonsaidb_core::connection::PasswordResult\">PasswordResult</a>","synthetic":true,"types":["bonsaidb_core::connection::PasswordResult"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/document/struct.Revision.html\" title=\"struct bonsaidb_core::document::Revision\">Revision</a>","synthetic":true,"types":["bonsaidb_core::document::revision::Revision"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/document/struct.Header.html\" title=\"struct bonsaidb_core::document::Header\">Header</a>","synthetic":true,"types":["bonsaidb_core::document::Header"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/document/struct.Document.html\" title=\"struct bonsaidb_core::document::Document\">Document</a>&lt;'a&gt;","synthetic":true,"types":["bonsaidb_core::document::Document"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/document/enum.KeyId.html\" title=\"enum bonsaidb_core::document::KeyId\">KeyId</a>","synthetic":true,"types":["bonsaidb_core::document::KeyId"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/schema/enum.CollectionSerializer.html\" title=\"enum bonsaidb_core::schema::CollectionSerializer\">CollectionSerializer</a>","synthetic":true,"types":["bonsaidb_core::schema::collection::CollectionSerializer"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.InsertError.html\" title=\"struct bonsaidb_core::schema::InsertError\">InsertError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::schema::collection::InsertError"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.CollectionDocument.html\" title=\"struct bonsaidb_core::schema::CollectionDocument\">CollectionDocument</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::schema::collection::CollectionDocument"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"bonsaidb_core/schema/enum.NamedReference.html\" title=\"enum bonsaidb_core::schema::NamedReference\">NamedReference</a>&lt;'a&gt;","synthetic":true,"types":["bonsaidb_core::schema::collection::NamedReference"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.Name.html\" title=\"struct bonsaidb_core::schema::Name\">Name</a>","synthetic":true,"types":["bonsaidb_core::schema::names::Name"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.InvalidNameError.html\" title=\"struct bonsaidb_core::schema::InvalidNameError\">InvalidNameError</a>","synthetic":true,"types":["bonsaidb_core::schema::names::InvalidNameError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.Authority.html\" title=\"struct bonsaidb_core::schema::Authority\">Authority</a>","synthetic":true,"types":["bonsaidb_core::schema::names::Authority"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.SchemaName.html\" title=\"struct bonsaidb_core::schema::SchemaName\">SchemaName</a>","synthetic":true,"types":["bonsaidb_core::schema::names::SchemaName"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.CollectionName.html\" title=\"struct bonsaidb_core::schema::CollectionName\">CollectionName</a>","synthetic":true,"types":["bonsaidb_core::schema::names::CollectionName"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.ViewName.html\" title=\"struct bonsaidb_core::schema::ViewName\">ViewName</a>","synthetic":true,"types":["bonsaidb_core::schema::names::ViewName"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.Schematic.html\" title=\"struct bonsaidb_core::schema::Schematic\">Schematic</a>","synthetic":true,"types":["bonsaidb_core::schema::schematic::Schematic"]},{"text":"impl&lt;K, V&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/view/map/struct.Map.html\" title=\"struct bonsaidb_core::schema::view::map::Map\">Map</a>&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::schema::view::map::Map"]},{"text":"impl&lt;K, V&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/view/map/struct.MappedDocument.html\" title=\"struct bonsaidb_core::schema::view::map::MappedDocument\">MappedDocument</a>&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::schema::view::map::MappedDocument"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/view/map/struct.Serialized.html\" title=\"struct bonsaidb_core::schema::view::map::Serialized\">Serialized</a>","synthetic":true,"types":["bonsaidb_core::schema::view::map::Serialized"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/view/map/struct.MappedSerialized.html\" title=\"struct bonsaidb_core::schema::view::map::MappedSerialized\">MappedSerialized</a>","synthetic":true,"types":["bonsaidb_core::schema::view::map::MappedSerialized"]},{"text":"impl&lt;K, V&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/view/map/struct.MappedValue.html\" title=\"struct bonsaidb_core::schema::view::map::MappedValue\">MappedValue</a>&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::schema::view::map::MappedValue"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/schema/view/map/struct.IncorrectByteLength.html\" title=\"struct bonsaidb_core::schema::view::map::IncorrectByteLength\">IncorrectByteLength</a>","synthetic":true,"types":["bonsaidb_core::schema::view::map::IncorrectByteLength"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/schema/view/enum.Error.html\" title=\"enum bonsaidb_core::schema::view::Error\">Error</a>","synthetic":true,"types":["bonsaidb_core::schema::view::Error"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"enum\" href=\"bonsaidb_core/schema/view/enum.SerializableValue.html\" title=\"enum bonsaidb_core::schema::view::SerializableValue\">SerializableValue</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::schema::view::SerializableValue"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/transaction/struct.Transaction.html\" title=\"struct bonsaidb_core::transaction::Transaction\">Transaction</a>&lt;'a&gt;","synthetic":true,"types":["bonsaidb_core::transaction::Transaction"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/transaction/struct.Operation.html\" title=\"struct bonsaidb_core::transaction::Operation\">Operation</a>&lt;'a&gt;","synthetic":true,"types":["bonsaidb_core::transaction::Operation"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"bonsaidb_core/transaction/enum.Command.html\" title=\"enum bonsaidb_core::transaction::Command\">Command</a>&lt;'a&gt;","synthetic":true,"types":["bonsaidb_core::transaction::Command"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/transaction/enum.OperationResult.html\" title=\"enum bonsaidb_core::transaction::OperationResult\">OperationResult</a>","synthetic":true,"types":["bonsaidb_core::transaction::OperationResult"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/transaction/struct.Executed.html\" title=\"struct bonsaidb_core::transaction::Executed\">Executed</a>&lt;'a&gt;","synthetic":true,"types":["bonsaidb_core::transaction::Executed"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/transaction/struct.ChangedDocument.html\" title=\"struct bonsaidb_core::transaction::ChangedDocument\">ChangedDocument</a>","synthetic":true,"types":["bonsaidb_core::transaction::ChangedDocument"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/kv/struct.Timestamp.html\" title=\"struct bonsaidb_core::kv::Timestamp\">Timestamp</a>","synthetic":true,"types":["bonsaidb_core::kv::timestamp::Timestamp"]},{"text":"impl&lt;'a, Kv&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/kv/get/struct.Builder.html\" title=\"struct bonsaidb_core::kv::get::Builder\">Builder</a>&lt;'a, Kv&gt;","synthetic":true,"types":["bonsaidb_core::kv::implementation::get::Builder"]},{"text":"impl&lt;'a, Kv, V&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/kv/increment/struct.Builder.html\" title=\"struct bonsaidb_core::kv::increment::Builder\">Builder</a>&lt;'a, Kv, V&gt;","synthetic":true,"types":["bonsaidb_core::kv::implementation::increment::Builder"]},{"text":"impl&lt;'a, K&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/kv/namespaced/struct.Namespaced.html\" title=\"struct bonsaidb_core::kv::namespaced::Namespaced\">Namespaced</a>&lt;'a, K&gt;","synthetic":true,"types":["bonsaidb_core::kv::implementation::namespaced::Namespaced"]},{"text":"impl&lt;'a, Kv, V&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/kv/set/struct.Builder.html\" title=\"struct bonsaidb_core::kv::set::Builder\">Builder</a>&lt;'a, Kv, V&gt;","synthetic":true,"types":["bonsaidb_core::kv::implementation::set::Builder"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/kv/enum.KeyCheck.html\" title=\"enum bonsaidb_core::kv::KeyCheck\">KeyCheck</a>","synthetic":true,"types":["bonsaidb_core::kv::KeyCheck"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/kv/struct.KeyOperation.html\" title=\"struct bonsaidb_core::kv::KeyOperation\">KeyOperation</a>","synthetic":true,"types":["bonsaidb_core::kv::KeyOperation"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/kv/enum.Command.html\" title=\"enum bonsaidb_core::kv::Command\">Command</a>","synthetic":true,"types":["bonsaidb_core::kv::Command"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/kv/enum.Value.html\" title=\"enum bonsaidb_core::kv::Value\">Value</a>","synthetic":true,"types":["bonsaidb_core::kv::Value"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/kv/enum.Numeric.html\" title=\"enum bonsaidb_core::kv::Numeric\">Numeric</a>","synthetic":true,"types":["bonsaidb_core::kv::Numeric"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/kv/struct.IncompatibleTypeError.html\" title=\"struct bonsaidb_core::kv::IncompatibleTypeError\">IncompatibleTypeError</a>","synthetic":true,"types":["bonsaidb_core::kv::IncompatibleTypeError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/kv/enum.Output.html\" title=\"enum bonsaidb_core::kv::Output\">Output</a>","synthetic":true,"types":["bonsaidb_core::kv::Output"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/kv/enum.KeyStatus.html\" title=\"enum bonsaidb_core::kv::KeyStatus\">KeyStatus</a>","synthetic":true,"types":["bonsaidb_core::kv::KeyStatus"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/custom_api/struct.Infallible.html\" title=\"struct bonsaidb_core::custom_api::Infallible\">Infallible</a>","synthetic":true,"types":["bonsaidb_core::custom_api::Infallible"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_core/networking/struct.Payload.html\" title=\"struct bonsaidb_core::networking::Payload\">Payload</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::networking::Payload"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"bonsaidb_core/networking/enum.Request.html\" title=\"enum bonsaidb_core::networking::Request\">Request</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::networking::Request"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/networking/enum.ServerRequest.html\" title=\"enum bonsaidb_core::networking::ServerRequest\">ServerRequest</a>","synthetic":true,"types":["bonsaidb_core::networking::ServerRequest"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/networking/enum.DatabaseRequest.html\" title=\"enum bonsaidb_core::networking::DatabaseRequest\">DatabaseRequest</a>","synthetic":true,"types":["bonsaidb_core::networking::DatabaseRequest"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"bonsaidb_core/networking/enum.Response.html\" title=\"enum bonsaidb_core::networking::Response\">Response</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_core::networking::Response"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/networking/enum.ServerResponse.html\" title=\"enum bonsaidb_core::networking::ServerResponse\">ServerResponse</a>","synthetic":true,"types":["bonsaidb_core::networking::ServerResponse"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/networking/enum.DatabaseResponse.html\" title=\"enum bonsaidb_core::networking::DatabaseResponse\">DatabaseResponse</a>","synthetic":true,"types":["bonsaidb_core::networking::DatabaseResponse"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/networking/enum.Error.html\" title=\"enum bonsaidb_core::networking::Error\">Error</a>","synthetic":true,"types":["bonsaidb_core::networking::Error"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.Basic.html\" title=\"struct bonsaidb_core::test_util::Basic\">Basic</a>","synthetic":true,"types":["bonsaidb_core::test_util::Basic"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.BasicCount.html\" title=\"struct bonsaidb_core::test_util::BasicCount\">BasicCount</a>","synthetic":true,"types":["bonsaidb_core::test_util::BasicCount"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.BasicByParentId.html\" title=\"struct bonsaidb_core::test_util::BasicByParentId\">BasicByParentId</a>","synthetic":true,"types":["bonsaidb_core::test_util::BasicByParentId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.BasicByCategory.html\" title=\"struct bonsaidb_core::test_util::BasicByCategory\">BasicByCategory</a>","synthetic":true,"types":["bonsaidb_core::test_util::BasicByCategory"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.BasicByTag.html\" title=\"struct bonsaidb_core::test_util::BasicByTag\">BasicByTag</a>","synthetic":true,"types":["bonsaidb_core::test_util::BasicByTag"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.BasicByBrokenParentId.html\" title=\"struct bonsaidb_core::test_util::BasicByBrokenParentId\">BasicByBrokenParentId</a>","synthetic":true,"types":["bonsaidb_core::test_util::BasicByBrokenParentId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.EncryptedBasic.html\" title=\"struct bonsaidb_core::test_util::EncryptedBasic\">EncryptedBasic</a>","synthetic":true,"types":["bonsaidb_core::test_util::EncryptedBasic"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.EncryptedBasicCount.html\" title=\"struct bonsaidb_core::test_util::EncryptedBasicCount\">EncryptedBasicCount</a>","synthetic":true,"types":["bonsaidb_core::test_util::EncryptedBasicCount"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.EncryptedBasicByParentId.html\" title=\"struct bonsaidb_core::test_util::EncryptedBasicByParentId\">EncryptedBasicByParentId</a>","synthetic":true,"types":["bonsaidb_core::test_util::EncryptedBasicByParentId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.EncryptedBasicByCategory.html\" title=\"struct bonsaidb_core::test_util::EncryptedBasicByCategory\">EncryptedBasicByCategory</a>","synthetic":true,"types":["bonsaidb_core::test_util::EncryptedBasicByCategory"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.BasicSchema.html\" title=\"struct bonsaidb_core::test_util::BasicSchema\">BasicSchema</a>","synthetic":true,"types":["bonsaidb_core::test_util::BasicSchema"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.Unique.html\" title=\"struct bonsaidb_core::test_util::Unique\">Unique</a>","synthetic":true,"types":["bonsaidb_core::test_util::Unique"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.UniqueValue.html\" title=\"struct bonsaidb_core::test_util::UniqueValue\">UniqueValue</a>","synthetic":true,"types":["bonsaidb_core::test_util::UniqueValue"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.TestDirectory.html\" title=\"struct bonsaidb_core::test_util::TestDirectory\">TestDirectory</a>","synthetic":true,"types":["bonsaidb_core::test_util::TestDirectory"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.BasicCollectionWithNoViews.html\" title=\"struct bonsaidb_core::test_util::BasicCollectionWithNoViews\">BasicCollectionWithNoViews</a>","synthetic":true,"types":["bonsaidb_core::test_util::BasicCollectionWithNoViews"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.BasicCollectionWithOnlyBrokenParentId.html\" title=\"struct bonsaidb_core::test_util::BasicCollectionWithOnlyBrokenParentId\">BasicCollectionWithOnlyBrokenParentId</a>","synthetic":true,"types":["bonsaidb_core::test_util::BasicCollectionWithOnlyBrokenParentId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.UnassociatedCollection.html\" title=\"struct bonsaidb_core::test_util::UnassociatedCollection\">UnassociatedCollection</a>","synthetic":true,"types":["bonsaidb_core::test_util::UnassociatedCollection"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/test_util/enum.HarnessTest.html\" title=\"enum bonsaidb_core::test_util::HarnessTest\">HarnessTest</a>","synthetic":true,"types":["bonsaidb_core::test_util::HarnessTest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.TimingTest.html\" title=\"struct bonsaidb_core::test_util::TimingTest\">TimingTest</a>","synthetic":true,"types":["bonsaidb_core::test_util::TimingTest"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_core/enum.Error.html\" title=\"enum bonsaidb_core::Error\">Error</a>","synthetic":true,"types":["bonsaidb_core::Error"]}];
implementors["bonsaidb_keystorage_s3"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_keystorage_s3/struct.S3VaultKeyStorage.html\" title=\"struct bonsaidb_keystorage_s3::S3VaultKeyStorage\">S3VaultKeyStorage</a>","synthetic":true,"types":["bonsaidb_keystorage_s3::S3VaultKeyStorage"]}];
implementors["bonsaidb_local"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_local/config/struct.Configuration.html\" title=\"struct bonsaidb_local::config::Configuration\">Configuration</a>","synthetic":true,"types":["bonsaidb_local::config::Configuration"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_local/config/struct.Tasks.html\" title=\"struct bonsaidb_local::config::Tasks\">Tasks</a>","synthetic":true,"types":["bonsaidb_local::config::Tasks"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_local/config/struct.Views.html\" title=\"struct bonsaidb_local::config::Views\">Views</a>","synthetic":true,"types":["bonsaidb_local::config::Views"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_local/struct.Subscriber.html\" title=\"struct bonsaidb_local::Subscriber\">Subscriber</a>","synthetic":true,"types":["bonsaidb_local::database::pubsub::Subscriber"]},{"text":"impl&lt;DB&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_local/struct.Database.html\" title=\"struct bonsaidb_local::Database\">Database</a>&lt;DB&gt;","synthetic":true,"types":["bonsaidb_local::database::Database"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_local/enum.Error.html\" title=\"enum bonsaidb_local::Error\">Error</a>","synthetic":true,"types":["bonsaidb_local::error::Error"]},{"text":"impl&lt;Key&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_local/jobs/manager/struct.Manager.html\" title=\"struct bonsaidb_local::jobs::manager::Manager\">Manager</a>&lt;Key&gt;","synthetic":true,"types":["bonsaidb_local::jobs::manager::Manager"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_local/jobs/task/struct.Id.html\" title=\"struct bonsaidb_local::jobs::task::Id\">Id</a>","synthetic":true,"types":["bonsaidb_local::jobs::task::Id"]},{"text":"impl&lt;T, E, Key&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_local/jobs/task/struct.Handle.html\" title=\"struct bonsaidb_local::jobs::task::Handle\">Handle</a>&lt;T, E, Key&gt;","synthetic":true,"types":["bonsaidb_local::jobs::task::Handle"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_local/struct.Storage.html\" title=\"struct bonsaidb_local::Storage\">Storage</a>","synthetic":true,"types":["bonsaidb_local::storage::Storage"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_local/struct.StorageId.html\" title=\"struct bonsaidb_local::StorageId\">StorageId</a>","synthetic":true,"types":["bonsaidb_local::storage::StorageId"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_local/vault/enum.PrivateKey.html\" title=\"enum bonsaidb_local::vault::PrivateKey\">PrivateKey</a>","synthetic":true,"types":["bonsaidb_local::vault::PrivateKey"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_local/vault/enum.PublicKey.html\" title=\"enum bonsaidb_local::vault::PublicKey\">PublicKey</a>","synthetic":true,"types":["bonsaidb_local::vault::PublicKey"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_local/vault/enum.Error.html\" title=\"enum bonsaidb_local::vault::Error\">Error</a>","synthetic":true,"types":["bonsaidb_local::vault::Error"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_local/vault/struct.LocalVaultKeyStorage.html\" title=\"struct bonsaidb_local::vault::LocalVaultKeyStorage\">LocalVaultKeyStorage</a>","synthetic":true,"types":["bonsaidb_local::vault::LocalVaultKeyStorage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_local/vault/enum.LocalVaultKeyStorageError.html\" title=\"enum bonsaidb_local::vault::LocalVaultKeyStorageError\">LocalVaultKeyStorageError</a>","synthetic":true,"types":["bonsaidb_local::vault::LocalVaultKeyStorageError"]}];
implementors["bonsaidb_server"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_server/enum.ConnectionHandling.html\" title=\"enum bonsaidb_server::ConnectionHandling\">ConnectionHandling</a>","synthetic":true,"types":["bonsaidb_server::backend::ConnectionHandling"]},{"text":"impl&lt;E&gt; Freeze for <a class=\"enum\" href=\"bonsaidb_server/enum.BackendError.html\" title=\"enum bonsaidb_server::BackendError\">BackendError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,&nbsp;</span>","synthetic":true,"types":["bonsaidb_server::backend::BackendError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_server/cli/certificate/enum.Command.html\" title=\"enum bonsaidb_server::cli::certificate::Command\">Command</a>","synthetic":true,"types":["bonsaidb_server::cli::certificate::Command"]},{"text":"impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_server/cli/serve/struct.Serve.html\" title=\"struct bonsaidb_server::cli::serve::Serve\">Serve</a>&lt;B&gt;","synthetic":true,"types":["bonsaidb_server::cli::serve::Serve"]},{"text":"impl&lt;B&gt; Freeze for <a class=\"enum\" href=\"bonsaidb_server/cli/enum.Command.html\" title=\"enum bonsaidb_server::cli::Command\">Command</a>&lt;B&gt;","synthetic":true,"types":["bonsaidb_server::cli::Command"]},{"text":"impl Freeze for <a class=\"struct\" href=\"bonsaidb_server/struct.Configuration.html\" title=\"struct bonsaidb_server::Configuration\">Configuration</a>","synthetic":true,"types":["bonsaidb_server::config::Configuration"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_server/enum.DefaultPermissions.html\" title=\"enum bonsaidb_server::DefaultPermissions\">DefaultPermissions</a>","synthetic":true,"types":["bonsaidb_server::config::DefaultPermissions"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_server/enum.Error.html\" title=\"enum bonsaidb_server::Error\">Error</a>","synthetic":true,"types":["bonsaidb_server::error::Error"]},{"text":"impl Freeze for <a class=\"enum\" href=\"bonsaidb_server/enum.Transport.html\" title=\"enum bonsaidb_server::Transport\">Transport</a>","synthetic":true,"types":["bonsaidb_server::server::connected_client::Transport"]},{"text":"impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_server/struct.ConnectedClient.html\" title=\"struct bonsaidb_server::ConnectedClient\">ConnectedClient</a>&lt;B&gt;","synthetic":true,"types":["bonsaidb_server::server::connected_client::ConnectedClient"]},{"text":"impl&lt;'a, B, DB&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_server/struct.ServerDatabase.html\" title=\"struct bonsaidb_server::ServerDatabase\">ServerDatabase</a>&lt;'a, B, DB&gt;","synthetic":true,"types":["bonsaidb_server::server::database::ServerDatabase"]},{"text":"impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_server/struct.ServerSubscriber.html\" title=\"struct bonsaidb_server::ServerSubscriber\">ServerSubscriber</a>&lt;B&gt;","synthetic":true,"types":["bonsaidb_server::server::database::ServerSubscriber"]},{"text":"impl&lt;B&gt; Freeze for <a class=\"struct\" href=\"bonsaidb_server/struct.CustomServer.html\" title=\"struct bonsaidb_server::CustomServer\">CustomServer</a>&lt;B&gt;","synthetic":true,"types":["bonsaidb_server::server::CustomServer"]}];
implementors["circulate"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"circulate/struct.Message.html\" title=\"struct circulate::Message\">Message</a>","synthetic":true,"types":["circulate::Message"]},{"text":"impl Freeze for <a class=\"struct\" href=\"circulate/struct.Relay.html\" title=\"struct circulate::Relay\">Relay</a>","synthetic":true,"types":["circulate::Relay"]},{"text":"impl Freeze for <a class=\"struct\" href=\"circulate/struct.Subscriber.html\" title=\"struct circulate::Subscriber\">Subscriber</a>","synthetic":true,"types":["circulate::Subscriber"]}];
implementors["xtask"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"enum\" href=\"xtask/enum.Commands.html\" title=\"enum xtask::Commands\">Commands</a>","synthetic":true,"types":["xtask::Commands"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"xtask/struct.CoverageConfig.html\" title=\"struct xtask::CoverageConfig\">CoverageConfig</a>","synthetic":true,"types":["xtask::CoverageConfig"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()