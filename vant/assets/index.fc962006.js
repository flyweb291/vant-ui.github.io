import{c as z,i as W,r as L,Y as I,l as M,F as O,a as j}from"./use-translate.fec5be1c.js";import{c as X,n as V,w as Y}from"./with-install.6c9f4f06.js";import{c as $}from"./interceptor.2bcb0d63.js";import{u as G}from"./use-touch.79e2b006.js";import{u as J}from"./use-expose.9edd25e2.js";import{z as q,C as v,H as K,D as P,e as l,r as Q,o as Z,a as ee,w as s,B as t,F as te}from"./vue-libs.7ad34eae.js";import{V as p}from"./index.414acf3c.js";import{V as R}from"./index.bb5cccb6.js";import{V as oe}from"./index.bd02fddd.js";import{c as le}from"./index.9b7eef50.js";import{D as ne}from"./function-call.751f9b38.js";import"./constant.80c6de18.js";import"./use-route.13c8c682.js";import"./index.a07b08cc.js";import"./index.98a2059e.js";import"./index.87c238a2.js";import"./index.a6b53255.js";import"./mount-component.5701bbc6.js";import"./index.e65191a7.js";import"./use-lazy-render.96f053d1.js";import"./on-popup-reopen.c53e1654.js";import"./index.7781bda0.js";import"./index.5b3d9575.js";import"./use-placeholder.4359a3b6.js";import"./use-height.cdebb266.js";const[ae,b]=z("swipe-cell"),re={name:X(""),disabled:Boolean,leftWidth:V,rightWidth:V,beforeClose:Function,stopPropagation:Boolean},se=q({name:ae,props:re,emits:["open","close","click"],setup(n,{emit:o,slots:f}){let i,u,m;const d=v(),w=v(),y=v(),a=K({offset:0,dragging:!1}),g=G(),T=e=>e.value?L(e).width:0,h=P(()=>W(n.leftWidth)?+n.leftWidth:T(w)),C=P(()=>W(n.rightWidth)?+n.rightWidth:T(y)),k=e=>{a.offset=e==="left"?h.value:-C.value,i||(i=!0,o("open",{name:n.name,position:e}))},_=e=>{a.offset=0,i&&(i=!1,o("close",{name:n.name,position:e}))},A=e=>{const r=Math.abs(a.offset),c=.15,U=i?1-c:c,F=e==="left"?h.value:C.value;F&&r>F*U?k(e):_(e)},H=e=>{n.disabled||(m=a.offset,g.start(e))},N=e=>{if(n.disabled)return;const{deltaX:r}=g;g.move(e),g.isHorizontal()&&(u=!0,a.dragging=!0,(!i||r.value*m<0)&&M(e,n.stopPropagation),a.offset=O(r.value+m,-C.value,h.value))},B=()=>{a.dragging&&(a.dragging=!1,A(a.offset>0?"left":"right"),setTimeout(()=>{u=!1},0))},E=(e="outside")=>{o("click",e),i&&!u&&$(n.beforeClose,{args:[{name:n.name,position:e}],done:()=>_(e)})},S=(e,r)=>c=>{r&&c.stopPropagation(),E(e)},D=(e,r)=>{const c=f[e];if(c)return l("div",{ref:r,class:b(e),onClick:S(e,!0)},[c()])};return J({open:k,close:_}),I(d,()=>E("outside"),{eventName:"touchstart"}),()=>{var r;const e={transform:`translate3d(${a.offset}px, 0, 0)`,transitionDuration:a.dragging?"0s":".6s"};return l("div",{ref:d,class:b(),onClick:S("cell",u),onTouchstart:H,onTouchmove:N,onTouchend:B,onTouchcancel:B},[l("div",{class:b("wrapper"),style:e},[D("left",w),(r=f.default)==null?void 0:r.call(f),D("right",y)])])}}}),ie=Y(se),x=ie,Re=q({__name:"index",setup(n){const o=j({"zh-CN":{select:"\u9009\u62E9",delete:"\u5220\u9664",collect:"\u6536\u85CF",title:"\u5355\u5143\u683C",confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",cardTitle:"\u5546\u54C1\u6807\u9898",beforeClose:"\u5F02\u6B65\u5173\u95ED",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}}),f=le("ipad.jpeg"),i=({position:u})=>{switch(u){case"left":case"cell":case"outside":return!0;case"right":return new Promise(m=>{ne.confirm({title:o("confirm")}).then(()=>{m(!0)})})}};return(u,m)=>{const d=Q("demo-block");return Z(),ee(te,null,[l(d,{title:t(o)("basicUsage")},{default:s(()=>[l(t(x),null,{left:s(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:s(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"]),l(t(p),{square:"",type:"primary",text:t(o)("collect")},null,8,["text"])]),default:s(()=>[l(t(R),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"]),l(d,{title:t(o)("customContent")},{default:s(()=>[l(t(x),null,{right:s(()=>[l(t(p),{square:"",type:"danger",class:"delete-button",text:t(o)("delete")},null,8,["text"])]),default:s(()=>[l(t(oe),{num:"2",price:"2.00",desc:t(o)("desc"),title:t(o)("cardTitle"),thumb:t(f)},null,8,["desc","title","thumb"])]),_:1})]),_:1},8,["title"]),l(d,{title:t(o)("beforeClose")},{default:s(()=>[l(t(x),{"before-close":i},{left:s(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:s(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"])]),default:s(()=>[l(t(R),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"])],64)}}});export{Re as default};