import{V as $}from"./index-e4a59b89.js";import{V as m}from"./index-10ce990e.js";import{V as q}from"./index-f0897f9f.js";import{V as T}from"./index-e818b7cf.js";import{a as C}from"./use-translate-f5915e0e.js";import{A as f,y as d,r as F,o as k,c as N,w as s,e as a,C as e,d as z,g as U,t as x,a as w,F as y}from"./vue-libs-12a1683e.js";import{a as B,c as D}from"./function-call-94502ad4.js";import{c as M}from"./index-2630be1a.js";import{V as A}from"./index-77e21811.js";import{V as j,b as R}from"./index-f6ebb3c1.js";import{V as E}from"./index-10ecee11.js";import{V as H}from"./index-8491030e.js";import{V as I}from"./index-3bc62349.js";import{V as P}from"./index-7878c9da.js";import{V as J}from"./index-658b68d1.js";import{V as K}from"./index-ba64bd74.js";import{V as O}from"./index-2dc73df1.js";import{V as G}from"./index-b8400930.js";import{a as Q}from"./index.esm-00641b52.js";import{a as W}from"./area-en-72eac07a.js";import{V as X}from"./index-7997686e.js";import{b as L}from"./data-67c16a28.js";import{V as Y}from"./index-3e28b8ca.js";import{V as Z}from"./index-4fa2d6e2.js";import"./use-expose-74d6f7e3.js";import"./constant-a81ffd37.js";import"./with-install-e688503b.js";import"./index-99011cf0.js";import"./use-route-3942a82f.js";import"./index-f40ec2de.js";import"./index-5106e8af.js";import"./use-id-2cc12458.js";import"./index-57217a11.js";import"./mount-component-d2062020.js";import"./use-refs-a2ddf56d.js";import"./use-touch-e98b6450.js";import"./Checker-90db68da.js";import"./interceptor-37ecf4c0.js";import"./index-5e3b8936.js";import"./function-call-cf655b5d.js";import"./index-43af9ffb.js";import"./on-popup-reopen-eee79bbb.js";import"./Picker-db6caeac.js";import"./index-0449ff2d.js";import"./index-95cfe0a9.js";import"./use-lazy-render-8625b066.js";import"./index-dd419646.js";import"./utils-af5788cb.js";import"./use-height-e16e614a.js";const ee={style:{margin:"16px 16px 0"}},le=f({__name:"BasicUsage",setup(_){const l=C({"zh-CN":{submit:"提交",username:"用户名",password:"密码",requireUsername:"请填写用户名",requirePassword:"请填写密码"},"en-US":{submit:"Submit",username:"Username",password:"Password",requireUsername:"Username is required",requirePassword:"Password is required"}}),u=d(""),t=d(""),c=i=>{console.log("submit",i)},b=i=>{console.log("failed",i)};return(i,o)=>{const n=F("demo-block");return k(),N(n,{title:e(l)("basicUsage")},{default:s(()=>[a(e($),{onSubmit:c,onFailed:b},{default:s(()=>[a(e(T),{inset:""},{default:s(()=>[a(e(m),{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=v=>u.value=v),name:"username",label:e(l)("username"),rules:[{required:!0,message:e(l)("requireUsername")}],placeholder:e(l)("username")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=v=>t.value=v),type:"password",name:"password",label:e(l)("password"),rules:[{required:!0,message:e(l)("requirePassword")}],placeholder:e(l)("password")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),z("div",ee,[a(e(q),{round:"",block:"",type:"primary","native-type":"submit"},{default:s(()=>[U(x(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),ae={style:{margin:"16px 16px 0"}},oe=f({__name:"ValidateRules",setup(_){const l=C({"zh-CN":{label:"文本",title:"校验规则",submit:"提交",message:"请输入正确内容",invalid:r=>`${r} 不合法，请重新输入`,pattern:"正则校验",validator:"函数校验",validating:"验证中...",asyncValidator:"异步函数校验",validatorMessage:"校验函数返回错误提示"},"en-US":{label:"Label",title:"Validate Rules",submit:"Submit",message:"Error message",invalid:r=>`${r} is invalid`,pattern:"Use pattern",validator:"Use validator",validating:"Validating...",asyncValidator:"Use async validator",validatorMessage:"Use validator to return message"}}),u=d(""),t=d(""),c=d("abc"),b=d(""),i=/\d{6}/,o=r=>/1\d{10}/.test(r),n=r=>l("invalid",r),v=r=>new Promise(V=>{B(l("validating")),setTimeout(()=>{D(),V(r==="1234")},1e3)}),S=r=>{console.log("submit",r)},g=r=>{console.log("failed",r)};return(r,V)=>{const p=F("demo-block");return k(),N(p,{title:e(l)("title")},{default:s(()=>[a(e($),{onSumbit:S,onFailed:g},{default:s(()=>[a(e(T),{inset:""},{default:s(()=>[a(e(m),{modelValue:u.value,"onUpdate:modelValue":V[0]||(V[0]=h=>u.value=h),name:"pattern",label:e(l)("label"),rules:[{pattern:i,message:e(l)("message")}],placeholder:e(l)("pattern")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:t.value,"onUpdate:modelValue":V[1]||(V[1]=h=>t.value=h),name:"validator",label:e(l)("label"),rules:[{validator:o,message:e(l)("message")}],placeholder:e(l)("validator")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:c.value,"onUpdate:modelValue":V[2]||(V[2]=h=>c.value=h),name:"validatorMessage",label:e(l)("label"),rules:[{validator:n}],placeholder:e(l)("validatorMessage")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:b.value,"onUpdate:modelValue":V[3]||(V[3]=h=>b.value=h),name:"asyncValidator",label:e(l)("label"),rules:[{validator:v,message:e(l)("message")}],placeholder:e(l)("asyncValidator")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),z("div",ae,[a(e(q),{round:"",block:"",type:"primary","native-type":"submit"},{default:s(()=>[U(x(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),te=f({__name:"FieldTypeArea",setup(_){const l=C({"zh-CN":{picker:"地区选择",areaList:Q,placeholder:"点击选择省市区"},"en-US":{picker:"Area Picker",areaList:W,placeholder:"Select area"}}),u=d(""),t=d(!1),c=({selectedOptions:i})=>{u.value=i.map(o=>o.text).join("/"),t.value=!1},b=()=>{t.value=!1};return(i,o)=>(k(),w(y,null,[a(e(m),{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=n=>u.value=n),"is-link":"",readonly:"",name:"area",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=n=>t.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(G),{show:t.value,"onUpdate:show":o[2]||(o[2]=n=>t.value=n),round:"",position:"bottom",teleport:"body"},{default:s(()=>[a(e(O),{"area-list":e(l)("areaList"),onConfirm:c,onCancel:b},null,8,["area-list"])]),_:1},8,["show"])],64))}}),re=f({__name:"FieldTypePicker",setup(_){const l=C({"zh-CN":{picker:"选择器",placeholder:"点击选择城市",textColumns:L["zh-CN"]},"en-US":{picker:"Picker",placeholder:"Select city",textColumns:L["en-US"]}}),u=d(""),t=d(!1),c=({selectedOptions:i})=>{var o;u.value=((o=i[0])==null?void 0:o.text)||"",t.value=!1},b=()=>{t.value=!1};return(i,o)=>(k(),w(y,null,[a(e(m),{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=n=>u.value=n),"is-link":"",readonly:"",name:"picker",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=n=>t.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(G),{show:t.value,"onUpdate:show":o[2]||(o[2]=n=>t.value=n),round:"",position:"bottom",teleport:"body"},{default:s(()=>[a(e(X),{columns:e(l)("textColumns"),onConfirm:c,onCancel:b},null,8,["columns"])]),_:1},8,["show"])],64))}}),se=f({__name:"FieldTypeCalendar",setup(_){const l=C({"zh-CN":{calendar:"日历",placeholder:"点击选择日期"},"en-US":{calendar:"Calendar",placeholder:"Select date"}}),u=d(""),t=d(!1),c=i=>`${i.getMonth()+1}/${i.getDate()}`,b=i=>{u.value=c(i),t.value=!1};return(i,o)=>(k(),w(y,null,[a(e(m),{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=n=>u.value=n),"is-link":"",readonly:"",name:"calendar",label:e(l)("calendar"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=n=>t.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(Y),{show:t.value,"onUpdate:show":o[2]||(o[2]=n=>t.value=n),round:"",teleport:"body",onConfirm:b},null,8,["show"])],64))}}),ne=f({__name:"FieldTypeDatePicker",setup(_){const l=C({"zh-CN":{label:"时间选择",placeholder:"点击选择时间"},"en-US":{label:"Datetime Picker",placeholder:"Select time"}}),u=d(""),t=d(!1),c=({selectedValues:i})=>{u.value=i.join("/"),t.value=!1},b=()=>{t.value=!1};return(i,o)=>(k(),w(y,null,[a(e(m),{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=n=>u.value=n),"is-link":"",readonly:"",name:"datePicker",label:e(l)("label"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=n=>t.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(G),{show:t.value,"onUpdate:show":o[2]||(o[2]=n=>t.value=n),round:"",position:"bottom",teleport:"body"},{default:s(()=>[a(e(Z),{onConfirm:c,onCancel:b})]),_:1},8,["show"])],64))}}),ue={style:{margin:"16px 16px 0"}},ie=f({__name:"FieldType",setup(_){const l=C({"zh-CN":{rate:"评分",radio:"单选框",submit:"提交",switch:"开关",slider:"滑块",picker:"选择器",stepper:"步进器",checkbox:"复选框",uploader:"文件上传",fieldType:"表单项类型",checkboxGroup:"复选框组",requireCheckbox:"请勾选复选框"},"en-US":{rate:"Rate",radio:"Radio",submit:"Submit",switch:"Switch",slider:"Slider",picker:"Picker",stepper:"Stepper",checkbox:"Checkbox",uploader:"Uploader",fieldType:"Field Type",checkboxGroup:"Checkbox Group",requireCheckbox:"Checkbox is required"}}),u=d(3),t=d("1"),c=d(50),b=d(1),i=d([{url:M("leaf.jpeg")}]),o=d(!1),n=d([]),v=d(!1),S=g=>{console.log(g)};return(g,r)=>{const V=F("demo-block");return k(),N(V,{title:e(l)("fieldType")},{default:s(()=>[a(e($),{onSubmit:S},{default:s(()=>[a(e(T),{inset:""},{default:s(()=>[a(e(m),{name:"switch",label:e(l)("switch")},{input:s(()=>[a(e(H),{modelValue:v.value,"onUpdate:modelValue":r[0]||(r[0]=p=>v.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkbox",label:e(l)("checkbox")},{input:s(()=>[a(e(P),{modelValue:o.value,"onUpdate:modelValue":r[1]||(r[1]=p=>o.value=p),shape:"square"},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkboxGroup",label:e(l)("checkboxGroup")},{input:s(()=>[a(e(K),{modelValue:n.value,"onUpdate:modelValue":r[2]||(r[2]=p=>n.value=p),direction:"horizontal"},{default:s(()=>[a(e(P),{name:"1",shape:"square"},{default:s(()=>[U(x(e(l)("checkbox"))+" 1 ",1)]),_:1}),a(e(P),{name:"2",shape:"square"},{default:s(()=>[U(x(e(l)("checkbox"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"radio",label:e(l)("radio")},{input:s(()=>[a(e(j),{modelValue:t.value,"onUpdate:modelValue":r[3]||(r[3]=p=>t.value=p),direction:"horizontal"},{default:s(()=>[a(e(R),{name:"1"},{default:s(()=>[U(x(e(l)("radio"))+" 1",1)]),_:1}),a(e(R),{name:"2"},{default:s(()=>[U(x(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"stepper",label:e(l)("stepper")},{input:s(()=>[a(e(I),{modelValue:b.value,"onUpdate:modelValue":r[4]||(r[4]=p=>b.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"rate",label:e(l)("rate")},{input:s(()=>[a(e(A),{modelValue:u.value,"onUpdate:modelValue":r[5]||(r[5]=p=>u.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"slider",label:e(l)("slider")},{input:s(()=>[a(e(E),{modelValue:c.value,"onUpdate:modelValue":r[6]||(r[6]=p=>c.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"uploader",label:e(l)("uploader")},{input:s(()=>[a(e(J),{modelValue:i.value,"onUpdate:modelValue":r[7]||(r[7]=p=>i.value=p),"max-count":"2"},null,8,["modelValue"])]),_:1},8,["label"]),a(re),a(ne),a(te),a(se)]),_:1}),z("div",ue,[a(e(q),{round:"",block:"",type:"primary","native-type":"submit"},{default:s(()=>[U(x(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),rl=f({__name:"index",setup(_){return(l,u)=>(k(),w(y,null,[a(le),a(oe),a(ie)],64))}});export{rl as default};