import{a as r,f as P,s as k,p as V}from"./utils-af5788cb.js";import{P as x}from"./index-7997686e.js";import{A as g,y as C,D as v,u,e as S,B as T}from"./vue-libs-12a1683e.js";import{J as s,p,c as H,e as M}from"./use-translate-f5915e0e.js";import{c as n,w as y}from"./with-install-e688503b.js";const[N]=H("time-picker"),A=M({},k,{minHour:n(0),maxHour:n(23),minMinute:n(0),maxMinute:n(59),minSecond:n(0),maxSecond:n(59),columnsType:{type:Array,default:()=>["hour","minute"]}}),I=g({name:N,props:A,emits:["confirm","cancel","change","update:modelValue"],setup(a,{emit:m,slots:l}){const o=C(a.modelValue),i=v(()=>a.columnsType.map(e=>{const{filter:c,formatter:t}=a;switch(e){case"hour":return r(+a.minHour,+a.maxHour,e,t,c);case"minute":return r(+a.minMinute,+a.maxMinute,e,t,c);case"second":return r(+a.minSecond,+a.maxSecond,e,t,c);default:return[]}}));u(o,e=>{s(e,a.modelValue)||m("update:modelValue",e)}),u(()=>a.modelValue,e=>{e=P(e,i.value),s(e,o.value)||(o.value=e)},{immediate:!0});const d=(...e)=>m("change",...e),f=(...e)=>m("cancel",...e),h=(...e)=>m("confirm",...e);return()=>S(x,T({modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,columns:i.value,onChange:d,onCancel:f,onConfirm:h},p(a,V)),l)}}),B=y(I),U=B;export{U as V};