import{C as g}from"./index-415c7833.js";import{F as C}from"./index-0a7805a0.js";import{F as b}from"./index-01aa8451.js";import{B as _}from"./index-050f6d22.js";import{S}from"./index-4234fc25.js";import{A as v,H as D,u as w,e as a,y,r as x,o as V,c as B,w as E,C as u}from"./vue-libs-57cd1a95.js";import{e as m,c as k,y as F,a as L}from"./use-translate-1ddc661f.js";import{w as T}from"./with-install-4ceae99b.js";import{s as h}from"./function-call-bf1f5944.js";import"./use-route-b92a630a.js";import"./index-c20ef9f4.js";import"./index-7e986669.js";import"./use-expose-31cbee35.js";import"./constant-a81ffd37.js";import"./use-id-2a078838.js";import"./index-c254561f.js";import"./mount-component-d345efc2.js";import"./index-e84ecee9.js";import"./use-touch-093d9c5b.js";import"./use-lazy-render-8c11e6f0.js";import"./on-popup-reopen-a43c7b56.js";import"./index-37d160fa.js";import"./interceptor-96754bdd.js";const[U,s,n]=k("contact-edit"),d={tel:"",name:""},I={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>m({},d)},telValidator:{type:Function,default:F}},N=v({name:U,props:I,emits:["save","delete","changeDefault"],setup(t,{emit:l}){const e=D(m({},d,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(_,{block:!0,round:!0,type:"primary",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(_,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(S,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,onChange:o=>l("changeDefault",o)},null),r=()=>{if(t.showSetDefault)return a(g,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return w(()=>t.contactInfo,o=>m(e,d,o)),()=>a(C,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}}),A=T(N),O=A,ie=v({__name:"index",setup(t){const l=L({"zh-CN":{defaultLabel:"设为默认联系人"},"en-US":{defaultLabel:"Set as the default contact"}}),e=y({tel:"",name:""}),i=()=>h(l("save")),c=()=>h(l("delete"));return(f,p)=>{const r=x("demo-block");return V(),B(r,{title:u(l)("basicUsage")},{default:E(()=>[a(u(O),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{ie as default};