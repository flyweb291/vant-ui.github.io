import{h as O,G as U,n as Z,c as _,J as E,s as z,Y as j,Z as Q,l as W,q as p,H as ee}from"./use-translate-f5915e0e.js";import{u as te}from"./use-touch-e98b6450.js";import{A as ae,y,D as A,e as V}from"./vue-libs-12a1683e.js";import{c as B,n as Y,w as ne}from"./with-install-e688503b.js";const[re,f]=_("slider"),ie={min:B(0),max:B(100),step:B(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:Y,buttonSize:Y,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}},le=ae({name:re,props:ie,emits:["change","dragEnd","dragStart","update:modelValue"],setup(t,{emit:b,slots:S}){let N,l,u;const C=y(),x=[y(),y()],c=y(),g=te(),m=A(()=>Number(t.max)-Number(t.min)),D=A(()=>{const e=t.vertical?"width":"height";return{background:t.inactiveColor,[e]:O(t.barHeight)}}),s=e=>t.range&&Array.isArray(e),H=()=>{const{modelValue:e,min:a}=t;return s(e)?`${(e[1]-e[0])*100/m.value}%`:`${(e-Number(a))*100/m.value}%`},M=()=>{const{modelValue:e,min:a}=t;return s(e)?`${(e[0]-Number(a))*100/m.value}%`:"0%"},R=A(()=>{const a={[t.vertical?"height":"width"]:H(),background:t.activeColor};c.value&&(a.transition="none");const n=()=>t.vertical?t.reverse?"bottom":"top":t.reverse?"right":"left";return a[n()]=M(),a}),h=e=>{const a=+t.min,n=+t.max,o=+t.step;e=ee(e,a,n);const r=Math.round((e-a)/o)*o;return Q(a,r)},X=e=>{const a=e[0]??Number(t.min),n=e[1]??Number(t.max);return a>n?[n,a]:[a,n]},d=(e,a)=>{s(e)?e=X(e).map(h):e=h(e),E(e,t.modelValue)||b("update:modelValue",e),a&&!E(e,u)&&b("change",e)},$=e=>{if(e.stopPropagation(),t.disabled||t.readonly)return;const{min:a,reverse:n,vertical:o,modelValue:r}=t,i=z(C),J=()=>o?n?i.bottom-e.clientY:e.clientY-i.top:n?i.right-e.clientX:e.clientX-i.left,K=o?i.height:i.width,v=Number(a)+J()/K*m.value;if(s(r)){const[T,k]=r,L=(T+k)/2;v<=L?d([v,k],!0):d([T,v],!0)}else d(v,!0)},I=e=>{t.disabled||t.readonly||(g.start(e),l=t.modelValue,s(l)?u=l.map(h):u=h(l),c.value="start")},q=e=>{if(t.disabled||t.readonly)return;c.value==="start"&&b("dragStart",e),W(e,!0),g.move(e),c.value="dragging";const a=z(C),n=t.vertical?g.deltaY.value:g.deltaX.value,o=t.vertical?a.height:a.width;let r=n/o*m.value;if(t.reverse&&(r=-r),s(u)){const i=t.reverse?1-N:N;l[i]=u[i]+r}else l=u+r;d(l)},P=e=>{t.disabled||t.readonly||(c.value==="dragging"&&(d(l,!0),b("dragEnd",e)),c.value="")},F=e=>typeof e=="number"?f("button-wrapper",["left","right"][e]):f("button-wrapper",t.reverse?"left":"right"),G=(e,a)=>{if(typeof a=="number"){const n=S[a===0?"left-button":"right-button"];if(n)return n({value:e})}return S.button?S.button({value:e}):V("div",{class:f("button"),style:p(t.buttonSize)},null)},w=e=>{const a=typeof e=="number"?t.modelValue[e]:t.modelValue;return V("div",{ref:x[e??0],role:"slider",class:F(e),tabindex:t.disabled?void 0:0,"aria-valuemin":t.min,"aria-valuenow":a,"aria-valuemax":t.max,"aria-disabled":t.disabled||void 0,"aria-readonly":t.readonly||void 0,"aria-orientation":t.vertical?"vertical":"horizontal",onTouchstartPassive:n=>{typeof e=="number"&&(N=e),I(n)},onTouchend:P,onTouchcancel:P,onClick:j},[G(a,e)])};return d(t.modelValue),U(()=>t.modelValue),x.forEach(e=>{Z("touchmove",q,{target:e})}),()=>V("div",{ref:C,style:D.value,class:f({vertical:t.vertical,disabled:t.disabled}),onClick:$},[V("div",{class:f("bar"),style:R.value},[t.range?[w(0),w(1)]:w()])])}}),oe=ne(le),me=oe;export{me as V};