(self.webpackChunk=self.webpackChunk||[]).push([["9160"],{17786:function(n,t,s){"use strict";s.r(t);var e=s("38061");let a=["innerHTML"];t.default={setup:()=>({html:""}),render:()=>((0,e.wg)(),(0,e.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useRect</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Get the size of an element and its position relative to the viewport, equivalent to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect" target="_blank">Element.getBoundingClientRect</a>.</p>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useRect } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();\n\n    <span class="hljs-title function_">onMounted</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">const</span> rect = <span class="hljs-title function_">useRect</span>(root);\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(rect); <span class="hljs-comment">// -&gt; the size of an element and its position relative to the viewport</span>\n    });\n\n    <span class="hljs-keyword">return</span> { root };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useRect</span>(<span class="hljs-params">\n  element: Element | Window | Ref&lt;Element | Window | <span class="hljs-literal">undefined</span>&gt;,\n</span>): <span class="hljs-title class_">DOMRect</span>;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="return-value" tabindex="-1">Return Value</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>width</td>\n<td>Width of the element</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>height</td>\n<td>Height of the element</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>top</td>\n<td>The distance from the top to the top-left of the viewport</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>left</td>\n<td>The distance from the left to the top-left of the viewport</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>right</td>\n<td>The distance from the right to the top-left of the viewport</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>bottom</td>\n<td>The distance from the bottom to the top-left of the viewport</td>\n<td><em>number</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,a))}}}]);