import{o as a,a as t,z as n}from"./vue-libs.ed3d9812.js";const d={class:"van-doc-markdown-body"},o=n(`<h1>Toast \u8F7B\u63D0\u793A</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5728\u9875\u9762\u4E2D\u95F4\u5F39\u51FA\u9ED1\u8272\u534A\u900F\u660E\u63D0\u793A\uFF0C\u7528\u4E8E\u6D88\u606F\u901A\u77E5\u3001\u52A0\u8F7D\u63D0\u793A\u3001\u64CD\u4F5C\u7ED3\u679C\u63D0\u793A\u7B49\u573A\u666F\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>);
</code></pre></div><div class="van-doc-card"><h3 id="han-shu-diao-yong" tabindex="-1">\u51FD\u6570\u8C03\u7528</h3><p>\u4E3A\u4E86\u4FBF\u4E8E\u4F7F\u7528 <code>Toast</code>\uFF0CVant \u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u8F85\u52A9\u51FD\u6570\uFF0C\u901A\u8FC7\u8F85\u52A9\u51FD\u6570\u53EF\u4EE5\u5FEB\u901F\u5524\u8D77\u5168\u5C40\u7684 Toast \u7EC4\u4EF6\u3002</p><p>\u6BD4\u5982\u4F7F\u7528 <code>showToast</code> \u51FD\u6570\uFF0C\u8C03\u7528\u540E\u4F1A\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u6E32\u67D3\u5BF9\u5E94\u7684\u8F7B\u63D0\u793A\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;\u63D0\u793A\u5185\u5BB9&#39;</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="wen-zi-ti-shi" tabindex="-1">\u6587\u5B57\u63D0\u793A</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;\u63D0\u793A\u5185\u5BB9&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-ti-shi" tabindex="-1">\u52A0\u8F7D\u63D0\u793A</h3><p>\u4F7F\u7528 <code>showLoadingToast</code> \u65B9\u6CD5\u5C55\u793A\u52A0\u8F7D\u63D0\u793A\uFF0C\u901A\u8FC7 <code>forbidClick</code> \u9009\u9879\u53EF\u4EE5\u7981\u7528\u80CC\u666F\u70B9\u51FB\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showLoadingToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showLoadingToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u52A0\u8F7D\u4E2D...&#39;</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="cheng-gong-shi-bai-ti-shi" tabindex="-1">\u6210\u529F/\u5931\u8D25\u63D0\u793A</h3><p>\u4F7F\u7528 <code>showSuccessToast</code> \u65B9\u6CD5\u5C55\u793A\u6210\u529F\u63D0\u793A\uFF0C\u4F7F\u7528 <code>showFailToast</code> \u65B9\u6CD5\u5C55\u793A\u5931\u8D25\u63D0\u793A\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showSuccessToast, showFailToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showSuccessToast</span>(<span class="hljs-string">&#39;\u6210\u529F\u6587\u6848&#39;</span>);
<span class="hljs-title function_">showFailToast</span>(<span class="hljs-string">&#39;\u5931\u8D25\u6587\u6848&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u6807</h3><p>\u901A\u8FC7 <code>icon</code> \u9009\u9879\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u652F\u6301\u4F20\u5165\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49\u56FE\u6807&#39;</span>,
  <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;like-o&#39;</span>,
});

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49\u56FE\u7247&#39;</span>,
  <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/logo.png&#39;</span>,
});
</code></pre><p>\u901A\u8FC7<code>loadingType</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807\u7C7B\u578B\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showLoadingToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showLoadingToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u52A0\u8F7D\u4E2D...&#39;</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">loadingType</span>: <span class="hljs-string">&#39;spinner&#39;</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-wei-zhi" tabindex="-1">\u81EA\u5B9A\u4E49\u4F4D\u7F6E</h3><p>Toast \u9ED8\u8BA4\u6E32\u67D3\u5728\u5C4F\u5E55\u6B63\u4E2D\u4F4D\u7F6E\uFF0C\u901A\u8FC7 <code>position</code> \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236 Toast \u5C55\u793A\u7684\u4F4D\u7F6E\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u9876\u90E8\u5C55\u793A&#39;</span>,
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>,
});

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u5E95\u90E8\u5C55\u793A&#39;</span>,
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;bottom&#39;</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="wen-zi-huan-xing-fang-shi" tabindex="-1">\u6587\u5B57\u6362\u884C\u65B9\u5F0F</h3><p>\u901A\u8FC7 <code>wordBreak</code> \u9009\u62E9\u53EF\u4EE5\u63A7\u5236 Toast \u4E2D\u7684\u6587\u5B57\u8FC7\u957F\u65F6\u7684\u622A\u65AD\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>break-all</code>\uFF0C\u53EF\u9009\u503C\u4E3A <code>break-word</code> \u548C <code>normal</code>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-comment">// \u6362\u884C\u65F6\u622A\u65AD\u5355\u8BCD</span>
<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;This message will contain a incomprehensibilities long word.&#39;</span>,
  <span class="hljs-attr">wordBreak</span>: <span class="hljs-string">&#39;break-all&#39;</span>,
});

<span class="hljs-comment">// \u6362\u884C\u65F6\u4E0D\u622A\u65AD\u5355\u8BCD</span>
<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;This message will contain a incomprehensibilities long word.&#39;</span>,
  <span class="hljs-attr">wordBreak</span>: <span class="hljs-string">&#39;break-word&#39;</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="dong-tai-geng-xin-ti-shi" tabindex="-1">\u52A8\u6001\u66F4\u65B0\u63D0\u793A</h3><p>\u6267\u884C Toast \u65B9\u6CD5\u65F6\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684 Toast \u5B9E\u4F8B\uFF0C\u901A\u8FC7\u4FEE\u6539\u5B9E\u4F8B\u4E0A\u7684 <code>message</code> \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u66F4\u65B0\u63D0\u793A\u7684\u6548\u679C\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showLoadingToast, closeToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> toast = <span class="hljs-title function_">showLoadingToast</span>({
  <span class="hljs-attr">duration</span>: <span class="hljs-number">0</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u5012\u8BA1\u65F6 3 \u79D2&#39;</span>,
});

<span class="hljs-keyword">let</span> second = <span class="hljs-number">3</span>;
<span class="hljs-keyword">const</span> timer = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
  second--;
  <span class="hljs-keyword">if</span> (second) {
    toast.<span class="hljs-property">message</span> = <span class="hljs-string">\`\u5012\u8BA1\u65F6 <span class="hljs-subst">\${second}</span> \u79D2\`</span>;
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-built_in">clearInterval</span>(timer);
    <span class="hljs-title function_">closeToast</span>();
  }
}, <span class="hljs-number">1000</span>);
</code></pre></div><div class="van-doc-card"><h3 id="dan-li-mo-shi" tabindex="-1">\u5355\u4F8B\u6A21\u5F0F</h3><p>Toast \u9ED8\u8BA4\u91C7\u7528\u5355\u4F8B\u6A21\u5F0F\uFF0C\u5373\u540C\u4E00\u65F6\u95F4\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A Toast\uFF0C\u5982\u679C\u9700\u8981\u5728\u540C\u4E00\u65F6\u95F4\u5F39\u51FA\u591A\u4E2A Toast\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast, showSuccessToast, allowMultipleToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">allowMultipleToast</span>();

<span class="hljs-keyword">const</span> toast1 = <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;\u7B2C\u4E00\u4E2A Toast&#39;</span>);
<span class="hljs-keyword">const</span> toast2 = <span class="hljs-title function_">showSuccessToast</span>(<span class="hljs-string">&#39;\u7B2C\u4E8C\u4E2A Toast&#39;</span>);

toast1.<span class="hljs-title function_">close</span>();
toast2.<span class="hljs-title function_">close</span>();
</code></pre></div><div class="van-doc-card"><h3 id="xiu-gai-mo-ren-pei-zhi" tabindex="-1">\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E</h3><p>\u901A\u8FC7 <code>setToastDefaultOptions</code> \u51FD\u6570\u53EF\u4EE5\u5168\u5C40\u4FEE\u6539 <code>showToast</code> \u7B49\u65B9\u6CD5\u7684\u9ED8\u8BA4\u914D\u7F6E\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { setToastDefaultOptions, resetToastDefaultOptions } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">setToastDefaultOptions</span>({ <span class="hljs-attr">duration</span>: <span class="hljs-number">2000</span> });

<span class="hljs-title function_">setToastDefaultOptions</span>(<span class="hljs-string">&#39;loading&#39;</span>, { <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span> });

<span class="hljs-title function_">resetToastDefaultOptions</span>();

<span class="hljs-title function_">resetToastDefaultOptions</span>(<span class="hljs-string">&#39;loading&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-toast-zu-jian" tabindex="-1">\u4F7F\u7528 Toast \u7EC4\u4EF6</h3><p>\u5982\u679C\u9700\u8981\u5728 Toast \u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 Toast \u7EC4\u4EF6\uFF0C\u5E76\u4F7F\u7528 message \u63D2\u69FD\u8FDB\u884C\u5B9A\u5236\u3002\u4F7F\u7528\u524D\u9700\u8981\u901A\u8FC7 <code>app.use</code> \u7B49\u65B9\u5F0F\u6CE8\u518C\u7EC4\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-toast</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 0&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">message</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;140&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: block&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-toast</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> { show };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3><p>Vant \u4E2D\u5BFC\u51FA\u4E86\u4EE5\u4E0B Toast \u76F8\u5173\u7684\u8F85\u52A9\u51FD\u6570\uFF1A</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>showToast</td><td>\u5C55\u793A\u63D0\u793A</td><td><code>ToastOptions | string</code></td><td>toast \u5B9E\u4F8B</td></tr><tr><td>showLoadingToast</td><td>\u5C55\u793A\u52A0\u8F7D\u63D0\u793A</td><td><code>ToastOptions | string</code></td><td>toast \u5B9E\u4F8B</td></tr><tr><td>showSuccessToast</td><td>\u5C55\u793A\u6210\u529F\u63D0\u793A</td><td><code>ToastOptions | string</code></td><td>toast \u5B9E\u4F8B</td></tr><tr><td>showFailToast</td><td>\u5C55\u793A\u5931\u8D25\u63D0\u793A</td><td><code>ToastOptions | string</code></td><td>toast \u5B9E\u4F8B</td></tr><tr><td>closeToast</td><td>\u5173\u95ED\u63D0\u793A</td><td><code>closeAll: boolean</code></td><td><code>void</code></td></tr><tr><td>allowMultipleToast</td><td>\u5141\u8BB8\u540C\u65F6\u5B58\u5728\u591A\u4E2A Toast</td><td>-</td><td><code>void</code></td></tr><tr><td>setToastDefaultOptions</td><td>\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5F71\u54CD\u6240\u6709\u7684 <code>showToast</code> \u8C03\u7528\u3002<br>\u4F20\u5165 type \u53EF\u4EE5\u4FEE\u6539\u6307\u5B9A\u7C7B\u578B\u7684\u9ED8\u8BA4\u914D\u7F6E</td><td><code>type | ToastOptions</code></td><td><code>void</code></td></tr><tr><td>resetToastDefaultOptions</td><td>\u91CD\u7F6E\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5F71\u54CD\u6240\u6709\u7684 <code>showToast</code> \u8C03\u7528\u3002<br>\u4F20\u5165 type \u53EF\u4EE5\u91CD\u7F6E\u6307\u5B9A\u7C7B\u578B\u7684\u9ED8\u8BA4\u914D\u7F6E</td><td><code>type</code></td><td><code>void</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="toastoptions-shu-ju-jie-gou" tabindex="-1">ToastOptions \u6570\u636E\u7ED3\u6784</h3><p>\u8C03\u7528 <code>showToast</code> \u7B49\u65B9\u6CD5\u65F6\uFF0C\u652F\u6301\u4F20\u5165\u4EE5\u4E0B\u9009\u9879\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u63D0\u793A\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>loading</code> <code>success</code><br><code>fail</code> <code>html</code></td><td><em>ToastType</em></td><td><code>text</code></td></tr><tr><td>position</td><td>\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>top</code> <code>bottom</code></td><td><em>ToastPosition</em></td><td><code>middle</code></td></tr><tr><td>message</td><td>\u6587\u672C\u5185\u5BB9\uFF0C\u652F\u6301\u901A\u8FC7<code>\\n</code>\u6362\u884C</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>wordBreak</td><td>\u6587\u672C\u5185\u5BB9\u7684\u6362\u884C\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>normal</code> <code>break-all</code> <code>break-word</code></td><td><em>ToastWordBreak</em></td><td><code>&#39;break-all&#39;</code></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u652F\u6301\u4F20\u5165\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td>-</td></tr><tr><td>iconSize</td><td>\u56FE\u6807\u5927\u5C0F\uFF0C\u5982 <code>20px</code> <code>2em</code>\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>number | string</em></td><td><code>36px</code></td></tr><tr><td>iconPrefix</td><td>\u56FE\u6807\u7C7B\u540D\u524D\u7F00\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">class-prefix \u5C5E\u6027</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>overlay</td><td>\u662F\u5426\u663E\u793A\u80CC\u666F\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>forbidClick</td><td>\u662F\u5426\u7981\u6B62\u80CC\u666F\u70B9\u51FB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeOnClick</td><td>\u662F\u5426\u5728\u70B9\u51FB\u540E\u5173\u95ED</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeOnClickOverlay</td><td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loadingType</td><td><a href="#/zh-CN/loading" target="_blank">\u52A0\u8F7D\u56FE\u6807\u7C7B\u578B</a>, \u53EF\u9009\u503C\u4E3A <code>spinner</code></td><td><em>string</em></td><td><code>circular</code></td></tr><tr><td>duration</td><td>\u5C55\u793A\u65F6\u957F(ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0Ctoast \u4E0D\u4F1A\u6D88\u5931</td><td><em>number</em></td><td><code>2000</code></td></tr><tr><td>className</td><td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayClass <code>v3.0.4</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayStyle <code>v3.0.4</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F</td><td><em>object</em></td><td>-</td></tr><tr><td>onOpened</td><td>\u5B8C\u5168\u5C55\u793A\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td><em>Function</em></td><td>-</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td><em>Function</em></td><td>-</td></tr><tr><td>transition</td><td>\u52A8\u753B\u7C7B\u540D\uFF0C\u7B49\u4EF7\u4E8E <a href="https://v3.cn.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a> \u7684<code>name</code>\u5C5E\u6027</td><td><em>string</em></td><td><code>van-fade</code></td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u7B49\u540C\u4E8E Teleport \u7EC4\u4EF6\u7684 <a href="https://v3.cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to \u5C5E\u6027</a></td><td><em>string | Element</em></td><td><code>body</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><p>\u4F7F\u7528 <code>Toast</code> \u7EC4\u4EF6\u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B\u63D2\u69FD\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>message</td><td>\u81EA\u5B9A\u4E49\u6587\u672C\u5185\u5BB9</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ToastType</span>,
  <span class="hljs-title class_">ToastProps</span>,
  <span class="hljs-title class_">ToastOptions</span>,
  <span class="hljs-title class_">ToastPosition</span>,
  <span class="hljs-title class_">ToastWordBreak</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-toast-max-width</td><td><em>70%</em></td><td>-</td></tr><tr><td>--van-toast-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-toast-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-toast-loading-icon-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-toast-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-toast-radius</td><td><em>var(--van-radius-lg)</em></td><td>-</td></tr><tr><td>--van-toast-background</td><td><em>fade(var(--van-black), 70%)</em></td><td>-</td></tr><tr><td>--van-toast-icon-size</td><td><em>36px</em></td><td>-</td></tr><tr><td>--van-toast-text-min-width</td><td><em>96px</em></td><td>-</td></tr><tr><td>--van-toast-text-padding</td><td><em>var(--van-padding-xs) var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-toast-default-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-toast-default-width</td><td><em>88px</em></td><td>-</td></tr><tr><td>--van-toast-default-min-height</td><td><em>88px</em></td><td>-</td></tr><tr><td>--van-toast-position-top-distance</td><td><em>20%</em></td><td>-</td></tr><tr><td>--van-toast-position-bottom-distance</td><td><em>20%</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="yin-yong-showtoast-shi-chu-xian-bian-yi-bao-cuo" tabindex="-1">\u5F15\u7528 showToast \u65F6\u51FA\u73B0\u7F16\u8BD1\u62A5\u9519\uFF1F</h3><p>\u5982\u679C\u5F15\u7528 <code>showToast</code> \u65B9\u6CD5\u65F6\u51FA\u73B0\u4EE5\u4E0B\u62A5\u9519\uFF0C\u8BF4\u660E\u9879\u76EE\u4E2D\u4F7F\u7528\u4E86 <code>babel-plugin-import</code> \u63D2\u4EF6\uFF0C\u5BFC\u81F4\u4EE3\u7801\u88AB\u9519\u8BEF\u7F16\u8BD1\u3002</p><pre><code class="language-bash">These dependencies were not found:

* vant/es/show-toast <span class="hljs-keyword">in</span> ./src/xxx.js
* vant/es/show-toast/style <span class="hljs-keyword">in</span> ./src/xxx.js
</code></pre><p>Vant \u4ECE 4.0 \u7248\u672C\u5F00\u59CB\u4E0D\u518D\u652F\u6301 <code>babel-plugin-import</code> \u63D2\u4EF6\uFF0C\u8BF7\u53C2\u8003 <a href="#/zh-CN/migrate-from-v3#yi-chu-babel-plugin-import" target="_blank">\u8FC1\u79FB\u6307\u5357</a> \u79FB\u9664\u8BE5\u63D2\u4EF6\u3002</p></div>`,24),e=[o],h={__name:"README.zh-CN",setup(l,{expose:s}){return s({frontmatter:{}}),(p,i)=>(a(),t("div",d,e))}};export{h as default};