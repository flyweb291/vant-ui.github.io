(self.webpackChunk=self.webpackChunk||[]).push([["4315"],{77597:function(s,n,t){"use strict";t.r(n);var a=t("38061");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>RollingText</h1>\n<div class="van-doc-card"><h3 id="introduction" tabindex="-1">Introduction</h3>\n<p>Rolling text animation, which can roll numbers and other types of text. Please upgrade <code>vant</code> to &gt;= v4.6.0 before using this component.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RollingText</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">RollingText</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>You can set the starting value with <code>start-num</code> and the target value with <code>target-num</code>. The RollingText component will automatically start the animation, rolling from the starting value to the target value.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;123&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="set-rolling-direction" tabindex="-1">Set Rolling Direction</h3>\n<p>You can set the rolling direction of the numbers using the <code>direction</code> prop. By default, it rolls downwards, but you can set it to <code>up</code> to roll upwards.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;432&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;up&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="set-stop-order" tabindex="-1">Set Stop Order</h3>\n<p>You can set the order of stopping the animation of each digit through the <code>stop-order</code> prop. By default, it stops from the higher digits. Setting <code>rtl</code> can stop from the ones digit.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;54321&quot;</span> <span class="hljs-attr">stop-order</span>=<span class="hljs-string">&quot;rtl&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="roll-non-numeric-text" tabindex="-1">Roll Non-numeric Text</h3>\n<p>You can reverse non-numeric content by using the <code>text-list</code> prop. The component will rolling from the first item to the last item in the array. Please make sure that the array length is greater than or equal to 2, and that each item has the same length.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:text-list</span>=<span class="hljs-string">&quot;textList&quot;</span> <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> textList = <span class="hljs-title function_">ref</span>([\n      <span class="hljs-string">&#x27;aaaaa&#x27;</span>,\n      <span class="hljs-string">&#x27;bbbbb&#x27;</span>,\n      <span class="hljs-string">&#x27;ccccc&#x27;</span>,\n      <span class="hljs-string">&#x27;ddddd&#x27;</span>,\n      <span class="hljs-string">&#x27;eeeee&#x27;</span>,\n      <span class="hljs-string">&#x27;fffff&#x27;</span>,\n      <span class="hljs-string">&#x27;ggggg&#x27;</span>,\n    ]);\n    <span class="hljs-keyword">return</span> { textList };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-style" tabindex="-1">Custom Style</h3>\n<p>The RollingText component provides some CSS variables that you can override to customize the style, or you can directly modify the component\'s style. Additionally, you can set the height of the numbers using the <code>height</code> prop.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-rolling-text&quot;</span>\n  <span class="hljs-attr">:height</span>=<span class="hljs-string">&quot;54&quot;</span>\n  <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;12345&quot;</span>\n  <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;54321&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-css"><span class="hljs-selector-class">.my-rolling-text</span> {\n  <span class="hljs-attr">--van-rolling-text-background</span>: <span class="hljs-number">#1989fa</span>;\n  <span class="hljs-attr">--van-rolling-text-color</span>: white;\n  <span class="hljs-attr">--van-rolling-text-font-size</span>: <span class="hljs-number">24px</span>;\n  <span class="hljs-attr">--van-rolling-text-gap</span>: <span class="hljs-number">6px</span>;\n  <span class="hljs-attr">--van-rolling-text-item-border-radius</span>: <span class="hljs-number">5px</span>;\n  <span class="hljs-attr">--van-rolling-text-item-width</span>: <span class="hljs-number">40px</span>;\n}\n</code></pre>\n</div><div class="van-doc-card"><h3 id="manual-control" tabindex="-1">Manual Control</h3>\n<p>After obtaining the component instance through <code>ref</code>, you can call the <code>start</code> and <code>reset</code> methods. The <code>start</code> method is used to start the animation, and the <code>reset</code> method is used to reset the animation.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span>\n  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;rollingTextRef&quot;</span>\n  <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span>\n  <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;54321&quot;</span>\n  <span class="hljs-attr">:auto-start</span>=<span class="hljs-string">&quot;false&quot;</span>\n/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">clickable</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;play-circle-o&quot;</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;start&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;start&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;replay&quot;</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;reset&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;reset&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> rollingTextRef = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">start</span> = (<span class="hljs-params"></span>) =&gt; {\n      rollingTextRef.<span class="hljs-property">value</span>.<span class="hljs-title function_">start</span>();\n    };\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">reset</span> = (<span class="hljs-params"></span>) =&gt; {\n      rollingTextRef.<span class="hljs-property">value</span>.<span class="hljs-title function_">reset</span>();\n    };\n    <span class="hljs-keyword">return</span> { rollingTextRef, start, reset };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>start-num</td>\n<td>Start number</td>\n<td><em>number</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>target-num</td>\n<td>Target number</td>\n<td><em>number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>text-list</td>\n<td>Text array</td>\n<td><em>string[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Duration of the animation, in seconds</td>\n<td><em>number</em></td>\n<td><code>2</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>Rolling direction of the text, with <code>down</code> and <code>up</code> as the values</td>\n<td><em>string</em></td>\n<td><code>down</code></td>\n</tr>\n<tr>\n<td>auto-start</td>\n<td>Whether to start the animation</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>stop-order</td>\n<td>Order of stopping the animation of each digit, with <code>ltr</code> and <code>rtl</code> as the values</td>\n<td><em>string</em></td>\n<td><code>ltr</code></td>\n</tr>\n<tr>\n<td>height</td>\n<td>Height of digit, <code>px</code> as unit</td>\n<td><em>number</em></td>\n<td><code>40</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get RollingText instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>start</td>\n<td>Start the animation</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>Reset the animation</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">RollingTextProps</span>,\n  <span class="hljs-title class_">RollingTextInstance</span>,\n  <span class="hljs-title class_">RollingTextDirection</span>,\n  <span class="hljs-title class_">RollingTextStopOrder</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>RollingTextInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">RollingTextInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> rollingTextRef = ref&lt;<span class="hljs-title class_">RollingTextInstance</span>&gt;();\n\nrollingTextRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">start</span>();\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-rolling-text-background</td>\n<td><em>inherit</em></td>\n<td>Background color of a single digit</td>\n</tr>\n<tr>\n<td>--van-rolling-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>Color of the number</td>\n</tr>\n<tr>\n<td>--van-rolling-text-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>Font size of the number</td>\n</tr>\n<tr>\n<td>--van-rolling-text-gap</td>\n<td><em>0px</em></td>\n<td>Spacing between digits</td>\n</tr>\n<tr>\n<td>--van-rolling-text-item-width</td>\n<td><em>15px</em></td>\n<td>Width of a single digit</td>\n</tr>\n<tr>\n<td>--van-rolling-text-item-border-radius</td>\n<td><em>0px</em></td>\n<td>Border radius of a single digit</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);