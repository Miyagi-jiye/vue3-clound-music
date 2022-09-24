import{_ as b,e as V,w as E,r as p,o as i,c,F as g,A as C,n as L,k as e,t as v,a as s,x as T,y as w,u as j,L as K,l as k,D as Z,s as B,K as ee,b as l,v as z,q as te,M as se}from"./index.73b18d4c.js";import{d as ne}from"./debounce.bff67848.js";import{u as N}from"./playlist.466e7523.js";import{M as oe}from"./mv.5a545d00.js";import{R as q}from"./recommend.0ceb9b50.js";import{B as ae}from"./banner.d5c69979.js";import{u as P}from"./discover.5310ee0f.js";import{u as le}from"./login.70a3c80c.js";import"./index.35df902d.js";import"./playCountFilter.21fdfcbf.js";const G=t=>(T("data-v-7b80a4c4"),t=t(),w(),t),ie={class:"Tag"},ce=["onClick"],_e={class:"name"},re={class:"name"},de=G(()=>e("p",null,"\u6536\u8D77",-1)),ue=["onClick"],me={class:"name"},pe={class:"name"},ve=G(()=>e("p",null,"\u5168\u90E8",-1)),ye={__name:"Tag",props:{myData:{type:Array,default:()=>[]},activeTag:{type:String},end:{type:Number,default:8}},emits:["emitClick"],setup(t,{emit:d}){const r=t,o=V(!1);return E(()=>r.activeTag,m=>{console.log("\u6FC0\u6D3Btg",m),d("emitClick",m)}),(m,u)=>{const _=p("icon-to-top"),n=p("icon-all-application");return i(),c("div",ie,[o.value==!0?(i(),c(g,{key:0},[(i(!0),c(g,null,C(t.myData,a=>(i(),c("div",{class:L(["vfor",{active:a.name==t.activeTag}]),key:a.id,onClick:$=>t.activeTag=a.name},[e("div",_e,v(a.name),1)],10,ce))),128)),e("div",{class:"vfor",onClick:u[0]||(u[0]=a=>o.value=!1)},[e("div",re,[s(_,{theme:"filled",size:"18",fill:"#34d399",strokeWidth:3}),de])])],64)):(i(),c(g,{key:1},[(i(!0),c(g,null,C(t.myData.slice(0,r.end),a=>(i(),c("div",{class:L(["vfor",{active:a.name==t.activeTag}]),key:a.id,onClick:$=>t.activeTag=a.name},[e("div",me,v(a.name),1)],10,ue))),128)),e("div",{class:"vfor",onClick:u[1]||(u[1]=a=>o.value=!0)},[e("div",pe,[s(n,{theme:"filled",size:"18",fill:"#34d399",strokeWidth:3}),ve])])],64))])}}},he=b(ye,[["__scopeId","data-v-7b80a4c4"]]);const ge={class:"discover-album"},fe={class:"cover"},ke=["onClick"],be=["alt","onClick"],$e=["onClick"],De=["onClick"],Ce={__name:"album",props:{myData:{type:Array,default:()=>[]}},setup(t){const d=j(),r=(o,m)=>{d.push({name:o,params:{id:m}})};return(o,m)=>{const u=p("icon-play-one"),_=K("lazy");return i(),c("div",ge,[(i(!0),c(g,null,C(t.myData,n=>(i(),c("div",{key:n.id,class:"vfor"},[e("div",fe,[e("button",{class:"playIcon",onClick:a=>r("albumDetail",n.id)},[s(u,{theme:"filled",size:"25",strokeWidth:4,title:"\u67E5\u770B\u8BE6\u60C5"})],8,ke),k(e("img",{class:"album-picUrl",alt:"\u4E13\u8F91ID="+n.id,onClick:a=>r("albumDetail",n.id)},null,8,be),[[_,n.picUrl+"?param=200y200"]]),e("div",{class:"shadow",style:Z({backgroundImage:"url("+n.picUrl+"?param=10y10)"})},null,4)]),e("div",{class:"album-name title",onClick:a=>r("albumDetail",n.id)},v(n.name),9,$e),e("div",{class:"album-artist title",onClick:a=>r("artistDetail",n.artist.id)},v(n.artist.name),9,De)]))),128))])}}},Se=b(Ce,[["__scopeId","data-v-a2532837"]]);const H=t=>(T("data-v-5f57be41"),t=t(),w(),t),xe={class:"discover-daily"},Ie={class:"left"},ze=["src"],Te=H(()=>e("div",{class:"content"},[e("div",{class:"title-box"},[e("div",{class:"box"},[e("p",null,"\u6BCF"),e("p",null,"\u65E5"),e("p",null,"\u63A8"),e("p",null,"\u8350")])])],-1)),we={class:"right"},We={class:"img-box"},Ae=["src"],Fe={class:"control-box"},Re={class:"info"},qe={class:"title"},Be={class:"subtitle"},Ne={class:"control"},Ue={class:"sign"},Me=H(()=>e("p",null,"\u79C1\u4EBAFM",-1)),Le={__name:"daily",props:{dailySongs:Array,fm:Array},setup(t){const d=t,{get_songDetail:r}=N(),{audioStatus:o}=B(N()),m=j(),u=ee("get_personalFm");let _=V(0);const n=f=>{m.push({name:f})},a=ne(f=>{f&&console.log("\u6DFB\u52A0\u5230\u5783\u573E\u6876"),_.value++,_.value==d.fm.length-1&&u(),o.value==!0&&r(d.fm[_.value].id)},300),$=()=>{r(d.fm[_.value].id),o.value=!0},S=()=>{o.value=!1};return(f,y)=>{const x=p("icon-play-one"),W=p("icon-unlike"),A=p("icon-pause"),F=p("icon-go-end"),R=p("icon-broadcast-radio");return i(),c("div",xe,[e("div",Ie,[e("img",{src:t.dailySongs[0].al.picUrl,alt:"\u6BCF\u65E5\u63A8\u8350",class:"img"},null,8,ze),Te,e("button",{class:"playIcon",onClick:y[0]||(y[0]=D=>n("dailySongs"))},[s(x,{theme:"filled",size:"30",strokeWidth:4,title:"\u67E5\u770B\u8BE6\u60C5"})])]),e("div",we,[e("div",We,[e("img",{src:t.fm[l(_)].album.picUrl+"?param=180y180",alt:""},null,8,Ae)]),e("div",Fe,[e("div",Re,[e("div",qe,v(t.fm[l(_)].album.name),1),e("div",Be,[(i(!0),c(g,null,C(t.fm[l(_)].artists,D=>(i(),c("p",null,v(D.name),1))),256))])]),e("div",Ne,[s(W,{theme:"filled",size:"20",strokeWidth:3,title:"\u4E0D\u559C\u6B22",class:"play-one unlike",onClick:y[1]||(y[1]=D=>l(a)("\u5783\u573E\u6876"))}),k(s(x,{theme:"filled",size:"25",strokeWidth:3,title:"\u70B9\u51FB\u64AD\u653E",class:"play-one",onClick:$},null,512),[[z,l(o)==!1]]),k(s(A,{theme:"filled",size:"25",strokeWidth:3,title:"\u70B9\u51FB\u6682\u505C",class:"play-one",onClick:S},null,512),[[z,l(o)==!0]]),s(F,{theme:"filled",size:"25",strokeWidth:3,title:"\u4E0B\u4E00\u9996",class:"play-one",onClick:l(a)},null,8,["onClick"])]),e("div",Ue,[s(R,{theme:"filled",size:"25",fill:"#ff6363",strokeWidth:3}),Me])])])])}}},Pe=b(Le,[["__scopeId","data-v-5f57be41"]]);const Ve={class:"discover-newSong"},Ee={class:"father"},je=["alt"],Ke={class:"title"},Ge={__name:"newSong",props:{myData:{type:Array,default:()=>[]}},setup(t){const{get_songDetail:d}=N(),r=o=>{d(o)};return(o,m)=>{const u=p("icon-play-one"),_=K("lazy");return i(),c("div",Ve,[(i(!0),c(g,null,C(t.myData,n=>(i(),c("div",{class:"flex",key:n.id},[e("span",Ee,[k(e("img",{class:"img",alt:"\u65B0\u6B4CID="+n.id},null,8,je),[[_,n.picUrl+"?param=100y100"]]),s(u,{class:"playIcon",theme:"filled",size:"25",strokeWidth:4,title:"\u70B9\u51FB\u64AD\u653E",onClick:a=>r(n.id)},null,8,["onClick"])]),e("div",Ke,[e("span",null,v(n.name),1),e("p",null,v(n.song.artists[0].name),1)])]))),128))])}}},He=b(Ge,[["__scopeId","data-v-c412b729"]]);const Je=t=>(T("data-v-1e2b69bb"),t=t(),w(),t),Oe={class:"title"},Qe={class:"left"},Xe=Je(()=>e("p",null,"\u5237\u65B0",-1)),Ye={__name:"Title",props:{title:{type:String,default:()=>"\u9ED8\u8BA4\u6807\u9898"},right:{type:Boolean,default:()=>!1}},emits:["emitClick"],setup(t,{emit:d}){const r=()=>{const o=document.querySelector(".refresh");o.style.animation="rotate 1.5s infinite linear",setTimeout(()=>{o.style.animation=""},1500),d("emitClick")};return(o,m)=>{const u=p("icon-right"),_=p("icon-refresh");return i(),c("div",Oe,[e("div",Qe,[e("p",null,v(t.title),1),s(u,{theme:"outline",size:"22",strokeWidth:2})]),t.right?(i(),c("div",{key:0,class:"right",onClick:r},[Xe,s(_,{theme:"outline",size:"22",strokeWidth:2,class:"refresh"})])):te("",!0)])}}},h=b(Ye,[["__scopeId","data-v-1e2b69bb"]]);const Ze=t=>(T("data-v-7b3858f3"),t=t(),w(),t),et={class:"discover"},tt=Ze(()=>e("p",{class:"banner"},"\u63A8\u8350",-1)),st={__name:"index",setup(t){const{get_highquality:d,get_highqualityTags:r,get_newestAlbum:o,get_banner:m,get_recommend:u,get_newSong:_,get_mv:n,get_recommendResource:a,get_recommendSongs:$,get_personalFm:S}=P(),{highquality:f,highqualityParams:y,tags:x,banner:W,recommend:A,newSong:F,mv:R,privateRecommend:D,dailySongs:J,fm:O,album:Q}=B(P()),{isLogin:I}=B(le());se("get_personalFm",S);const U=()=>{I.value==!0?(a(),$(),S()):(m(),u(),_(),n(),o(),r(),d())};U(),E(I,()=>{U()});const X=M=>{y.value.cat=M,d()},Y=()=>{d()};return(M,nt)=>(i(),c("div",et,[k(e("div",null,[tt,s(ae,{myData:l(W)},null,8,["myData"]),s(h,{title:"\u7CBE\u54C1\u6B4C\u5355",right:!0,onEmitClick:Y}),s(he,{myData:l(x),activeTag:l(y).cat,end:8,onEmitClick:X},null,8,["myData","activeTag"]),s(q,{myData:l(f)},null,8,["myData"]),s(h,{title:"\u63A8\u8350\u6B4C\u5355"}),s(q,{myData:l(A),end:10},null,8,["myData"]),s(h,{title:"\u53D1\u73B0\u65B0\u97F3\u4E50"}),s(He,{myData:l(F)},null,8,["myData"]),s(h,{title:"\u65B0\u4E13\u901F\u9012"}),s(Se,{myData:l(Q)},null,8,["myData"]),s(h,{title:"\u6700\u65B0MV"}),s(oe,{myData:l(R)},null,8,["myData"])],512),[[z,l(I)==!1]]),k(e("div",null,[s(h,{title:"\u6BCF\u65E5\u4E13\u5C5E\u63A8\u8350"}),s(Pe,{dailySongs:l(J),fm:l(O)},null,8,["dailySongs","fm"]),s(h,{title:"\u4F60\u7684\u4E13\u5C5E\u6B4C\u5355"}),s(q,{myData:l(D)},null,8,["myData"])],512),[[z,l(I)==!0]])]))}},pt=b(st,[["__scopeId","data-v-7b3858f3"]]);export{pt as default};
