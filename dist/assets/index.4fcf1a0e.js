import{S as D}from"./songComments.f02c70a4.js";import{S as C}from"./songList.acd62088.js";import{M as L}from"./MoreText.0d3f945e.js";import{B as v,a as c,o as i,b as m,e as t,t as y,F as U,q as V,d as o,p as w,l as z,r as N,c as n,u as a,w as h,J as $}from"./index.cae8d7ff.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const x=e=>(w("data-v-35f81ff5"),e=e(),z(),e),B={class:"info"},P={class:"flex"},J={class:"left"},O=["src"],T={class:"right"},W={class:"title"},E={class:"box"},F=["src"],M={class:"nickname"},j={class:"tags"},q={class:"description"},G={class:"btnGroup"},A=x(()=>t("span",null,"\u64AD\u653E\u5168\u90E8",-1)),H={class:"btn2"},K=x(()=>t("span",null,"\u6536\u85CF",-1)),Q={class:"btn3"},R={__name:"info",props:{myData:{type:Object,default:()=>({coverImgUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",name:"\u9ED8\u8BA4\u6807\u9898",creator:{avatarUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",nickname:"\u9ED8\u8BA4\u6635\u79F0",backgroundUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"},tags:["\u9ED8\u8BA4\u6807\u7B7E1","\u9ED8\u8BA4\u6807\u7B7E2","\u9ED8\u8BA4\u6807\u7B7E3"],description:"\u9ED8\u8BA4\u63CF\u8FF0"})}},setup(e){const{Playlist:s}=v(),l=()=>{s.push_musicToPlayList()};return(f,_)=>{const d=c("icon-play-one"),r=c("icon-like"),p=c("icon-more");return i(),m("div",B,[t("div",P,[t("div",J,[t("img",{src:e.myData.coverImgUrl+"?param=180y180",alt:"\u5C01\u9762"},null,8,O)]),t("div",T,[t("p",W,y(e.myData.name),1),t("div",E,[t("img",{class:"avatar",src:e.myData.creator.avatarUrl+"?param=40y40",alt:"\u4F5C\u8005"},null,8,F),t("span",M,y(e.myData.creator.nickname),1),t("div",j,[(i(!0),m(U,null,V(e.myData.tags,u=>(i(),m("a",{key:u},"#"+y(u),1))),128))])]),t("div",q,[o(L,{text:e.myData.description,end:90},null,8,["text"])]),t("div",G,[t("button",{class:"btn1",onClick:l},[o(d,{class:"playIcon",theme:"outline",size:"22",strokeWidth:4,title:"\u70B9\u51FB\u64AD\u653E"}),A]),t("button",H,[o(r,{class:"playIcon",theme:"outline",size:"18",strokeWidth:4,title:"\u70B9\u51FB\u6536\u85CF"}),K]),t("button",Q,[o(p,{class:"playIcon",theme:"outline",size:"18",strokeWidth:4,title:"\u66F4\u591A"})])])])])])}}},X=k(R,[["__scopeId","data-v-35f81ff5"]]);const Y={key:0,class:"playlist"},Z={class:"flex"},tt={__name:"index",setup(e){const{Playlist:s}=v(),l=N("tracks"),f=n(()=>s.playlist.tracks.length),_=n(()=>s.playlist),d=n(()=>s.comments.total),r=n(()=>s.comments.comments),p=n(()=>s.comments.hotComments);return window.addEventListener("beforeunload",()=>{localStorage.setItem("playlist",JSON.stringify(s.playlist)),localStorage.setItem("comments",JSON.stringify(s.comments))}),(u,b)=>{const g=c("el-tab-pane"),I=c("el-tabs");return a(s).playlist?(i(),m("div",Y,[t("div",Z,[o(X,{myData:a(_)},null,8,["myData"]),o(I,{class:"tab",modelValue:l.value,"onUpdate:modelValue":b[0]||(b[0]=S=>l.value=S)},{default:h(()=>[o(g,{lazy:"",label:`\u6B4C\u66F2 ${a(f)} `,name:"tracks"},{default:h(()=>[o(C,{myData:a(_)},null,8,["myData"])]),_:1},8,["label"]),o(g,{lazy:"",label:`\u8BC4\u8BBA ${a(d)} `,name:"comments"},{default:h(()=>[o(D,{comments:a(r),hotComments:a(p)},null,8,["comments","hotComments"])]),_:1},8,["label"])]),_:1},8,["modelValue"])])])):$("",!0)}}},ct=k(tt,[["__scopeId","data-v-39e756dd"]]);export{ct as default};
