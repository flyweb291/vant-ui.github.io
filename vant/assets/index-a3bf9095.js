import{V as n}from"./index-c6c98967.js";import{_ as w,s as r,a as u}from"./function-call-2a3db393.js";import{w as b}from"./with-install-0d9206aa.js";import{c as h}from"./index-2630be1a.js";import{a as B}from"./use-translate-ad5eefa4.js";import{A as v,y as x,r as D,o as y,a as A,e as o,w as s,C as e,d as U,F as R}from"./vue-libs-6a67f9c6.js";import"./use-route-ea8124d0.js";import"./index-1c02023b.js";import"./index-4437616e.js";import"./mount-component-49243326.js";import"./use-expose-c87283be.js";import"./index-c47f1bdb.js";import"./use-lock-scroll-dce811cc.js";import"./use-touch-06ff9235.js";import"./constant-ee6e27d7.js";import"./use-lazy-render-7199096a.js";import"./on-popup-reopen-2b57f4ff.js";import"./index-f441590a.js";import"./interceptor-e18d38f8.js";import"./index-49cf8d1f.js";import"./index-5b517ddf.js";import"./index-03b36969.js";import"./use-placeholder-3c19ecf7.js";import"./use-height-9470a05f.js";const V=b(w),N=["src"],nt=v({__name:"index",setup(T){const t=B({"zh-CN":{title:"标题",alert1:"提示弹窗",alert2:"提示弹窗（无标题）",confirm:"确认弹窗",content1:"代码是写出来给人看的，附带能在机器上运行。",content2:"生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。",content3:"如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。",beforeClose:"异步关闭",roundButton:"圆角按钮样式",useComponent:"使用 Dialog 组件"},"en-US":{title:"Title",alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",content1:"Content",content2:"Content",content3:"Content",beforeClose:"Before Close",roundButton:"Round Button Style",useComponent:"Use Dialog Component"}}),a=x(!1),p=h("apple-3.jpeg"),C=()=>{r({title:t("title"),message:t("content1")})},d=()=>{r({message:t("content2")})},f=()=>{r({theme:"round-button",title:t("title"),message:t("content1")})},k=()=>{r({theme:"round-button",message:t("content2")})},_=()=>{u({title:t("title"),message:t("content3")})},g=()=>{const m=l=>new Promise(i=>{setTimeout(()=>i(l==="confirm"),1e3)});u({title:t("title"),message:t("content3"),beforeClose:m})};return(m,l)=>{const i=D("demo-block");return y(),A(R,null,[o(i,{card:"",title:e(t)("basicUsage")},{default:s(()=>[o(e(n),{"is-link":"",title:e(t)("alert1"),onClick:C},null,8,["title"]),o(e(n),{"is-link":"",title:e(t)("alert2"),onClick:d},null,8,["title"]),o(e(n),{"is-link":"",title:e(t)("confirm"),onClick:_},null,8,["title"])]),_:1},8,["title"]),o(i,{card:"",title:e(t)("roundButton")},{default:s(()=>[o(e(n),{"is-link":"",title:e(t)("alert1"),onClick:f},null,8,["title"]),o(e(n),{"is-link":"",title:e(t)("alert2"),onClick:k},null,8,["title"])]),_:1},8,["title"]),o(i,{card:"",title:e(t)("beforeClose")},{default:s(()=>[o(e(n),{"is-link":"",title:e(t)("beforeClose"),onClick:g},null,8,["title"])]),_:1},8,["title"]),o(i,{card:"",title:e(t)("useComponent")},{default:s(()=>[o(e(n),{"is-link":"",title:e(t)("useComponent"),onClick:l[0]||(l[0]=c=>a.value=!0)},null,8,["title"]),o(e(V),{show:a.value,"onUpdate:show":l[1]||(l[1]=c=>a.value=c),title:e(t)("title"),"show-cancel-button":"","lazy-render":!1},{default:s(()=>[U("img",{src:e(p)},null,8,N)]),_:1},8,["show","title"])]),_:1},8,["title"])],64)}}});export{nt as default};