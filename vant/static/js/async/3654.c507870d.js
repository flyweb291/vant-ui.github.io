(self.webpackChunk=self.webpackChunk||[]).push([["3654"],{45214:function(s,n,a){"use strict";a.r(n);var t=a("38061");let d=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Highlight \u9AD8\u4EAE\u6587\u672C</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u9AD8\u4EAE\u6307\u5B9A\u6587\u672C\u5185\u5BB9\u3002\u8BF7\u5347\u7EA7 <code>vant</code> \u5230 &gt;= 4.8.0 \u7248\u672C\u6765\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Highlight</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Highlight</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>keywords</code> \u6307\u5B9A\u9700\u8981\u9AD8\u4EAE\u7684\u5173\u952E\u5B57\uFF0C\u901A\u8FC7 <code>source-string</code> \u6307\u5B9A\u6E90\u6587\u672C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span> <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span> <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text = <span class="hljs-string">&#x27;\u6162\u6162\u6765\uFF0C\u4E0D\u8981\u6025\uFF0C\u751F\u6D3B\u7ED9\u4F60\u51FA\u4E86\u96BE\u9898\uFF0C\u53EF\u4E5F\u7EC8\u6709\u4E00\u5929\u4F1A\u7ED9\u51FA\u7B54\u6848\u3002&#x27;</span>;\n    <span class="hljs-keyword">const</span> keywords = <span class="hljs-string">&#x27;\u96BE\u9898&#x27;</span>;\n\n    <span class="hljs-keyword">return</span> {\n      text,\n      keywords,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="duo-zi-fu-pi-pei" tabindex="-1">\u591A\u5B57\u7B26\u5339\u914D</h3>\n<p>\u5982\u679C\u9700\u8981\u6307\u5B9A\u591A\u4E2A\u5173\u952E\u5B57\uFF0C\u53EF\u4EE5\u4EE5\u6570\u7EC4\u7684\u5F62\u5F0F\u4F20\u5165 <code>keywords</code>\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span> <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span> <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text = <span class="hljs-string">&#x27;\u6162\u6162\u6765\uFF0C\u4E0D\u8981\u6025\uFF0C\u751F\u6D3B\u7ED9\u4F60\u51FA\u4E86\u96BE\u9898\uFF0C\u53EF\u4E5F\u7EC8\u6709\u4E00\u5929\u4F1A\u7ED9\u51FA\u7B54\u6848\u3002&#x27;</span>;\n    <span class="hljs-keyword">const</span> keywords = [<span class="hljs-string">&#x27;\u96BE\u9898&#x27;</span>, <span class="hljs-string">&#x27;\u7EC8\u6709\u4E00\u5929&#x27;</span>, <span class="hljs-string">&#x27;\u7B54\u6848&#x27;</span>];\n\n    <span class="hljs-keyword">return</span> {\n      text,\n      keywords,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="she-zhi-gao-liang-biao-qian-lei-ming" tabindex="-1">\u8BBE\u7F6E\u9AD8\u4EAE\u6807\u7B7E\u7C7B\u540D</h3>\n<p>\u901A\u8FC7 <code>highlight-class</code> \u53EF\u4EE5\u8BBE\u7F6E\u9AD8\u4EAE\u6807\u7B7E\u7684\u7C7B\u540D\uFF0C\u4EE5\u4FBF\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span>\n  <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span>\n  <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span>\n  <span class="hljs-attr">highlight-class</span>=<span class="hljs-string">&quot;custom-class&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text = <span class="hljs-string">&#x27;\u6162\u6162\u6765\uFF0C\u4E0D\u8981\u6025\uFF0C\u751F\u6D3B\u7ED9\u4F60\u51FA\u4E86\u96BE\u9898\uFF0C\u53EF\u4E5F\u7EC8\u6709\u4E00\u5929\u4F1A\u7ED9\u51FA\u7B54\u6848\u3002&#x27;</span>;\n    <span class="hljs-keyword">const</span> keywords = <span class="hljs-string">&#x27;\u751F\u6D3B&#x27;</span>;\n\n    <span class="hljs-keyword">return</span> {\n      text,\n      keywords,\n    };\n  },\n};\n</code></pre>\n<pre><code class="language-css"><span class="hljs-selector-class">.custom-class</span> {\n  <span class="hljs-attribute">color</span>: red;\n}\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>auto-escape</td>\n<td>\u662F\u5426\u81EA\u52A8\u8F6C\u4E49</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>case-sensitive</td>\n<td>\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>highlight-class</td>\n<td>\u9AD8\u4EAE\u5143\u7D20\u7684\u7C7B\u540D</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>highlight-tag</td>\n<td>\u9AD8\u4EAE\u5143\u7D20\u5BF9\u5E94\u7684 HTML \u6807\u7B7E\u540D</td>\n<td><em>string</em></td>\n<td><code>span</code></td>\n</tr>\n<tr>\n<td>keywords</td>\n<td>\u671F\u671B\u9AD8\u4EAE\u7684\u6587\u672C</td>\n<td><em>string | string[]</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>source-string</td>\n<td>\u6E90\u6587\u672C</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>tag</td>\n<td>\u6839\u8282\u70B9\u5BF9\u5E94\u7684 HTML \u6807\u7B7E\u540D</td>\n<td><em>string</em></td>\n<td><code>div</code></td>\n</tr>\n<tr>\n<td>unhighlight-class</td>\n<td>\u975E\u9AD8\u4EAE\u5143\u7D20\u7684\u7C7B\u540D</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>unhighlight-tag</td>\n<td>\u975E\u9AD8\u4EAE\u5143\u7D20\u5BF9\u5E94\u7684 HTML \u6807\u7B7E\u540D</td>\n<td><em>string</em></td>\n<td><code>span</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">HighlightProps</span>, <span class="hljs-title class_">HighlightThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-highlight-tag-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>\u9AD8\u4EAE\u6587\u672C\u989C\u8272</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);