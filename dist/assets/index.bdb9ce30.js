import{S as p}from"./SongListTag.5674860b.js";import{I as D,_ as w,s as _,r as S,L as H,o as a,c as o,F as d,A as h,b as T,k as i,t as l,l as N,q as I,a as m}from"./index.59ff27cd.js";import{a2 as b,k as x}from"./index.b4f22b98.js";import{u as A}from"./login.85051db2.js";document.documentElement.clientHeight,p;const u=D("myLike",{state:()=>({likeListIds:[],likeListSongs:[]}),getters:{likeList_ids(e){return e.likeListIds.join(",")}},actions:{async get_likeList(e){const s=await b(e);this.likeListIds=s.data.ids,console.log("\u83B7\u53D6\u6211\u559C\u6B22\u97F3\u4E50\u5217\u8868",s.data)},async get_songDetailAll(){const e=await x(this.likeListIds.join(","));this.likeListSongs=e.data.songs,console.log("\u83B7\u53D6\u5168\u90E8\u6B4C\u66F2\u8BE6\u60C5",e.data)}},persist:!0});const C={class:"myLike"},M=["onDblclick"],z={class:"left"},B=["alt"],V={class:"center"},j={class:"top"},E={key:0},F={class:"bottom"},Y={class:"artist"},$={class:"ar"},q={class:"al"},R={class:"right"},U={__name:"index",setup(e){const{likeListSongs:s}=_(u()),{get_likeList:g,get_songDetailAll:v}=u(),{loginData:y}=_(A()),k=async()=>{await g(y.value.userId),v()};return s.value.length==0&&k(),(c,G)=>{const f=S("icon-play"),L=H("lazy");return a(),o("div",C,[(a(!0),o(d,null,h(T(s),(t,r)=>(a(),o("div",{key:r,class:"vfor",onDblclick:n=>c.play(t)},[i("div",z,l(r+1),1),N(i("img",{alt:"\u6B4C\u66F2ID="+t.id,class:"img hidden-less-400"},null,8,B),[[L,t.al.picUrl+"?param=50y50"]]),i("div",V,[i("div",j,[i("p",null,l(t.name),1),t.alia[0]?(a(),o("p",E,"\uFF08"+l(t.alia[0])+"\uFF09",1)):I("",!0)]),i("div",F,[m(p,{mySongData:t},null,8,["mySongData"]),i("div",Y,[(a(!0),o(d,null,h(t.ar,n=>(a(),o("p",$,l(n.name),1))),256))]),i("p",q,l(t.al.name),1)])]),i("div",R,[m(f,{theme:"outline",size:"20",class:"play",onClick:n=>c.play(t)},null,8,["onClick"])])],40,M))),128))])}}},Q=w(U,[["__scopeId","data-v-c90807ad"]]);export{Q as default};
