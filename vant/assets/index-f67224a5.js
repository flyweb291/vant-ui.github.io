import{u as I}from"./use-placeholder-092349c5.js";import{I as R,V as S}from"./index-c6749099.js";import{A as k,y as A,e as r,r as N,o as L,a as P,w as s,C as e,F as y}from"./vue-libs-dcfba01b.js";import{c as z,t as E,a as V}from"./use-translate-1e5abec2.js";import{n as F,t as d,w as O}from"./with-install-042fcf0c.js";import{H as x,f as U}from"./constant-ee6e27d7.js";import{s as g}from"./function-call-27d2efed.js";import"./use-height-dfda5357.js";import"./on-popup-reopen-f7cdcc35.js";import"./index-e07826a4.js";import"./mount-component-e324b28a.js";import"./use-expose-b1360ec6.js";import"./index-d55acc3e.js";import"./use-lock-scroll-754fcce9.js";import"./use-touch-d246739c.js";import"./use-lazy-render-ac91aad5.js";import"./index-27c4d96a.js";import"./interceptor-4f864b39.js";import"./index-b9ae9e0b.js";const[D,i]=z("nav-bar"),H={title:String,fixed:Boolean,zIndex:F,border:d,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:d},K=k({name:D,props:H,emits:["clickLeft","clickRight"],setup(a,{emit:t,slots:l}){const o=A(),m=I(o,i),u=c=>t("clickLeft",c),n=c=>t("clickRight",c),B=()=>l.left?l.left():[a.leftArrow&&r(R,{class:i("arrow"),name:"arrow-left"},null),a.leftText&&r("span",{class:i("text")},[a.leftText])],_=()=>l.right?l.right():r("span",{class:i("text")},[a.rightText]),h=()=>{const{title:c,fixed:p,border:b,zIndex:w}=a,v=E(w),T=a.leftArrow||a.leftText||l.left,C=a.rightText||l.right;return r("div",{ref:o,style:v,class:[i({fixed:p}),{[U]:b,"van-safe-area-top":a.safeAreaInsetTop}]},[r("div",{class:i("content")},[T&&r("div",{class:[i("left"),a.clickable?x:""],onClick:u},[B()]),r("div",{class:[i("title"),"van-ellipsis"]},[l.title?l.title():c]),C&&r("div",{class:[i("right"),a.clickable?x:""],onClick:n},[_()])])])};return()=>a.fixed&&a.placeholder?m(h):h()}}),M=O(K),f=M,st=k({__name:"index",setup(a){const t=V({"zh-CN":{useSlot:"使用插槽",showBack:"返回上级",rightButton:"右侧按钮"},"en-US":{useSlot:"Use Slot",showBack:"Back",rightButton:"Right Button"}}),l=()=>g(t("back")),o=()=>g(t("button"));return(m,u)=>{const n=N("demo-block");return L(),P(y,null,[r(n,{title:e(t)("basicUsage")},{default:s(()=>[r(e(f),{title:e(t)("title")},null,8,["title"])]),_:1},8,["title"]),r(n,{title:e(t)("showBack")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":"",onClickRight:o},null,8,["title","left-text"])]),_:1},8,["title"]),r(n,{title:e(t)("rightButton")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"right-text":e(t)("button"),"left-arrow":"",onClickLeft:l,onClickRight:o},null,8,["title","left-text","right-text"])]),_:1},8,["title"]),r(n,{title:e(t)("useSlot")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":""},{right:s(()=>[r(e(S),{name:"search",size:"18"})]),_:1},8,["title","left-text"])]),_:1},8,["title"])],64)}}});export{st as default};