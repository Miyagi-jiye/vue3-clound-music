import{P as h,a as m,o as _,c as r,b as t,t as p,F as S,q as M,f as o,p as U,l as L,C as V,m as w,r as z,Y as P,u as s,w as f,I as $,G as q,H as T}from"./index.00c0fa83.js";import{L as B}from"./loadMore.b25e7fee.js";import{S as N}from"./songComments.05721fb0.js";import{S as W}from"./songList.67aa41d1.js";import{M as E}from"./MoreText.a3e103e3.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const x=e=>(U("data-v-d195782f"),e=e(),L(),e),F={class:"info"},G={class:"flex"},R={class:"left"},j=["src"],H={class:"right"},O={class:"title"},Y={class:"box"},A=["src"],J={class:"nickname"},K={class:"tags"},Q={class:"description"},X={class:"btnGroup"},Z=x(()=>t("span",null,"\u64AD\u653E\u5168\u90E8",-1)),tt={class:"btn2"},et=x(()=>t("span",null,"\u6536\u85CF",-1)),st={class:"btn3"},ot={__name:"info",props:{myData:{type:Object,default:()=>({coverImgUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",name:"\u9ED8\u8BA4\u6807\u9898",creator:{avatarUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",nickname:"\u9ED8\u8BA4\u6635\u79F0",backgroundUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"},tags:["\u9ED8\u8BA4\u6807\u7B7E1","\u9ED8\u8BA4\u6807\u7B7E2","\u9ED8\u8BA4\u6807\u7B7E3"],description:"\u9ED8\u8BA4\u63CF\u8FF0"})}},setup(e){const{push_musicToPlayList:d}=h(),u=()=>{d()};return(y,c)=>{const a=m("icon-play-one"),n=m("icon-like"),l=m("icon-more");return _(),r("div",F,[t("div",G,[t("div",R,[t("img",{src:e.myData.coverImgUrl+"?param=180y180",alt:"\u5C01\u9762"},null,8,j)]),t("div",H,[t("p",O,p(e.myData.name),1),t("div",Y,[t("img",{class:"avatar",src:e.myData.creator.avatarUrl+"?param=40y40",alt:"\u4F5C\u8005"},null,8,A),t("span",J,p(e.myData.creator.nickname),1),t("div",K,[(_(!0),r(S,null,M(e.myData.tags,i=>(_(),r("a",{key:i},"#"+p(i),1))),128))])]),t("div",Q,[o(E,{text:e.myData.description,end:90},null,8,["text"])]),t("div",X,[t("button",{class:"btn1",onClick:u},[o(a,{class:"playIcon",theme:"outline",size:"22",strokeWidth:4,title:"\u70B9\u51FB\u64AD\u653E"}),Z]),t("button",tt,[o(n,{class:"playIcon",theme:"outline",size:"18",strokeWidth:4,title:"\u70B9\u51FB\u6536\u85CF"}),et]),t("button",st,[o(l,{class:"playIcon",theme:"outline",size:"18",strokeWidth:4,title:"\u66F4\u591A"})])])])])])}}},at=k(ot,[["__scopeId","data-v-d195782f"]]);const nt={key:0,class:"playlist"},ct={class:"flex"},lt={__name:"index",setup(e){const{get_songlistDetail:d,get_songlistComment:u,get_songlistCommentMore:y}=h(),{playlist:c,comments:a,commentMoreParams:n}=V(h()),l=w();d(l.query.id),u(l.query.id);const i=z("tracks"),D=b=>{n.value.offset=b,y(l.query.id)};return P(()=>{n.value.offset=1,console.log("\u5378\u8F7D")}),(b,g)=>{const v=m("el-tab-pane"),I=m("el-tabs");return s(c)?(_(),r("div",nt,[t("div",ct,[o(at,{myData:s(c)},null,8,["myData"]),o(I,{class:"tab",modelValue:i.value,"onUpdate:modelValue":g[0]||(g[0]=C=>i.value=C)},{default:f(()=>[o(v,{lazy:"",label:`\u6B4C\u66F2 ${s(c).tracks.length} `,name:"tracks"},{default:f(()=>[o(W,{myData:s(c)},null,8,["myData"])]),_:1},8,["label"]),o(v,{lazy:"",label:`\u8BC4\u8BBA ${s(a).total} `,name:"comments"},{default:f(()=>[o(N,{comments:s(a).comments,hotComments:s(a).hotComments},null,8,["comments","hotComments"]),q(o(B,{limit:s(n).limit,offset:s(n).offset,onEmitloadMore:D},null,8,["limit","offset"]),[[T,s(a).total>s(a).comments.length]])]),_:1},8,["label"])]),_:1},8,["modelValue"])])])):$("",!0)}}},pt=k(lt,[["__scopeId","data-v-306c8a13"]]);export{pt as default};
