(self.webpackChunk=self.webpackChunk||[]).push([["5532"],{24030:function(s,n,t){"use strict";t.r(n);var a=t("38061");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>TimePicker</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to select time, usually used with the <a href="#/en-US/popup" target="_blank">Popup</a> component.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TimePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TimePicker</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;12&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>]);\n    <span class="hljs-keyword">return</span> { currentTime };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="columns-type" tabindex="-1">Columns Type</h3>\n<p>Using <code>columns-type</code> prop to control the type of columns.</p>\n<p>For example:</p>\n<ul>\n<li>Pass in <code>[\'hour\']</code> to select hour.</li>\n<li>Pass in <code>[\'minute\']</code> to select minute.</li>\n<li>Pass in <code>[\'minute\', \'second\']</code> to select minute and second.</li>\n<li>Pass in <code>[\'hour\', \'minute\', \'second\']</code> to select hour, minute and second.</li>\n</ul>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span>\n  <span class="hljs-attr">:columns-type</span>=<span class="hljs-string">&quot;columnsType&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;12&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>]);\n    <span class="hljs-keyword">const</span> columnsType = [<span class="hljs-string">&#x27;hour&#x27;</span>, <span class="hljs-string">&#x27;minute&#x27;</span>, <span class="hljs-string">&#x27;second&#x27;</span>];\n    <span class="hljs-keyword">return</span> {\n      currentTime,\n      columnsType,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="time-range" tabindex="-1">Time Range</h3>\n<p>You can use props like <code>min-hour</code> and <code>max-hour</code> to limit the range of hours, <code>min-minute</code> and <code>max-minute</code> to limit the range of minutes, and <code>min-second</code> and <code>max-second</code> to limit the range of seconds.</p>\n<p>For example, in the following example, users can only select hours between <code>10</code> and <code>20</code>, and minutes between <code>30</code> and <code>40</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span>\n  <span class="hljs-attr">:min-hour</span>=<span class="hljs-string">&quot;10&quot;</span>\n  <span class="hljs-attr">:max-hour</span>=<span class="hljs-string">&quot;20&quot;</span>\n  <span class="hljs-attr">:min-minute</span>=<span class="hljs-string">&quot;30&quot;</span>\n  <span class="hljs-attr">:max-minute</span>=<span class="hljs-string">&quot;40&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;12&#x27;</span>, <span class="hljs-string">&#x27;35&#x27;</span>]);\n    <span class="hljs-keyword">return</span> { currentTime };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="overall-time-range" tabindex="-1">Overall Time Range</h3>\n<p>You can use <code>min-time</code> and <code>max-time</code> attributes to limit the overall time range, with the format <code>10:00:00</code>.</p>\n<ul>\n<li>When <code>min-time</code> is set, attributes like <code>min-hour</code>, <code>min-minute</code>, and <code>min-second</code> will not take effect.</li>\n<li>When <code>max-time</code> is set, attributes like <code>max-hour</code>, <code>max-minute</code>, and <code>max-second</code> will not take effect.</li>\n</ul>\n<p>For example, in the following example, users can select any time between <code>09:40:10</code> and <code>20:20:50</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span>\n  <span class="hljs-attr">:columns-type</span>=<span class="hljs-string">&quot;[&#x27;hour&#x27;, &#x27;minute&#x27;, &#x27;second&#x27;]&quot;</span>\n  <span class="hljs-attr">min-time</span>=<span class="hljs-string">&quot;09:40:10&quot;</span>\n  <span class="hljs-attr">max-time</span>=<span class="hljs-string">&quot;20:20:50&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;12&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>]);\n    <span class="hljs-keyword">return</span> { currentTime };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="options-formatter" tabindex="-1">Options Formatter</h3>\n<p>Using <code>formatter</code> prop to format option text.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span>\n  <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;12&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>]);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">type, option</span>) =&gt; {\n      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#x27;hour&#x27;</span>) {\n        option.<span class="hljs-property">text</span> += <span class="hljs-string">&#x27;h&#x27;</span>;\n      }\n      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#x27;minute&#x27;</span>) {\n        option.<span class="hljs-property">text</span> += <span class="hljs-string">&#x27;m&#x27;</span>;\n      }\n      <span class="hljs-keyword">return</span> option;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      formatter,\n      currentTime,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="options-filter" tabindex="-1">Options Filter</h3>\n<p>Using <code>filter</code> prop to filter options.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span> <span class="hljs-attr">:filter</span>=<span class="hljs-string">&quot;filter&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;12&#x27;</span>, <span class="hljs-string">&#x27;00&#x27;</span>]);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">filter</span> = (<span class="hljs-params">type, options</span>) =&gt; {\n      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#x27;minute&#x27;</span>) {\n        <span class="hljs-keyword">return</span> options.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) % <span class="hljs-number">10</span> === <span class="hljs-number">0</span>);\n      }\n      <span class="hljs-keyword">return</span> options;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      filter,\n      currentTime,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="advanced-usage" tabindex="-1">Advanced Usage</h3>\n<p>The third parameter of the <code>filter</code> function can get the currently selected time, which can be used to filter unwanted times more flexibly when using the uncontrolled mode.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span> <span class="hljs-attr">:filter</span>=<span class="hljs-string">&quot;filter&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">filter</span> = (<span class="hljs-params">type, options, values</span>) =&gt; {\n      <span class="hljs-keyword">const</span> hour = +values[<span class="hljs-number">0</span>];\n\n      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#x27;hour&#x27;</span>) {\n        <span class="hljs-keyword">return</span> options.<span class="hljs-title function_">filter</span>(\n          <span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) &gt;= <span class="hljs-number">8</span> &amp;&amp; <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) &lt;= <span class="hljs-number">18</span>,\n        );\n      }\n\n      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#x27;minute&#x27;</span>) {\n        options = options.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) % <span class="hljs-number">10</span> === <span class="hljs-number">0</span>);\n\n        <span class="hljs-keyword">if</span> (hour === <span class="hljs-number">8</span>) {\n          <span class="hljs-keyword">return</span> options.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) &gt;= <span class="hljs-number">40</span>);\n        }\n\n        <span class="hljs-keyword">if</span> (hour === <span class="hljs-number">18</span>) {\n          <span class="hljs-keyword">return</span> options.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) &lt;= <span class="hljs-number">20</span>);\n        }\n      }\n\n      <span class="hljs-keyword">return</span> options;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      filter,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Current time</td>\n<td><em>string[]</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>columns-type</td>\n<td>Columns type</td>\n<td><em>string[]</em></td>\n<td><code>[\'hour\', \'minute\']</code></td>\n</tr>\n<tr>\n<td>min-hour</td>\n<td>Min hour</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>max-hour</td>\n<td>Max hour</td>\n<td><em>number | string</em></td>\n<td><code>23</code></td>\n</tr>\n<tr>\n<td>min-minute</td>\n<td>Min minute</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>max-minute</td>\n<td>Max minute</td>\n<td><em>number | string</em></td>\n<td><code>59</code></td>\n</tr>\n<tr>\n<td>min-second</td>\n<td>Min second</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>max-second</td>\n<td>Max second</td>\n<td><em>number | string</em></td>\n<td><code>59</code></td>\n</tr>\n<tr>\n<td>min-time <code>v4.5.0</code></td>\n<td>Min time, format reference <code>07:40:00</code>, <code>min-hour</code> <code>min-minute</code> <code>min-second</code> is invalid when used</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>max-time <code>v4.5.0</code></td>\n<td>Max time, format reference <code>10:20:00</code>, <code>min-hour</code> <code>min-minute</code> <code>max-second</code> is invalid when used</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>Toolbar title</td>\n<td><em>string</em></td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>confirm-button-text</td>\n<td>Text of confirm button</td>\n<td><em>string</em></td>\n<td><code>Confirm</code></td>\n</tr>\n<tr>\n<td>cancel-button-text</td>\n<td>Text of cancel button</td>\n<td><em>string</em></td>\n<td><code>Cancel</code></td>\n</tr>\n<tr>\n<td>show-toolbar</td>\n<td>Whether to show toolbar</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>Whether to show loading prompt</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>Whether to be readonly</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>filter</td>\n<td>Option filter</td>\n<td><em>(type: string, options: PickerOption[], values: string[]) =&gt; PickerOption[]</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>Option text formatter</td>\n<td><em>(type: string, option: PickerOption) =&gt; PickerOption</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>option-height</td>\n<td>Option height, supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>44</code></td>\n</tr>\n<tr>\n<td>visible-option-num</td>\n<td>Count of visible columns</td>\n<td><em>number | string</em></td>\n<td><code>6</code></td>\n</tr>\n<tr>\n<td>swipe-duration</td>\n<td>Duration of the momentum animation, unit <code>ms</code></td>\n<td><em>number | string</em></td>\n<td><code>1000</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>confirm</td>\n<td>Emitted when the confirm button is clicked</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>Emitted when the cancel button is clicked</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td>\n</tr>\n<tr>\n<td>change</td>\n<td>Emitted when current option is changed</td>\n<td><em>{ selectedValues, selectedOptions, selectedIndexes, columnIndex }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toolbar</td>\n<td>Custom toolbar content</td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>Custom title</td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirm</td>\n<td>Custom confirm button text</td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>Custom cancel button text</td>\n<td>-</td>\n</tr>\n<tr>\n<td>option</td>\n<td>Custom option content</td>\n<td><em>option: PickerOption, index: number</em></td>\n</tr>\n<tr>\n<td>columns-top</td>\n<td>Custom content above columns</td>\n<td>-</td>\n</tr>\n<tr>\n<td>columns-bottom</td>\n<td>Custom content below columns</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Picker instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>confirm</td>\n<td>Stop scrolling and emit confirm event</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>getSelectedTime</td>\n<td>Get current selected time</td>\n<td>-</td>\n<td><em>string[]</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">TimePickerProps</span>,\n  <span class="hljs-title class_">TimePickerColumnType</span>,\n  <span class="hljs-title class_">TimePickerInstance</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>TimePickerInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TimePickerInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> timePickerRef = ref&lt;<span class="hljs-title class_">TimePickerInstance</span>&gt;();\n\ntimePickerRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">confirm</span>();\n</code></pre>\n</div>'},null,8,e))}}}]);