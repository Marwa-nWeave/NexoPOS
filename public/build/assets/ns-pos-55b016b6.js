import b from"./ns-pos-cart-58c0bb67.js";import v from"./ns-pos-grid-0dfc5867.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{an as m,af as o,G as t,H as r,F as h,al as x,z as S,ap as w,c as n,A as p}from"./npm~@vue~runtime-core_-19758cc2.js";import{z as l}from"./npm~@vue~shared_-951a29c4.js";import"./bootstrap-f2578954.js";import"./npm~lodash-aa78b5c6.js";import"./npm~@ckeditor~ckeditor5-build-classic_-ec80f51a.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-9e0721d0.js";import"./npm~axios-a342f982.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~moment-a9aaa855.js";import"./npm~vue-cc67080a.js";import"./npm~@vue~runtime-dom_-725465db.js";import"./npm~@vue~reactivity_-7ae94d11.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~rx-5861ffbe.js";import"./currency-2f725228.js";import"./npm~numeral-8327941c.js";import"./npm~currency.js-57f74176.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-dd0d6e93.js";import"./npm~@babel~runtime_-698f0f51.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-a3fb5412.js";import"./npm~fraction.js-3121ad22.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-f08b9df7.js";import"./npm~javascript-natural-sort-cf2d74ad.js";import"./npm~escape-latex-46fff9ea.js";import"./pos-section-switch-0869c4e1.js";import"./ns-pos-order-type-popup-ed2efad5.js";import"./ns-prompt-popup-67b4fee4.js";import"./npm~@ckeditor~ckeditor5-vue_-d19d601b.js";import"./ns-orders-preview-popup-663bed88.js";import"./npm~@dicebear~avatars_-5a75069a.js";import"./npm~pure-color-6693077a.js";import"./npm~svgson-4adeb197.js";import"./npm~deep-rename-keys-5100d9e1.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-392f1d0e.js";import"./npm~xml-reader-442daf8d.js";import"./npm~eventemitter3-3e95be7d.js";import"./npm~xml-lexer-4446ceee.js";import"./npm~@dicebear~avatars-avataaars-sprites_-67ce0fa4.js";import"./npm~vue2-daterange-picker-3f1f8307.js";import"./npm~vuedraggable-445ea347.js";import"./npm~sortablejs-bd130ff3.js";import"./npm~vue-upload-component-7f40d5fa.js";import"./ns-pos-shipping-popup-b2e30a33.js";const k={name:"ns-pos",computed:{buttons(){return POS.header.buttons}},mounted(){this.visibleSectionSubscriber=POS.visibleSection.subscribe(s=>{this.visibleSection=s});const e=document.getElementById("loader");e.classList.remove("fade-in-entrance"),e.classList.add("fade-out-exit"),setTimeout(()=>{e.remove(),POS.reset()},500)},unmounted(){this.visibleSectionSubscriber.unsubscribe()},data(){return{visibleSection:null,visibleSectionSubscriber:null}},components:{nsPosCart:b,nsPosGrid:v}},P={class:"h-full flex-auto flex flex-col",id:"pos-container"},g={class:"flex overflow-hidden flex-shrink-0 px-2 pt-2"},y={class:"-mx-2 flex overflow-x-auto pb-1"},B={class:"flex-auto overflow-hidden flex p-2"},C={class:"flex flex-auto overflow-hidden -m-2"};function z(e,s,L,N,i,c){const a=m("ns-pos-cart"),d=m("ns-pos-grid");return o(),t("div",P,[r("div",g,[r("div",y,[(o(!0),t(h,null,x(c.buttons,(u,f)=>(o(),t("div",{class:"header-buttons flex px-2 flex-shrink-0",key:f},[(o(),S(w(u)))]))),128))])]),r("div",B,[r("div",C,[["both","cart"].includes(i.visibleSection)?(o(),t("div",{key:0,class:l([i.visibleSection==="both"?"w-1/2":"w-full","flex overflow-hidden p-2"])},[n(a)],2)):p("",!0),["both","grid"].includes(i.visibleSection)?(o(),t("div",{key:1,class:l([i.visibleSection==="both"?"w-1/2":"w-full","p-2 flex overflow-hidden"])},[n(d)],2)):p("",!0)])])])}const Eo=_(k,[["render",z]]);export{Eo as default};
