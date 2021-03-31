(function() {var implementors = {};
implementors["pliantdb_core"] = [{"text":"impl&lt;'a, Cn, Cl&gt; Unpin for Collection&lt;'a, Cn, Cl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cl: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Cn, V&gt; Unpin for View&lt;'a, Cn, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;V as View&gt;::Key: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K&gt; Unpin for QueryKey&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for AccessPolicy","synthetic":true,"types":[]},{"text":"impl Unpin for Revision","synthetic":true,"types":[]},{"text":"impl Unpin for Header","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Document&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Id","synthetic":true,"types":[]},{"text":"impl Unpin for Schema","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Unpin for Map&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Unpin for MappedDocument&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Serialized","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Unpin for MappedValue&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for SerializableValue&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Transaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Operation&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Command&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for OperationResult","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Executed&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for ChangedDocument","synthetic":true,"types":[]},{"text":"impl Unpin for Basic","synthetic":true,"types":[]},{"text":"impl Unpin for BasicCount","synthetic":true,"types":[]},{"text":"impl Unpin for BasicByParentId","synthetic":true,"types":[]},{"text":"impl Unpin for BasicByCategory","synthetic":true,"types":[]},{"text":"impl Unpin for BasicByBrokenParentId","synthetic":true,"types":[]},{"text":"impl Unpin for BasicDatabase","synthetic":true,"types":[]},{"text":"impl Unpin for TestDirectory","synthetic":true,"types":[]},{"text":"impl Unpin for BasicCollectionWithNoViews","synthetic":true,"types":[]},{"text":"impl Unpin for BasicCollectionWithOnlyBrokenParentId","synthetic":true,"types":[]},{"text":"impl Unpin for UnassociatedCollection","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]}];
implementors["pliantdb_dump"] = [{"text":"impl Unpin for Configuration","synthetic":true,"types":[]},{"text":"impl Unpin for Tasks","synthetic":true,"types":[]},{"text":"impl Unpin for Views","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for OpenTrees","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Unpin for Storage&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for TaskManager","synthetic":true,"types":[]},{"text":"impl Unpin for Statuses","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Unpin for IntegrityScanner&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for IntegrityScan","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Unpin for Mapper&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Map","synthetic":true,"types":[]},{"text":"impl&lt;'a, DB&gt; Unpin for DocumentRequest&lt;'a, DB&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for ViewEntry","synthetic":true,"types":[]},{"text":"impl Unpin for EntryMapping","synthetic":true,"types":[]},{"text":"impl Unpin for Task","synthetic":true,"types":[]},{"text":"impl Unpin for Cli","synthetic":true,"types":[]},{"text":"impl Unpin for Command","synthetic":true,"types":[]}];
implementors["pliantdb_jobs"] = [{"text":"impl&lt;Key&gt; Unpin for Manager&lt;Key&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Id","synthetic":true,"types":[]},{"text":"impl&lt;T, Key&gt; Unpin for Handle&lt;T, Key&gt;","synthetic":true,"types":[]}];
implementors["pliantdb_local"] = [{"text":"impl Unpin for Configuration","synthetic":true,"types":[]},{"text":"impl Unpin for Tasks","synthetic":true,"types":[]},{"text":"impl Unpin for Views","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Unpin for Storage&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()