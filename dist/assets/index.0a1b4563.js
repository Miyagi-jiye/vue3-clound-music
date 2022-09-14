import{_ as A,o as r,c as d,b as o,t as i,F as w,m as T,d as V,A as D,y as L,r as P,e as B,l as I,s as R,C as U,Q as F,a as v,G as H,u as n,f as m,h as b,i as N,w as y,v as $}from"./index.27a5e7b1.js";import{M as z}from"./MoreText.d7c9a77a.js";import{L as E}from"./loadMore.50709bd2.js";import{S as Y}from"./songComments.f038de65.js";import{S as j}from"./songList.cacc31db.js";import{t as M,v as G}from"./login.0ae22fc4.js";import"./timestamp.f9a1ea68.js";import"./index.34a87f65.js";import"./playlist.f0e95a22.js";import"./vue.73cea66e.js";const O={class:"info"},Q={class:"flex"},q={class:"left"},J=["src"],K={class:"right"},W={class:"title"},X={class:"alias"},Z={class:"box"},ee={class:"description"},te={__name:"info",props:{album:{type:Object,default:()=>({name:"\u4E13\u8F91\u540D",picUrl:"",subType:"\u97F3\u6E90",company:"\u7248\u6743",artists:[{name:"\u6B4C\u624B"}],publishTime:123456})}},setup(s){function t(a){a=a||null;let e=new Date(a),c=e.getFullYear()+"-",_=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",l=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ";return(e.getHours()<10?"0"+e.getHours():e.getHours())+"",(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+"",e.getSeconds()<10?""+e.getSeconds():e.getSeconds(),c+_+l}return(a,e)=>(r(),d("div",O,[o("div",Q,[o("div",q,[o("img",{src:s.album.picUrl+"?param=180y180",alt:"\u5C01\u9762"},null,8,J)]),o("div",K,[o("p",W,i(s.album.name),1),o("div",X,[(r(!0),d(w,null,T(s.album.artists,c=>(r(),d("p",null,i(c.name),1))),256))]),o("div",Z,[o("p",null,"\u53D1\u5E03\u65F6\u95F4\uFF1A"+i(t(s.album.publishTime)),1),o("p",null,"\u97F3\u6E90\uFF1A"+i(s.album.subType),1),o("p",null,"\u7248\u6743\uFF1A"+i(s.album.company),1)]),o("div",ee,[s.album.description?(r(),V(z,{key:0,text:s.album.description,end:90},null,8,["text"])):D("",!0)])])])]))}},se=A(te,[["__scopeId","data-v-8ea1592c"]]),x=L("albumDetail",{state:()=>({album:{},commentAlbum:{comments:[],hotComments:[],total:100},commentAlbumParams:{limit:20,offset:1},commentMoreParams:{limit:20,offset:1}}),getters:{},actions:{async get_commentAlbum(s){const t=await M(s,this.commentAlbumParams);this.commentAlbum=t.data,console.log("\u83B7\u53D6\u4E13\u8F91\u8BC4\u8BBA",t.data)},async get_commentMore(s){const t=await M(s,this.commentMoreParams);t.data.more!=!1&&(t.data.comments.forEach(a=>{this.commentAlbum.comments.push(a)}),console.log("\u83B7\u53D6\u66F4\u591A\u4E13\u8F91\u8BC4\u8BBA",t.data))},async get_album(s){const t=await G(s);this.album=t.data,console.log("\u83B7\u53D6\u4E13\u8F91\u8BE6\u60C5",t.data)}}});const ae={key:0,class:"albumDetail"},oe={__name:"index",setup(s){let t=P("tracks");B();const a=I(),{get_album:e,get_commentAlbum:c,get_commentMore:_}=x(),{commentAlbum:l,album:u,commentMoreParams:f}=R(x());e(a.params.id),c(a.params.id),U(()=>a.params.id,()=>{a.name=="albumDetail"&&(e(a.params.id),c(a.params.id))});const S=()=>{t.value=="comments"&&(f.value.offset++,_(a.params.id))};return F(()=>{f.value.offset=1,console.log("\u5378\u8F7D")}),(ne,p)=>{const g=v("el-tab-pane"),C=v("el-tabs"),k=H("infinite-scroll");return n(u).songs?(r(),d("div",ae,[m(se,{album:n(u).album,class:"info"},null,8,["album"]),m(C,{modelValue:n(t),"onUpdate:modelValue":p[0]||(p[0]=h=>N(t)?t.value=h:t=h),class:"tab"},{default:b(()=>[m(g,{lazy:"",label:`\u6B4C\u66F2 ${n(u).songs.length}`,name:"tracks"},{default:b(()=>[m(j,{tracks:n(u).songs,options:1,class:"songList"},null,8,["tracks"])]),_:1},8,["label"]),m(g,{lazy:"",label:`\u8BC4\u8BBA ${n(l).total}`,name:"comments"},{default:b(()=>[y(m(Y,{comments:n(l).comments,hotComments:n(l).hotComments,class:"comment"},null,8,["comments","hotComments"]),[[k,S]]),y(m(E,null,null,512),[[$,n(l).total>n(l).comments.length]])]),_:1},8,["label"])]),_:1},8,["modelValue"])])):D("",!0)}}},pe=A(oe,[["__scopeId","data-v-2f8a5d81"]]);export{pe as default};
