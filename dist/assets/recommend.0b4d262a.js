import{_ as x,u as z,r as C,L as $,o as s,c as o,F as g,A as I,k as t,l as d,q as _,a as y,t as l,b as u}from"./index.20afdda4.js";import{u as N}from"./playlist.49ddd19e.js";import{p}from"./playCountFilter.21fdfcbf.js";const W={class:"discover-recommend"},B={class:"cardImg"},F=["alt","onClick"],L=["alt","onClick"],P={class:"playCount"},R={key:0},V={key:1},b={class:"name"},q={class:"cardImg"},w=["alt","onClick"],A=["alt","onClick"],S={class:"playCount"},E={key:0},M={key:1},T={class:"name"},j={__name:"recommend",props:{myData:{type:Array,default:()=>[{id:123456,picUrl:"",coverImgUrl:"",name:"\u9ED8\u8BA4\u7B80\u4ECB",playCount:999}]},end:{type:Number}},setup(c){const f=z(),{get_songlistDetail:D,push_musicToPlayList:U}=N(),n=(i,k)=>{f.push({name:i,query:{id:k}})},v=async i=>{await D(i),U(),console.log("\u5C06\u6B4C\u5355\u6DFB\u52A0\u5230\u64AD\u653E\u5217\u8868")};return(i,k)=>{const h=C("icon-play-one"),m=C("icon-headset"),r=$("lazy");return s(),o("div",W,[c.end!==0?(s(!0),o(g,{key:0},I(c.myData.slice(0,c.end),e=>(s(),o("div",{class:"vfor",key:e.id},[t("div",B,[e.picUrl?d((s(),o("img",{class:"discoverImg",alt:"\u6B4C\u5355ID="+e.id,key:e.id,onClick:a=>n("playlist",e.id)},null,8,F)),[[r,e.picUrl+"?param=300y300"]]):e.coverImgUrl?d((s(),o("img",{key:1,class:"discoverImg",alt:"\u6B4C\u5355ID="+e.id,onClick:a=>n("playlist",e.id)},null,8,L)),[[r,e.coverImgUrl+"?param=300y300"]]):_("",!0),y(h,{class:"playIcon",theme:"filled",size:"50",strokeWidth:4,title:"\u70B9\u51FB\u64AD\u653E",onClick:a=>v(e.id)},null,8,["onClick"]),t("div",P,[y(m,{theme:"filled",size:"12",strokeWidth:4}),e.playCount?(s(),o("text",R,l(u(p)(e.playCount)),1)):e.playcount?(s(),o("text",V,l(u(p)(e.playcount)),1)):_("",!0)])]),t("div",b,l(e.name),1)]))),128)):(s(!0),o(g,{key:1},I(c.myData,e=>(s(),o("div",{class:"vfor",key:e.id},[t("div",q,[e.picUrl?d((s(),o("img",{class:"discoverImg",alt:"\u6B4C\u5355ID="+e.id,key:e.id,onClick:a=>n("playlist",e.id)},null,8,w)),[[r,e.picUrl+"?param=300y300"]]):e.coverImgUrl?d((s(),o("img",{key:1,class:"discoverImg",alt:"\u6B4C\u5355ID="+e.id,onClick:a=>n("playlist",e.id)},null,8,A)),[[r,e.coverImgUrl+"?param=300y300"]]):_("",!0),y(h,{class:"playIcon",theme:"filled",size:"50",strokeWidth:4,title:"\u70B9\u51FB\u64AD\u653E",onClick:a=>v(e.id)},null,8,["onClick"]),t("div",S,[y(m,{theme:"filled",size:"12",strokeWidth:4}),e.playCount?(s(),o("text",E,l(u(p)(e.playCount)),1)):e.playcount?(s(),o("text",M,l(u(p)(e.playcount)),1)):_("",!0)])]),t("div",T,l(e.name),1)]))),128))])}}},K=x(j,[["__scopeId","data-v-6359ee2c"]]);export{K as R};
