import{b as P,G as p,c as b,u as G,p as v,e as S}from"./use-translate-00443182.js";import{u as k}from"./use-expose-0d8d1cf9.js";import{A as f,u as V,e as x,D as _,B as O}from"./vue-libs-dcfba01b.js";import{n as h,b as y,m as A,t as B,w as E}from"./with-install-dbef9c21.js";import{C as w,c as D}from"./Checker-dbd4c5e4.js";const[g,K]=b("checkbox-group"),N={max:h,disabled:Boolean,iconSize:h,direction:String,modelValue:y(),checkedColor:String},C=Symbol(g),j=f({name:g,props:N,emits:["change","update:modelValue"],setup(a,{emit:l,slots:r}){const{children:c,linkChildren:i}=P(C),t=e=>l("update:modelValue",e),s=(e={})=>{typeof e=="boolean"&&(e={checked:e});const{checked:u,skipDisabled:d}=e,n=c.filter(o=>o.props.bindGroup?o.props.disabled&&d?o.checked.value:u??!o.checked.value:!1).map(o=>o.name);t(n)};return V(()=>a.modelValue,e=>l("change",e)),k({toggleAll:s}),p(()=>a.modelValue),i({props:a,updateValue:t}),()=>{var e;return x("div",{class:K([a.direction])},[(e=r.default)==null?void 0:e.call(r)])}}}),[$,z]=b("checkbox"),F=S({},D,{shape:A("round"),bindGroup:B}),H=f({name:$,props:F,emits:["change","update:modelValue"],setup(a,{emit:l,slots:r}){const{parent:c}=G(C),i=e=>{const{name:u}=a,{max:d,modelValue:m}=c.props,n=m.slice();if(e)!(d&&n.length>=+d)&&!n.includes(u)&&(n.push(u),a.bindGroup&&c.updateValue(n));else{const o=n.indexOf(u);o!==-1&&(n.splice(o,1),a.bindGroup&&c.updateValue(n))}},t=_(()=>c&&a.bindGroup?c.props.modelValue.indexOf(a.name)!==-1:!!a.modelValue),s=(e=!t.value)=>{c&&a.bindGroup?i(e):l("update:modelValue",e)};return V(()=>a.modelValue,e=>l("change",e)),k({toggle:s,props:a,checked:t}),p(()=>a.modelValue),()=>x(w,O({bem:z,role:"checkbox",parent:c,checked:t.value,onToggle:s},a),v(r,["default","icon"]))}}),I=E(H),q=I;export{I as C,q as V,j as _};