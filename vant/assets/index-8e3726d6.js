import{b as R,c as $,t as M,u as z,e as D,f as F,a as j}from"./use-translate-1e5abec2.js";import{u as K}from"./use-placeholder-092349c5.js";import{A as y,y as h,e as t,O as L,D as Y,B as Z,r as q,o as G,a as H,w as a,C as e,g as r,t as n,d as T,F as J}from"./vue-libs-dcfba01b.js";import{t as k,n as P,c as Q,w}from"./with-install-042fcf0c.js";import{b as W}from"./constant-ee6e27d7.js";import{c as X}from"./interceptor-4f864b39.js";import{u as ee,r as te}from"./use-route-dfd2aa0a.js";import{I as ae}from"./index-c6749099.js";import{B as oe}from"./index-e07826a4.js";import{c as N}from"./index-2630be1a.js";import{s as ne}from"./function-call-27d2efed.js";import"./use-height-dfda5357.js";import"./on-popup-reopen-f7cdcc35.js";import"./mount-component-e324b28a.js";import"./use-expose-b1360ec6.js";import"./index-d55acc3e.js";import"./use-lock-scroll-754fcce9.js";import"./use-touch-d246739c.js";import"./use-lazy-render-ac91aad5.js";import"./index-27c4d96a.js";import"./index-b9ae9e0b.js";const[A,S]=$("tabbar"),le={route:Boolean,fixed:k,border:k,zIndex:P,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:Q(0),safeAreaInsetBottom:{type:Boolean,default:null}},U=Symbol(A),re=y({name:A,props:le,emits:["change","update:modelValue"],setup(s,{emit:o,slots:d}){const p=h(),{linkChildren:_}=R(U),b=K(p,S),g=()=>s.safeAreaInsetBottom??s.fixed,m=()=>{var u;const{fixed:v,zIndex:f,border:c}=s;return t("div",{ref:p,role:"tablist",style:M(f),class:[S({fixed:v}),{[W]:c,"van-safe-area-bottom":g()}]},[(u=d.default)==null?void 0:u.call(d)])};return _({props:s,setActive:(v,f)=>{X(s.beforeChange,{args:[v],done(){o("update:modelValue",v),o("change",v),f()}})}}),()=>s.fixed&&s.placeholder?b(m):m()}}),ie=w(re),C=ie,[ce,I]=$("tabbar-item"),se=D({},te,{dot:Boolean,icon:String,name:P,badge:P,badgeProps:Object,iconPrefix:String}),ue=y({name:ce,props:se,emits:["click"],setup(s,{emit:o,slots:d}){const p=ee(),_=L().proxy,{parent:b,index:g}=z(U);if(!b)return;const m=Y(()=>{const{route:f,modelValue:c}=b.props;if(f&&"$route"in _){const{$route:u}=_,{to:i}=s,V=F(i)?i:{path:i};return!!u.matched.find(B=>{const E="path"in V&&V.path===B.path,O="name"in V&&V.name===B.name;return E||O})}return(s.name??g.value)===c}),x=f=>{m.value||b.setActive(s.name??g.value,p),o("click",f)},v=()=>{if(d.icon)return d.icon({active:m.value});if(s.icon)return t(ae,{name:s.icon,classPrefix:s.iconPrefix},null)};return()=>{var B;const{dot:f,badge:c}=s,{activeColor:u,inactiveColor:i}=b.props,V=m.value?u:i;return t("div",{role:"tab",class:I({active:m.value}),style:{color:V},tabindex:0,"aria-selected":m.value,onClick:x},[t(oe,Z({dot:f,class:I("icon"),content:c},s.badgeProps),{default:v}),t("div",{class:I("text")},[(B=d.default)==null?void 0:B.call(d,{active:m.value})])])}}}),de=w(ue),l=de,me=["src"],Ue=y({__name:"index",setup(s){const o=j({"zh-CN":{badge:"徽标提示",customIcon:"自定义图标",customColor:"自定义颜色",matchByName:"通过名称匹配",switchEvent:"监听切换事件"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event"}}),d=h(0),p=h(0),_=h(0),b=h(0),g=h(0),m=h("home"),x={active:N("user-active.png"),inactive:N("user-inactive.png")},v=f=>{ne(`${o("tab")} ${f+1}`)};return(f,c)=>{const u=q("demo-block");return G(),H(J,null,[t(u,{title:e(o)("basicUsage")},{default:a(()=>[t(e(C),{modelValue:d.value,"onUpdate:modelValue":c[0]||(c[0]=i=>d.value=i)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(u,{title:e(o)("matchByName")},{default:a(()=>[t(e(C),{modelValue:m.value,"onUpdate:modelValue":c[1]||(c[1]=i=>m.value=i)},{default:a(()=>[t(e(l),{name:"home",icon:"home-o"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"search",icon:"search"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"friends",icon:"friends-o"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"setting",icon:"setting-o"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(u,{title:e(o)("badge")},{default:a(()=>[t(e(C),{modelValue:p.value,"onUpdate:modelValue":c[2]||(c[2]=i=>p.value=i)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search",dot:""},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o",badge:"5"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o",badge:"20"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(u,{title:e(o)("customIcon")},{default:a(()=>[t(e(C),{modelValue:_.value,"onUpdate:modelValue":c[3]||(c[3]=i=>_.value=i)},{default:a(()=>[t(e(l),{badge:"3"},{icon:a(i=>[T("img",{src:i.active?x.active:x.inactive},null,8,me)]),default:a(()=>[T("span",null,n(e(o)("custom")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(u,{title:e(o)("customColor")},{default:a(()=>[t(e(C),{modelValue:b.value,"onUpdate:modelValue":c[4]||(c[4]=i=>b.value=i),"active-color":"#ee0a24"},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[r(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(u,{title:e(o)("switchEvent")},{default:a(()=>[t(e(C),{modelValue:g.value,"onUpdate:modelValue":c[5]||(c[5]=i=>g.value=i),onChange:v},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[r(n(`${e(o)("tab")} 1`),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[r(n(`${e(o)("tab")} 2`),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[r(n(`${e(o)("tab")} 3`),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[r(n(`${e(o)("tab")} 4`),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{Ue as default};