import{V as s}from"./index-c6353a12.js";import{a as D}from"./use-translate-bcc9285c.js";import{A as F,u as d,r as v,o as C,a as M,e as a,w as u,C as t,F as _}from"./vue-libs-b2a2f6f9.js";import"./utils-9b3ad853.js";import"./Picker-6adcd3e8.js";import"./use-expose-52ca271b.js";import"./index-2bd2daba.js";import"./with-install-c0de7835.js";import"./use-touch-8f92051d.js";import"./constant-a81ffd37.js";import"./index-b3b7a677.js";import"./use-id-92cebd14.js";import"./use-route-efd4b866.js";import"./index-48ea421e.js";import"./on-popup-reopen-e5b691e6.js";import"./use-refs-06cfd58f.js";import"./index-2274e31b.js";import"./index-3cdd9fde.js";import"./interceptor-e1e3c393.js";import"./index-b6f3b2ba.js";const K=F({__name:"index",setup(T){const o=D({"zh-CN":{day:"日",year:"年",month:"月",chooseDate:"选择日期",columnsType:"选项类型",optionsFilter:"过滤选项",chooseYearMonth:"选择年月",optionsFormatter:"格式化选项"},"en-US":{day:" Day",year:" Year",month:" Month",chooseDate:"Choose Date",columnsType:"Columns Type",optionsFilter:"Options Filter",chooseYearMonth:"Choose Year-Month",optionsFormatter:"Options Formatter"}}),n=new Date(2020,0,1),i=new Date(2025,5,1),c=d(["2021","01","01"]),f=d(["2021","01"]),h=d(["2021","01"]),y=d(["2021","01"]),p=["year","month"],x=(m,e)=>m==="month"?e.filter(r=>Number(r.value)%6===0):e,V=(m,e)=>(m==="year"&&(e.text+=o("year")),m==="month"&&(e.text+=o("month")),m==="day"&&(e.text+=o("day")),e);return(m,e)=>{const r=v("demo-block");return C(),M(_,null,[a(r,{card:"",title:t(o)("basicUsage")},{default:u(()=>[a(t(s),{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=l=>c.value=l),title:t(o)("chooseDate"),"min-date":t(n),"max-date":t(i)},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(r,{card:"",title:t(o)("columnsType")},{default:u(()=>[a(t(s),{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=l=>f.value=l),title:t(o)("chooseYearMonth"),"min-date":t(n),"max-date":t(i),"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(r,{card:"",title:t(o)("optionsFormatter")},{default:u(()=>[a(t(s),{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=l=>h.value=l),title:t(o)("chooseYearMonth"),"min-date":t(n),"max-date":t(i),formatter:V,"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(r,{card:"",title:t(o)("optionsFilter")},{default:u(()=>[a(t(s),{modelValue:y.value,"onUpdate:modelValue":e[3]||(e[3]=l=>y.value=l),title:t(o)("optionFilter"),filter:x,"min-date":t(n),"max-date":t(i),"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"])],64)}}});export{K as default};