import{u as J,r,o as c,c as d,a as l,b as a,d as $,e as te,f as e,w as v,n as Y,i as I,g as he,h as fe,E as O,p as G,j as Q,k as F,l as ye,m as ge,q as be,s as ke,t as se,v as $e,x as X,S as we,F as V,y as T,z as y,A as L,B as W,C as Se,D as ne,G as B,H as j,I as ae,J as Ce,K as ee,T as Ie,L as xe}from"./index.664c0608.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";import{p as De}from"./playCountFilter.de1a47dd.js";const ze={class:"goBack"},Ve={__name:"DirectionIcon",setup(t){const o=J();return(n,i)=>{const _=r("icon-left"),f=r("icon-right");return c(),d("div",ze,[l(_,{theme:"outline",size:"26",strokeWidth:2,onClick:i[0]||(i[0]=u=>a(o).back())}),l(f,{theme:"outline",size:"26",strokeWidth:2,onClick:i[1]||(i[1]=u=>a(o).forward())})])}}},Te=M(Ve,[["__scopeId","data-v-c491a6dc"]]);const Pe=t=>(G("data-v-2d95a48f"),t=t(),Q(),t),Me=Pe(()=>e("a",null,"\u70B9\u51FB\u767B\u5F55",-1)),Le=["id"],Ne={class:"login-form"},Ue=he("\u767B\u5F55"),We={__name:"LoginDialog",setup(t){J();let o=$(!1),n=te({username:"",password:""}),i=$(!1);const _=$(null);let f=te({username:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:"blur"},{min:11,max:11,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"},{min:6,max:16,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5BC6\u7801",trigger:"blur"}]});const u=()=>{o.value=!0},s=()=>{_.value.validate(p=>{if(p)i.value=!0,fe(n.username,n.password).then(m=>{console.log("\u83B7\u53D6\u767B\u5F55\u4FE1\u606F",m.data),m.data.code==502?O({showClose:!0,grouping:!0,message:m.data.msg||"\u767B\u5F55\u5931\u8D25",type:"error"}):(O({showClose:!0,grouping:!0,message:m.data.msg||"\u767B\u5F55\u6210\u529F",type:"success"}),m.data.token&&localStorage.setItem("token",JSON.stringify(m.data.token)),m.data.cookie&&localStorage.setItem("cookie",JSON.stringify(m.data.cookie)))}).catch(m=>{console.log(m)}).finally(()=>{i.value=!1});else return console.log("\u8868\u5355\u9A8C\u8BC1\u4E0D\u901A\u8FC7"),!1})};return(p,m)=>{const x=r("el-avatar"),g=r("el-input"),C=r("el-form-item"),b=r("el-form"),D=r("el-button"),N=r("el-dialog");return c(),d("div",null,[e("div",{class:"avatar hidden-less-600",onClick:u},[l(x,{size:32,src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),Me]),l(N,{modelValue:a(o),"onUpdate:modelValue":m[2]||(m[2]=P=>I(o)?o.value=P:o=P),title:"Tips",width:"300px"},{header:v(({close:P,titleId:S,titleClass:k})=>[e("h4",{id:S,class:Y(k)},"\u767B\u5F55",10,Le)]),footer:v(()=>[l(D,{class:"loginBtn",type:"primary",onClick:s,loading:a(i)},{default:v(()=>[Ue]),_:1},8,["loading"])]),default:v(()=>[e("div",Ne,[l(b,{model:a(n),rules:a(f),ref_key:"loginFormRef",ref:_},{default:v(()=>[l(C,{prop:"username"},{default:v(()=>[l(g,{modelValue:a(n).username,"onUpdate:modelValue":m[0]||(m[0]=P=>a(n).username=P),"prefix-icon":"Cellphone",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"},null,8,["modelValue"])]),_:1}),l(C,{prop:"password"},{default:v(()=>[l(g,{modelValue:a(n).password,"onUpdate:modelValue":m[1]||(m[1]=P=>a(n).password=P),type:"password","prefix-icon":"Lock",placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["modelValue"])])}}},He=M(We,[["__scopeId","data-v-2d95a48f"]]);const ie=t=>(G("data-v-48adbe92"),t=t(),Q(),t),Be={class:"header"},Ae=ie(()=>e("div",{class:"left"},"\u5BFC\u822A\u83DC\u5355",-1)),Ee=ie(()=>e("div",{class:"content"},[e("div",{class:"left"},[e("div",{class:"menu"},[e("div",{class:"cube"},"\u65B9\u5757"),e("div",{class:"cube"},"\u65B9\u5757"),e("div",{class:"cube"},"\u65B9\u5757"),e("div",{class:"cube"},"\u65B9\u5757"),e("div",{class:"cube"},"\u65B9\u5757"),e("div",{class:"cube"},"\u65B9\u5757")])]),e("div",{class:"right"},[e("div",{class:"userInfo"})])],-1)),Fe={__name:"HamburgerIcon",props:{myData:{type:Array,default:()=>[]},size:{type:Number,default:()=>300},iconSize:{type:String,default:()=>"28"}},setup(t){let o=$(!1);return(n,i)=>{const _=r("icon-hamburger-button"),f=r("el-scrollbar"),u=r("el-drawer");return c(),d("div",null,[l(_,{class:"hamburgerIcon",theme:"outline",size:t.iconSize,strokeWidth:2,onClick:i[0]||(i[0]=s=>I(o)?o.value=!0:o=!0)},null,8,["size"]),l(u,{modelValue:a(o),"onUpdate:modelValue":i[2]||(i[2]=s=>I(o)?o.value=s:o=s),direction:"ttb",size:t.size,"with-header":!1},{default:v(()=>[l(f,null,{default:v(()=>[F(n.$slots,"header",{},()=>[e("div",Be,[Ae,e("div",{class:"right",onClick:i[1]||(i[1]=s=>I(o)?o.value=!1:o=!1)},"\u5173\u95ED\u6309\u94AE")])],!0),F(n.$slots,"default",{},()=>[Ee],!0)]),_:3})]),_:3},8,["modelValue","size"])])}}},qe=M(Fe,[["__scopeId","data-v-48adbe92"]]),oe=ye("search",{state:()=>({showSearchView:!1,searchKeyword:"",suggestData:{},searchHot:[],searchData:null}),getters:{showHot:t=>t.searchKeyword==""},actions:{async get_searchSuggest(){const t=await ge(this.searchKeyword);this.suggestData=t.data.result,console.log("\u83B7\u53D6\u70ED\u95E8\u641C\u7D22-\u5EFA\u8BAE",t.data)},async get_searchHotDetail(){const t=await be();this.searchHot=t.data.data,console.log("\u83B7\u53D6\u70ED\u95E8\u641C\u7D22-\u8BE6\u60C5",t.data)},async get_songDetail(t){const o=await ke(t);return console.log("\u83B7\u53D6\u6B4C\u66F2\u8BE6\u60C5",o.data),o.data.songs[0]}}});function Re(t,o,n){let i=null;return function(){i&&clearTimeout(i),n==!0&&(t.apply(this,arguments),n=!1),i=setTimeout(()=>{t.apply(this,arguments)},o)}}const Ke=t=>(G("data-v-8b83ac71"),t=t(),Q(),t),Oe={style:{height:"300px"}},je={key:0},Je=Ke(()=>e("div",{class:"searchTitle"},"\u70ED\u95E8\u641C\u7D22",-1)),Ye=["onClick"],Ge={class:"hover"},Qe={style:{"margin-right":"4px"}},Xe={style:{color:"#fdb6b6"}},Ze={key:1},et={class:"searchTitle"},tt=["onClick"],ot={style:{color:"#34d399"},class:"truncate"},lt={style:{"margin-left":"8px"},class:"truncate"},st=["onClick"],nt={style:{color:"#34d399"},class:"truncate"},at={style:{"margin-left":"8px"},class:"truncate"},it=["onClick"],ct={style:{color:"#34d399","margin-left":"8px"},class:"truncate"},rt=["onClick"],ut={style:{color:"#34d399","margin-left":"8px"},class:"truncate"},dt={__name:"SearchPopover",setup(t){const{Playlist:o}=se(),n=J(),{showSearchView:i,searchKeyword:_,showHot:f,searchHot:u,suggestData:s}=$e(oe()),{get_searchSuggest:p,get_searchHotDetail:m,get_songDetail:x}=oe(),g=(S,k)=>{n.push({name:S,params:{id:k}})},C=async S=>{await o.get_songlistDetail(S),await o.get_songlistComment(S),n.push({name:"playlist"}),i.value=!1},b=async S=>{const k=await x(S);o.change_playMusic(k),o.push_toPlayList(k)},D=async S=>{_.value=S,await p(),i.value=!0},N=S=>{switch(S){case"songs":return"\u5355\u66F2";case"albums":return"\u4E13\u8F91";case"artists":return"\u6B4C\u624B";case"playlists":return"\u6B4C\u5355";default:return S}},P=Re(()=>{p()},1e3,!1);return X(async()=>{await m()}),(S,k)=>{const q=r("el-input"),R=r("el-avatar"),K=r("el-scrollbar"),Z=r("el-popover");return c(),d("div",null,[l(Z,{visible:a(i),"onUpdate:visible":k[3]||(k[3]=w=>I(i)?i.value=w:null),placement:"bottom","popper-style":"max-width:auto;padding:0;",width:200},{reference:v(()=>[l(q,{modelValue:a(_),"onUpdate:modelValue":k[0]||(k[0]=w=>I(_)?_.value=w:null),placeholder:"\u641C\u7D22\u97F3\u4E50\u3001MV\u3001\u6B4C\u5355","prefix-icon":a(we),clearable:!0,onFocus:k[1]||(k[1]=w=>i.value=!0),onFocusout:k[2]||(k[2]=w=>i.value=!1),onInput:a(P)},null,8,["modelValue","prefix-icon","onInput"])]),default:v(()=>[e("div",Oe,[l(K,null,{default:v(()=>[a(f)?(c(),d("div",je,[Je,e("div",null,[(c(!0),d(V,null,T(a(u),(w,h)=>(c(),d("div",{key:w.searchWord,class:"hotItem",onClick:U=>D(w.searchWord)},[e("div",Ge,[e("span",Qe,y(h+1)+".",1),e("span",null,y(w.searchWord),1)]),e("div",Xe,y(a(De)(w.score)),1)],8,Ye))),128))])])):(c(),d("div",Ze,[a(s)?(c(!0),d(V,{key:0},T(a(s).order,w=>(c(),d("div",null,[e("div",et,y(N(w)),1),(c(!0),d(V,null,T(a(s).songs,h=>{var U;return L((c(),d("div",{key:h.id,class:"searchItem",onClick:z=>b(h.id)},[e("span",ot,y(h.name),1),e("span",lt," - "+y((U=h.artists.at(0))==null?void 0:U.name),1)],8,tt)),[[W,w==="songs"]])}),128)),(c(!0),d(V,null,T(a(s).albums,h=>L((c(),d("div",{key:h.id,class:"searchItem",onClick:U=>g("albumDetail",h.id)},[e("span",nt,y(h.name),1),e("span",at," - "+y(h.artist.name),1)],8,st)),[[W,w==="albums"]])),128)),(c(!0),d(V,null,T(a(s).artists,h=>L((c(),d("div",{key:h.id,class:"searchItem",onClick:U=>g("artistDetail",h.id)},[l(R,{size:"small",src:h.img1v1Url,class:"truncate"},null,8,["src"]),e("span",ct,y(h.name),1)],8,it)),[[W,w==="artists"]])),128)),(c(!0),d(V,null,T(a(s).playlists,h=>L((c(),d("div",{key:h.id,class:"searchItem",onClick:U=>C(h.id)},[l(R,{size:"small",src:h.coverImgUrl,class:"truncate"},null,8,["src"]),e("div",ut,y(h.name),1)],8,rt)),[[W,w==="playlists"]])),128))]))),256)):Se("",!0)]))]),_:1})])]),_:1},8,["visible"])])}}},_t=M(dt,[["__scopeId","data-v-8b83ac71"]]);const mt={style:{width:"100%"}},pt={class:"header"},vt={class:"left"},ht={class:"right"},ft={__name:"header",setup(t){return(o,n)=>(c(),d("div",mt,[e("div",pt,[e("div",vt,[l(Te),l(_t)]),e("div",ht,[l(He),l(qe,{iconSize:"28"})])])]))}},yt=M(ft,[["__scopeId","data-v-5da2bbf1"]]);const gt={style:{"padding-top":"20px"}},bt={class:"group-titlle"},kt=["onClick"],$t={__name:"menu",setup(t){const o=J(),n=ne();let i=$(n.path);const _=te([{id:1,groupName:"\u5728\u7EBF\u97F3\u4E50",children:[{name:"\u63A8\u8350",icon:"icon-planet",path:"/discover"},{name:"\u97F3\u4E50\u9986",icon:"icon-music",path:"/music"},{name:"\u89C6\u9891",icon:"icon-video-one",path:"/video"},{name:"\u7535\u53F0",icon:"icon-fm",path:"/dj"}]},{id:2,groupName:"\u6211\u7684\u97F3\u4E50",children:[{name:"\u6211\u559C\u6B22",icon:"icon-like"},{name:"\u672C\u5730\u6B4C\u66F2",icon:"icon-computer"},{name:"\u4E0B\u8F7D\u6B4C\u66F2",icon:"icon-download-three"},{name:"\u6700\u8FD1\u64AD\u653E",icon:"icon-play-two"}]}]),f=u=>{i.value=u.path,console.log(u.path),u.path?o.push(u.path):O.error("\u6682\u65E0\u8BE5\u8DEF\u5F84")};return(u,s)=>(c(),d("div",gt,[(c(!0),d(V,null,T(_,p=>(c(),d("div",{class:"group",key:p.id},[e("p",bt,y(p.groupName),1),(c(!0),d(V,null,T(p.children,m=>(c(),d("div",{class:Y(["group-item",a(i)==m.path?"active":""]),key:m.path,onClick:x=>f(m)},[(c(),B(j(m.icon),{theme:"outline",size:"22",strokeWidth:2})),e("span",null,y(m.name),1)],10,kt))),128))]))),128))]))}},wt=M($t,[["__scopeId","data-v-13458177"]]);const St={class:"volumeIcon hidden-less-600"},Ct={class:"hidden"},It={class:"volume"},xt={__name:"VolumeIcon",props:{volumeStatus:{type:Number,dafault:()=>0}},emits:["volumeEmit"],setup(t,{emit:o}){const n=t;function i(){o("volumeEmit",n.volumeStatus)}function _(){o("volumeEmit",0)}return X(()=>{const f=document.querySelector(".volumeIcon"),u=document.querySelector(".hidden");let s=$(!1),p=$(null),m=$(null);u.onmouseenter=()=>{s.value=!0,clearTimeout(p)},u.onmouseleave=()=>{p=setTimeout(()=>{s.value=!1,u.style.display="none"},500)},f.onmouseenter=()=>{clearTimeout(m),u.style.display="block"},f.onmouseleave=()=>{m=setTimeout(()=>{s.value||(u.style.display="none")},500)}}),(f,u)=>{const s=r("el-slider");return c(),d("div",null,[e("div",St,[(c(),B(j(t.volumeStatus===0?"icon-volume-mute":t.volumeStatus==100?"icon-volume-notice":"icon-volume-small"),{theme:"outline",size:"22",strokeWidth:2,title:"\u97F3\u91CF",onDblclick:_},null,32))]),e("div",Ct,[e("div",It,[l(s,{modelValue:t.volumeStatus,"onUpdate:modelValue":u[0]||(u[0]=p=>I(volumeStatus)?volumeStatus.value=p:null),vertical:"",height:"100px","show-tooltip":!1,onInput:i},null,8,["modelValue"]),e("p",null,y(t.volumeStatus),1)])])])}}},Dt=M(xt,[["__scopeId","data-v-9ca9e8cb"]]);const zt=["src"],Vt={class:"default"},Tt={class:"header"},Pt={class:"lyric-container"},Mt={__name:"LyricDialog",props:{imgUrl:{type:String,default:()=>""},size:{type:String,default:()=>"100%"},lyric:{type:Array,default:()=>[{}]},currentTime:{type:Number,default:()=>0},duration:{type:Number,default:()=>0}},setup(t){const o=t;let n=$(!1);return X(()=>{ae(o,()=>{let i=document.querySelector(".lyric-item.lyricActive"),_=document.querySelector(".lyric-container");i&&_&&(i.offsetTop>=window.screen.height/2&&(_.style.transform=`translateY(-${i.offsetTop-window.screen.height/2+60}px)`),(o.currentTime==o.duration||o.currentTime==0)&&(_.style.transform="translateY(0)"))})}),(i,_)=>{const f=r("icon-down"),u=r("el-scrollbar"),s=r("el-drawer");return c(),d("div",null,[e("img",{src:t.imgUrl+"?param=50y50",fit:"cover",onClick:_[0]||(_[0]=p=>I(n)?n.value=!0:n=!0),class:"img"},null,8,zt),l(s,{modelValue:a(n),"onUpdate:modelValue":_[2]||(_[2]=p=>I(n)?n.value=p:n=p),direction:"btt",size:t.size,"with-header":!1},{default:v(()=>[l(u,null,{default:v(()=>[F(i.$slots,"default",{},()=>[e("div",Vt,[e("div",Tt,[l(f,{theme:"filled",size:"40",onClick:_[1]||(_[1]=p=>I(n)?n.value=!1:n=!1),class:"downIcon"})]),e("div",Pt,[(c(!0),d(V,null,T(t.lyric,p=>(c(),d("p",{class:Y(["lyric-item",{lyricActive:t.currentTime>=p.time&&t.currentTime<=p.pre}])},y(p.lyric),3))),256))])])],!0)]),_:3})]),_:3},8,["modelValue","size"])])}}},Lt=M(Mt,[["__scopeId","data-v-a900b987"]]);const ce=t=>(G("data-v-bc6f81df"),t=t(),Q(),t),Nt={class:"title"},Ut=ce(()=>e("div",{class:"large-title"},"\u64AD\u653E\u5217\u8868",-1)),Wt={class:"small-title"},Ht=ce(()=>e("span",null,"\u6E05\u7A7A",-1)),Bt=["onDblclick"],At={class:"img"},Et={alt:"\u52A0\u8F7D\u4E2D..."},Ft={class:"detail"},qt={class:"author"},Rt={class:"duration"},Kt={__name:"MusicListIcon",props:{myData:{type:Array,default:()=>[]},size:{type:Number,default:()=>300},iconSize:{type:String,default:()=>"38"},currentPlayMusic:{type:Object,default:()=>{}}},emits:["dblclickChild","clearChild"],setup(t,{emit:o}){let n=$(!1);function i(u){let s=Math.floor(u/1e3%60),p=Math.floor(u/1e3/60);return`${p<10?"0"+p:p}:${s<10?"0"+s:s}`}function _(u){o("dblclickChild",u)}function f(){o("clearChild")}return(u,s)=>{const p=r("icon-music-list"),m=r("el-badge"),x=r("icon-delete"),g=r("el-drawer"),C=Ce("img-lazy");return c(),d("div",null,[l(m,{value:t.myData.length,hidden:t.myData.length==0},{default:v(()=>[l(p,{class:"musicList",theme:"filled",size:t.iconSize,strokeWidth:2,title:"\u6B4C\u66F2\u5217\u8868",onClick:s[0]||(s[0]=b=>I(n)?n.value=!0:n=!0)},null,8,["size"])]),_:1},8,["value","hidden"]),l(g,{modelValue:a(n),"onUpdate:modelValue":s[1]||(s[1]=b=>I(n)?n.value=b:n=b),direction:"rtl",size:t.size,"with-header":!1},{default:v(()=>[F(u.$slots,"header",{},()=>[e("div",Nt,[Ut,e("div",Wt,[e("span",null,"\u5171"+y(t.myData.length)+"\u9996\u6B4C\u66F2",1),e("div",{class:"icon",onClick:f},[l(x,{theme:"outline",size:"14",strokeWidth:4,title:"\u6E05\u7A7A"}),Ht])])])],!0),F(u.$slots,"default",{},()=>[(c(!0),d(V,null,T(t.myData,b=>(c(),d("div",{onDblclick:D=>_(b),class:Y(["card",t.currentPlayMusic.id==b.id?"active":""]),key:b.id},[e("div",At,[L(e("img",Et,null,512),[[C,b.al.picUrl+"?param=40y40"]])]),e("div",Ft,[e("span",null,y(b.name),1),e("div",qt,[(c(!0),d(V,null,T(b.ar,D=>(c(),d("span",{key:D.id},y(D.name),1))),128))])]),e("div",Rt,y(i(b.dt)),1)],42,Bt))),128))],!0)]),_:3},8,["modelValue","size"])])}}},le=M(Kt,[["__scopeId","data-v-bc6f81df"]]);const Ot={class:"palyer"},jt=["src"],Jt={class:"group"},Yt={class:"detail"},Gt={class:"info"},Qt={class:"top"},Xt={class:"bottom"},Zt={class:"button"},eo={class:"list hidden-less-1000"},to={__name:"footer",setup(t){const{Playlist:o}=se();function n(z){o.change_playMusic(z)}function i(){q(),o.clear_toPlayList()}const _=ee(()=>o.currentPlayMusic.id),f=ee(()=>o.toPlayList),u=ee(()=>o.currentPlayMusic);ae(_,()=>{console.log("\u6B4C\u66F2id\u53D1\u751F\u53D8\u5316",_.value),k()});const s=$(""),p=$("");let m=$(0),x=$(0),g=$(!1),C=$(0),b=$(1),D=$(!1),N=$(!0);function P(){N.value=!1,D.value=!0}function S(){N.value=!0,D.value=!1}function k(){g.value=!0,setTimeout(()=>{s.value.play().then(()=>{console.log("\u64AD\u653E\u6210\u529F"),g.value=!0}).catch(z=>{console.log("\u64AD\u653E\u51FA\u9519",z),g.value=!1,s.value.currentTime=0,O({showClose:!0,message:"\u6CA1\u6709\u64AD\u653E\u6743\u9650",type:"error"})})},500)}function q(){g.value=!1,s.value.pause()}function R(){o.pre_music()}function K(){o.next_music()}function Z(z){s.value.volume=z/100,b.value=parseInt(s.value.volume*100)}function w(){s.value.currentTime=Number(C.value*s.value.duration/100)}function h(z){if(z==0||window.isNaN(z))return"00:00";let H=Math.floor(z%60),A=Math.floor(z/60);return`${A<10?"0"+A:A}:${H<10?"0"+H:H}`}function U(){s.value.autoplay=!1,s.value.controls=!1,s.value.volume=.5,b.value=s.value.volume*100}return X(()=>{U(),s.value.ontimeupdate=function(){C.value=Number(s.value.currentTime/s.value.duration*100),m.value=parseInt(s.value.currentTime),x.value=s.value.duration},s.value.onended=function(){g.value=!1,console.log("\u64AD\u653E\u7ED3\u675F"),o.toPlayList.length!==0&&D.value==!0&&k(),o.toPlayList.length-1!==0&&N.value==!0&&K()}}),(z,H)=>{const A=r("el-slider"),re=r("icon-play-once"),ue=r("icon-play-cycle"),de=r("icon-go-start"),_e=r("icon-play"),me=r("icon-pause-one"),pe=r("icon-go-end"),ve=r("icon-text-message");return c(),d("div",Ot,[e("audio",{type:"file",ref_key:"audio",ref:s,src:`https://music.163.com/song/media/outer/url?id=${a(_)}.mp3`,preload:"metadata"},"\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301audio\u6807\u7B7E,\u60A8\u8FD8\u662F\u6362\u4E2A\u6D4F\u89C8\u5668\u5427",8,jt),l(A,{ref_key:"progressBar",ref:p,modelValue:a(C),"onUpdate:modelValue":H[0]||(H[0]=E=>I(C)?C.value=E:C=E),onInput:w,"show-tooltip":!1},null,8,["modelValue"]),e("div",Jt,[e("div",Yt,[l(Lt,{lyric:a(o).lyric,currentTime:s.value.currentTime,duration:s.value.duration,imgUrl:a(o).currentPlayMusic.al.picUrl},null,8,["lyric","currentTime","duration","imgUrl"]),e("div",Gt,[e("p",Qt,y(a(o).currentPlayMusic.name),1),e("div",Xt,[(c(!0),d(V,null,T(a(o).currentPlayMusic.ar,E=>(c(),d("a",{key:E.name},y(E.name),1))),128))])])]),e("div",Zt,[L(l(re,{class:"hidden-less-600",theme:"outline",size:"22",strokeWidth:2,title:"\u987A\u5E8F\u64AD\u653E",onClick:P},null,512),[[W,a(N)===!0]]),L(l(ue,{class:"hidden-less-600",theme:"outline",size:"22",strokeWidth:2,title:"\u5FAA\u73AF\u64AD\u653E",onClick:S},null,512),[[W,a(D)===!0]]),l(de,{class:"hidden-less-600",theme:"outline",size:"28",strokeWidth:4,title:"\u4E0A\u4E00\u9996",onClick:R}),L(l(_e,{style:{color:"#34d399"},theme:"filled",size:"38",strokeWidth:2,title:"\u70B9\u51FB\u64AD\u653E",onClick:k},null,512),[[W,a(g)===!1]]),L(l(me,{style:{color:"#34d399"},theme:"filled",size:"38",strokeWidth:2,title:"\u70B9\u51FB\u6682\u505C",onClick:q},null,512),[[W,a(g)===!0]]),l(pe,{class:"hidden-less-600",theme:"outline",size:"28",strokeWidth:4,title:"\u4E0B\u4E00\u9996",onClick:K}),l(Dt,{volumeStatus:a(b),onVolumeEmit:Z},null,8,["volumeStatus"]),l(le,{myData:a(f),currentPlayMusic:a(u),onDblclickChild:n,onClearChild:i,class:"hidden-more-600"},null,8,["myData","currentPlayMusic"])]),e("div",eo,[e("p",null,y(h(a(m)))+" / "+y(h(a(x))),1),l(ve,{theme:"outline",size:"18",strokeWidth:3,title:"\u6B4C\u66F2\u8BC4\u8BBA"}),l(le,{myData:a(f),currentPlayMusic:a(u),onDblclickChild:n,onClearChild:i,iconSize:"18"},null,8,["myData","currentPlayMusic"])])])])}}},oo=M(to,[["__scopeId","data-v-db026da3"]]);const lo={class:"common-layout"},so={__name:"index",setup(t){const o=ne();return(n,i)=>{const _=r("el-scrollbar"),f=r("el-aside"),u=r("el-header"),s=r("router-view"),p=r("el-main"),m=r("el-footer"),x=r("el-container");return c(),d("div",lo,[l(x,null,{default:v(()=>[l(f,{width:"240px"},{default:v(()=>[l(_,null,{default:v(()=>[l(wt)]),_:1})]),_:1}),l(x,null,{default:v(()=>[l(u,null,{default:v(()=>[l(yt)]),_:1}),l(p,null,{default:v(()=>[l(Ie,{name:"slide-fade"},{default:v(()=>[a(o).meta.keepAlive?(c(),B(xe,{key:0},[l(_,null,{default:v(()=>[l(s,null,{default:v(({Component:g})=>[(c(),B(j(g)))]),_:1})]),_:1})],1024)):(c(),B(_,{key:1},{default:v(()=>[l(s,null,{default:v(({Component:g})=>[(c(),B(j(g)))]),_:1})]),_:1}))]),_:1})]),_:1}),l(m,null,{default:v(()=>[l(oo)]),_:1})]),_:1})]),_:1})])}}},co=M(so,[["__scopeId","data-v-2e3c0241"]]);export{co as default};
