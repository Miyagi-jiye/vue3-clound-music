import{P}from"./pagination.e4938183.js";import{_ as E}from"./_plugin-vue_export-helper.cdc0426e.js";import{h as V,a as h,o as n,c as _,b as u,F as f,q as y,d as k,w as d,j as C,t as g,n as x,x as D,ap as $,r as B,C as w,f as i,u as b}from"./index.00c0fa83.js";import{M as F}from"./mv.72a07a58.js";import"./playCountFilter.21fdfcbf.js";const N={class:"filter"},S={class:"top"},I={class:"area"},L={class:"type"},j={class:"order"},q={__name:"filter",emits:["clickEmit"],setup(c,{emit:r}){const a=V({type:"\u5168\u90E8",area:"\u5168\u90E8",order:"\u4E0A\u5347\u6700\u5FEB"}),o=V({type:[{name:"\u5168\u90E8"},{name:"\u5B98\u65B9\u7248"},{name:"\u539F\u58F0"},{name:"\u73B0\u573A\u7248"},{name:"\u7F51\u6613\u51FA\u54C1"}],area:[{name:"\u5168\u90E8"},{name:"\u5185\u5730"},{name:"\u6E2F\u53F0"},{name:"\u6B27\u7F8E"},{name:"\u65E5\u672C"},{name:"\u97E9\u56FD"}],order:[{name:"\u4E0A\u5347\u6700\u5FEB"},{name:"\u6700\u70ED"},{name:"\u6700\u65B0"}]});function v(t){a.type=t,r("clickEmit",a)}function l(t){a.area=t,r("clickEmit",a)}function p(t){a.order=t,r("clickEmit",a)}return(t,A)=>{const s=h("el-button");return n(),_("div",N,[u("div",S,[u("div",I,[(n(!0),_(f,null,y(o.area,e=>(n(),k(s,{round:"",size:"small",class:x(["type-item",{active:a.area==e.name}]),onClick:m=>l(e.name)},{default:d(()=>[C(g(e.name),1)]),_:2},1032,["class","onClick"]))),256))]),u("div",L,[(n(!0),_(f,null,y(o.type,e=>(n(),k(s,{round:"",size:"small",class:x(["type-item",{active:a.type==e.name}]),onClick:m=>v(e.name)},{default:d(()=>[C(g(e.name),1)]),_:2},1032,["class","onClick"]))),256))]),u("div",j,[(n(!0),_(f,null,y(o.order,e=>(n(),k(s,{round:"",size:"small",class:x(["type-item",{active:a.order==e.name}]),onClick:m=>p(e.name)},{default:d(()=>[C(g(e.name),1)]),_:2},1032,["class","onClick"]))),256))])])])}}},G=E(q,[["__scopeId","data-v-e2254137"]]),T=D("video",{state:()=>({mvAll:[],mvTotal:100,mvAllParams:{type:"\u5168\u90E8",area:"\u5168\u90E8",order:"\u4E0A\u5347\u6700\u5FEB",limit:20,offset:1}}),getters:{},actions:{async get_mvAll(){const c=await $(this.mvAllParams);this.mvAll=c.data.data,c.data.count&&(this.mvTotal=c.data.count),console.log("\u83B7\u53D6\u5168\u90E8MV\u89C6\u9891",c.data)}}});const R={class:"video"},U={__name:"index",setup(c){const r=B("mv"),{get_videoGroupList:a,get_mvAll:o}=T(),{mvAll:v,mvAllParams:l,mvTotal:p}=w(T());o();const t=s=>{l.value.type=s.type,l.value.area=s.area,l.value.order=s.order,l.value.offset=1,o()},A=()=>{o()};return(s,e)=>{const m=h("el-tab-pane"),M=h("el-tabs");return n(),_("div",R,[i(M,{class:"tab",modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=z=>r.value=z)},{default:d(()=>[i(m,{lazy:"",label:"\u89C6\u9891",name:"video"}),i(m,{lazy:"",label:"MV",name:"mv"},{default:d(()=>[i(G,{onClickEmit:t}),i(F,{myData:b(v),class:"MV"},null,8,["myData"]),i(P,{myData:b(l),mvTotal:b(p),onEmitClick:A,class:"pagination"},null,8,["myData","mvTotal"])]),_:1})]),_:1},8,["modelValue"])])}}},W=E(U,[["__scopeId","data-v-d3116cd5"]]);export{W as default};
