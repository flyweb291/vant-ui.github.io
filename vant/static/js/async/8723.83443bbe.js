(self.webpackChunk=self.webpackChunk||[]).push([["8723"],{40542:function(s,n,a){"use strict";a.r(n);var l=a("38061");let t=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,l.wg)(),(0,l.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useWindowSize</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u89C6\u53E3\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u5E76\u5728\u7A97\u53E3\u5927\u5C0F\u53D8\u5316\u65F6\u81EA\u52A8\u66F4\u65B0\u3002</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useWindowSize } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> { width, height } = <span class="hljs-title function_">useWindowSize</span>();\n\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(width.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; \u7A97\u53E3\u5BBD\u5EA6</span>\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(height.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; \u7A97\u53E3\u9AD8\u5EA6</span>\n\n    <span class="hljs-title function_">watch</span>([width, height], <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;window resized&#x27;</span>);\n    });\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useWindowSize</span>(<span class="hljs-params"></span>): {\n  <span class="hljs-attr">width</span>: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;\n  <span class="hljs-attr">height</span>: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">\u8FD4\u56DE\u503C</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>width</td>\n<td>\u6D4F\u89C8\u5668\u7A97\u53E3\u5BBD\u5EA6</td>\n<td><em>Ref&lt;number&gt;</em></td>\n</tr>\n<tr>\n<td>height</td>\n<td>\u6D4F\u89C8\u5668\u7A97\u53E3\u9AD8\u5EA6</td>\n<td><em>Ref&lt;number&gt;</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,t))}}}]);