import{o as t,a,z as n}from"./vue-libs-12a1683e.js";const l={class:"van-doc-markdown-body"},d=n(`<h1>ActionBar 动作栏</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于为页面相关操作提供便捷交互。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ActionBar</span>, <span class="hljs-title class_">ActionBarIcon</span>, <span class="hljs-title class_">ActionBarButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionBar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionBarIcon</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionBarButton</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;客服&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickIcon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;购物车&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickIcon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;店铺&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickIcon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;立即购买&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickButton&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickIcon</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;点击图标&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickButton</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;点击按钮&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onClickIcon,
      onClickButton,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="hui-biao-ti-shi" tabindex="-1">徽标提示</h3><p>在 ActionBarIcon 组件上设置 <code>dot</code> 属性后，会在图标右上角展示一个小红点；设置 <code>badge</code> 属性后，会在图标右上角展示相应的徽标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;客服&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;购物车&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;店铺&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;12&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;加入购物车&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;立即购买&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao-yan-se" tabindex="-1">自定义图标颜色</h3><p>通过 ActionBarIcon 的 <code>color</code> 属性可以自定义图标的颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;客服&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;购物车&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;star&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;已收藏&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ff5000&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;加入购物车&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;立即购买&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-an-niu-yan-se" tabindex="-1">自定义按钮颜色</h3><p>通过 ActionBarButton 的 <code>color</code> 属性可以自定义按钮的颜色，支持传入 <code>linear-gradient</code> 渐变色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;客服&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;店铺&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#be99ff&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;加入购物车&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;立即购买&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="actionbar-props" tabindex="-1">ActionBar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>safe-area-inset-bottom</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">底部安全区适配</a></td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>placeholder</td><td>是否在标签位置生成一个等高的占位元素</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbaricon-props" tabindex="-1">ActionBarIcon Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>按钮文字</td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>图标</td><td><em>string</em></td><td>-</td></tr><tr><td>color</td><td>图标颜色</td><td><em>string</em></td><td><code>#323233</code></td></tr><tr><td>icon-class</td><td>图标额外类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>dot</td><td>是否显示图标右上角小红点</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>图标右上角徽标的内容</td><td><em>number | string</em></td><td>-</td></tr><tr><td>badge-props</td><td>自定义徽标的属性，传入的对象会被透传给 <a href="#/zh-CN/badge#props" target="_blank">Badge 组件的 props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>url</td><td>点击后跳转的链接地址</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>点击后跳转的目标路由对象，等同于 vue-router 的 <a href="https://router.vuejs.org/zh/api/#to" target="_blank">to 属性</a></td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>是否在跳转时替换当前页面历史</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbarbutton-props" tabindex="-1">ActionBarButton Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>按钮文字</td><td><em>string</em></td><td>-</td></tr><tr><td>type</td><td>按钮类型，可选值为 <code>primary</code> <code>info</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>color</td><td>按钮颜色，支持传入 <code>linear-gradient</code> 渐变色</td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>左侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>是否显示为加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>url</td><td>点击后跳转的链接地址</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>点击后跳转的目标路由对象，等同于 vue-router 的 <a href="https://router.vuejs.org/zh/api/#to" target="_blank">to 属性</a></td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>是否在跳转时替换当前页面历史</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbaricon-slots" tabindex="-1">ActionBarIcon Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>文本内容</td></tr><tr><td>icon</td><td>自定义图标</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbarbutton-slots" tabindex="-1">ActionBarButton Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>按钮显示内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ActionBarProps</span>,
  <span class="hljs-title class_">ActionBarIconProps</span>,
  <span class="hljs-title class_">ActionBarButtonProps</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-action-bar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-action-bar-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-width</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-height</td><td><em>100%</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-size</td><td><em>18px</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-active-color</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-action-bar-button-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-action-bar-button-warning-color</td><td><em>var(--van-gradient-orange)</em></td><td>-</td></tr><tr><td>--van-action-bar-button-danger-color</td><td><em>var(--van-gradient-red)</em></td><td>-</td></tr></tbody></table></div>`,17),c=[d],h={__name:"README.zh-CN",setup(o,{expose:s}){return s({frontmatter:{}}),(r,e)=>(t(),a("div",l,c))}};export{h as default};