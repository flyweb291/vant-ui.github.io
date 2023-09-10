import{I as j}from"./index-1ef61aa2.js";import{S as B,b as V}from"./index-9359e9c3.js";import{A as M,e as i,Q as G,y as u,D as C,r as D,o as k,a as P,w as p,C as o,c as y,f as w,F as T}from"./vue-libs-19c20d28.js";import{h as _,c as z,a as F}from"./use-translate-71d4880c.js";import{c as A,b as O,m as K,w as L}from"./with-install-560d59bf.js";import{V as N}from"./index-1122429d.js";import{c as U}from"./index-2630be1a.js";import{d as R}from"./deep-clone-f6443c2a.js";import"./index-8bc2514f.js";import"./use-route-751feeeb.js";function q(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!G(t)}const[E,v]=z("tree-select"),Q={max:A(1/0),items:O(),height:A(300),selectedIcon:K("success"),mainActiveIndex:A(0),activeId:{type:[Number,String,Array],default:0}},H=M({name:E,props:Q,emits:["clickNav","clickItem","update:activeId","update:mainActiveIndex"],setup(t,{emit:d,slots:l}){const x=e=>Array.isArray(t.activeId)?t.activeId.includes(e):t.activeId===e,I=e=>{const s=()=>{if(e.disabled)return;let c;if(Array.isArray(t.activeId)){c=t.activeId.slice();const r=c.indexOf(e.id);r!==-1?c.splice(r,1):c.length<+t.max&&c.push(e.id)}else c=e.id;d("update:activeId",c),d("clickItem",e)};return i("div",{key:e.id,class:["van-ellipsis",v("item",{active:x(e.id),disabled:e.disabled})],onClick:s},[e.text,x(e.id)&&i(j,{name:t.selectedIcon,class:v("selected")},null)])},f=e=>{d("update:mainActiveIndex",e)},b=e=>d("clickNav",e),m=()=>{const e=t.items.map(s=>i(B,{dot:s.dot,badge:s.badge,class:[v("nav-item"),s.className],disabled:s.disabled,onClick:b},{title:()=>l["nav-text"]?l["nav-text"](s):s.text}));return i(V,{class:v("nav"),modelValue:t.mainActiveIndex,onChange:f},q(e)?e:{default:()=>[e]})},g=()=>{if(l.content)return l.content();const e=t.items[+t.mainActiveIndex]||{};if(e.children)return e.children.map(I)};return()=>i("div",{class:v(),style:{height:_(t.height)}},[m(),i("div",{class:v("content")},[g()])])}}),J=L(H),S=J,W=[{text:"杭州",id:1},{text:"温州",id:2},{text:"宁波",id:3,disabled:!0}],X=[{text:"南京",id:4},{text:"无锡",id:5},{text:"徐州",id:6}],Y=[{text:"泉州",id:7},{text:"厦门",id:8}],Z=[{text:"浙江",children:W},{text:"江苏",children:X},{text:"福建",disabled:!0,children:Y}],$=[{text:"Delaware",id:1},{text:"Florida",id:2},{text:"Georqia",id:3,disabled:!0}],ee=[{text:"Alabama",id:4},{text:"Kansas",id:5},{text:"Louisiana",id:6}],te=[{text:"Alabama",id:7},{text:"Kansas",id:8}],ae=[{text:"Group 1",children:$},{text:"Group 2",children:ee},{text:"Group 3",disabled:!0,children:te}],ve=M({__name:"index",setup(t){const d=F({"zh-CN":{showBadge:"徽标提示",radioMode:"单选模式",multipleMode:"多选模式",customContent:"自定义内容",data:Z,dataSimple:[{text:"分组 1"},{text:"分组 2"}]},"en-US":{showBadge:"Show Badge",radioMode:"Radio Mode",multipleMode:"Multiple Mode",customContent:"Custom Content",data:ae,dataSimple:[{text:"Group 1"},{text:"Group 2"}]}}),l=u(1),x=u(1),I=u([1,2]),f=u(0),b=u(0),m=u(0),g=u(0),e=C(()=>d("data")),s=C(()=>d("dataSimple")),c=C(()=>{const r=R(d("data")).slice(0,2);return r[0].dot=!0,r[1].badge=5,r});return(r,a)=>{const h=D("demo-block");return k(),P(T,null,[i(h,{title:o(d)("radioMode")},{default:p(()=>[i(o(S),{"active-id":l.value,"onUpdate:activeId":a[0]||(a[0]=n=>l.value=n),"main-active-index":f.value,"onUpdate:mainActiveIndex":a[1]||(a[1]=n=>f.value=n),items:e.value},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"]),i(h,{title:o(d)("multipleMode")},{default:p(()=>[i(o(S),{"active-id":I.value,"onUpdate:activeId":a[2]||(a[2]=n=>I.value=n),"main-active-index":b.value,"onUpdate:mainActiveIndex":a[3]||(a[3]=n=>b.value=n),items:e.value},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"]),i(h,{title:o(d)("customContent")},{default:p(()=>[i(o(S),{"main-active-index":m.value,"onUpdate:mainActiveIndex":a[4]||(a[4]=n=>m.value=n),height:"55vw",items:s.value},{content:p(()=>[m.value===0?(k(),y(o(N),{key:0,"show-loading":!1,src:o(U)("apple-1.jpeg")},null,8,["src"])):w("",!0),m.value===1?(k(),y(o(N),{key:1,"show-loading":!1,src:o(U)("apple-2.jpeg")},null,8,["src"])):w("",!0)]),_:1},8,["main-active-index","items"])]),_:1},8,["title"]),i(h,{title:o(d)("showBadge")},{default:p(()=>[i(o(S),{"active-id":x.value,"onUpdate:activeId":a[5]||(a[5]=n=>x.value=n),"main-active-index":g.value,"onUpdate:mainActiveIndex":a[6]||(a[6]=n=>g.value=n),height:"55vw",items:c.value},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"])],64)}}});export{ve as default};