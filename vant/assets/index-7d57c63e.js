import{C as g}from"./index-c6c98967.js";import{F as C}from"./index-9bd9779e.js";import{F as b}from"./index-a64518d5.js";import{B as _}from"./index-49cf8d1f.js";import{S}from"./index-445758ee.js";import{A as v,H as D,u as w,e as a,y,r as x,o as V,c as B,w as E,C as u}from"./vue-libs-6a67f9c6.js";import{e as m,c as k,y as F,a as L}from"./use-translate-ad5eefa4.js";import{w as T}from"./with-install-0d9206aa.js";import{s as h}from"./function-call-77450584.js";import"./use-route-ea8124d0.js";import"./index-1c02023b.js";import"./index-4437616e.js";import"./use-expose-c87283be.js";import"./constant-ee6e27d7.js";import"./use-id-5464e261.js";import"./index-5b517ddf.js";import"./mount-component-49243326.js";import"./index-c47f1bdb.js";import"./use-lock-scroll-dce811cc.js";import"./use-touch-06ff9235.js";import"./use-lazy-render-7199096a.js";import"./on-popup-reopen-2b57f4ff.js";import"./index-f441590a.js";import"./interceptor-e18d38f8.js";const[U,s,n]=k("contact-edit"),d={tel:"",name:""},I={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>m({},d)},telValidator:{type:Function,default:F}},N=v({name:U,props:I,emits:["save","delete","changeDefault"],setup(t,{emit:l}){const e=D(m({},d,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(_,{block:!0,round:!0,type:"primary",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(_,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(S,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,onChange:o=>l("changeDefault",o)},null),r=()=>{if(t.showSetDefault)return a(g,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return w(()=>t.contactInfo,o=>m(e,d,o)),()=>a(C,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}}),A=T(N),O=A,ce=v({__name:"index",setup(t){const l=L({"zh-CN":{defaultLabel:"设为默认联系人"},"en-US":{defaultLabel:"Set as the default contact"}}),e=y({tel:"",name:""}),i=()=>h(l("save")),c=()=>h(l("delete"));return(f,p)=>{const r=x("demo-block");return V(),B(r,{title:u(l)("basicUsage")},{default:E(()=>[a(u(O),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{ce as default};