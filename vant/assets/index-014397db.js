import{V as h}from"./index-99011cf0.js";import{P as B,a as L,p as U}from"./index-b8400930.js";import{I as y}from"./index-f40ec2de.js";import{A as D,e as n,B as M,y as f,D as S,r as O,o as T,a as W,w as k,C as o,F as N}from"./vue-libs-12a1683e.js";import{p as V,c as $,e as E,a as F}from"./use-translate-f5915e0e.js";import{t as I,b as H,w as K}from"./with-install-e688503b.js";import{H as R}from"./constant-a81ffd37.js";import{c as g}from"./index-2630be1a.js";import{s as z}from"./function-call-94502ad4.js";import"./use-route-3942a82f.js";import"./use-expose-74d6f7e3.js";import"./use-touch-e98b6450.js";import"./use-lazy-render-8625b066.js";import"./on-popup-reopen-eee79bbb.js";import"./index-dd419646.js";import"./interceptor-37ecf4c0.js";import"./index-5106e8af.js";import"./mount-component-d2062020.js";import"./index-57217a11.js";const _=[...L,"round","closeOnPopstate","safeAreaInsetBottom"],x={qq:"qq",link:"link-o",weibo:"weibo",qrcode:"qr",poster:"photo-o",wechat:"wechat","weapp-qrcode":"miniprogram-o","wechat-moments":"wechat-moments"},[j,c,G]=$("share-sheet"),J=E({},U,{title:String,round:I,options:H(),cancelText:String,description:String,closeOnPopstate:I,safeAreaInsetBottom:I}),X=D({name:j,props:J,emits:["cancel","select","update:show"],setup(l,{emit:t,slots:a}){const r=e=>t("update:show",e),p=()=>{r(!1),t("cancel")},m=(e,s)=>t("select",e,s),q=()=>{const e=a.title?a.title():l.title,s=a.description?a.description():l.description;if(e||s)return n("div",{class:c("header")},[e&&n("h2",{class:c("title")},[e]),s&&n("span",{class:c("description")},[s])])},b=e=>x[e]?n("div",{class:c("icon",[e])},[n(y,{name:x[e]||e},null)]):n("img",{src:e,class:c("image-icon")},null),C=(e,s)=>{const{name:i,icon:Q,className:A,description:P}=e;return n("div",{role:"button",tabindex:0,class:[c("option"),A,R],onClick:()=>m(e,s)},[b(Q),i&&n("span",{class:c("name")},[i]),P&&n("span",{class:c("option-description")},[P])])},d=(e,s)=>n("div",{class:c("options",{border:s})},[e.map(C)]),u=()=>{const{options:e}=l;return Array.isArray(e[0])?e.map((s,i)=>d(s,i!==0)):d(e)},w=()=>{const e=l.cancelText??G("cancel");if(a.cancel||e)return n("button",{type:"button",class:c("cancel"),onClick:p},[a.cancel?a.cancel():e])};return()=>n(B,M({class:c(),position:"bottom","onUpdate:show":r},V(l,_)),{default:()=>[q(),u(),w()]})}}),Y=K(X),v=Y,ke=D({__name:"index",setup(l){const t=F({"zh-CN":{qq:"QQ",name:"名称",link:"复制链接",title:"立即分享给好友",weibo:"微博",wechat:"微信",poster:"分享海报",qrcode:"二维码",multiLine:"展示多行选项",showSheet:"显示分享面板",withDesc:"展示描述信息",customIcon:"自定义图标",description:"描述信息",weappQrcode:"小程序码",wechatMoments:"朋友圈"},"en-US":{qq:"QQ",name:"Name",link:"Link",title:"Share",weibo:"Weibo",wechat:"WeChat",poster:"Poster",qrcode:"Qrcode",multiLine:"Multi Line",showSheet:"Show ShareSheet",withDesc:"Show Description",customIcon:"Custom Icon",description:"Description",weappQrcode:"Weapp Qrcode",wechatMoments:"WeChat Moments"}}),a=f(!1),r=f(!1),p=f(!1),m=f(!1),q=S(()=>[{name:t("wechat"),icon:"wechat"},{name:t("weibo"),icon:"weibo"},{name:t("link"),icon:"link"},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"}]),b=S(()=>[[{name:t("wechat"),icon:"wechat"},{name:t("wechatMoments"),icon:"wechat-moments"},{name:t("weibo"),icon:"weibo"},{name:t("qq"),icon:"qq"}],[{name:t("link"),icon:"link"},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"},{name:t("weappQrcode"),icon:"weapp-qrcode"}]]),C=S(()=>[{name:t("name"),icon:g("custom-icon-fire.png")},{name:t("name"),icon:g("custom-icon-light.png")},{name:t("name"),icon:g("custom-icon-water.png")}]),d=S(()=>[{name:t("wechat"),icon:"wechat"},{name:t("weibo"),icon:"weibo"},{name:t("link"),icon:"link",description:t("description")},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"}]),u=w=>{z(w.name),a.value=!1,r.value=!1,p.value=!1,m.value=!1};return(w,e)=>{const s=O("demo-block");return T(),W(N,null,[n(s,{card:"",title:o(t)("basicUsage")},{default:k(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[0]||(e[0]=i=>a.value=!0)},null,8,["title"]),n(o(v),{show:a.value,"onUpdate:show":e[1]||(e[1]=i=>a.value=i),title:o(t)("title"),options:o(q),onSelect:u},null,8,["show","title","options"])]),_:1},8,["title"]),n(s,{card:"",title:o(t)("multiLine")},{default:k(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[2]||(e[2]=i=>p.value=!0)},null,8,["title"]),n(o(v),{show:p.value,"onUpdate:show":e[3]||(e[3]=i=>p.value=i),title:o(t)("title"),options:o(b),onSelect:u},null,8,["show","title","options"])]),_:1},8,["title"]),n(s,{card:"",title:o(t)("customIcon")},{default:k(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[4]||(e[4]=i=>m.value=!0)},null,8,["title"]),n(o(v),{show:m.value,"onUpdate:show":e[5]||(e[5]=i=>m.value=i),options:o(C),onSelect:u},null,8,["show","options"])]),_:1},8,["title"]),n(s,{card:"",title:o(t)("withDesc")},{default:k(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[6]||(e[6]=i=>r.value=!0)},null,8,["title"]),n(o(v),{show:r.value,"onUpdate:show":e[7]||(e[7]=i=>r.value=i),title:o(t)("title"),options:o(d),description:o(t)("description"),onSelect:u},null,8,["show","title","options","description"])]),_:1},8,["title"])],64)}}});export{ke as default};