import{V as n}from"./index-77e21811.js";import{a as S}from"./use-translate-f5915e0e.js";import{s as U}from"./function-call-94502ad4.js";import{A as g,y as m,r as _,o as b,a as k,e as l,w as d,C as t,F as x}from"./vue-libs-12a1683e.js";import"./use-refs-a2ddf56d.js";import"./use-touch-e98b6450.js";import"./index-f40ec2de.js";import"./index-5106e8af.js";import"./with-install-e688503b.js";import"./mount-component-d2062020.js";import"./use-expose-74d6f7e3.js";import"./index-b8400930.js";import"./use-lazy-render-8625b066.js";import"./on-popup-reopen-eee79bbb.js";import"./index-dd419646.js";import"./interceptor-37ecf4c0.js";import"./constant-a81ffd37.js";import"./index-57217a11.js";const M=g({__name:"index",setup(w){const a=S({"zh-CN":{halfStar:"半星",disabled:"禁用状态",customIcon:"自定义图标",customStyle:"自定义样式",customCount:"自定义数量",readonly:"只读状态",readonlyHalfStar:"只读状态小数显示",changeEvent:"监听 change 事件",toastContent:s=>`当前值：${s}`},"en-US":{halfStar:"Half Star",disabled:"Disabled",customIcon:"Custom Icon",customStyle:"Custom Style",customCount:"Custom Count",readonly:"Readonly",readonlyHalfStar:"Readonly Half Star",changeEvent:"Change Event",toastContent:s=>`current value：${s}`}}),r=m(3),v=m(3),p=m(3),f=m(2.5),V=m(4),i=m(3),y=m(3.3),C=m(2),c=s=>U(a("toastContent",s));return(s,e)=>{const u=_("demo-block");return b(),k(x,null,[l(u,{title:t(a)("basicUsage")},{default:d(()=>[l(t(n),{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=o=>r.value=o)},null,8,["modelValue"])]),_:1},8,["title"]),l(u,{title:t(a)("customIcon")},{default:d(()=>[l(t(n),{modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=o=>v.value=o),icon:"like","void-icon":"like-o"},null,8,["modelValue"])]),_:1},8,["title"]),l(u,{title:t(a)("customStyle")},{default:d(()=>[l(t(n),{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=o=>p.value=o),size:25,color:"#ffd21e","void-icon":"star","void-color":"#eee"},null,8,["modelValue"])]),_:1},8,["title"]),l(u,{title:t(a)("halfStar")},{default:d(()=>[l(t(n),{modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=o=>f.value=o),"allow-half":""},null,8,["modelValue"])]),_:1},8,["title"]),l(u,{title:t(a)("customCount")},{default:d(()=>[l(t(n),{modelValue:V.value,"onUpdate:modelValue":e[4]||(e[4]=o=>V.value=o),count:6},null,8,["modelValue"])]),_:1},8,["title"]),l(u,{title:t(a)("disabled")},{default:d(()=>[l(t(n),{modelValue:i.value,"onUpdate:modelValue":e[5]||(e[5]=o=>i.value=o),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),l(u,{title:t(a)("readonly")},{default:d(()=>[l(t(n),{modelValue:i.value,"onUpdate:modelValue":e[6]||(e[6]=o=>i.value=o),readonly:""},null,8,["modelValue"])]),_:1},8,["title"]),l(u,{title:t(a)("readonlyHalfStar")},{default:d(()=>[l(t(n),{modelValue:y.value,"onUpdate:modelValue":e[7]||(e[7]=o=>y.value=o),readonly:"","allow-half":""},null,8,["modelValue"])]),_:1},8,["title"]),l(u,{title:t(a)("changeEvent")},{default:d(()=>[l(t(n),{modelValue:C.value,"onUpdate:modelValue":e[8]||(e[8]=o=>C.value=o),onChange:c},null,8,["modelValue"])]),_:1},8,["title"])],64)}}});export{M as default};