/*! For license information please see 931.f71916d4.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["931"],{83343:function(e,t,r){"use strict";r.r(t);var a=r("66026");r.es(a,t),r("95787");let n=a.default;t.default=n},66026:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a.default}});var a=r("2603");r.es(a,t)},2603:function(e,t,r){"use strict";r.r(t);var a=r("69298"),n=r("28564"),i=r("24647"),l={class:"content"};t.default=(0,a.defineComponent)({__name:"index",setup(e){var t=(0,i.useTranslate)({"zh-CN":{text:"\u6587\u672C",dashed:"\u865A\u7EBF",withText:"\u5C55\u793A\u6587\u672C",contentPosition:"\u5185\u5BB9\u4F4D\u7F6E",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",vertical:"\u5782\u76F4"},"en-US":{text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style",vertical:"Vertical"}});return(e,r)=>{var i=(0,a.resolveComponent)("demo-block");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(i,{title:(0,a.unref)(t)("basicUsage")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default))]),_:1},8,["title"]),(0,a.createVNode)(i,{title:(0,a.unref)(t)("withText")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),null,{default:(0,a.withCtx)(()=>[(0,a.createTextVNode)((0,a.toDisplayString)((0,a.unref)(t)("text")),1)]),_:1})]),_:1},8,["title"]),(0,a.createVNode)(i,{title:(0,a.unref)(t)("contentPosition")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{"content-position":"left"},{default:(0,a.withCtx)(()=>[(0,a.createTextVNode)((0,a.toDisplayString)((0,a.unref)(t)("text")),1)]),_:1}),(0,a.createVNode)((0,a.unref)(n.default),{"content-position":"right"},{default:(0,a.withCtx)(()=>[(0,a.createTextVNode)((0,a.toDisplayString)((0,a.unref)(t)("text")),1)]),_:1})]),_:1},8,["title"]),(0,a.createVNode)(i,{title:(0,a.unref)(t)("dashed")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{dashed:"",hairline:!1},{default:(0,a.withCtx)(()=>[(0,a.createTextVNode)((0,a.toDisplayString)((0,a.unref)(t)("text")),1)]),_:1})]),_:1},8,["title"]),(0,a.createVNode)(i,{title:(0,a.unref)(t)("customStyle")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{style:{borderColor:"#1989fa",color:"#1989fa",padding:"0 16px"}},{default:(0,a.withCtx)(()=>[(0,a.createTextVNode)((0,a.toDisplayString)((0,a.unref)(t)("text")),1)]),_:1})]),_:1},8,["title"]),(0,a.createVNode)(i,{title:(0,a.unref)(t)("vertical")},{default:(0,a.withCtx)(()=>[(0,a.createElementVNode)("div",l,[(0,a.createVNode)((0,a.unref)(n.default),{vertical:""}),(0,a.createTextVNode)(" "+(0,a.toDisplayString)((0,a.unref)(t)("text"))+" ",1),(0,a.createVNode)((0,a.unref)(n.default),{vertical:"",dashed:""}),(0,a.createTextVNode)(" "+(0,a.toDisplayString)((0,a.unref)(t)("text"))+" ",1),(0,a.createVNode)((0,a.unref)(n.default),{vertical:"",hairline:!1}),(0,a.createTextVNode)(" "+(0,a.toDisplayString)((0,a.unref)(t)("text"))+" ",1),(0,a.createVNode)((0,a.unref)(n.default),{vertical:"",style:{borderColor:"#1989fa"}})])]),_:1},8,["title"])],64)}}})},28564:function(e,t,r){"use strict";r.r(t);var a=r("37704"),n=r("57136"),i=(0,a.withInstall)(n.default);t.default=i},57136:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400");var a=r("69298"),n=r("37704"),[i,l]=(0,n.createNamespace)("divider"),o={dashed:Boolean,hairline:n.truthProp,vertical:Boolean,contentPosition:(0,n.makeStringProp)("center")};t.default=(0,a.defineComponent)({name:i,props:o,setup(e,t){var{slots:r}=t;return()=>{var t;return(0,a.createVNode)("div",{role:"separator",class:l({dashed:e.dashed,hairline:e.hairline,vertical:e.vertical,["content-".concat(e.contentPosition)]:!!r.default&&!e.vertical})},[!e.vertical&&((t=r.default)===null||void 0===t?void 0:t.call(r))])}}})},95787:function(e){},46653:function(e){}}]);