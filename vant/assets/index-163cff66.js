import{V as i}from"./index-50a8c299.js";import{V as f}from"./index-3124e750.js";import{V as C}from"./index-5a7b6df9.js";import{a as _}from"./use-translate-0400f29b.js";import{a as g}from"./function-call-7fdd873d.js";import{A as U,y as d,r as k,o as w,a as y,e as t,w as u,C as e,d as x,F as N}from"./vue-libs-83dbabed.js";import"./index-e6476cbd.js";import"./with-install-a78877b5.js";import"./use-route-b1061918.js";import"./index-c916422a.js";import"./mount-component-94eea14a.js";import"./use-expose-efcfdee3.js";import"./index-4c6d2d8c.js";import"./use-lock-scroll-1eff2e8c.js";import"./use-touch-8cd17a21.js";import"./constant-ee6e27d7.js";import"./use-lazy-render-2383afef.js";import"./on-popup-reopen-bcf43cef.js";import"./use-scope-id-e548748d.js";import"./index-b7134fb7.js";import"./interceptor-3c3c2616.js";import"./index-33a62985.js";import"./index-d2a53263.js";import"./use-placeholder-7d274f32.js";import"./use-height-84370a97.js";const S={class:"icon-wrapper"},$=U({__name:"index",setup(z){const a=_({"zh-CN":{title:"标题",confirm:"提醒",message:"是否切换开关？",withCell:"搭配单元格使用",customSize:"自定义大小",customNode:"自定义按钮",customColor:"自定义颜色",asyncControl:"异步控制"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customNode:"Custom Node",customColor:"Custom Color",asyncControl:"Async Control"}}),n=d(!0),r=d(!0),s=d(!0),p=d(!0),c=d(!0),v=V=>{g({title:a("title"),message:a("message")}).then(()=>{p.value=V})};return(V,l)=>{const m=k("demo-block");return w(),y(N,null,[t(m,{title:e(a)("basicUsage")},{default:u(()=>[t(e(i),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=o=>n.value=o)},null,8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(a)("disabled")},{default:u(()=>[t(e(i),{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=o=>n.value=o),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(a)("loadingStatus")},{default:u(()=>[t(e(i),{modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=o=>n.value=o),loading:""},null,8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(a)("customSize")},{default:u(()=>[t(e(i),{modelValue:r.value,"onUpdate:modelValue":l[3]||(l[3]=o=>r.value=o),size:"22px"},null,8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(a)("customColor")},{default:u(()=>[t(e(i),{modelValue:s.value,"onUpdate:modelValue":l[4]||(l[4]=o=>s.value=o),"active-color":"#ee0a24","inactive-color":"#dcdee0"},null,8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(a)("customNode")},{default:u(()=>[t(e(i),{modelValue:s.value,"onUpdate:modelValue":l[5]||(l[5]=o=>s.value=o)},{node:u(()=>[x("div",S,[t(e(C),{name:s.value?"success":"cross"},null,8,["name"])])]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(m,{title:e(a)("asyncControl")},{default:u(()=>[t(e(i),{"model-value":p.value,"onUpdate:modelValue":v},null,8,["model-value"])]),_:1},8,["title"]),t(m,{title:e(a)("withCell")},{default:u(()=>[t(e(f),{center:"",title:e(a)("title")},{"right-icon":u(()=>[t(e(i),{modelValue:c.value,"onUpdate:modelValue":l[6]||(l[6]=o=>c.value=o)},null,8,["modelValue"])]),_:1},8,["title"])]),_:1},8,["title"])],64)}}});export{$ as default};