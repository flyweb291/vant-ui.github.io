(self.webpackChunk=self.webpackChunk||[]).push([["133"],{7210:function(n,t,s){"use strict";s.r(t);var a=s("38061");let e=["innerHTML"];t.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>ImagePreview \u56FE\u7247\u9884\u89C8</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u56FE\u7247\u653E\u5927\u9884\u89C8\uFF0C\u652F\u6301\u7EC4\u4EF6\u8C03\u7528\u548C\u51FD\u6570\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ImagePreview</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ImagePreview</span>);\n</code></pre>\n</div><div class="van-doc-card"><h3 id="han-shu-diao-yong" tabindex="-1">\u51FD\u6570\u8C03\u7528</h3>\n<p>\u4E3A\u4E86\u4FBF\u4E8E\u4F7F\u7528 <code>ImagePreview</code>\uFF0CVant \u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u8F85\u52A9\u51FD\u6570\uFF0C\u901A\u8FC7\u8F85\u52A9\u51FD\u6570\u53EF\u4EE5\u5FEB\u901F\u5524\u8D77\u5168\u5C40\u7684\u56FE\u7247\u9884\u89C8\u7EC4\u4EF6\u3002</p>\n<p>\u6BD4\u5982\u4F7F\u7528 <code>showImagePreview</code> \u51FD\u6570\uFF0C\u8C03\u7528\u540E\u4F1A\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u6E32\u67D3\u5BF9\u5E94\u7684\u56FE\u7247\u9884\u89C8\u7EC4\u4EF6\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-title function_">showImagePreview</span>([<span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#x27;</span>]);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u5728\u8C03\u7528 <code>showImagePreview</code> \u65F6\uFF0C\u76F4\u63A5\u4F20\u5165\u56FE\u7247\u6570\u7EC4\uFF0C\u5373\u53EF\u5C55\u793A\u56FE\u7247\u9884\u89C8\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-title function_">showImagePreview</span>([\n  <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#x27;</span>,\n  <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#x27;</span>,\n]);\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhi-ding-chu-shi-wei-zhi" tabindex="-1">\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E</h3>\n<p><code>showImagePreview</code> \u652F\u6301\u4F20\u5165\u914D\u7F6E\u5BF9\u8C61\uFF0C\u5E76\u901A\u8FC7 <code>startPosition</code> \u9009\u9879\u6307\u5B9A\u56FE\u7247\u7684\u521D\u59CB\u4F4D\u7F6E\uFF08\u7D22\u5F15\u503C\uFF09\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-title function_">showImagePreview</span>({\n  <span class="hljs-attr">images</span>: [\n    <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#x27;</span>,\n    <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#x27;</span>,\n  ],\n  <span class="hljs-attr">startPosition</span>: <span class="hljs-number">1</span>,\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhan-shi-guan-bi-an-niu" tabindex="-1">\u5C55\u793A\u5173\u95ED\u6309\u94AE</h3>\n<p>\u5F00\u542F <code>closeable</code> \u9009\u9879\u540E\uFF0C\u4F1A\u5728\u5F39\u51FA\u5C42\u7684\u53F3\u4E0A\u89D2\u663E\u793A\u5173\u95ED\u56FE\u6807\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 <code>close-icon</code> \u5C5E\u6027\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u4F7F\u7528<code>close-icon-position</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u4F4D\u7F6E\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-title function_">showImagePreview</span>({\n  <span class="hljs-attr">images</span>: [\n    <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#x27;</span>,\n    <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#x27;</span>,\n  ],\n  <span class="hljs-attr">closeable</span>: <span class="hljs-literal">true</span>,\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jian-ting-guan-bi-shi-jian" tabindex="-1">\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6</h3>\n<p>\u901A\u8FC7 <code>onClose</code> \u9009\u9879\u76D1\u542C\u56FE\u7247\u9884\u89C8\u7684\u5173\u95ED\u4E8B\u4EF6\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast, showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-title function_">showImagePreview</span>({\n  <span class="hljs-attr">images</span>: [\n    <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#x27;</span>,\n    <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#x27;</span>,\n  ],\n  <span class="hljs-title function_">onClose</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;\u5173\u95ED&#x27;</span>);\n  },\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="yi-bu-guan-bi" tabindex="-1">\u5F02\u6B65\u5173\u95ED</h3>\n<p>\u901A\u8FC7 <code>beforeClose</code> \u5C5E\u6027\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5728\u56FE\u7247\u9884\u89C8\u5173\u95ED\u524D\u8FDB\u884C\u7279\u5B9A\u64CD\u4F5C\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> instance = <span class="hljs-title function_">showImagePreview</span>({\n  <span class="hljs-attr">images</span>: [\n    <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#x27;</span>,\n    <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#x27;</span>,\n  ],\n  <span class="hljs-attr">beforeClose</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">false</span>,\n});\n\n<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n  <span class="hljs-comment">// \u8C03\u7528\u5B9E\u4F8B\u4E0A\u7684 close \u65B9\u6CD5\u624B\u52A8\u5173\u95ED\u56FE\u7247\u9884\u89C8</span>\n  instance.<span class="hljs-title function_">close</span>();\n}, <span class="hljs-number">2000</span>);\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shi-yong-imagepreview-zu-jian" tabindex="-1">\u4F7F\u7528 ImagePreview \u7EC4\u4EF6</h3>\n<p>\u5982\u679C\u9700\u8981\u5728 ImagePreview \u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ImagePreview \u7EC4\u4EF6\uFF0C\u5E76\u4F7F\u7528 <code>index</code> \u63D2\u69FD\u8FDB\u884C\u5B9A\u5236\u3002\u4F7F\u7528\u524D\u9700\u8981\u901A\u8FC7 <code>app.use</code> \u7B49\u65B9\u5F0F\u6CE8\u518C\u7EC4\u4EF6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image-preview</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:index</span>&gt;</span>\u7B2C{{ index + 1 }}\u9875<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-image-preview</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> index = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> images = [\n      <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#x27;</span>,\n      <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#x27;</span>,\n    ];\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">newIndex</span>) =&gt; {\n      index.<span class="hljs-property">value</span> = newIndex;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      index,\n      images,\n      onChange,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shi-yong-image-cha-cao" tabindex="-1">\u4F7F\u7528 image \u63D2\u69FD</h3>\n<p>\u5F53\u4EE5\u7EC4\u4EF6\u8C03\u7528\u7684\u65B9\u5F0F\u4F7F\u7528 ImagePreview \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>image</code> \u63D2\u69FD\u6765\u63D2\u5165\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9\uFF0C\u6BD4\u5982\u5C55\u793A\u4E00\u4E2A\u89C6\u9891\u5185\u5BB9\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u5C06 <code>close-on-click-image</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A <code>false</code>\uFF0C\u8FD9\u6837\u5F53\u4F60\u70B9\u51FB\u89C6\u9891\u65F6\u5C31\u4E0D\u4F1A\u610F\u5916\u5173\u95ED\u9884\u89C8\u4E86\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image-preview</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>\n  <span class="hljs-attr">:close-on-click-image</span>=<span class="hljs-string">&quot;false&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">image</span>=<span class="hljs-string">&quot;{ src }&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">video</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%;&quot;</span> <span class="hljs-attr">controls</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;src&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">video</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-image-preview</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> images = [\n      <span class="hljs-string">&#x27;https://www.w3school.com.cn/i/movie.ogg&#x27;</span>,\n      <span class="hljs-string">&#x27;https://www.w3school.com.cn/i/movie.ogg&#x27;</span>,\n      <span class="hljs-string">&#x27;https://www.w3school.com.cn/i/movie.ogg&#x27;</span>,\n    ];\n    <span class="hljs-keyword">return</span> {\n      show,\n      images,\n    };\n  },\n};\n</code></pre>\n<p>\u5F53\u4F60\u901A\u8FC7 <code>image</code> \u63D2\u69FD\u81EA\u5B9A\u4E49\u56FE\u7247\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u63D2\u69FD\u7684\u53C2\u6570\u7ED1\u5B9A <code>style</code> \u6837\u5F0F\u548C <code>onLoad</code> \u56DE\u8C03\u51FD\u6570\uFF0C\u8FD9\u53EF\u4EE5\u8BA9 <code>&lt;img&gt;</code> \u6807\u7B7E\u652F\u6301\u56FE\u7247\u7F29\u653E\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image-preview</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>\n  <span class="hljs-attr">:close-on-click-image</span>=<span class="hljs-string">&quot;false&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">image</span>=<span class="hljs-string">&quot;{ src, style, onLoad }&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;[{ width: &#x27;100%&#x27; }, style]&quot;</span> @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-image-preview</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3>\n<p>Vant \u4E2D\u5BFC\u51FA\u4E86\u4EE5\u4E0B ImagePreview \u76F8\u5173\u7684\u8F85\u52A9\u51FD\u6570\uFF1A</p>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>showImagePreview</td>\n<td>\u5C55\u793A\u4E00\u4E2A\u5168\u5C4F\u7684\u56FE\u7247\u9884\u89C8\u7EC4\u4EF6</td>\n<td><em>string[] | ImagePreviewOptions</em></td>\n<td>ImagePreview \u5B9E\u4F8B</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="imagepreviewoptions" tabindex="-1">ImagePreviewOptions</h3>\n<p>\u8C03\u7528 <code>showImagePreview</code> \u65B9\u6CD5\u65F6\uFF0C\u652F\u6301\u4F20\u5165\u4EE5\u4E0B\u9009\u9879\uFF1A</p>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>images</td>\n<td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4</td>\n<td><em>string[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>startPosition</td>\n<td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u4F4D\u7F6E\u7D22\u5F15</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>swipeDuration</td>\n<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A <code>ms</code></td>\n<td><em>number | string</em></td>\n<td><code>300</code></td>\n</tr>\n<tr>\n<td>showIndex</td>\n<td>\u662F\u5426\u663E\u793A\u9875\u7801</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>showIndicators</td>\n<td>\u662F\u5426\u663E\u793A\u8F6E\u64AD\u6307\u793A\u5668</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loop</td>\n<td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>doubleScale <code>v4.7.2</code></td>\n<td>\u662F\u5426\u542F\u7528\u53CC\u51FB\u7F29\u653E\u624B\u52BF\uFF0C\u7981\u7528\u540E\uFF0C\u70B9\u51FB\u65F6\u4F1A\u7ACB\u5373\u5173\u95ED\u56FE\u7247\u9884\u89C8</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td>\n<td><em>Function</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15</td>\n<td><em>Function</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onScale</td>\n<td>\u7F29\u653E\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15\u548C\u5F53\u524D\u7F29\u653E\u503C\u7EC4\u6210\u7684\u5BF9\u8C61</td>\n<td><em>Function</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>beforeClose</td>\n<td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise</td>\n<td><em>(active: number) =&gt; boolean | Promise&lt;boolean&gt;</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>closeOnPopstate</td>\n<td>\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>closeOnClickImage <code>v4.8.3</code></td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u56FE\u7247\u540E\u5173\u95ED\u56FE\u7247\u9884\u89C8</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>closeOnClickOverlay <code>v4.6.4</code></td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u56FE\u7247\u9884\u89C8</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>vertical <code>v4.8.6</code></td>\n<td>\u662F\u5426\u5F00\u542F\u7EB5\u5411\u624B\u52BF\u6ED1\u52A8</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>\u81EA\u5B9A\u4E49\u7C7B\u540D (\u5E94\u7528\u5728\u56FE\u7247\u9884\u89C8\u7684\u5F39\u51FA\u5C42)</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>maxZoom</td>\n<td>\u624B\u52BF\u7F29\u653E\u65F6\uFF0C\u6700\u5927\u7F29\u653E\u6BD4\u4F8B</td>\n<td><em>number | string</em></td>\n<td><code>3</code></td>\n</tr>\n<tr>\n<td>minZoom</td>\n<td>\u624B\u52BF\u7F29\u653E\u65F6\uFF0C\u6700\u5C0F\u7F29\u653E\u6BD4\u4F8B</td>\n<td><em>number | string</em></td>\n<td><code>1/3</code></td>\n</tr>\n<tr>\n<td>closeable</td>\n<td>\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>closeIcon</td>\n<td>\u5173\u95ED\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5</td>\n<td><em>string</em></td>\n<td><code>clear</code></td>\n</tr>\n<tr>\n<td>closeIconPosition</td>\n<td>\u5173\u95ED\u56FE\u6807\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>top-left</code><br><code>bottom-left</code> <code>bottom-right</code></td>\n<td><em>string</em></td>\n<td><code>top-right</code></td>\n</tr>\n<tr>\n<td>transition</td>\n<td>\u52A8\u753B\u7C7B\u540D\uFF0C\u7B49\u4EF7\u4E8E <a href="https://cn.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a> \u7684 <code>name</code> \u5C5E\u6027</td>\n<td><em>string</em></td>\n<td><code>van-fade</code></td>\n</tr>\n<tr>\n<td>overlayClass</td>\n<td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlayStyle</td>\n<td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<p>\u901A\u8FC7\u7EC4\u4EF6\u8C03\u7528 <code>ImagePreview</code> \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B Props\uFF1A</p>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:show</td>\n<td>\u662F\u5426\u5C55\u793A\u56FE\u7247\u9884\u89C8</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>images</td>\n<td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4</td>\n<td><em>string[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>start-position</td>\n<td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u4F4D\u7F6E\u7D22\u5F15</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>swipe-duration</td>\n<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A ms</td>\n<td><em>number | string</em></td>\n<td><code>300</code></td>\n</tr>\n<tr>\n<td>show-index</td>\n<td>\u662F\u5426\u663E\u793A\u9875\u7801</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-indicators</td>\n<td>\u662F\u5426\u663E\u793A\u8F6E\u64AD\u6307\u793A\u5668</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loop</td>\n<td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>double-scale <code>v4.7.2</code></td>\n<td>\u662F\u5426\u542F\u7528\u53CC\u51FB\u7F29\u653E\u624B\u52BF\uFF0C\u7981\u7528\u540E\uFF0C\u70B9\u51FB\u65F6\u4F1A\u7ACB\u5373\u5173\u95ED\u56FE\u7247\u9884\u89C8</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>before-close</td>\n<td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE <code>false</code> \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise</td>\n<td><em>(active: number) =&gt; boolean | Promise&lt;boolean&gt;</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>close-on-popstate</td>\n<td>\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-image <code>v4.8.3</code></td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u56FE\u7247\u540E\u5173\u95ED\u56FE\u7247\u9884\u89C8</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay <code>v4.6.4</code></td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u56FE\u7247\u9884\u89C8</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>vertical <code>v4.8.6</code></td>\n<td>\u662F\u5426\u5F00\u542F\u7EB5\u5411\u624B\u52BF\u6ED1\u52A8</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>class-name</td>\n<td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>max-zoom</td>\n<td>\u624B\u52BF\u7F29\u653E\u65F6\uFF0C\u6700\u5927\u7F29\u653E\u6BD4\u4F8B</td>\n<td><em>number | string</em></td>\n<td><code>3</code></td>\n</tr>\n<tr>\n<td>min-zoom</td>\n<td>\u624B\u52BF\u7F29\u653E\u65F6\uFF0C\u6700\u5C0F\u7F29\u653E\u6BD4\u4F8B</td>\n<td><em>number | string</em></td>\n<td><code>1/3</code></td>\n</tr>\n<tr>\n<td>closeable</td>\n<td>\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>close-icon</td>\n<td>\u5173\u95ED\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5</td>\n<td><em>string</em></td>\n<td><code>clear</code></td>\n</tr>\n<tr>\n<td>close-icon-position</td>\n<td>\u5173\u95ED\u56FE\u6807\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>top-left</code><br><code>bottom-left</code> <code>bottom-right</code></td>\n<td><em>string</em></td>\n<td><code>top-right</code></td>\n</tr>\n<tr>\n<td>transition</td>\n<td>\u52A8\u753B\u7C7B\u540D\uFF0C\u7B49\u4EF7\u4E8E <a href="https://cn.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a> \u7684 <code>name</code> \u5C5E\u6027</td>\n<td><em>string</em></td>\n<td><code>van-fade</code></td>\n</tr>\n<tr>\n<td>overlay-class</td>\n<td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlay-style</td>\n<td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<p>\u901A\u8FC7\u7EC4\u4EF6\u8C03\u7528 <code>ImagePreview</code> \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B\u4E8B\u4EF6\uFF1A</p>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>close</td>\n<td>\u5173\u95ED\u65F6\u89E6\u53D1</td>\n<td><em>{ index: number, url: string }</em></td>\n</tr>\n<tr>\n<td>closed</td>\n<td>\u5173\u95ED\u4E14\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>change</td>\n<td>\u5207\u6362\u5F53\u524D\u56FE\u7247\u65F6\u89E6\u53D1</td>\n<td><em>index: number</em></td>\n</tr>\n<tr>\n<td>scale</td>\n<td>\u7F29\u653E\u5F53\u524D\u56FE\u7247\u65F6\u89E6\u53D1</td>\n<td><em>{ index: number, scale: number }</em></td>\n</tr>\n<tr>\n<td>long-press</td>\n<td>\u957F\u6309\u5F53\u524D\u56FE\u7247\u65F6\u89E6\u53D1</td>\n<td><em>{ index: number }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="fang-fa-1" tabindex="-1">\u65B9\u6CD5</h3>\n<p>\u901A\u8FC7\u7EC4\u4EF6\u8C03\u7528 <code>ImagePreview</code> \u65F6\uFF0C\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 ImagePreview \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>resetScale <code>4.7.4</code></td>\n<td>\u91CD\u7F6E\u5F53\u524D\u56FE\u7247\u7684\u7F29\u653E\u6BD4</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>swipeTo</td>\n<td>\u5207\u6362\u5230\u6307\u5B9A\u4F4D\u7F6E</td>\n<td><em>index: number, options?: SwipeToOptions</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">ImagePreviewProps</span>,\n  <span class="hljs-title class_">ImagePreviewOptions</span>,\n  <span class="hljs-title class_">ImagePreviewInstance</span>,\n  <span class="hljs-title class_">ImagePreviewScaleEventParams</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>ImagePreviewInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ImagePreviewInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> imagePreviewRef = ref&lt;<span class="hljs-title class_">ImagePreviewInstance</span>&gt;();\n\nimagePreviewRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">swipeTo</span>(<span class="hljs-number">1</span>);\n</code></pre>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<p>\u901A\u8FC7\u7EC4\u4EF6\u8C03\u7528 <code>ImagePreview</code> \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B\u63D2\u69FD\uFF1A</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>index</td>\n<td>\u81EA\u5B9A\u4E49\u9875\u7801\u5185\u5BB9</td>\n<td><em>{ index: \u5F53\u524D\u56FE\u7247\u7684\u7D22\u5F15 }</em></td>\n</tr>\n<tr>\n<td>cover</td>\n<td>\u81EA\u5B9A\u4E49\u8986\u76D6\u5728\u56FE\u7247\u9884\u89C8\u4E0A\u65B9\u7684\u5185\u5BB9</td>\n<td>-</td>\n</tr>\n<tr>\n<td>image</td>\n<td>\u81EA\u5B9A\u4E49\u56FE\u7247\u5185\u5BB9</td>\n<td><em>{ src: \u5F53\u524D\u8D44\u6E90\u5730\u5740, onLoad: \u52A0\u8F7D\u56FE\u7247\u51FD\u6570, style: \u5F53\u524D\u56FE\u7247\u6837\u5F0F }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="onclose-hui-diao-can-shu" tabindex="-1">onClose \u56DE\u8C03\u53C2\u6570</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>\u5F53\u524D\u56FE\u7247 URL</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>index</td>\n<td>\u5F53\u524D\u56FE\u7247\u7684\u7D22\u5F15\u503C</td>\n<td><em>number</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="onscale-hui-diao-can-shu" tabindex="-1">onScale \u56DE\u8C03\u53C2\u6570</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>index</td>\n<td>\u5F53\u524D\u56FE\u7247\u7684\u7D22\u5F15\u503C</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>scale</td>\n<td>\u5F53\u524D\u56FE\u7247\u7684\u7F29\u653E\u503C</td>\n<td><em>number</em></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-image-preview-index-text-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-preview-index-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-preview-index-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-preview-index-text-shadow</td>\n<td><em>0 1px 1px var(--van-gray-8)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-preview-overlay-background</td>\n<td><em>rgba(0, 0, 0, 0.9)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-preview-close-icon-size</td>\n<td><em>22px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-preview-close-icon-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-preview-close-icon-margin</td>\n<td><em>var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-preview-close-icon-z-index</td>\n<td><em>1</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2>\n<div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F</h3>\n<p>\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-yong-showimagepreview-shi-chu-xian-bian-yi-bao-cuo" tabindex="-1">\u5F15\u7528 showImagePreview \u65F6\u51FA\u73B0\u7F16\u8BD1\u62A5\u9519\uFF1F</h3>\n<p>\u5982\u679C\u5F15\u7528 <code>showImagePreview</code> \u65B9\u6CD5\u65F6\u51FA\u73B0\u4EE5\u4E0B\u62A5\u9519\uFF0C\u8BF4\u660E\u9879\u76EE\u4E2D\u4F7F\u7528\u4E86 <code>babel-plugin-import</code> \u63D2\u4EF6\uFF0C\u5BFC\u81F4\u4EE3\u7801\u88AB\u9519\u8BEF\u7F16\u8BD1\u3002</p>\n<pre><code class="language-bash">These dependencies were not found:\n\n* vant/es/show-image-preview <span class="hljs-keyword">in</span> ./src/xxx.js\n* vant/es/show-image-preview/style <span class="hljs-keyword">in</span> ./src/xxx.js\n</code></pre>\n<p>Vant \u4ECE 4.0 \u7248\u672C\u5F00\u59CB\u4E0D\u518D\u652F\u6301 <code>babel-plugin-import</code> \u63D2\u4EF6\uFF0C\u8BF7\u53C2\u8003 <a href="#/zh-CN/migrate-from-v3#yi-chu-babel-plugin-import" target="_blank">\u8FC1\u79FB\u6307\u5357</a> \u79FB\u9664\u8BE5\u63D2\u4EF6\u3002</p>\n</div>'},null,8,e))}}}]);