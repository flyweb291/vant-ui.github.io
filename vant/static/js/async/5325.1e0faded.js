/*! For license information please see 5325.1e0faded.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5325"],{36021:function(n,t,s){"use strict";s.r(t);var d=s("69298");let a=["innerHTML"];t.default={setup:()=>({html:""}),render:()=>((0,d.openBlock)(),(0,d.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Coupon \u4F18\u60E0\u5238\u9009\u62E9\u5668</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7528\u4E8E\u4F18\u60E0\u5238\u7684\u5151\u6362\u548C\u9009\u62E9\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CouponCell</span>, <span class="hljs-title class_">CouponList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CouponCell</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CouponList</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u4F18\u60E0\u5238\u5355\u5143\u683C --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-coupon-cell</span>\n  <span class="hljs-attr">:coupons</span>=<span class="hljs-string">&quot;coupons&quot;</span>\n  <span class="hljs-attr">:chosen-coupon</span>=<span class="hljs-string">&quot;chosenCoupon&quot;</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showList = true&quot;</span>\n/&gt;</span>\n<span class="hljs-comment">&lt;!-- \u4F18\u60E0\u5238\u5217\u8868 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showList&quot;</span>\n  <span class="hljs-attr">round</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 90%; padding-top: 4px;&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-coupon-list</span>\n    <span class="hljs-attr">:coupons</span>=<span class="hljs-string">&quot;coupons&quot;</span>\n    <span class="hljs-attr">:chosen-coupon</span>=<span class="hljs-string">&quot;chosenCoupon&quot;</span>\n    <span class="hljs-attr">:disabled-coupons</span>=<span class="hljs-string">&quot;disabledCoupons&quot;</span>\n    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>\n    @<span class="hljs-attr">exchange</span>=<span class="hljs-string">&quot;onExchange&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> coupon = {\n      <span class="hljs-attr">available</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-attr">condition</span>: <span class="hljs-string">&#x27;\u65E0\u95E8\u69DB\\n\u6700\u591A\u4F18\u60E012\u5143&#x27;</span>,\n      <span class="hljs-attr">reason</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n      <span class="hljs-attr">value</span>: <span class="hljs-number">150</span>,\n      <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u4F18\u60E0\u5238\u540D\u79F0&#x27;</span>,\n      <span class="hljs-attr">startAt</span>: <span class="hljs-number">1489104000</span>,\n      <span class="hljs-attr">endAt</span>: <span class="hljs-number">1514592000</span>,\n      <span class="hljs-attr">valueDesc</span>: <span class="hljs-string">&#x27;1.5&#x27;</span>,\n      <span class="hljs-attr">unitDesc</span>: <span class="hljs-string">&#x27;\u5143&#x27;</span>,\n    };\n\n    <span class="hljs-keyword">const</span> coupons = <span class="hljs-title function_">ref</span>([coupon]);\n    <span class="hljs-keyword">const</span> showList = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> chosenCoupon = <span class="hljs-title function_">ref</span>(-<span class="hljs-number">1</span>);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; {\n      showList.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      chosenCoupon.<span class="hljs-property">value</span> = index;\n    };\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onExchange</span> = (<span class="hljs-params">code</span>) =&gt; {\n      coupons.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>(coupon);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      coupons,\n      showList,\n      onChange,\n      onExchange,\n      chosenCoupon,\n      <span class="hljs-attr">disabledCoupons</span>: [coupon],\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="couponcell-props" tabindex="-1">CouponCell Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>\u5355\u5143\u683C\u6807\u9898</td>\n<td><em>string</em></td>\n<td><code>\u4F18\u60E0\u5238</code></td>\n</tr>\n<tr>\n<td>chosen-coupon</td>\n<td>\u5F53\u524D\u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15</td>\n<td><em>number | string</em></td>\n<td><code>-1</code></td>\n</tr>\n<tr>\n<td>coupons</td>\n<td>\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868</td>\n<td><em>Coupon[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>editable</td>\n<td>\u80FD\u5426\u5207\u6362\u4F18\u60E0\u5238</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>border</td>\n<td>\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>currency</td>\n<td>\u8D27\u5E01\u7B26\u53F7</td>\n<td><em>string</em></td>\n<td><code>\xa5</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="couponlist-props" tabindex="-1">CouponList Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:code</td>\n<td>\u5F53\u524D\u8F93\u5165\u7684\u5151\u6362\u7801</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>chosen-coupon</td>\n<td>\u5F53\u524D\u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15</td>\n<td><em>number</em></td>\n<td><code>-1</code></td>\n</tr>\n<tr>\n<td>coupons</td>\n<td>\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868</td>\n<td><em>CouponInfo[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>disabled-coupons</td>\n<td>\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868</td>\n<td><em>CouponInfo[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>enabled-title</td>\n<td>\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u6807\u9898</td>\n<td><em>string</em></td>\n<td><code>\u53EF\u4F7F\u7528\u4F18\u60E0\u5238</code></td>\n</tr>\n<tr>\n<td>disabled-title</td>\n<td>\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u6807\u9898</td>\n<td><em>string</em></td>\n<td><code>\u4E0D\u53EF\u4F7F\u7528\u4F18\u60E0\u5238</code></td>\n</tr>\n<tr>\n<td>exchange-button-text</td>\n<td>\u5151\u6362\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u5151\u6362</code></td>\n</tr>\n<tr>\n<td>exchange-button-loading</td>\n<td>\u662F\u5426\u663E\u793A\u5151\u6362\u6309\u94AE\u52A0\u8F7D\u52A8\u753B</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>exchange-button-disabled</td>\n<td>\u662F\u5426\u7981\u7528\u5151\u6362\u6309\u94AE</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>exchange-min-length</td>\n<td>\u5151\u6362\u7801\u6700\u5C0F\u957F\u5EA6</td>\n<td><em>number</em></td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td>displayed-coupon-index</td>\n<td>\u6EDA\u52A8\u81F3\u7279\u5B9A\u4F18\u60E0\u5238\u4F4D\u7F6E</td>\n<td><em>number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>show-close-button</td>\n<td>\u662F\u5426\u663E\u793A\u5217\u8868\u5E95\u90E8\u6309\u94AE</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-button-text</td>\n<td>\u5217\u8868\u5E95\u90E8\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u4E0D\u4F7F\u7528\u4F18\u60E0</code></td>\n</tr>\n<tr>\n<td>input-placeholder</td>\n<td>\u8F93\u5165\u6846\u6587\u5B57\u63D0\u793A</td>\n<td><em>string</em></td>\n<td><code>\u8BF7\u8F93\u5165\u4F18\u60E0\u7801</code></td>\n</tr>\n<tr>\n<td>show-exchange-bar</td>\n<td>\u662F\u5426\u5C55\u793A\u5151\u6362\u680F</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>currency</td>\n<td>\u8D27\u5E01\u7B26\u53F7</td>\n<td><em>string</em></td>\n<td><code>\xa5</code></td>\n</tr>\n<tr>\n<td>empty-image</td>\n<td>\u5217\u8868\u4E3A\u7A7A\u65F6\u7684\u5360\u4F4D\u56FE</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>show-count</td>\n<td>\u662F\u5426\u5C55\u793A\u53EF\u7528 / \u4E0D\u53EF\u7528\u6570\u91CF</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="couponlist-events" tabindex="-1">CouponList Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>\u4F18\u60E0\u5238\u5207\u6362\u56DE\u8C03</td>\n<td>index, \u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15</td>\n</tr>\n<tr>\n<td>exchange</td>\n<td>\u5151\u6362\u4F18\u60E0\u5238\u56DE\u8C03</td>\n<td>code, \u5151\u6362\u7801</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="couponlist-slots" tabindex="-1">CouponList Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>list-footer</td>\n<td>\u4F18\u60E0\u5238\u5217\u8868\u5E95\u90E8</td>\n</tr>\n<tr>\n<td>disabled-list-footer</td>\n<td>\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u5E95\u90E8</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="couponinfo-shu-ju-jie-gou" tabindex="-1">CouponInfo \u6570\u636E\u7ED3\u6784</h3>\n<table>\n<thead>\n<tr>\n<th>\u952E\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>\u4F18\u60E0\u5238 id</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>name</td>\n<td>\u4F18\u60E0\u5238\u540D\u79F0</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>condition</td>\n<td>\u6EE1\u51CF\u6761\u4EF6</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>startAt</td>\n<td>\u5361\u6709\u6548\u5F00\u59CB\u65F6\u95F4 (\u65F6\u95F4\u6233, \u5355\u4F4D\u79D2)</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>endAt</td>\n<td>\u5361\u5931\u6548\u65E5\u671F (\u65F6\u95F4\u6233, \u5355\u4F4D\u79D2)</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>description</td>\n<td>\u63CF\u8FF0\u4FE1\u606F\uFF0C\u4F18\u60E0\u5238\u53EF\u7528\u65F6\u5C55\u793A</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>reason</td>\n<td>\u4E0D\u53EF\u7528\u539F\u56E0\uFF0C\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u65F6\u5C55\u793A</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u6298\u6263\u5238\u4F18\u60E0\u91D1\u989D\uFF0C\u5355\u4F4D\u5206</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>valueDesc</td>\n<td>\u6298\u6263\u5238\u4F18\u60E0\u91D1\u989D\u6587\u6848</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>unitDesc</td>\n<td>\u5355\u4F4D\u6587\u6848</td>\n<td><em>string</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CouponCellProps</span>, <span class="hljs-title class_">CouponListProps</span>, <span class="hljs-title class_">CouponInfo</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-coupon-margin</td>\n<td><em>0 var(--van-padding-sm) var(--van-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-content-height</td>\n<td><em>84px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-content-padding</td>\n<td><em>14px 0</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-content-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-active-background</td>\n<td><em>var(--van-active-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-radius</td>\n<td><em>var(--van-radius-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-shadow</td>\n<td><em>0 0 4px rgba(0, 0, 0, 0.1)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-head-width</td>\n<td><em>96px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-amount-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-amount-font-size</td>\n<td><em>30px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-currency-font-size</td>\n<td><em>40%</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-name-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-disabled-text-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-description-padding</td>\n<td><em>var(--van-padding-xs) var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-description-border-color</td>\n<td><em>var(--van-border-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-checkbox-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-list-background</td>\n<td><em>var(--van-background)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-list-field-padding</td>\n<td><em>5px 0 5px var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-list-exchange-button-height</td>\n<td><em>32px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-list-close-button-height</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-list-empty-tip-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-list-empty-tip-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-list-empty-tip-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-coupon-cell-selected-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,a))}}}]);