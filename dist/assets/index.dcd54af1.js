import{o as i,c as d,f as r,t as y,r as z,a as s,b as e,w as t,F as E,q as P,B as _,E as V,p as B,e as C}from"./index.d77509df.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";const I={__name:"HelloWorld",props:{msg:String},emits:["success"],setup(l,{emit:a}){const c=()=>{a("success",5)};return(p,f)=>(i(),d("div",null,[r("h1",null,y(l.msg),1),r("button",{type:"button",onClick:c},"\u5B50\u4F20\u7236")]))}};const M=l=>(B("data-v-6383b61a"),l=l(),C(),l),T=_("primary"),$=_("success"),H=_("warning"),N=_("danger"),U=_("info"),j=_("\u6309\u94AE"),q=_("\u62BD\u5C49"),D={class:"scrollbar-flex-content"},L=M(()=>r("span",null,"\u62BD\u5C49\u5F39\u6846",-1)),W={__name:"ElementPlusTest",setup(l){const a=z(!1),c=1,p=100,f=()=>{V.success("\u4F7F\u7528\u63D2\u4EF6\u81EA\u52A8\u5BFC\u5165\u6CE8\u518Celementplus\u7EC4\u4EF6")};return(J,o)=>{const b=s("House"),m=s("el-icon"),v=s("Female"),h=s("Male"),u=s("el-link"),g=s("el-button"),x=s("el-pagination"),k=s("el-space"),w=s("el-scrollbar"),S=s("el-drawer");return i(),d("div",null,[e(k,{wrap:"",direction:"horizontal",spacer:"|",alignment:"center",size:"large"},{default:t(()=>[e(m,null,{default:t(()=>[e(b)]),_:1}),e(m,null,{default:t(()=>[e(v)]),_:1}),e(m,null,{default:t(()=>[e(h)]),_:1}),e(u,{type:"primary"},{default:t(()=>[T]),_:1}),e(u,{type:"success"},{default:t(()=>[$]),_:1}),e(u,{type:"warning"},{default:t(()=>[H]),_:1}),e(u,{type:"danger"},{default:t(()=>[N]),_:1}),e(u,{type:"info"},{default:t(()=>[U]),_:1}),e(g,{plain:"",type:"primary",onClick:f},{default:t(()=>[j]),_:1}),e(g,{plain:"",type:"success",onClick:o[0]||(o[0]=n=>a.value=!0)},{default:t(()=>[q]),_:1}),e(x,{currentPage:c,"onUpdate:currentPage":o[1]||(o[1]=n=>c=n),"page-size":p,"onUpdate:page-size":o[2]||(o[2]=n=>p=n),"page-sizes":[100,200,300,400],small:!1,disabled:!1,background:!0,layout:"total, sizes, prev, pager, next, jumper",total:400})]),_:1}),e(w,null,{default:t(()=>[r("div",D,[(i(),d(E,null,P(50,n=>r("p",{key:n,class:"scrollbar-demo-item"},y(n),1)),64))])]),_:1}),e(S,{modelValue:a.value,"onUpdate:modelValue":o[3]||(o[3]=n=>a.value=n),title:"\u6807\u9898",direction:"ltr"},{default:t(()=>[L]),_:1},8,["modelValue"])])}}},A=F(W,[["__scopeId","data-v-6383b61a"]]),G=r("p",null,"home\u9875",-1),Q={__name:"index",setup(l){const a=c=>{console.log("\u5B50\u7EC4\u4EF6\u4F20\u8FC7\u6765\u7684\u503C",c)};return(c,p)=>(i(),d("div",null,[G,e(A),e(I,{msg:"\u7236\u4F20\u5B50",onSuccess:a})]))}};export{Q as default};
