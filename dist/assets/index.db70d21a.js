import{P as z}from"./PlayAllButton.092d6376.js";import{S as B}from"./SongListTag.f8a36f19.js";import{u as h}from"./playlist.8f69ab5e.js";import{I as C,_ as P,s as r,a as A,L as M,o as a,c as o,b as s,t as i,u as n,f as p,D as N,F as y,B as v,n as T,m as V,x as F,y as U,z as $}from"./index.06d72284.js";import{T as j,d as E,u as R}from"./login.6f02fb56.js";import"./vue.73cea66e.js";const m=C("myLike",{state:()=>({likeListIds:[],likeListSongs:[]}),getters:{likeList_ids(t){return t.likeListIds.join(",")}},actions:{async get_likeList(t){const l=await j(t);this.likeListIds=l.data.ids,console.log("\u83B7\u53D6\u6211\u559C\u6B22\u97F3\u4E50\u5217\u8868",l.data)},async get_songDetailAll(){const t=await E(this.likeListIds.join(","));this.likeListSongs=t.data.songs,console.log("\u83B7\u53D6\u5168\u90E8\u6B4C\u66F2\u8BE6\u60C5",t.data)}},persist:!0});const q=t=>(U("data-v-055f91bf"),t=t(),$(),t),G={class:"myLike"},H={class:"mask"},J={class:"left hidden-less-600"},K={class:"day"},O={class:"right"},Q=q(()=>s("div",{class:"top"},[s("p",null,"\u6BCF\u65E5\u6B4C\u66F2\u63A8\u8350"),s("p",null,"\u6839\u636E\u4F60\u7684\u97F3\u4E50\u53E3\u5473\u751F\u6210\uFF0C\u6BCF\u59296:00\u66F4\u65B0")],-1)),W=["onDblclick"],X={class:"left"},Y=["alt"],Z={class:"center"},ss={class:"top"},ts={key:0},es={class:"bottom"},as={class:"artist"},os={class:"ar"},is={class:"al"},ls={class:"right"},ns={__name:"index",setup(t){const{currentPlayMusic:l}=r(h()),{change_playMusic:k,push_toPlayList:f}=h(),{likeListSongs:c}=r(m()),{get_likeList:L,get_songDetailAll:S}=m(),{loginData:D}=r(R()),I=async()=>{await L(D.value.userId),S()};let w=new Date().getDate();c.value.length==0&&I();const u=async d=>{await k(d),await f(d),console.log(l.value)};return(d,cs)=>{const b=A("icon-play"),x=M("lazy");return a(),o("div",G,[s("div",{class:"title",style:N({backgroundImage:"url("+n(c)[0].al.picUrl+")"})},[s("div",H,[s("div",J,[s("p",K,i(n(w)),1)]),s("div",O,[Q,p(z)])])],4),(a(!0),o(y,null,v(n(c),(e,g)=>(a(),o("div",{key:g,class:T(["vfor",{activeSong:n(l).id==e.id}]),onDblclick:_=>u(e)},[s("div",X,i(g+1),1),V(s("img",{alt:"\u6B4C\u66F2ID="+e.id,class:"img hidden-less-400"},null,8,Y),[[x,e.al.picUrl+"?param=50y50"]]),s("div",Z,[s("div",ss,[s("p",null,i(e.name),1),e.alia[0]?(a(),o("p",ts,"\uFF08"+i(e.alia[0])+"\uFF09",1)):F("",!0)]),s("div",es,[p(B,{mySongData:e},null,8,["mySongData"]),s("div",as,[(a(!0),o(y,null,v(e.ar,_=>(a(),o("p",os,i(_.name),1))),256))]),s("p",is,i(e.al.name),1)])]),s("div",ls,[p(b,{theme:"outline",size:"20",class:"play",onClick:_=>u(e)},null,8,["onClick"])])],42,W))),128))])}}},hs=P(ns,[["__scopeId","data-v-055f91bf"]]);export{hs as default};
