import{r as l,J as S,o as _,c as a,f as e,a as o,w,A as d,B as f,F as k,y as C,z as n,g as D,p as x,j as I}from"./index.664c0608.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";const u=i=>(x("data-v-5b328567"),i=i(),I(),i),T={class:"comments"},B={class:"comment-input"},A=u(()=>e("div",{class:"box",contenteditable:"true"},"\u8BF4\u8BF4\u4F60\u7684\u770B\u6CD5\u5427",-1)),F={class:"button"},H=u(()=>e("div",null,[e("p",null,"@"),e("p",null,"#")],-1)),N=D("\u53D1\u8868\u8BC4\u8BBA"),V={class:"comment-hot"},j={class:"title"},L=D(" \u70ED\u95E8\u8BC4\u8BBA "),U={class:"grid"},Y={class:"box"},E={class:"left"},J=["alt"],q={class:"right"},G={class:"top"},K={class:"column"},O={class:"nikename"},P={class:"vip"},Q={class:"content"},R={class:"row"},W=u(()=>e("p",null,"\u8BC4\u8BBA",-1)),X={class:"comment-all"},Z=u(()=>e("p",{class:"title"},"\u5168\u90E8\u8BC4\u8BBA",-1)),$={class:"left"},ee=["alt"],te={class:"right"},se={class:"column"},oe={class:"nikename"},ne={class:"vip"},ie={class:"content"},le={class:"row"},ce=u(()=>e("p",null,"\u8BC4\u8BBA",-1)),_e={__name:"songComments",props:{comments:{type:Array,default:()=>[]},hotComments:{type:Array,default:()=>[]}},setup(i){function y(c){c=c||null;let t=new Date(c),p=t.getFullYear()+"-",v=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",g=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",r=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",h=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",m=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return p+v+g+r+h+m}return(c,t)=>{const p=l("icon-smiling-face"),v=l("el-button"),g=l("icon-fire"),r=l("icon-vip-one"),h=l("icon-share-three"),m=l("icon-thumbs-up"),z=l("icon-comment"),b=S("img-lazy");return _(),a("div",T,[e("div",B,[A,e("div",F,[H,e("div",null,[o(p,{theme:"outline",size:"22",title:"\u8868\u60C5",class:"icon"}),o(v,{round:"",type:"primary",size:"small"},{default:w(()=>[N]),_:1})])])]),d(e("div",V,[e("p",j,[o(g,{theme:"two-tone",size:"16",fill:["#d31427","#ff0021"],strokeLinejoin:"miter"}),L]),e("div",U,[(_(!0),a(k,null,C(i.hotComments,s=>(_(),a("div",{key:s.user,class:"filter"},[e("div",Y,[e("div",E,[d(e("img",{alt:"\u7528\u6237ID="+s.user.userId},null,8,J),[[b,s.user.avatarUrl+"?param=50y50"]])]),e("div",q,[e("div",G,[e("div",K,[e("div",O,[e("div",P,[e("p",null,n(s.user.nickname),1),d(o(r,{theme:"outline",size:"14",fill:"#34d399"},null,512),[[f,s.user.vipType!==0]])]),o(h,{theme:"outline",size:"14",class:"share"})]),e("p",null,n(y(s.time)),1)]),e("span",Q,n(s.content),1)]),e("div",R,[e("div",null,[o(m,{theme:"outline",size:"16"}),e("p",null,n(s.likedCount),1)]),e("div",null,[o(z,{theme:"outline",size:"16"}),W])])])])]))),128))])],512),[[f,i.hotComments.length!==0]]),e("div",X,[Z,(_(!0),a(k,null,C(i.comments,s=>(_(),a("div",{class:"box",key:s.user},[e("div",$,[d(e("img",{alt:"\u7528\u6237ID="+s.user.userId},null,8,ee),[[b,s.user.avatarUrl+"?param=50y50"]])]),e("div",te,[e("div",se,[e("div",oe,[e("div",ne,[e("p",null,n(s.user.nickname),1),d(o(r,{theme:"outline",size:"14",fill:"#34d399"},null,512),[[f,s.user.vipType!==0]])]),o(h,{theme:"outline",size:"14",class:"share"})]),e("p",null,n(y(s.time)),1)]),e("span",ie,n(s.content),1),e("div",le,[e("div",null,[o(m,{theme:"outline",size:"16"}),e("p",null,n(s.likedCount),1)]),e("div",null,[o(z,{theme:"outline",size:"16"}),ce])])])]))),128))])])}}},ue=M(_e,[["__scopeId","data-v-5b328567"]]);export{ue as S};
