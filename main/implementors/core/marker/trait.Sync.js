(function() {var implementors = {};
implementors["pliantdb"] = [{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a, Cn, Cl&gt; Sync for Collection&lt;'a, Cn, Cl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cl: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Cn: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Id","synthetic":true,"types":[]},{"text":"impl Sync for Schema","synthetic":true,"types":[]},{"text":"impl&lt;'a, C&gt; Sync for Document&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Revision","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Transaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Operation&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Command&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Executed&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ChangedDocument","synthetic":true,"types":[]},{"text":"impl&lt;'k, K, V&gt; Sync for Map&lt;'k, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'k&gt; Sync for Serialized&lt;'k&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for SerializableValue&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Sync for Storage&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()