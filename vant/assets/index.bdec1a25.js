import{V as i}from"./index.bbe94db9.js";import{V as C}from"./index.cc90d905.js";import{a as f}from"./index.55cbeda9.js";import{a as _}from"./use-translate.adc2ccf9.js";import{D as g}from"./function-call.b2036701.js";import{z as F,C as d,r as U,o as A,a as k,e as l,w as a,B as e,d as w,F as z}from"./vue-libs.a65f1bfc.js";import"./with-install.007edd36.js";import"./index.49155860.js";import"./use-route.985ba6da.js";import"./mount-component.1ad90cc4.js";import"./use-expose.9b1749d6.js";import"./constant.80c6de18.js";import"./interceptor.e2b79e43.js";import"./index.6376440d.js";import"./use-touch.ffb74f5c.js";import"./use-lazy-render.965a094b.js";import"./on-popup-reopen.76ccb88c.js";import"./index.8af07ca5.js";import"./index.ebd5e50a.js";import"./index.8d5c7c63.js";import"./use-placeholder.76391f23.js";import"./use-height.8a1840fd.js";const B={class:"icon-wrapper"},X=F({__name:"index",setup(E){const u=_({"zh-CN":{title:"\u6807\u9898",confirm:"\u63D0\u9192",message:"\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F",withCell:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",customSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customNode:"\u81EA\u5B9A\u4E49\u6309\u94AE",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncControl:"\u5F02\u6B65\u63A7\u5236"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customNode:"Custom Node",customColor:"Custom Color",asyncControl:"Async Control"}}),n=d(!0),r=d(!0),s=d(!0),p=d(!0),c=d(!0),v=V=>{g.confirm({title:u("title"),message:u("message")}).then(()=>{p.value=V})};return(V,t)=>{const m=U("demo-block");return A(),k(z,null,[l(m,{title:e(u)("basicUsage")},{default:a(()=>[l(e(i),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o)},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("disabled")},{default:a(()=>[l(e(i),{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("loadingStatus")},{default:a(()=>[l(e(i),{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=o=>n.value=o),loading:""},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("customSize")},{default:a(()=>[l(e(i),{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=o=>r.value=o),size:"24px"},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("customColor")},{default:a(()=>[l(e(i),{modelValue:s.value,"onUpdate:modelValue":t[4]||(t[4]=o=>s.value=o),"active-color":"#ee0a24","inactive-color":"#dcdee0"},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("customNode")},{default:a(()=>[l(e(i),{modelValue:s.value,"onUpdate:modelValue":t[5]||(t[5]=o=>s.value=o)},{node:a(()=>[w("div",B,[l(e(f),{name:s.value?"success":"cross"},null,8,["name"])])]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(m,{title:e(u)("asyncControl")},{default:a(()=>[l(e(i),{"model-value":p.value,"onUpdate:modelValue":v},null,8,["model-value"])]),_:1},8,["title"]),l(m,{title:e(u)("withCell")},{default:a(()=>[l(e(C),{center:"",title:e(u)("title")},{"right-icon":a(()=>[l(e(i),{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=o=>c.value=o),size:"24"},null,8,["modelValue"])]),_:1},8,["title"])]),_:1},8,["title"])],64)}}});export{X as default};