import{a as U}from"./Picker-807e0de4.js";import{w}from"./with-install-278c4a2b.js";import{V as f}from"./index-0995f301.js";import{V as v}from"./index-a6feec24.js";import{a as _}from"./use-translate-a757506f.js";import{s as d}from"./function-call-761433ae.js";import{A as x,u as c,o as T,c as S,w as u,e as l,C as e,D as N,r as $,a as g,F as k}from"./vue-libs-b2a2f6f9.js";import"./use-expose-2590a160.js";import"./index-61c1f2e0.js";import"./use-touch-8f92051d.js";import"./constant-a81ffd37.js";import"./index-67cc303b.js";import"./use-id-92cebd14.js";import"./use-route-efd4b866.js";import"./index-c5678a17.js";import"./on-popup-reopen-e5b691e6.js";import"./use-refs-06cfd58f.js";import"./index-29c9c9f5.js";import"./index-8c81c046.js";import"./interceptor-1ff3f352.js";import"./utils-85685d7b.js";import"./index-055de736.js";import"./mount-component-a5a888e3.js";import"./index-bd55b31d.js";import"./index-e81257b3.js";import"./use-lazy-render-927fe2b4.js";import"./index-4a51f7e1.js";const R=w(U),C=R,j=x({__name:"SelectDateTime",setup(V){const t=_({"zh-CN":{date:"选择日期",time:"选择时间",title:"预约日期"},"en-US":{date:"Date",time:"Time",title:"Title"}}),a=c(["12","00"]),n=c(["2022","06","01"]),o=new Date(2020,0,1),s=new Date(2025,5,1),D=()=>{d(`${n.value.join("/")} ${a.value.join(":")}`)},i=()=>{d("cancel")};return(p,r)=>(T(),S(e(C),{title:e(t)("title"),tabs:[e(t)("date"),e(t)("time")],onConfirm:D,onCancel:i},{default:u(()=>[l(e(v),{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=m=>n.value=m),"min-date":e(o),"max-date":e(s)},null,8,["modelValue","min-date","max-date"]),l(e(f),{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=m=>a.value=m)},null,8,["modelValue"])]),_:1},8,["title","tabs"]))}}),B=x({__name:"SelectTimeRange",setup(V){const t=_({"zh-CN":{startTime:"开始时间",endTime:"结束时间",title:"预约时间"},"en-US":{startTime:"Start Time",endTime:"End Time",title:"Title"}}),a=c(["12","00"]),n=c(["13","00"]),o=()=>{d(`${a.value.join(":")} - ${n.value.join(":")}`)},s=()=>{d("cancel")};return(D,i)=>(T(),S(e(C),{title:e(t)("title"),tabs:[e(t)("startTime"),e(t)("endTime")],onConfirm:o,onCancel:s},{default:u(()=>[l(e(f),{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=p=>a.value=p)},null,8,["modelValue"]),l(e(f),{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=p=>n.value=p)},null,8,["modelValue"])]),_:1},8,["title","tabs"]))}}),z=x({__name:"SelectDateRange",setup(V){const t=_({"zh-CN":{startDate:"开始日期",endDate:"结束日期",title:"预约日期"},"en-US":{startDate:"Start Date",endDate:"End Date",title:"Title"}}),a=c(["2022","06","01"]),n=c(["2023","06","01"]),o=new Date(2020,0,1),s=new Date(2025,5,1),D=N(()=>new Date(Number(a.value[0]),Number(a.value[1])-1,Number(a.value[2]))),i=()=>{d(`${a.value.join("/")} - ${n.value.join("/")}`)},p=()=>{d("cancel")};return(r,m)=>(T(),S(e(C),{title:e(t)("title"),tabs:[e(t)("startDate"),e(t)("endDate")],onConfirm:i,onCancel:p},{default:u(()=>[l(e(v),{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=b=>a.value=b),"min-date":e(o),"max-date":e(s)},null,8,["modelValue","min-date","max-date"]),l(e(v),{modelValue:n.value,"onUpdate:modelValue":m[1]||(m[1]=b=>n.value=b),"min-date":e(D),"max-date":e(s)},null,8,["modelValue","min-date","max-date"])]),_:1},8,["title","tabs"]))}}),P=x({__name:"NextStepButton",setup(V){const t=_({"zh-CN":{date:"选择日期",time:"选择时间",title:"预约日期",nextStep:"下一步"},"en-US":{date:"Date",time:"Time",title:"Title",nextStep:"Next Step"}}),a=c(["12","00"]),n=c(["2022","06","01"]),o=new Date(2020,0,1),s=new Date(2025,5,1),D=()=>{d(`${n.value.join("/")} ${a.value.join(":")}`)},i=()=>{d("cancel")};return(p,r)=>(T(),S(e(C),{title:e(t)("title"),tabs:[e(t)("date"),e(t)("time")],"next-step-text":e(t)("nextStep"),onConfirm:D,onCancel:i},{default:u(()=>[l(e(v),{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=m=>n.value=m),"min-date":e(o),"max-date":e(s)},null,8,["modelValue","min-date","max-date"]),l(e(f),{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=m=>a.value=m)},null,8,["modelValue"])]),_:1},8,["title","tabs","next-step-text"]))}}),re=x({__name:"index",setup(V){const t=_({"zh-CN":{selectDateTime:"选择日期时间",selectDateRange:"选择日期范围",selectTimeRange:"选择时间范围",nextStepButton:"下一步按钮"},"en-US":{selectDateTime:"Select Date Time",selectDateRange:"Select Date Range",selectTimeRange:"Select Time Range",nextStepButton:"Next Step Button"}});return(a,n)=>{const o=$("demo-block");return T(),g(k,null,[l(o,{card:"",title:e(t)("selectDateTime")},{default:u(()=>[l(j)]),_:1},8,["title"]),l(o,{card:"",title:e(t)("nextStepButton")},{default:u(()=>[l(P)]),_:1},8,["title"]),l(o,{card:"",title:e(t)("selectDateRange")},{default:u(()=>[l(z)]),_:1},8,["title"]),l(o,{card:"",title:e(t)("selectTimeRange")},{default:u(()=>[l(B)]),_:1},8,["title"])],64)}}});export{re as default};