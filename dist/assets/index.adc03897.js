import{_ as k,a as i,o as r,c as _,b as t,t as p,F as U,m as L,f as s,p as M,k as V,s as w,l as z,r as $,Q as P,G as T,u as o,h,A as q,w as g,v as B}from"./index.897618c7.js";import{L as N}from"./loadMore.4cb0076b.js";import{S as W}from"./songComments.1914c9d2.js";import{S as F}from"./songList.282ca3e2.js";import{M as G}from"./MoreText.d681f236.js";import{u as f}from"./playlist.8bf48f71.js";import"./timestamp.f9a1ea68.js";import"./index.d4d22059.js";import"./login.29e155bb.js";const x=e=>(M("data-v-d195782f"),e=e(),V(),e),R={class:"info"},j={class:"flex"},A={class:"left"},E=["src"],O={class:"right"},Q={class:"title"},H={class:"box"},J=["src"],K={class:"nickname"},X={class:"tags"},Y={class:"description"},Z={class:"btnGroup"},tt=x(()=>t("span",null,"\u64AD\u653E\u5168\u90E8",-1)),et={class:"btn2"},st=x(()=>t("span",null,"\u6536\u85CF",-1)),ot={class:"btn3"},at={__name:"info",props:{myData:{type:Object,default:()=>({coverImgUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",name:"\u9ED8\u8BA4\u6807\u9898",creator:{avatarUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",nickname:"\u9ED8\u8BA4\u6635\u79F0",backgroundUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"},tags:["\u9ED8\u8BA4\u6807\u7B7E1","\u9ED8\u8BA4\u6807\u7B7E2","\u9ED8\u8BA4\u6807\u7B7E3"],description:"\u9ED8\u8BA4\u63CF\u8FF0"})}},setup(e){const{push_musicToPlayList:d}=f(),u=()=>{d()};return(y,n)=>{const a=i("icon-play-one"),m=i("icon-like"),c=i("icon-more");return r(),_("div",R,[t("div",j,[t("div",A,[t("img",{src:e.myData.coverImgUrl+"?param=180y180",alt:"\u5C01\u9762"},null,8,E)]),t("div",O,[t("p",Q,p(e.myData.name),1),t("div",H,[t("img",{class:"avatar",src:e.myData.creator.avatarUrl+"?param=40y40",alt:"\u4F5C\u8005"},null,8,J),t("span",K,p(e.myData.creator.nickname),1),t("div",X,[(r(!0),_(U,null,L(e.myData.tags,l=>(r(),_("a",{key:l},"#"+p(l),1))),128))])]),t("div",Y,[s(G,{text:e.myData.description,end:90},null,8,["text"])]),t("div",Z,[t("button",{class:"btn1",onClick:u},[s(a,{class:"playIcon",theme:"outline",size:"22",strokeWidth:4,title:"\u70B9\u51FB\u64AD\u653E"}),tt]),t("button",et,[s(m,{class:"playIcon",theme:"outline",size:"18",strokeWidth:4,title:"\u70B9\u51FB\u6536\u85CF"}),st]),t("button",ot,[s(c,{class:"playIcon",theme:"outline",size:"18",strokeWidth:4,title:"\u66F4\u591A"})])])])])])}}},nt=k(at,[["__scopeId","data-v-d195782f"]]);const ct={key:0,class:"playlist"},lt={class:"flex"},it={__name:"index",setup(e){const{get_songlistDetail:d,get_songlistComment:u,get_songlistCommentMore:y}=f(),{playlist:n,comments:a,commentMoreParams:m}=w(f()),c=z();d(c.query.id),u(c.query.id);const l=$("tracks"),D=()=>{m.value.offset++,y(c.query.id)};return P(()=>{m.value.offset=1,console.log("\u5378\u8F7D")}),(mt,v)=>{const b=i("el-tab-pane"),I=i("el-tabs"),C=T("infinite-scroll");return o(n)?(r(),_("div",ct,[t("div",lt,[s(nt,{myData:o(n)},null,8,["myData"]),s(I,{class:"tab",modelValue:l.value,"onUpdate:modelValue":v[0]||(v[0]=S=>l.value=S)},{default:h(()=>[s(b,{lazy:"",label:`\u6B4C\u66F2 ${o(n).tracks.length} `,name:"tracks"},{default:h(()=>[s(F,{myData:o(n)},null,8,["myData"])]),_:1},8,["label"]),s(b,{lazy:"",label:`\u8BC4\u8BBA ${o(a).total} `,name:"comments"},{default:h(()=>[g(s(W,{comments:o(a).comments,hotComments:o(a).hotComments},null,8,["comments","hotComments"]),[[C,D]]),g(s(N,null,null,512),[[B,o(a).total>o(a).comments.length]])]),_:1},8,["label"])]),_:1},8,["modelValue"])])])):q("",!0)}}},bt=k(it,[["__scopeId","data-v-d47b4688"]]);export{bt as default};
