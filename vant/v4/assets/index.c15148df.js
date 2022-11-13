import{c as X,h as _,q as J,E as Q,B as A,i as R,D as Y,l as I,X as Z}from"./use-translate.5fa8a2a1.js";import{c,t as d,n as b,w as p}from"./with-install.ff23f643.js";import{A as ee,u as k,D as S,x,e as v,j as y,v as N,B as z,q as te}from"./vue-libs.ed3d9812.js";import{H as q,L as ne}from"./constant.e12a51b9.js";import{c as ae}from"./interceptor.f92ff708.js";const[le,P]=X("stepper"),ie=200,w=(t,u)=>String(t)===String(u),ue={min:c(1),max:c(1/0),name:c(""),step:c(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:d,showMinus:d,showInput:d,longPress:d,autoFixed:d,allowEmpty:Boolean,modelValue:b,inputWidth:b,buttonSize:b,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:c(1),decimalLength:b},se=ee({name:le,props:ue,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(t,{emit:u}){const o=(e,n=!0)=>{const{min:l,max:h,allowEmpty:i,decimalLength:g}=t;return i&&e===""||(e=A(String(e),!t.integer),e=e===""?0:+e,e=Number.isNaN(e)?+l:e,e=n?Math.max(Math.min(+h,e),+l):e,R(g)&&(e=e.toFixed(+g))),e},G=()=>{var l;const e=(l=t.modelValue)!=null?l:t.defaultValue,n=o(e);return w(n,t.modelValue)||u("update:modelValue",n),n};let s;const B=k(),a=k(G()),m=S(()=>t.disabled||t.disableMinus||a.value<=+t.min),r=S(()=>t.disabled||t.disablePlus||a.value>=+t.max),H=S(()=>({width:_(t.inputWidth),height:_(t.buttonSize)})),E=S(()=>J(t.buttonSize)),O=()=>{const e=o(a.value);w(e,a.value)||(a.value=e)},C=e=>{t.beforeChange?ae(t.beforeChange,{args:[e],done(){a.value=e}}):a.value=e},T=()=>{if(s==="plus"&&r.value||s==="minus"&&m.value){u("overlimit",s);return}const e=s==="minus"?-t.step:+t.step,n=o(Z(+a.value,e));C(n),u(s)},W=e=>{const n=e.target,{value:l}=n,{decimalLength:h}=t;let i=A(String(l),!t.integer);if(R(h)&&i.includes(".")){const F=i.split(".");i=`${F[0]}.${F[1].slice(0,+h)}`}t.beforeChange?n.value=String(a.value):w(l,i)||(n.value=i);const g=i===String(+i);C(g?+i:i)},$=e=>{var n;t.disableInput?(n=B.value)==null||n.blur():u("focus",e)},j=e=>{const n=e.target,l=o(n.value,t.autoFixed);n.value=String(l),a.value=l,te(()=>{u("blur",e),Y()})};let V,f;const L=()=>{f=setTimeout(()=>{T(),L()},ie)},K=()=>{t.longPress&&(V=!1,clearTimeout(f),f=setTimeout(()=>{V=!0,T(),L()},ne))},M=e=>{t.longPress&&(clearTimeout(f),V&&I(e))},U=e=>{t.disableInput&&I(e)},D=e=>({onClick:n=>{I(n),s=e,T()},onTouchstartPassive:()=>{s=e,K()},onTouchend:M,onTouchcancel:M});return x(()=>[t.max,t.min,t.integer,t.decimalLength],O),x(()=>t.modelValue,e=>{w(e,a.value)||(a.value=o(e))}),x(a,e=>{u("update:modelValue",e),u("change",e,{name:t.name})}),Q(()=>t.modelValue),()=>v("div",{role:"group",class:P([t.theme])},[y(v("button",z({type:"button",style:E.value,class:[P("minus",{disabled:m.value}),{[q]:!m.value}],"aria-disabled":m.value||void 0},D("minus")),null),[[N,t.showMinus]]),y(v("input",{ref:B,type:t.integer?"tel":"text",role:"spinbutton",class:P("input"),value:a.value,style:H.value,disabled:t.disabled,readonly:t.disableInput,inputmode:t.integer?"numeric":"decimal",placeholder:t.placeholder,"aria-valuemax":t.max,"aria-valuemin":t.min,"aria-valuenow":a.value,onBlur:j,onInput:W,onFocus:$,onMousedown:U},null),[[N,t.showInput]]),y(v("button",z({type:"button",style:E.value,class:[P("plus",{disabled:r.value}),{[q]:!r.value}],"aria-disabled":r.value||void 0},D("plus")),null),[[N,t.showPlus]])])}}),fe=p(se);export{fe as S};