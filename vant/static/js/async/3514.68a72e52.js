(self.webpackChunk=self.webpackChunk||[]).push([["3514"],{98868:function(s,n,t){"use strict";t.r(n);var a=t("38061");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Highlight</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Highlight the specified text content. Please upgrade <code>vant</code> to &gt;= v4.8.0 before using this component.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Highlight</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Highlight</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>You can specify keywords to be highlighted with <code>keywords</code> and source text with <code>source-string</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span> <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span> <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text =\n      <span class="hljs-string">&#x27;Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.&#x27;</span>;\n    <span class="hljs-keyword">const</span> keywords = <span class="hljs-string">&#x27;questions&#x27;</span>;\n\n    <span class="hljs-keyword">return</span> {\n      text,\n      keywords,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="multiple-keywords" tabindex="-1">Multiple Keywords</h3>\n<p>If you need to specific more than one keywords, you can pass in <code>keywords</code> as an array.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span> <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span> <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text =\n      <span class="hljs-string">&#x27;Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.&#x27;</span>;\n    <span class="hljs-keyword">const</span> keywords = [<span class="hljs-string">&#x27;time&#x27;</span>, <span class="hljs-string">&#x27;life&#x27;</span>, <span class="hljs-string">&#x27;answer&#x27;</span>];\n\n    <span class="hljs-keyword">return</span> {\n      text,\n      keywords,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-class" tabindex="-1">Custom Class</h3>\n<p>Set the <code>highlight-class</code> of the highlighted tag to customize the style.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span>\n  <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span>\n  <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span>\n  <span class="hljs-attr">highlight-class</span>=<span class="hljs-string">&quot;custom-class&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text =\n      <span class="hljs-string">&#x27;Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.&#x27;</span>;\n    <span class="hljs-keyword">const</span> keywords = <span class="hljs-string">&#x27;life&#x27;</span>;\n\n    <span class="hljs-keyword">return</span> {\n      text,\n      keywords,\n    };\n  },\n};\n</code></pre>\n<pre><code class="language-css"><span class="hljs-selector-class">.custom-class</span> {\n  <span class="hljs-attribute">color</span>: red;\n}\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>auto-escape</td>\n<td>Whether to automatically escape</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>case-sensitive</td>\n<td>Is case sensitive</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>highlight-class</td>\n<td>Class name of the highlight element</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>highlight-tag</td>\n<td>HTML Tag of highlighted element</td>\n<td><em>string</em></td>\n<td><code>span</code></td>\n</tr>\n<tr>\n<td>keywords</td>\n<td>Expected highlighted text</td>\n<td><em>string | string[]</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>source-string</td>\n<td>Source text</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>tag</td>\n<td>HTML Tag of root element</td>\n<td><em>string</em></td>\n<td><code>div</code></td>\n</tr>\n<tr>\n<td>unhighlight-class</td>\n<td>Class name of the unhighlight element</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>unhighlight-tag</td>\n<td>HTML Tag of unhighlighted element</td>\n<td><em>string</em></td>\n<td><code>span</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">HighlightProps</span>, <span class="hljs-title class_">HighlightThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-highlight-tag-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>Color of highlighted text</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);