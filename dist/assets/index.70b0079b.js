import{P as b}from"./PlayAllButton.092d6376.js";import{_ as D,o as e,c as o,b as s,t as c,u as p,f as _,D as x,y as I,z as w,s as S,a as z,L as C,F as h,B as v,n as B,m as L,x as P,a3 as A}from"./index.06d72284.js";import{S as N}from"./SongListTag.f8a36f19.js";import{u as f}from"./playlist.8f69ab5e.js";import{u as g}from"./discover.ad43c8c6.js";import"./login.6f02fb56.js";import"./vue.73cea66e.js";const V=a=>(I("data-v-bf44e2f1"),a=a(),w(),a),F={class:"dailySongs-info"},M={class:"mask"},R={class:"left hidden-less-600"},T={class:"day"},U={class:"right"},E=V(()=>s("div",{class:"top"},[s("p",null,"\u6BCF\u65E5\u6B4C\u66F2\u63A8\u8350"),s("p",null,"\u6839\u636E\u4F60\u7684\u97F3\u4E50\u53E3\u5473\u751F\u6210\uFF0C\u6BCF\u59296:00\u66F4\u65B0")],-1)),q={__name:"info",props:{myData:Array},setup(a){let n=new Date().getDate();return(l,r)=>(e(),o("div",F,[s("div",{class:"title",style:x({backgroundImage:"url("+a.myData[0].al.picUrl+")"})},[s("div",M,[s("div",R,[s("p",T,c(p(n)),1)]),s("div",U,[E,_(b,{myData:a.myData},null,8,["myData"])])])],4)]))}},G=D(q,[["__scopeId","data-v-bf44e2f1"]]);const H={class:"dailySongs-list"},J=["onDblclick"],K={class:"left"},O=["alt"],Q={class:"center"},W={class:"top"},X={key:0},Y={class:"bottom"},Z={class:"artist"},j={class:"ar"},ss={class:"al"},ts={class:"right"},as={__name:"list",props:{myData:{type:Array,default:()=>[]}},setup(a){const{currentPlayMusic:n}=S(f()),{change_playMusic:l,push_toPlayList:r}=f(),i=async d=>{await l(d),await r(d)};return(d,$)=>{const u=z("icon-play"),k=C("lazy");return e(),o("div",H,[(e(!0),o(h,null,v(a.myData,(t,m)=>(e(),o("div",{key:m,class:B(["vfor",{activeSong:p(n).id==t.id}]),onDblclick:y=>i(t)},[s("div",K,c(m+1),1),L(s("img",{alt:"\u6B4C\u66F2ID="+t.id,class:"img hidden-less-400"},null,8,O),[[k,t.al.picUrl+"?param=50y50"]]),s("div",Q,[s("div",W,[s("p",null,c(t.name),1),t.alia[0]?(e(),o("p",X,"\uFF08"+c(t.alia[0])+"\uFF09",1)):P("",!0)]),s("div",Y,[_(N,{mySongData:t},null,8,["mySongData"]),s("div",Z,[(e(!0),o(h,null,v(t.ar,y=>(e(),o("p",j,c(y.name),1))),256))]),s("p",ss,c(t.al.name),1)])]),s("div",ts,[_(u,{theme:"outline",size:"20",class:"play",onClick:y=>i(t)},null,8,["onClick"])])],42,J))),128))])}}},es=D(as,[["__scopeId","data-v-003176bd"]]),os={class:"dailySongs"},ps={__name:"index",async setup(a){let n,l;const{get_recommendSongs:r}=g(),{dailySongs:i,recommendReasons:d}=S(g());return[n,l]=A(()=>r()),await n,l(),($,u)=>(e(),o("div",os,[_(G,{myData:p(i)},null,8,["myData"]),_(es,{myData:p(i)},null,8,["myData"])]))}};export{ps as default};
