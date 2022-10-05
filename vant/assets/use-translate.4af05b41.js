import{B as E,C as f,E as _,G as j,D as z,H as A,I as oe,J as ue,L as Y,M as H,N as V,q as ae,O as se,x as W,P as Z,Q as re}from"./vue-libs.7ad34eae.js";function He(){}const Ve=Object.assign,q=typeof window<"u";function $(e,n){const t=n.split(".");let o=e;return t.forEach(u=>{var a;o=(a=o[u])!=null?a:""}),o}function We(e,n,t){return n.reduce((o,u)=>((!t||e[u]!==void 0)&&(o[u]=e[u]),o),{})}const Ze=e=>Array.isArray(e)?e:[e];var p=typeof window<"u";function v(e){return p?requestAnimationFrame(e):-1}function ie(e){p&&cancelAnimationFrame(e)}function qe(e){v(()=>v(e))}var ce=e=>e===window,M=(e,n)=>({top:0,left:0,right:e,bottom:n,width:e,height:n}),le=e=>{const n=E(e);if(ce(n)){const t=n.innerWidth,o=n.innerHeight;return M(t,o)}return n!=null&&n.getBoundingClientRect?n.getBoundingClientRect():M(0,0)};function Je(e=!1){const n=f(e);return[n,(o=!n.value)=>{n.value=o}]}function Ke(e){const n=_(e,null);if(n){const t=Z(),{link:o,unlink:u,internalChildren:a}=n;o(t),j(()=>u(t));const s=z(()=>a.indexOf(t));return{parent:n,index:s}}return{parent:null,index:f(-1)}}function de(e){const n=[],t=o=>{Array.isArray(o)&&o.forEach(u=>{var a;re(u)&&(n.push(u),(a=u.component)!=null&&a.subTree&&(n.push(u.component.subTree),t(u.component.subTree.children)),u.children&&t(u.children))})};return t(e),n}function fe(e,n,t){const o=de(e.subTree.children);t.sort((a,s)=>o.indexOf(a.vnode)-o.indexOf(s.vnode));const u=t.map(a=>a.proxy);n.sort((a,s)=>{const i=u.indexOf(a),r=u.indexOf(s);return i-r})}function Ge(e){const n=A([]),t=A([]),o=Z();return{children:n,linkChildren:a=>{oe(e,Object.assign({link:r=>{r.proxy&&(t.push(r),n.push(r.proxy),fe(o,n,t))},unlink:r=>{const c=t.indexOf(r);n.splice(c,1),t.splice(c,1)},children:n,internalChildren:t},a))}}}var D=1e3,B=60*D,y=60*B,R=24*y;function pe(e){const n=Math.floor(e/R),t=Math.floor(e%R/y),o=Math.floor(e%y/B),u=Math.floor(e%B/D),a=Math.floor(e%D);return{total:e,days:n,hours:t,minutes:o,seconds:u,milliseconds:a}}function me(e,n){return Math.floor(e/1e3)===Math.floor(n/1e3)}function Qe(e){let n,t,o,u;const a=f(e.time),s=z(()=>pe(a.value)),i=()=>{o=!1,ie(n)},r=()=>Math.max(t-Date.now(),0),c=d=>{var N,P;a.value=d,(N=e.onChange)==null||N.call(e,s.value),d===0&&(i(),(P=e.onFinish)==null||P.call(e))},l=()=>{n=v(()=>{o&&(c(r()),a.value>0&&l())})},x=()=>{n=v(()=>{if(o){const d=r();(!me(d,a.value)||d===0)&&c(d),a.value>0&&x()}})},O=()=>{!p||(e.millisecond?l():x())},ne=()=>{o||(t=Date.now()+a.value,o=!0,O())},te=(d=e.time)=>{i(),a.value=d};return ue(i),Y(()=>{u&&(o=!0,u=!1,O())}),H(()=>{o&&(i(),u=!0)}),{start:ne,pause:i,reset:te,current:s}}function Ee(e){let n;V(()=>{e(),ae(()=>{n=!0})}),Y(()=>{n&&e()})}function ge(e,n,t={}){if(!p)return;const{target:o=window,passive:u=!1,capture:a=!1}=t;let s;const i=c=>{const l=E(c);l&&!s&&(l.addEventListener(e,n,{capture:a,passive:u}),s=!0)},r=c=>{const l=E(c);l&&s&&(l.removeEventListener(e,n,a),s=!1)};j(()=>r(o)),H(()=>r(o)),Ee(()=>i(o)),se(o)&&W(o,(c,l)=>{r(l),i(c)})}function Xe(e,n,t={}){if(!p)return;const{eventName:o="click"}=t;ge(o,a=>{const s=E(e);s&&!s.contains(a.target)&&n(a)},{target:document})}var g,C;function he(){if(!g&&(g=f(0),C=f(0),p)){const e=()=>{g.value=window.innerWidth,C.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:g,height:C}}var ve=/scroll|auto|overlay/i,J=p?window:void 0;function Ce(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function we(e,n=J){let t=e;for(;t&&t!==n&&Ce(t);){const{overflowY:o}=window.getComputedStyle(t);if(ve.test(o))return t;t=t.parentNode}return n}function en(e,n=J){const t=f();return V(()=>{e.value&&(t.value=we(e.value,n))}),t}var h;function nn(){if(!h&&(h=f("visible"),p)){const e=()=>{h.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return h}var be=Symbol("van-field");function tn(e){const n=_(be,null);n&&!n.customValue.value&&(n.customValue.value=e,W(e,()=>{n.resetValidation(),n.validateWithTrigger("onChange")}))}const S=e=>e!=null,F=e=>typeof e=="function",K=e=>e!==null&&typeof e=="object",on=e=>K(e)&&F(e.then)&&F(e.catch),un=e=>Object.prototype.toString.call(e)==="[object Date]"&&!Number.isNaN(e.getTime());function an(e){return e=e.replace(/[^-|\d]/g,""),/^((\+86)|(86))?(1)\d{10}$/.test(e)||/^0[0-9-]{10,13}$/.test(e)}const Ae=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),De=()=>q?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function Be(e){const n="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(n,0)}function L(e,n){"scrollTop"in e?e.scrollTop=n:e.scrollTo(e.scrollX,n)}function G(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function ye(e){L(window,e),L(document.body,e)}function sn(e,n){if(e===window)return 0;const t=n?Be(n):G();return le(e).top+t}const Fe=De();function rn(){Fe&&ye(G())}const Te=e=>e.stopPropagation();function cn(e,n){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),n&&Te(e)}function ln(e){const n=E(e);if(!n)return!1;const t=window.getComputedStyle(n),o=t.display==="none",u=n.offsetParent===null&&t.position!=="fixed";return o||u}const{width:Se,height:xe}=he();function w(e){if(S(e))return Ae(e)?`${e}px`:String(e)}function dn(e){if(S(e)){if(Array.isArray(e))return{width:w(e[0]),height:w(e[1])};const n=w(e);return{width:n,height:n}}}function fn(e){const n={};return e!==void 0&&(n.zIndex=+e),n}let b;function Oe(){if(!b){const e=document.documentElement,n=e.style.fontSize||window.getComputedStyle(e).fontSize;b=parseFloat(n)}return b}function Ne(e){return e=e.replace(/rem/g,""),+e*Oe()}function Pe(e){return e=e.replace(/vw/g,""),+e*Se.value/100}function $e(e){return e=e.replace(/vh/g,""),+e*xe.value/100}function pn(e){if(typeof e=="number")return e;if(q){if(e.includes("rem"))return Ne(e);if(e.includes("vw"))return Pe(e);if(e.includes("vh"))return $e(e)}return parseFloat(e)}const Me=/-(\w)/g,Q=e=>e.replace(Me,(n,t)=>t.toUpperCase()),mn=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"");function En(e,n=2){let t=e+"";for(;t.length<n;)t="0"+t;return t}const gn=(e,n,t)=>Math.min(Math.max(e,n),t);function U(e,n,t){const o=e.indexOf(n);return o===-1?e:n==="-"&&o!==0?e.slice(0,o):e.slice(0,o+1)+e.slice(o).replace(t,"")}function hn(e,n=!0,t=!0){n?e=U(e,".",/\./g):e=e.split(".")[0],t?e=U(e,"-",/-/g):e=e.replace(/-/,"");const o=n?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(o,"")}function vn(e,n){return Math.round((e+n)*1e10)/1e10}const{hasOwnProperty:Re}=Object.prototype;function Le(e,n,t){const o=n[t];!S(o)||(!Re.call(e,t)||!K(o)?e[t]=o:e[t]=X(Object(e[t]),o))}function X(e,n){return Object.keys(n).forEach(t=>{Le(e,n,t)}),e}const Ue={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",loading:"\u52A0\u8F7D\u4E2D...",noCoupon:"\u6682\u65E0\u4F18\u60E0\u5238",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",telInvalid:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:(e,n)=>`${e}\u5E74${n}\u6708`,rangePrompt:e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1:"},vanCoupon:{unlimited:"\u65E0\u95E8\u69DB",discount:e=>`${e}\u6298`,condition:e=>`\u6EE1${e}\u5143\u53EF\u7528`},vanCouponCell:{title:"\u4F18\u60E0\u5238",count:e=>`${e}\u5F20\u53EF\u7528`},vanCouponList:{exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",postal:"\u90AE\u653F\u7F16\u7801",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",postalEmpty:"\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E",addressDetail:"\u8BE6\u7EC6\u5730\u5740",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}},k=f("zh-CN"),I=A({"zh-CN":Ue}),ke={messages(){return I[k.value]},use(e,n){k.value=e,this.add({[e]:n})},add(e={}){X(I,e)}},m=ke;function ee(e){const n=Q(e)+".";return(t,...o)=>{const u=m.messages(),a=$(u,n+t)||$(u,t);return F(a)?a(...o):a}}function T(e,n){return n?typeof n=="string"?` ${e}--${n}`:Array.isArray(n)?n.reduce((t,o)=>t+T(e,o),""):Object.keys(n).reduce((t,o)=>t+(n[o]?T(e,o):""),""):""}function Ie(e){return(n,t)=>(n&&typeof n!="string"&&(t=n,n=""),n=n?`${e}__${n}`:e,`${n}${T(n,t)}`)}function Cn(e){const n=`van-${e}`;return[n,Ie(n),ee(n)]}const _e={name:"Name",tel:"Phone",save:"Save",confirm:"Confirm",cancel:"Cancel",delete:"Delete",loading:"Loading...",noCoupon:"No coupons",nameEmpty:"Please fill in the name",addContact:"Add contact",telInvalid:"Malformed phone number",vanCalendar:{end:"End",start:"Start",title:"Calendar",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthTitle:(e,n)=>`${e}/${n}`,rangePrompt:e=>`Choose no more than ${e} days`},vanCascader:{select:"Select"},vanPagination:{prev:"Previous",next:"Next"},vanPullRefresh:{pulling:"Pull to refresh...",loosing:"Loose to refresh..."},vanSubmitBar:{label:"Total:"},vanCoupon:{unlimited:"Unlimited",discount:e=>`${e*10}% off`,condition:e=>`At least ${e}`},vanCouponCell:{title:"Coupon",count:e=>`You have ${e} coupons`},vanCouponList:{exchange:"Exchange",close:"Close",enable:"Available",disabled:"Unavailable",placeholder:"Coupon code"},vanAddressEdit:{area:"Area",postal:"Postal",areaEmpty:"Please select a receiving area",addressEmpty:"Address can not be empty",postalEmpty:"Wrong postal code",addressDetail:"Address",defaultAddress:"Set as the default address"},vanAddressList:{add:"Add new address"}};function je(){m.add({"en-US":_e}),window.vueRouter&&window.vueRouter.afterEach(e=>{const{lang:n}=e.meta||{};n&&m.use(n)}),m.add({"zh-CN":{add:"\u589E\u52A0",red:"\u7EA2\u8272",tab:"\u6807\u7B7E",tag:"\u6807\u7B7E",desc:"\u63CF\u8FF0\u4FE1\u606F",back:"\u8FD4\u56DE",title:"\u6807\u9898",status:"\u72B6\u6001",button:"\u6309\u94AE",option:"\u9009\u9879",search:"\u641C\u7D22",orange:"\u6A59\u8272",yellow:"\u9EC4\u8272",purple:"\u7D2B\u8272",custom:"\u81EA\u5B9A\u4E49",content:"\u5185\u5BB9",username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",decrease:"\u51CF\u5C11",disabled:"\u7981\u7528\u72B6\u6001",uneditable:"\u4E0D\u53EF\u7F16\u8F91",basicUsage:"\u57FA\u7840\u7528\u6CD5",advancedUsage:"\u9AD8\u7EA7\u7528\u6CD5",loadingStatus:"\u52A0\u8F7D\u72B6\u6001"},"en-US":{add:"Add",red:"Red",tab:"Tab",tag:"Tag",desc:"Description",back:"Back",title:"Title",status:"Status",button:"Button",option:"Option",search:"Search",orange:"Orange",yellow:"Yellow",purple:"Purple",custom:"Custom",content:"Content",username:"Username",password:"Password",decrease:"Decrease",disabled:"Disabled",uneditable:"Uneditable",basicUsage:"Basic Usage",advancedUsage:"Advanced Usage",loadingStatus:"Loading"}})}je();let ze=0;function wn(e){const n=`demo-i18n-${ze++}`;if(e){const t={},o=Q(n);Object.keys(e).forEach(u=>{t[u]={[o]:e[u]}}),m.add(t)}return ee(n)}export{Ze as A,hn as B,be as C,rn as D,tn as E,gn as F,pn as G,Je as H,L as I,un as J,v as K,Be as L,en as M,Se as N,ln as O,sn as P,xe as Q,nn as R,qe as S,ie as T,Te as U,vn as V,En as W,Qe as X,Xe as Y,p as Z,wn as a,Ge as b,Cn as c,q as d,Ve as e,K as f,Q as g,w as h,S as i,Ae as j,mn as k,cn as l,we as m,ge as n,Ee as o,We as p,dn as q,le as r,on as s,He as t,Ke as u,fn as v,an as w,F as x,G as y,ye as z};