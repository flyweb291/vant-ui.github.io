import{A as C,V as r,a as l}from"./index-59622a5a.js";import{u as I,c as k,e as P,a as h}from"./use-translate-f5915e0e.js";import{u as w,r as y}from"./use-route-3942a82f.js";import{I as A}from"./index-f40ec2de.js";import{B as v}from"./index-5106e8af.js";import{n as S,u as V,w as N}from"./with-install-e688503b.js";import{A as g,e as n,B as T,r as E,o as F,a as O,w as c,C as t,F as R}from"./vue-libs-12a1683e.js";import{s as f}from"./function-call-94502ad4.js";import"./use-placeholder-12365f3c.js";import"./use-height-e16e614a.js";import"./on-popup-reopen-eee79bbb.js";import"./use-expose-74d6f7e3.js";import"./index-f0897f9f.js";import"./index-57217a11.js";import"./constant-a81ffd37.js";import"./mount-component-d2062020.js";import"./index-b8400930.js";import"./use-touch-e98b6450.js";import"./use-lazy-render-8625b066.js";import"./index-dd419646.js";import"./interceptor-37ecf4c0.js";const[U,p]=k("action-bar-icon"),j=P({},y,{dot:Boolean,text:String,icon:String,color:String,badge:S,iconClass:V,badgeProps:Object,iconPrefix:String}),z=g({name:U,props:j,setup(u,{slots:o}){const a=w();I(C);const s=()=>{const{dot:d,badge:m,icon:i,color:B,iconClass:_,badgeProps:x,iconPrefix:b}=u;return o.icon?n(v,T({dot:d,class:p("icon"),content:m},x),{default:o.icon}):n(A,{tag:"div",dot:d,name:i,badge:m,color:B,class:[p("icon"),_],badgeProps:x,classPrefix:b},null)};return()=>n("div",{role:"button",class:p(),tabindex:0,onClick:a},[s(),o.default?o.default():u.text])}}),K=N(z),e=K,rt=g({__name:"index",setup(u){const o=h({"zh-CN":{icon1:"客服",icon2:"购物车",icon3:"店铺",button1:"加入购物车",button2:"立即购买",iconBadge:"徽标提示",collected:"已收藏",clickIcon:"点击图标",clickButton:"点击按钮",customIconColor:"自定义图标颜色",customButtonColor:"自定义按钮颜色"},"en-US":{icon1:"Icon1",icon2:"Icon2",icon3:"Icon3",button1:"Button",button2:"Button",iconBadge:"Icon Badge",collected:"Collected",clickIcon:"Click Icon",clickButton:"Click Button",customIconColor:"Custom Icon Color",customButtonColor:"Custom Button Color"}}),a=()=>f(o("clickIcon")),s=()=>f(o("clickButton"));return(d,m)=>{const i=E("demo-block");return F(),O(R,null,[n(i,{title:t(o)("basicUsage")},{default:c(()=>[n(t(r),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),onClick:a},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2"),onClick:a},null,8,["text"]),n(t(e),{icon:"shop-o",text:t(o)("icon3"),onClick:a},null,8,["text"]),n(t(l),{type:"danger",text:t(o)("button2"),onClick:s},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(i,{title:t(o)("iconBadge")},{default:c(()=>[n(t(r),null,{default:c(()=>[n(t(e),{icon:"chat-o",dot:"",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",badge:"5",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"shop-o",badge:"12",text:t(o)("icon3")},null,8,["text"]),n(t(l),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(l),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(i,{title:t(o)("customIconColor")},{default:c(()=>[n(t(r),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),color:"#ee0a24"},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"star",text:t(o)("collected"),color:"#ff5000"},null,8,["text"]),n(t(l),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(l),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(i,{title:t(o)("customButtonColor")},{default:c(()=>[n(t(r),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(l),{color:"#be99ff",type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(l),{color:"#7232dd",type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{rt as default};