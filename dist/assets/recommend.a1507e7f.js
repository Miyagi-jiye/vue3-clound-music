import{_ as D,e as x,a as _,L as U,o,c as s,F as z,B,b as a,m as d,x as p,f as u,t as n,u as y}from"./index.06d72284.js";import{u as F}from"./playlist.8f69ab5e.js";import{p as m}from"./playCountFilter.21fdfcbf.js";const L={class:"recommend"},N={class:"cardImg"},P=["alt","onClick"],R=["alt","onClick"],V={class:"playCount"},$={key:0},w={key:1},S={class:"name"},W={__name:"recommend",props:{myData:{type:Array,default:()=>[{id:123456,picUrl:"",coverImgUrl:"",name:"\u9ED8\u8BA4\u7B80\u4ECB",playCount:999}]}},setup(v){const h=x(),{get_songlistDetail:k,push_musicToPlayList:g}=F(),c=(t,l)=>{h.push({name:t,query:{id:l}})},C=async t=>{await k(t),g(),console.log("\u5C06\u6B4C\u5355\u6DFB\u52A0\u5230\u64AD\u653E\u5217\u8868")};return(t,l)=>{const f=_("icon-play-one"),I=_("icon-headset"),r=U("lazy");return o(),s("div",L,[(o(!0),s(z,null,B(v.myData,e=>(o(),s("div",{class:"vfor",key:e.id},[a("div",N,[e.picUrl?d((o(),s("img",{class:"discoverImg",alt:"\u6B4C\u5355ID="+e.id,key:e.id,onClick:i=>c("playlist",e.id)},null,8,P)),[[r,e.picUrl+"?param=300y300"]]):e.coverImgUrl?d((o(),s("img",{key:1,class:"discoverImg",alt:"\u6B4C\u5355ID="+e.id,onClick:i=>c("playlist",e.id)},null,8,R)),[[r,e.coverImgUrl+"?param=300y300"]]):p("",!0),u(f,{class:"playIcon",theme:"filled",size:"50",strokeWidth:4,title:"\u70B9\u51FB\u64AD\u653E",onClick:i=>C(e.id)},null,8,["onClick"]),a("div",V,[u(I,{theme:"filled",size:"12",strokeWidth:4}),e.playCount?(o(),s("text",$,n(y(m)(e.playCount)),1)):e.playcount?(o(),s("text",w,n(y(m)(e.playcount)),1)):p("",!0)])]),a("div",S,n(e.name),1)]))),128))])}}},E=D(W,[["__scopeId","data-v-15160960"]]);export{E as R};
