(function() {var implementors = {};
implementors["pliantdb_core"] = [{"text":"impl&lt;'a, Cn, Cl&gt; UnwindSafe for Collection&lt;'a, Cn, Cl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cl: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Cn: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Cn, V&gt; UnwindSafe for View&lt;'a, Cn, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cn: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;V as View&gt;::Key: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K&gt; UnwindSafe for QueryKey&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AccessPolicy","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Revision","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Header","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Document&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Id","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Schema","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; UnwindSafe for Map&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; UnwindSafe for MappedDocument&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Serialized","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; UnwindSafe for MappedValue&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; UnwindSafe for SerializableValue&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Transaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Operation&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Command&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OperationResult","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Executed&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChangedDocument","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Basic","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BasicCount","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BasicByParentId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BasicByCategory","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BasicByBrokenParentId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BasicDatabase","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TestDirectory","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BasicCollectionWithNoViews","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BasicCollectionWithOnlyBrokenParentId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnassociatedCollection","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["pliantdb_jobs"] = [{"text":"impl&lt;Key&nbsp;=&nbsp;()&gt; !UnwindSafe for Manager&lt;Key&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Id","synthetic":true,"types":[]},{"text":"impl&lt;T, Key&gt; !UnwindSafe for Handle&lt;T, Key&gt;","synthetic":true,"types":[]}];
implementors["pliantdb_local"] = [{"text":"impl UnwindSafe for Configuration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Tasks","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Views","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; !UnwindSafe for Storage&lt;DB&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()