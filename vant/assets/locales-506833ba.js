import{y as A}from"./vue-libs-12a1683e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const po=(_,e)=>{const i=_.__vccOpts||_;for(const[a,o]of e)i[a]=o;return i},R="modulepreload",I=function(_){return"/vant/"+_},u={},t=function(e,i,a){if(!i||i.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(i.map(r=>{if(r=I(r),r in u)return;u[r]=!0;const n=r.endsWith(".css"),T=n?'[rel="stylesheet"]':"";if(!!a)for(let p=o.length-1;p>=0;p--){const c=o[p];if(c.href===r&&(!n||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${T}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":R,n||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),n)return new Promise((p,c)=>{s.addEventListener("load",p),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},D=()=>t(()=>import("./advanced-usage.en-US-10b002e7.js"),["assets/advanced-usage.en-US-10b002e7.js","assets/vue-libs-12a1683e.js"]),V=()=>t(()=>import("./advanced-usage.zh-CN-3ffbe92b.js"),["assets/advanced-usage.zh-CN-3ffbe92b.js","assets/vue-libs-12a1683e.js"]),O=()=>t(()=>import("./changelog.en-US-ec8a4b43.js"),["assets/changelog.en-US-ec8a4b43.js","assets/vue-libs-12a1683e.js"]),C=()=>t(()=>import("./changelog.zh-CN-243f73a2.js"),["assets/changelog.zh-CN-243f73a2.js","assets/vue-libs-12a1683e.js"]),S=()=>t(()=>import("./contribution.en-US-bc0780cf.js"),["assets/contribution.en-US-bc0780cf.js","assets/vue-libs-12a1683e.js"]),g=()=>t(()=>import("./contribution.zh-CN-0d96e483.js"),["assets/contribution.zh-CN-0d96e483.js","assets/vue-libs-12a1683e.js"]),U=()=>t(()=>import("./design.en-US-0691ed20.js"),["assets/design.en-US-0691ed20.js","assets/vue-libs-12a1683e.js","assets/design.en-US-55e4382d.css"]),f=()=>t(()=>import("./design.zh-CN-49a38d8b.js"),["assets/design.zh-CN-49a38d8b.js","assets/vue-libs-12a1683e.js","assets/design.en-US-55e4382d.css"]),N=()=>t(()=>import("./faq.en-US-6bf2e24b.js"),["assets/faq.en-US-6bf2e24b.js","assets/vue-libs-12a1683e.js"]),z=()=>t(()=>import("./faq.zh-CN-898179c7.js"),["assets/faq.zh-CN-898179c7.js","assets/vue-libs-12a1683e.js"]),b=()=>t(()=>import("./home.en-US-9b18d9fa.js"),["assets/home.en-US-9b18d9fa.js","assets/vue-libs-12a1683e.js"]),y=()=>t(()=>import("./home.zh-CN-e54ec480.js"),["assets/home.zh-CN-e54ec480.js","assets/vue-libs-12a1683e.js"]),w=()=>t(()=>import("./migrate-from-v2.en-US-54d39845.js"),["assets/migrate-from-v2.en-US-54d39845.js","assets/vue-libs-12a1683e.js"]),k=()=>t(()=>import("./migrate-from-v2.zh-CN-7a8556c4.js"),["assets/migrate-from-v2.zh-CN-7a8556c4.js","assets/vue-libs-12a1683e.js"]),B=()=>t(()=>import("./migrate-from-v3.en-US-861c7319.js"),["assets/migrate-from-v3.en-US-861c7319.js","assets/vue-libs-12a1683e.js"]),x=()=>t(()=>import("./migrate-from-v3.zh-CN-b7d76108.js"),["assets/migrate-from-v3.zh-CN-b7d76108.js","assets/vue-libs-12a1683e.js"]),F=()=>t(()=>import("./quickstart.en-US-c5d2511d.js"),["assets/quickstart.en-US-c5d2511d.js","assets/vue-libs-12a1683e.js"]),M=()=>t(()=>import("./quickstart.zh-CN-90c15ea4.js"),["assets/quickstart.zh-CN-90c15ea4.js","assets/vue-libs-12a1683e.js"]),q=()=>t(()=>import("./release-note-v4.en-US-e1119f1b.js"),["assets/release-note-v4.en-US-e1119f1b.js","assets/vue-libs-12a1683e.js"]),G=()=>t(()=>import("./release-note-v4.zh-CN-85a87971.js"),["assets/release-note-v4.zh-CN-85a87971.js","assets/vue-libs-12a1683e.js"]),j=()=>t(()=>import("./use-click-away.en-US-717ab5c1.js"),["assets/use-click-away.en-US-717ab5c1.js","assets/vue-libs-12a1683e.js"]),W=()=>t(()=>import("./use-click-away.zh-CN-031a66b7.js"),["assets/use-click-away.zh-CN-031a66b7.js","assets/vue-libs-12a1683e.js"]),$=()=>t(()=>import("./use-count-down.en-US-637faad9.js"),["assets/use-count-down.en-US-637faad9.js","assets/vue-libs-12a1683e.js"]),H=()=>t(()=>import("./use-count-down.zh-CN-72d3d10a.js"),["assets/use-count-down.zh-CN-72d3d10a.js","assets/vue-libs-12a1683e.js"]),K=()=>t(()=>import("./use-custom-field-value.en-US-2ccaef51.js"),["assets/use-custom-field-value.en-US-2ccaef51.js","assets/vue-libs-12a1683e.js"]),Q=()=>t(()=>import("./use-custom-field-value.zh-CN-4acdc906.js"),["assets/use-custom-field-value.zh-CN-4acdc906.js","assets/vue-libs-12a1683e.js"]),Z=()=>t(()=>import("./use-event-listener.en-US-c71f5e73.js"),["assets/use-event-listener.en-US-c71f5e73.js","assets/vue-libs-12a1683e.js"]),Y=()=>t(()=>import("./use-event-listener.zh-CN-deab9a50.js"),["assets/use-event-listener.zh-CN-deab9a50.js","assets/vue-libs-12a1683e.js"]),J=()=>t(()=>import("./use-page-visibility.en-US-5b85b443.js"),["assets/use-page-visibility.en-US-5b85b443.js","assets/vue-libs-12a1683e.js"]),X=()=>t(()=>import("./use-page-visibility.zh-CN-507e7c40.js"),["assets/use-page-visibility.zh-CN-507e7c40.js","assets/vue-libs-12a1683e.js"]),tt=()=>t(()=>import("./use-rect.en-US-523a2eb6.js"),["assets/use-rect.en-US-523a2eb6.js","assets/vue-libs-12a1683e.js"]),et=()=>t(()=>import("./use-rect.zh-CN-292aeae4.js"),["assets/use-rect.zh-CN-292aeae4.js","assets/vue-libs-12a1683e.js"]),_t=()=>t(()=>import("./use-relation.en-US-1e19d2c1.js"),["assets/use-relation.en-US-1e19d2c1.js","assets/vue-libs-12a1683e.js"]),ot=()=>t(()=>import("./use-relation.zh-CN-2eba522c.js"),["assets/use-relation.zh-CN-2eba522c.js","assets/vue-libs-12a1683e.js"]),it=()=>t(()=>import("./use-scroll-parent.en-US-d0c6de9c.js"),["assets/use-scroll-parent.en-US-d0c6de9c.js","assets/vue-libs-12a1683e.js"]),rt=()=>t(()=>import("./use-scroll-parent.zh-CN-e83650a9.js"),["assets/use-scroll-parent.zh-CN-e83650a9.js","assets/vue-libs-12a1683e.js"]),at=()=>t(()=>import("./use-toggle.en-US-01eb9f22.js"),["assets/use-toggle.en-US-01eb9f22.js","assets/vue-libs-12a1683e.js"]),nt=()=>t(()=>import("./use-toggle.zh-CN-2da822dd.js"),["assets/use-toggle.zh-CN-2da822dd.js","assets/vue-libs-12a1683e.js"]),st=()=>t(()=>import("./use-window-size.en-US-c9920f77.js"),["assets/use-window-size.en-US-c9920f77.js","assets/vue-libs-12a1683e.js"]),pt=()=>t(()=>import("./use-window-size.zh-CN-9bcf4374.js"),["assets/use-window-size.zh-CN-9bcf4374.js","assets/vue-libs-12a1683e.js"]),lt=()=>t(()=>import("./vant-use-intro.en-US-5ce9fea1.js"),["assets/vant-use-intro.en-US-5ce9fea1.js","assets/vue-libs-12a1683e.js"]),ct=()=>t(()=>import("./vant-use-intro.zh-CN-f71e28b9.js"),["assets/vant-use-intro.zh-CN-f71e28b9.js","assets/vue-libs-12a1683e.js"]),dt=()=>t(()=>import("./README.zh-CN-06435ad2.js"),["assets/README.zh-CN-06435ad2.js","assets/vue-libs-12a1683e.js"]),ut=()=>t(()=>import("./README.zh-CN-123a0e27.js"),["assets/README.zh-CN-123a0e27.js","assets/vue-libs-12a1683e.js"]),Et=()=>t(()=>import("./README.zh-CN-e16ddaf4.js"),["assets/README.zh-CN-e16ddaf4.js","assets/vue-libs-12a1683e.js"]),ht=()=>t(()=>import("./README.zh-CN-a4195cce.js"),["assets/README.zh-CN-a4195cce.js","assets/vue-libs-12a1683e.js"]),mt=()=>t(()=>import("./README.zh-CN-86cfadff.js"),["assets/README.zh-CN-86cfadff.js","assets/vue-libs-12a1683e.js"]),vt=()=>t(()=>import("./README.zh-CN-f5e78499.js"),["assets/README.zh-CN-f5e78499.js","assets/vue-libs-12a1683e.js"]),Pt=()=>t(()=>import("./README.zh-CN-1e439bee.js"),["assets/README.zh-CN-1e439bee.js","assets/vue-libs-12a1683e.js"]),Lt=()=>t(()=>import("./README.zh-CN-8537e18e.js"),["assets/README.zh-CN-8537e18e.js","assets/vue-libs-12a1683e.js"]),Tt=()=>t(()=>import("./README.zh-CN-6ae64564.js"),["assets/README.zh-CN-6ae64564.js","assets/vue-libs-12a1683e.js"]),At=()=>t(()=>import("./README.zh-CN-5b850bc2.js"),["assets/README.zh-CN-5b850bc2.js","assets/vue-libs-12a1683e.js"]),Rt=()=>t(()=>import("./README.zh-CN-3cb55c81.js"),["assets/README.zh-CN-3cb55c81.js","assets/vue-libs-12a1683e.js"]),It=()=>t(()=>import("./README.zh-CN-d0abf2ae.js"),["assets/README.zh-CN-d0abf2ae.js","assets/vue-libs-12a1683e.js"]),Dt=()=>t(()=>import("./README.zh-CN-c41a1924.js"),["assets/README.zh-CN-c41a1924.js","assets/vue-libs-12a1683e.js"]),Vt=()=>t(()=>import("./README.zh-CN-596367ab.js"),["assets/README.zh-CN-596367ab.js","assets/vue-libs-12a1683e.js"]),Ot=()=>t(()=>import("./README.zh-CN-099df2f4.js"),["assets/README.zh-CN-099df2f4.js","assets/vue-libs-12a1683e.js"]),Ct=()=>t(()=>import("./README.zh-CN-496cbced.js"),["assets/README.zh-CN-496cbced.js","assets/vue-libs-12a1683e.js"]),St=()=>t(()=>import("./README.zh-CN-a2c1b06a.js"),["assets/README.zh-CN-a2c1b06a.js","assets/vue-libs-12a1683e.js"]),gt=()=>t(()=>import("./README.zh-CN-80a95393.js"),["assets/README.zh-CN-80a95393.js","assets/vue-libs-12a1683e.js"]),Ut=()=>t(()=>import("./README.zh-CN-d50d3a64.js"),["assets/README.zh-CN-d50d3a64.js","assets/vue-libs-12a1683e.js"]),ft=()=>t(()=>import("./README.zh-CN-e1c51df8.js"),["assets/README.zh-CN-e1c51df8.js","assets/vue-libs-12a1683e.js"]),Nt=()=>t(()=>import("./README.zh-CN-284d336e.js"),["assets/README.zh-CN-284d336e.js","assets/vue-libs-12a1683e.js"]),zt=()=>t(()=>import("./README.zh-CN-118e679c.js"),["assets/README.zh-CN-118e679c.js","assets/vue-libs-12a1683e.js"]),bt=()=>t(()=>import("./README.zh-CN-a5df881f.js"),["assets/README.zh-CN-a5df881f.js","assets/vue-libs-12a1683e.js"]),yt=()=>t(()=>import("./README.zh-CN-368555f0.js"),["assets/README.zh-CN-368555f0.js","assets/vue-libs-12a1683e.js"]),wt=()=>t(()=>import("./README.zh-CN-9bf47984.js"),["assets/README.zh-CN-9bf47984.js","assets/vue-libs-12a1683e.js"]),kt=()=>t(()=>import("./README.zh-CN-727ec401.js"),["assets/README.zh-CN-727ec401.js","assets/vue-libs-12a1683e.js"]),Bt=()=>t(()=>import("./README.zh-CN-f2c0385b.js"),["assets/README.zh-CN-f2c0385b.js","assets/vue-libs-12a1683e.js"]),xt=()=>t(()=>import("./README.zh-CN-6f68ca4e.js"),["assets/README.zh-CN-6f68ca4e.js","assets/vue-libs-12a1683e.js"]),Ft=()=>t(()=>import("./README.zh-CN-29569a35.js"),["assets/README.zh-CN-29569a35.js","assets/vue-libs-12a1683e.js"]),Mt=()=>t(()=>import("./README.zh-CN-0cd1d641.js"),["assets/README.zh-CN-0cd1d641.js","assets/vue-libs-12a1683e.js"]),qt=()=>t(()=>import("./README.zh-CN-e0a63d70.js"),["assets/README.zh-CN-e0a63d70.js","assets/vue-libs-12a1683e.js"]),Gt=()=>t(()=>import("./README.zh-CN-73d73867.js"),["assets/README.zh-CN-73d73867.js","assets/vue-libs-12a1683e.js"]),jt=()=>t(()=>import("./README.zh-CN-6a6e61ef.js"),["assets/README.zh-CN-6a6e61ef.js","assets/vue-libs-12a1683e.js"]),Wt=()=>t(()=>import("./README.zh-CN-c05b49e9.js"),["assets/README.zh-CN-c05b49e9.js","assets/vue-libs-12a1683e.js"]),$t=()=>t(()=>import("./README.zh-CN-9c1ae0b5.js"),["assets/README.zh-CN-9c1ae0b5.js","assets/vue-libs-12a1683e.js"]),Ht=()=>t(()=>import("./README.zh-CN-ad334675.js"),["assets/README.zh-CN-ad334675.js","assets/vue-libs-12a1683e.js"]),Kt=()=>t(()=>import("./README.zh-CN-6af553f3.js"),["assets/README.zh-CN-6af553f3.js","assets/vue-libs-12a1683e.js"]),Qt=()=>t(()=>import("./README.zh-CN-3905427d.js"),["assets/README.zh-CN-3905427d.js","assets/vue-libs-12a1683e.js"]),Zt=()=>t(()=>import("./README.zh-CN-38803ada.js"),["assets/README.zh-CN-38803ada.js","assets/vue-libs-12a1683e.js"]),Yt=()=>t(()=>import("./README.zh-CN-4fa8dd23.js"),["assets/README.zh-CN-4fa8dd23.js","assets/vue-libs-12a1683e.js"]),Jt=()=>t(()=>import("./README.zh-CN-315ff7e2.js"),["assets/README.zh-CN-315ff7e2.js","assets/vue-libs-12a1683e.js"]),Xt=()=>t(()=>import("./README.zh-CN-b0a758fc.js"),["assets/README.zh-CN-b0a758fc.js","assets/vue-libs-12a1683e.js"]),te=()=>t(()=>import("./README.zh-CN-5522f579.js"),["assets/README.zh-CN-5522f579.js","assets/vue-libs-12a1683e.js"]),ee=()=>t(()=>import("./README.zh-CN-1ffc4837.js"),["assets/README.zh-CN-1ffc4837.js","assets/vue-libs-12a1683e.js"]),_e=()=>t(()=>import("./README.zh-CN-fc5f1482.js"),["assets/README.zh-CN-fc5f1482.js","assets/vue-libs-12a1683e.js"]),oe=()=>t(()=>import("./README.zh-CN-087bfb79.js"),["assets/README.zh-CN-087bfb79.js","assets/vue-libs-12a1683e.js"]),ie=()=>t(()=>import("./README.zh-CN-f487a76d.js"),["assets/README.zh-CN-f487a76d.js","assets/vue-libs-12a1683e.js"]),re=()=>t(()=>import("./README.zh-CN-51394a04.js"),["assets/README.zh-CN-51394a04.js","assets/vue-libs-12a1683e.js"]),ae=()=>t(()=>import("./README.zh-CN-4c03f2a0.js"),["assets/README.zh-CN-4c03f2a0.js","assets/vue-libs-12a1683e.js"]),ne=()=>t(()=>import("./README.zh-CN-b4ccda39.js"),["assets/README.zh-CN-b4ccda39.js","assets/vue-libs-12a1683e.js"]),se=()=>t(()=>import("./README.zh-CN-3fe39069.js"),["assets/README.zh-CN-3fe39069.js","assets/vue-libs-12a1683e.js"]),pe=()=>t(()=>import("./README.zh-CN-805dcdef.js"),["assets/README.zh-CN-805dcdef.js","assets/vue-libs-12a1683e.js"]),le=()=>t(()=>import("./README.zh-CN-afe582d6.js"),["assets/README.zh-CN-afe582d6.js","assets/vue-libs-12a1683e.js"]),ce=()=>t(()=>import("./README.zh-CN-4ccbfdcc.js"),["assets/README.zh-CN-4ccbfdcc.js","assets/vue-libs-12a1683e.js"]),de=()=>t(()=>import("./README.zh-CN-56e2e1cb.js"),["assets/README.zh-CN-56e2e1cb.js","assets/vue-libs-12a1683e.js"]),ue=()=>t(()=>import("./README.zh-CN-edaeb30b.js"),["assets/README.zh-CN-edaeb30b.js","assets/vue-libs-12a1683e.js"]),Ee=()=>t(()=>import("./README.zh-CN-bb3f1855.js"),["assets/README.zh-CN-bb3f1855.js","assets/vue-libs-12a1683e.js"]),he=()=>t(()=>import("./README.zh-CN-c7249977.js"),["assets/README.zh-CN-c7249977.js","assets/vue-libs-12a1683e.js"]),me=()=>t(()=>import("./README.zh-CN-273e0c69.js"),["assets/README.zh-CN-273e0c69.js","assets/vue-libs-12a1683e.js"]),ve=()=>t(()=>import("./README.zh-CN-ef39616b.js"),["assets/README.zh-CN-ef39616b.js","assets/vue-libs-12a1683e.js"]),Pe=()=>t(()=>import("./README.zh-CN-59e4df42.js"),["assets/README.zh-CN-59e4df42.js","assets/vue-libs-12a1683e.js"]),Le=()=>t(()=>import("./README.zh-CN-dc91e2a0.js"),["assets/README.zh-CN-dc91e2a0.js","assets/vue-libs-12a1683e.js"]),Te=()=>t(()=>import("./README.zh-CN-00e9899e.js"),["assets/README.zh-CN-00e9899e.js","assets/vue-libs-12a1683e.js"]),Ae=()=>t(()=>import("./README.zh-CN-4cf4bfbe.js"),["assets/README.zh-CN-4cf4bfbe.js","assets/vue-libs-12a1683e.js"]),Re=()=>t(()=>import("./README.zh-CN-0204d0eb.js"),["assets/README.zh-CN-0204d0eb.js","assets/vue-libs-12a1683e.js"]),Ie=()=>t(()=>import("./README.zh-CN-65e2c031.js"),["assets/README.zh-CN-65e2c031.js","assets/vue-libs-12a1683e.js"]),De=()=>t(()=>import("./README.zh-CN-385a3d63.js"),["assets/README.zh-CN-385a3d63.js","assets/vue-libs-12a1683e.js"]),Ve=()=>t(()=>import("./README.zh-CN-699678bf.js"),["assets/README.zh-CN-699678bf.js","assets/vue-libs-12a1683e.js"]),Oe=()=>t(()=>import("./README.zh-CN-f2e47a65.js"),["assets/README.zh-CN-f2e47a65.js","assets/vue-libs-12a1683e.js"]),Ce=()=>t(()=>import("./README.zh-CN-4d263eac.js"),["assets/README.zh-CN-4d263eac.js","assets/vue-libs-12a1683e.js"]),Se=()=>t(()=>import("./README.zh-CN-1f929ff5.js"),["assets/README.zh-CN-1f929ff5.js","assets/vue-libs-12a1683e.js"]),ge=()=>t(()=>import("./README.zh-CN-7f07e495.js"),["assets/README.zh-CN-7f07e495.js","assets/vue-libs-12a1683e.js"]),Ue=()=>t(()=>import("./README.zh-CN-e2389941.js"),["assets/README.zh-CN-e2389941.js","assets/vue-libs-12a1683e.js"]),fe=()=>t(()=>import("./README.zh-CN-6319b2db.js"),["assets/README.zh-CN-6319b2db.js","assets/vue-libs-12a1683e.js"]),Ne=()=>t(()=>import("./README.zh-CN-3160cff5.js"),["assets/README.zh-CN-3160cff5.js","assets/vue-libs-12a1683e.js"]),ze=()=>t(()=>import("./README-d8765d0e.js"),["assets/README-d8765d0e.js","assets/vue-libs-12a1683e.js"]),be=()=>t(()=>import("./README-6fbb18b9.js"),["assets/README-6fbb18b9.js","assets/vue-libs-12a1683e.js"]),ye=()=>t(()=>import("./README-d8bb9aef.js"),["assets/README-d8bb9aef.js","assets/vue-libs-12a1683e.js"]),we=()=>t(()=>import("./README-d7383acc.js"),["assets/README-d7383acc.js","assets/vue-libs-12a1683e.js"]),ke=()=>t(()=>import("./README-9793e251.js"),["assets/README-9793e251.js","assets/vue-libs-12a1683e.js"]),Be=()=>t(()=>import("./README-9195e7cc.js"),["assets/README-9195e7cc.js","assets/vue-libs-12a1683e.js"]),xe=()=>t(()=>import("./README-440d27d8.js"),["assets/README-440d27d8.js","assets/vue-libs-12a1683e.js"]),Fe=()=>t(()=>import("./README-01b9b926.js"),["assets/README-01b9b926.js","assets/vue-libs-12a1683e.js"]),Me=()=>t(()=>import("./README-cfdab02c.js"),["assets/README-cfdab02c.js","assets/vue-libs-12a1683e.js"]),qe=()=>t(()=>import("./README-454647ee.js"),["assets/README-454647ee.js","assets/vue-libs-12a1683e.js"]),Ge=()=>t(()=>import("./README-6855afcc.js"),["assets/README-6855afcc.js","assets/vue-libs-12a1683e.js"]),je=()=>t(()=>import("./README-26a48989.js"),["assets/README-26a48989.js","assets/vue-libs-12a1683e.js"]),We=()=>t(()=>import("./README-233c62bb.js"),["assets/README-233c62bb.js","assets/vue-libs-12a1683e.js"]),$e=()=>t(()=>import("./README-819744c8.js"),["assets/README-819744c8.js","assets/vue-libs-12a1683e.js"]),He=()=>t(()=>import("./README-6f7d0aa9.js"),["assets/README-6f7d0aa9.js","assets/vue-libs-12a1683e.js"]),Ke=()=>t(()=>import("./README-cfefed87.js"),["assets/README-cfefed87.js","assets/vue-libs-12a1683e.js"]),Qe=()=>t(()=>import("./README-9bafc039.js"),["assets/README-9bafc039.js","assets/vue-libs-12a1683e.js"]),Ze=()=>t(()=>import("./README-c149a40b.js"),["assets/README-c149a40b.js","assets/vue-libs-12a1683e.js"]),Ye=()=>t(()=>import("./README-75ecce5c.js"),["assets/README-75ecce5c.js","assets/vue-libs-12a1683e.js"]),Je=()=>t(()=>import("./README-3b21ea69.js"),["assets/README-3b21ea69.js","assets/vue-libs-12a1683e.js"]),Xe=()=>t(()=>import("./README-6f7c0662.js"),["assets/README-6f7c0662.js","assets/vue-libs-12a1683e.js"]),t_=()=>t(()=>import("./README-6d54d742.js"),["assets/README-6d54d742.js","assets/vue-libs-12a1683e.js"]),e_=()=>t(()=>import("./README-3d1665a9.js"),["assets/README-3d1665a9.js","assets/vue-libs-12a1683e.js"]),__=()=>t(()=>import("./README-0f811552.js"),["assets/README-0f811552.js","assets/vue-libs-12a1683e.js"]),o_=()=>t(()=>import("./README-f8f996f6.js"),["assets/README-f8f996f6.js","assets/vue-libs-12a1683e.js"]),i_=()=>t(()=>import("./README-2cc6612a.js"),["assets/README-2cc6612a.js","assets/vue-libs-12a1683e.js"]),r_=()=>t(()=>import("./README-341e73ed.js"),["assets/README-341e73ed.js","assets/vue-libs-12a1683e.js"]),a_=()=>t(()=>import("./README-b290a86f.js"),["assets/README-b290a86f.js","assets/vue-libs-12a1683e.js"]),n_=()=>t(()=>import("./README-13c07300.js"),["assets/README-13c07300.js","assets/vue-libs-12a1683e.js"]),s_=()=>t(()=>import("./README-00048ff0.js"),["assets/README-00048ff0.js","assets/vue-libs-12a1683e.js"]),p_=()=>t(()=>import("./README-94629f70.js"),["assets/README-94629f70.js","assets/vue-libs-12a1683e.js"]),l_=()=>t(()=>import("./README-25e67e8d.js"),["assets/README-25e67e8d.js","assets/vue-libs-12a1683e.js"]),c_=()=>t(()=>import("./README-ddffda61.js"),["assets/README-ddffda61.js","assets/vue-libs-12a1683e.js"]),d_=()=>t(()=>import("./README-d1307624.js"),["assets/README-d1307624.js","assets/vue-libs-12a1683e.js"]),u_=()=>t(()=>import("./README-1859a24f.js"),["assets/README-1859a24f.js","assets/vue-libs-12a1683e.js"]),E_=()=>t(()=>import("./README-aea4789b.js"),["assets/README-aea4789b.js","assets/vue-libs-12a1683e.js"]),h_=()=>t(()=>import("./README-94b2e065.js"),["assets/README-94b2e065.js","assets/vue-libs-12a1683e.js"]),m_=()=>t(()=>import("./README-24e25091.js"),["assets/README-24e25091.js","assets/vue-libs-12a1683e.js"]),v_=()=>t(()=>import("./README-08c83530.js"),["assets/README-08c83530.js","assets/vue-libs-12a1683e.js"]),P_=()=>t(()=>import("./README-237b4ed7.js"),["assets/README-237b4ed7.js","assets/vue-libs-12a1683e.js"]),L_=()=>t(()=>import("./README-5b13921d.js"),["assets/README-5b13921d.js","assets/vue-libs-12a1683e.js"]),T_=()=>t(()=>import("./README-fbfd1f40.js"),["assets/README-fbfd1f40.js","assets/vue-libs-12a1683e.js"]),A_=()=>t(()=>import("./README-400d441f.js"),["assets/README-400d441f.js","assets/vue-libs-12a1683e.js"]),R_=()=>t(()=>import("./README-f9ef5b1c.js"),["assets/README-f9ef5b1c.js","assets/vue-libs-12a1683e.js"]),I_=()=>t(()=>import("./README-cf741aa3.js"),["assets/README-cf741aa3.js","assets/vue-libs-12a1683e.js"]),D_=()=>t(()=>import("./README-9c0890b8.js"),["assets/README-9c0890b8.js","assets/vue-libs-12a1683e.js"]),V_=()=>t(()=>import("./README-70cd02bb.js"),["assets/README-70cd02bb.js","assets/vue-libs-12a1683e.js"]),O_=()=>t(()=>import("./README-456e3c47.js"),["assets/README-456e3c47.js","assets/vue-libs-12a1683e.js"]),C_=()=>t(()=>import("./README-6d773606.js"),["assets/README-6d773606.js","assets/vue-libs-12a1683e.js"]),S_=()=>t(()=>import("./README-67561e29.js"),["assets/README-67561e29.js","assets/vue-libs-12a1683e.js"]),g_=()=>t(()=>import("./README-a56b4014.js"),["assets/README-a56b4014.js","assets/vue-libs-12a1683e.js"]),U_=()=>t(()=>import("./README-2ad04ffc.js"),["assets/README-2ad04ffc.js","assets/vue-libs-12a1683e.js"]),f_=()=>t(()=>import("./README-79a2385e.js"),["assets/README-79a2385e.js","assets/vue-libs-12a1683e.js"]),N_=()=>t(()=>import("./README-226f7c7c.js"),["assets/README-226f7c7c.js","assets/vue-libs-12a1683e.js"]),z_=()=>t(()=>import("./README-2a6c3940.js"),["assets/README-2a6c3940.js","assets/vue-libs-12a1683e.js"]),b_=()=>t(()=>import("./README-748b79c5.js"),["assets/README-748b79c5.js","assets/vue-libs-12a1683e.js"]),y_=()=>t(()=>import("./README-cbae40d2.js"),["assets/README-cbae40d2.js","assets/vue-libs-12a1683e.js"]),w_=()=>t(()=>import("./README-abb1c239.js"),["assets/README-abb1c239.js","assets/vue-libs-12a1683e.js"]),k_=()=>t(()=>import("./README-31e8a284.js"),["assets/README-31e8a284.js","assets/vue-libs-12a1683e.js"]),B_=()=>t(()=>import("./README-ccd3e7f4.js"),["assets/README-ccd3e7f4.js","assets/vue-libs-12a1683e.js"]),x_=()=>t(()=>import("./README-bfc84fc6.js"),["assets/README-bfc84fc6.js","assets/vue-libs-12a1683e.js"]),F_=()=>t(()=>import("./README-d1eabc67.js"),["assets/README-d1eabc67.js","assets/vue-libs-12a1683e.js"]),M_=()=>t(()=>import("./README-d9f1690c.js"),["assets/README-d9f1690c.js","assets/vue-libs-12a1683e.js"]),q_=()=>t(()=>import("./README-00e3af0b.js"),["assets/README-00e3af0b.js","assets/vue-libs-12a1683e.js"]),G_=()=>t(()=>import("./README-74629b67.js"),["assets/README-74629b67.js","assets/vue-libs-12a1683e.js"]),j_=()=>t(()=>import("./README-9dcfde4b.js"),["assets/README-9dcfde4b.js","assets/vue-libs-12a1683e.js"]),W_=()=>t(()=>import("./README-2cbe4652.js"),["assets/README-2cbe4652.js","assets/vue-libs-12a1683e.js"]),$_=()=>t(()=>import("./README-f67c9c75.js"),["assets/README-f67c9c75.js","assets/vue-libs-12a1683e.js"]),H_=()=>t(()=>import("./README-49d049e9.js"),["assets/README-49d049e9.js","assets/vue-libs-12a1683e.js"]),K_=()=>t(()=>import("./README-76d9cacb.js"),["assets/README-76d9cacb.js","assets/vue-libs-12a1683e.js"]),Q_=()=>t(()=>import("./README-b2039c4d.js"),["assets/README-b2039c4d.js","assets/vue-libs-12a1683e.js"]),Z_=()=>t(()=>import("./README-c7723e19.js"),["assets/README-c7723e19.js","assets/vue-libs-12a1683e.js"]),Y_=()=>t(()=>import("./README-4101d6fd.js"),["assets/README-4101d6fd.js","assets/vue-libs-12a1683e.js"]),J_=()=>t(()=>import("./README-5ebbb29c.js"),["assets/README-5ebbb29c.js","assets/vue-libs-12a1683e.js"]),X_=()=>t(()=>import("./README-16f112f6.js"),["assets/README-16f112f6.js","assets/vue-libs-12a1683e.js"]),to=()=>t(()=>import("./README-1d920c97.js"),["assets/README-1d920c97.js","assets/vue-libs-12a1683e.js"]),eo=()=>t(()=>import("./README-01997b69.js"),["assets/README-01997b69.js","assets/vue-libs-12a1683e.js"]),_o=()=>t(()=>import("./README-af38f0af.js"),["assets/README-af38f0af.js","assets/vue-libs-12a1683e.js"]),oo=()=>t(()=>import("./README-31ed6f25.js"),["assets/README-31ed6f25.js","assets/vue-libs-12a1683e.js"]),E={name:"vant",build:{srcDir:"src",tagPrefix:"van-",namedExport:!0,skipInstall:["lazyload"],packageManager:"pnpm",extensions:{esm:".mjs"},site:{publicPath:typeof window>"u"&&{}.PUBLIC_PATH||"/vant/"},vetur:{tagPrefix:"van-"},css:{removeSourceFile:!0}},site:{defaultLang:"en-US",darkModeClass:"van-theme-dark",lightModeClass:"van-theme-light",enableVConsole:!1,versions:[{label:"v1",link:"/vant/v1/"},{label:"v2",link:"/vant/v2/"},{label:"v3",link:"/vant/v3/"}],baiduAnalytics:{seed:"af5d41bc4e446e76665dbe3ec18d55c3"},headHtml:`<script>
if (location.host === 'youzan.github.io') {
location.href = location.href.replace('youzan.github.io', 'vant-ui.github.io');
}
<\/script>
`,locales:{"zh-CN":{title:"Vant 4",subtitle:"（适用于 Vue 3）",description:"轻量、可定制的移动端组件库",logo:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",langLabel:"中",links:[{logo:"https://fastly.jsdelivr.net/npm/@vant/assets/weapp.svg",url:"https://vant-contrib.gitee.io/vant-weapp/"},{logo:"https://fastly.jsdelivr.net/npm/@vant/assets/github.svg",url:"https://github.com/vant-ui/vant"}],nav:[{title:"开发指南",items:[{path:"home",title:"介绍"},{path:"quickstart",title:"快速上手"},{path:"advanced-usage",title:"进阶用法"},{path:"faq",title:"常见问题"},{path:"changelog",title:"更新日志"},{path:"release-note-v4",title:"4.0 更新介绍"},{path:"migrate-from-v2",title:"从 v2 升级到 v3"},{path:"migrate-from-v3",title:"从 v3 升级到 v4"},{path:"contribution",title:"贡献指南"},{path:"design",title:"设计资源"},{path:"locale",title:"国际化"}]},{title:"基础组件",items:[{path:"button",title:"Button 按钮"},{path:"cell",title:"Cell 单元格"},{path:"config-provider",title:"ConfigProvider 全局配置"},{path:"icon",title:"Icon 图标"},{path:"image",title:"Image 图片"},{path:"col",title:"Layout 布局"},{path:"popup",title:"Popup 弹出层"},{path:"space",title:"Space 间距"},{path:"style",title:"Style 内置样式"},{path:"toast",title:"Toast 轻提示"}]},{title:"表单组件",items:[{path:"calendar",title:"Calendar 日历"},{path:"cascader",title:"Cascader 级联选择"},{path:"checkbox",title:"Checkbox 复选框"},{path:"date-picker",title:"DatePicker 日期选择"},{path:"field",title:"Field 输入框"},{path:"form",title:"Form 表单"},{path:"number-keyboard",title:"NumberKeyboard 数字键盘"},{path:"password-input",title:"PasswordInput 密码输入框"},{path:"picker",title:"Picker 选择器"},{path:"picker-group",title:"PickerGroup 选择器组"},{path:"radio",title:"Radio 单选框"},{path:"rate",title:"Rate 评分"},{path:"search",title:"Search 搜索"},{path:"slider",title:"Slider 滑块"},{path:"stepper",title:"Stepper 步进器"},{path:"switch",title:"Switch 开关"},{path:"time-picker",title:"TimePicker 时间选择"},{path:"uploader",title:"Uploader 文件上传"}]},{title:"反馈组件",items:[{path:"action-sheet",title:"ActionSheet 动作面板"},{path:"dialog",title:"Dialog 弹出框"},{path:"dropdown-menu",title:"DropdownMenu 下拉菜单"},{path:"loading",title:"Loading 加载"},{path:"notify",title:"Notify 消息通知"},{path:"overlay",title:"Overlay 遮罩层"},{path:"pull-refresh",title:"PullRefresh 下拉刷新"},{path:"share-sheet",title:"ShareSheet 分享面板"},{path:"swipe-cell",title:"SwipeCell 滑动单元格"}]},{title:"展示组件",items:[{path:"badge",title:"Badge 徽标"},{path:"circle",title:"Circle 环形进度条"},{path:"collapse",title:"Collapse 折叠面板"},{path:"count-down",title:"CountDown 倒计时"},{path:"divider",title:"Divider 分割线"},{path:"empty",title:"Empty 空状态"},{path:"image-preview",title:"ImagePreview 图片预览"},{path:"lazyload",title:"Lazyload 懒加载"},{path:"list",title:"List 列表"},{path:"notice-bar",title:"NoticeBar 通知栏"},{path:"popover",title:"Popover 气泡弹出框"},{path:"progress",title:"Progress 进度条"},{path:"skeleton",title:"Skeleton 骨架屏"},{path:"steps",title:"Steps 步骤条"},{path:"sticky",title:"Sticky 粘性布局"},{path:"swipe",title:"Swipe 轮播"},{path:"tag",title:"Tag 标签"},{path:"text-ellipsis",title:"TextEllipsis 文本省略"}]},{title:"导航组件",items:[{path:"action-bar",title:"ActionBar 动作栏"},{path:"grid",title:"Grid 宫格"},{path:"index-bar",title:"IndexBar 索引栏"},{path:"nav-bar",title:"NavBar 导航栏"},{path:"pagination",title:"Pagination 分页"},{path:"sidebar",title:"Sidebar 侧边导航"},{path:"tab",title:"Tab 标签页"},{path:"tabbar",title:"Tabbar 标签栏"},{path:"tree-select",title:"TreeSelect 分类选择"},{path:"back-top",title:"BackTop 回到顶部"}]},{title:"业务组件",items:[{path:"address-edit",title:"AddressEdit 地址编辑"},{path:"address-list",title:"AddressList 地址列表"},{path:"area",title:"Area 省市区选择"},{path:"card",title:"Card 商品卡片"},{path:"contact-card",title:"ContactCard 联系人卡片"},{path:"contact-edit",title:"ContactEdit 联系人编辑"},{path:"contact-list",title:"ContactList 联系人列表"},{path:"coupon-list",title:"Coupon 优惠券"},{path:"submit-bar",title:"SubmitBar 提交订单栏"}]},{title:"组合式 API",items:[{path:"vant-use-intro",title:"介绍"},{path:"use-click-away",title:"useClickAway"},{path:"use-count-down",title:"useCountDown"},{path:"use-custom-field-value",title:"useCustomFieldValue"},{path:"use-event-listener",title:"useEventListener"},{path:"use-page-visibility",title:"usePageVisibility"},{path:"use-rect",title:"useRect"},{path:"use-relation",title:"useRelation"},{path:"use-scroll-parent",title:"useScrollParent"},{path:"use-toggle",title:"useToggle"},{path:"use-window-size",title:"useWindowSize"}]}]},"en-US":{title:"Vant 4",subtitle:" (for Vue 3)",description:"A lightweight, customizable Vue UI library for mobile web apps.",logo:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",langLabel:"EN",links:[{logo:"https://fastly.jsdelivr.net/npm/@vant/assets/github.svg",url:"https://github.com/vant-ui/vant"}],nav:[{title:"Essentials",items:[{path:"home",title:"Introduction"},{path:"quickstart",title:"Quickstart"},{path:"advanced-usage",title:"Advanced Usage"},{path:"faq",title:"FAQ"},{path:"changelog",title:"Changelog"},{path:"release-note-v4",title:"4.0 Release Note"},{path:"migrate-from-v2",title:"Upgrade from v2 to v3"},{path:"migrate-from-v3",title:"Upgrade from v3 to v4"},{path:"contribution",title:"Contribution Guide"},{path:"design",title:"Design Resources"},{path:"locale",title:"Internationalization"}]},{title:"Basic Components",items:[{path:"button",title:"Button"},{path:"cell",title:"Cell"},{path:"config-provider",title:"ConfigProvider"},{path:"icon",title:"Icon"},{path:"image",title:"Image"},{path:"col",title:"Layout"},{path:"popup",title:"Popup"},{path:"space",title:"Space"},{path:"style",title:"Built-in style"},{path:"toast",title:"Toast"}]},{title:"Form Components",items:[{path:"calendar",title:"Calendar"},{path:"cascader",title:"Cascader"},{path:"checkbox",title:"Checkbox"},{path:"date-picker",title:"DatePicker"},{path:"field",title:"Field"},{path:"form",title:"Form"},{path:"number-keyboard",title:"NumberKeyboard"},{path:"password-input",title:"PasswordInput"},{path:"picker",title:"Picker"},{path:"picker-group",title:"PickerGroup"},{path:"radio",title:"Radio"},{path:"rate",title:"Rate"},{path:"search",title:"Search"},{path:"slider",title:"Slider"},{path:"stepper",title:"Stepper"},{path:"switch",title:"Switch"},{path:"time-picker",title:"TimePicker"},{path:"uploader",title:"Uploader"}]},{title:"Action Components",items:[{path:"action-sheet",title:"ActionSheet"},{path:"dialog",title:"Dialog"},{path:"dropdown-menu",title:"DropdownMenu"},{path:"loading",title:"Loading"},{path:"notify",title:"Notify"},{path:"overlay",title:"Overlay"},{path:"pull-refresh",title:"PullRefresh"},{path:"share-sheet",title:"ShareSheet"},{path:"swipe-cell",title:"SwipeCell"}]},{title:"Display Components",items:[{path:"badge",title:"Badge"},{path:"circle",title:"Circle"},{path:"collapse",title:"Collapse"},{path:"count-down",title:"CountDown"},{path:"divider",title:"Divider"},{path:"empty",title:"Empty"},{path:"image-preview",title:"ImagePreview"},{path:"lazyload",title:"Lazyload"},{path:"list",title:"List"},{path:"notice-bar",title:"NoticeBar"},{path:"popover",title:"Popover"},{path:"progress",title:"Progress"},{path:"skeleton",title:"Skeleton"},{path:"steps",title:"Steps"},{path:"sticky",title:"Sticky"},{path:"swipe",title:"Swipe"},{path:"tag",title:"Tag"},{path:"text-ellipsis",title:"TextEllipsis"}]},{title:"Navigation Components",items:[{path:"action-bar",title:"ActionBar"},{path:"grid",title:"Grid"},{path:"index-bar",title:"IndexBar"},{path:"nav-bar",title:"NavBar"},{path:"pagination",title:"Pagination"},{path:"sidebar",title:"Sidebar"},{path:"tab",title:"Tab"},{path:"tabbar",title:"Tabbar"},{path:"tree-select",title:"TreeSelect"},{path:"back-top",title:"BackTop"}]},{title:"Business Components",items:[{path:"address-edit",title:"AddressEdit"},{path:"address-list",title:"AddressList"},{path:"area",title:"Area"},{path:"card",title:"Card"},{path:"contact-card",title:"ContactCard"},{path:"contact-edit",title:"ContactEdit"},{path:"contact-list",title:"ContactList"},{path:"coupon-list",title:"Coupon"},{path:"submit-bar",title:"SubmitBar"}]},{title:"Composables",items:[{path:"vant-use-intro",title:"Intro"},{path:"use-click-away",title:"useClickAway"},{path:"use-count-down",title:"useCountDown"},{path:"use-custom-field-value",title:"useCustomFieldValue"},{path:"use-event-listener",title:"useEventListener"},{path:"use-page-visibility",title:"usePageVisibility"},{path:"use-rect",title:"useRect"},{path:"use-relation",title:"useRelation"},{path:"use-scroll-parent",title:"useScrollParent"},{path:"use-toggle",title:"useToggle"},{path:"use-window-size",title:"useWindowSize"}]}]}}}},lo={AdvancedUsage_en_US:D,AdvancedUsage_zh_CN:V,Changelog_en_US:O,Changelog_zh_CN:C,Contribution_en_US:S,Contribution_zh_CN:g,Design_en_US:U,Design_zh_CN:f,Faq_en_US:N,Faq_zh_CN:z,Home_en_US:b,Home_zh_CN:y,MigrateFromV2_en_US:w,MigrateFromV2_zh_CN:k,MigrateFromV3_en_US:B,MigrateFromV3_zh_CN:x,Quickstart_en_US:F,Quickstart_zh_CN:M,ReleaseNoteV4_en_US:q,ReleaseNoteV4_zh_CN:G,UseClickAway_en_US:j,UseClickAway_zh_CN:W,UseCountDown_en_US:$,UseCountDown_zh_CN:H,UseCustomFieldValue_en_US:K,UseCustomFieldValue_zh_CN:Q,UseEventListener_en_US:Z,UseEventListener_zh_CN:Y,UsePageVisibility_en_US:J,UsePageVisibility_zh_CN:X,UseRect_en_US:tt,UseRect_zh_CN:et,UseRelation_en_US:_t,UseRelation_zh_CN:ot,UseScrollParent_en_US:it,UseScrollParent_zh_CN:rt,UseToggle_en_US:at,UseToggle_zh_CN:nt,UseWindowSize_en_US:st,UseWindowSize_zh_CN:pt,VantUseIntro_en_US:lt,VantUseIntro_zh_CN:ct,ActionBar_zh_CN:dt,ActionSheet_zh_CN:ut,AddressEdit_zh_CN:Et,AddressList_zh_CN:ht,Area_zh_CN:mt,BackTop_zh_CN:vt,Badge_zh_CN:Pt,Button_zh_CN:Lt,Calendar_zh_CN:Tt,Card_zh_CN:At,Cascader_zh_CN:Rt,Cell_zh_CN:It,Checkbox_zh_CN:Dt,Circle_zh_CN:Vt,Col_zh_CN:Ot,Collapse_zh_CN:Ct,ConfigProvider_zh_CN:St,ContactCard_zh_CN:gt,ContactEdit_zh_CN:Ut,ContactList_zh_CN:ft,CountDown_zh_CN:Nt,CouponList_zh_CN:zt,DatePicker_zh_CN:bt,Dialog_zh_CN:yt,Divider_zh_CN:wt,DropdownMenu_zh_CN:kt,Empty_zh_CN:Bt,Field_zh_CN:xt,Form_zh_CN:Ft,Grid_zh_CN:Mt,Icon_zh_CN:qt,Image_zh_CN:Gt,ImagePreview_zh_CN:jt,IndexBar_zh_CN:Wt,Lazyload_zh_CN:$t,List_zh_CN:Ht,Loading_zh_CN:Kt,Locale_zh_CN:Qt,NavBar_zh_CN:Zt,NoticeBar_zh_CN:Yt,Notify_zh_CN:Jt,NumberKeyboard_zh_CN:Xt,Overlay_zh_CN:te,Pagination_zh_CN:ee,PasswordInput_zh_CN:_e,Picker_zh_CN:oe,PickerGroup_zh_CN:ie,Popover_zh_CN:re,Popup_zh_CN:ae,Progress_zh_CN:ne,PullRefresh_zh_CN:se,Radio_zh_CN:pe,Rate_zh_CN:le,Search_zh_CN:ce,ShareSheet_zh_CN:de,Sidebar_zh_CN:ue,Skeleton_zh_CN:Ee,Slider_zh_CN:he,Space_zh_CN:me,Stepper_zh_CN:ve,Steps_zh_CN:Pe,Sticky_zh_CN:Le,Style_zh_CN:Te,SubmitBar_zh_CN:Ae,Swipe_zh_CN:Re,SwipeCell_zh_CN:Ie,Switch_zh_CN:De,Tab_zh_CN:Ve,Tabbar_zh_CN:Oe,Tag_zh_CN:Ce,TextEllipsis_zh_CN:Se,TimePicker_zh_CN:ge,Toast_zh_CN:Ue,TreeSelect_zh_CN:fe,Uploader_zh_CN:Ne,ActionBar_en_US:ze,ActionSheet_en_US:be,AddressEdit_en_US:ye,AddressList_en_US:we,Area_en_US:ke,BackTop_en_US:Be,Badge_en_US:xe,Button_en_US:Fe,Calendar_en_US:Me,Card_en_US:qe,Cascader_en_US:Ge,Cell_en_US:je,Checkbox_en_US:We,Circle_en_US:$e,Col_en_US:He,Collapse_en_US:Ke,ConfigProvider_en_US:Qe,ContactCard_en_US:Ze,ContactEdit_en_US:Ye,ContactList_en_US:Je,CountDown_en_US:Xe,CouponList_en_US:t_,DatePicker_en_US:e_,Dialog_en_US:__,Divider_en_US:o_,DropdownMenu_en_US:i_,Empty_en_US:r_,Field_en_US:a_,Form_en_US:n_,Grid_en_US:s_,Icon_en_US:p_,Image_en_US:l_,ImagePreview_en_US:c_,IndexBar_en_US:d_,Lazyload_en_US:u_,List_en_US:E_,Loading_en_US:h_,Locale_en_US:m_,NavBar_en_US:v_,NoticeBar_en_US:P_,Notify_en_US:L_,NumberKeyboard_en_US:T_,Overlay_en_US:A_,Pagination_en_US:R_,PasswordInput_en_US:I_,Picker_en_US:D_,PickerGroup_en_US:V_,Popover_en_US:O_,Popup_en_US:C_,Progress_en_US:S_,PullRefresh_en_US:g_,Radio_en_US:U_,Rate_en_US:f_,Search_en_US:N_,ShareSheet_en_US:z_,Sidebar_en_US:b_,Skeleton_en_US:y_,SkeletonAvatar_en_US:w_,SkeletonImage_en_US:k_,SkeletonParagraph_en_US:B_,SkeletonTitle_en_US:x_,Slider_en_US:F_,Space_en_US:M_,Stepper_en_US:q_,Steps_en_US:G_,Sticky_en_US:j_,Style_en_US:W_,SubmitBar_en_US:$_,Swipe_en_US:H_,SwipeCell_en_US:K_,Switch_en_US:Q_,Tab_en_US:Z_,Tabbar_en_US:Y_,Tag_en_US:J_,TextEllipsis_en_US:X_,TimePicker_en_US:to,Toast_en_US:eo,TreeSelect_en_US:_o,Uploader_en_US:oo},co="4.1.2";let d=[],h=!1;function m(_){h?_():d.push(_)}window.top===window?window.addEventListener("message",_=>{_.data.type==="iframeReady"&&(h=!0,d.forEach(e=>e()),d=[])}):window.top.postMessage({type:"iframeReady"},"*");function v(){var i,a;const _=window.vueRouter,{path:e}=_.currentRoute.value;return(i=E.site.simulator)!=null&&i.routeMapper?(a=E.site.simulator)==null?void 0:a.routeMapper(e):e}function uo(){window.top.postMessage({type:"replacePath",value:v()},"*")}function Eo(){const _=document.querySelector("iframe");_&&m(()=>{_.contentWindow.postMessage({type:"replacePath",value:v()},"*")})}function ho(_){const e=document.querySelector("iframe");e&&m(()=>{e.contentWindow.postMessage({type:"updateTheme",value:_},"*")})}function io(){const _=window.localStorage.getItem("vantTheme");return _||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function mo(){const _=A(io());return window.addEventListener("message",e=>{var a,o;if(((a=e.data)==null?void 0:a.type)!=="updateTheme")return;const i=((o=e.data)==null?void 0:o.value)||"";_.value=i}),_}function vo(_){window.addEventListener("message",e=>{var a,o;if(((a=e.data)==null?void 0:a.type)!=="replacePath")return;const i=((o=e.data)==null?void 0:o.value)||"";_.currentRoute.value.path!==i&&_.replace(i).catch(()=>{})})}const ro=navigator.userAgent.toLowerCase(),Po=/ios|iphone|ipod|ipad|android/.test(ro);function Lo(_,e="-"){return _.replace(/([a-z\d])([A-Z])/g,"$1"+e+"$2").replace(/([A-Z])([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}function To(_){const e=document.createElement("textarea");e.value=_,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);const i=document.getSelection();if(!i)return;const a=i.rangeCount>0?i.getRangeAt(0):!1;e.select(),document.execCommand("copy"),document.body.removeChild(e),a&&(i.removeAllRanges(),i.addRange(a))}const P="zh-CN",ao="en-US",L="vant-cli-lang";let l=P;function Ao(){return l}function Ro(_){l=_,localStorage.setItem(L,_)}function Io(_){const e=localStorage.getItem(L);if(e){l=e;return}if(navigator.language&&navigator.language.indexOf("zh-")!==-1){l=P;return}l=_||ao}export{po as _,E as a,Ro as b,To as c,Io as d,lo as e,Eo as f,io as g,Lo as h,Po as i,Ao as j,t as k,vo as l,uo as m,co as p,ho as s,mo as u};