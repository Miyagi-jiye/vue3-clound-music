import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c,y as I,b as r,d as t,F as p,l as x,e as n,t as _,p as S,j as D,r as $,g as W,z as w,f as b,w as k}from"./index.0f2d96f3.js";const M={};function N(e,o){return a(),c("div",null,"\u6B4C\u66F2\u8BC4\u8BBA\u7EC4\u4EF6")}const U=h(M,[["render",N]]);const z=e=>(S("data-v-c6334310"),e=e(),D(),e),V={class:"songList"},O=z(()=>t("div",{class:"grid"},[t("div",null,"\u6B4C\u66F2"),t("div",null,"\u6B4C\u624B"),t("div",null,"\u4E13\u8F91"),t("div",null,"\u65F6\u957F")],-1)),P={class:"list"},T={class:"overflow"},B={class:"name"},j={class:"block"},J={class:"iconList"},E={class:"overflow"},F={class:"overflow"},G={class:"name"},q={class:"overflow"},A=z(()=>t("div",{class:"loadMore"},[t("p",null,"\u52A0\u8F7D\u66F4\u591A")],-1)),H={__name:"songList",props:{myData:{type:Object,default:()=>({tracks:[{id:0,name:"\u6B4C\u66F2\u540D",ar:[{id:"\u6B4C\u624Bid",name:"\u6B4C\u624B"}],al:{name:"\u4E13\u8F91"},dt:"\u65F6\u957F"}]})}},setup(e){const{Playlist:o}=I();function u(s){let i=Math.floor(s/1e3%60),l=Math.floor(s/1e3/60);return`${l<10?"0"+l:l}:${i<10?"0"+i:i}`}const d=s=>{if(console.log("\u64AD\u653E",s),o.currentPlayMusic=s,o.toPlayList.some(l=>l.id===s.id))return!1;o.toPlayList.push({name:s.name,id:s.id,al:s.al,ar:s.ar,dt:s.dt})};return(s,i)=>{const l=r("icon-like"),y=r("icon-play"),v=r("icon-add"),f=r("icon-down-two"),C=r("icon-more-two");return a(),c("div",V,[O,t("div",P,[(a(!0),c(p,null,x(e.myData.tracks,m=>(a(),c("div",{class:"item",key:m.id},[t("span",T,[n(l,{class:"likeIcon",theme:"outline",size:"16",strokeWidth:4,title:"\u559C\u6B22"}),t("p",B,_(m.name),1),t("div",j,[t("div",J,[n(y,{theme:"outline",size:"16",strokeWidth:4,title:"\u64AD\u653E",onClick:g=>d(m)},null,8,["onClick"]),n(v,{theme:"outline",size:"16",strokeWidth:4,title:"\u6DFB\u52A0\u5230"}),n(f,{theme:"outline",size:"16",strokeWidth:4,title:"\u4E0B\u8F7D"}),n(C,{theme:"outline",size:"16",strokeWidth:4,title:"\u66F4\u591A\u64CD\u4F5C"})])])]),t("span",E,[(a(!0),c(p,null,x(m.ar,g=>(a(),c("p",{class:"name",key:g.id},_(g.name),1))),128))]),t("span",F,[t("p",G,_(m.al.name),1)]),t("span",q,_(u(m.dt)),1)]))),128))]),A])}}},K=h(H,[["__scopeId","data-v-c6334310"]]);const Q={style:{"line-height":"1.25rem",color:"#6B7280"}},R={key:0},X={key:1},Y={__name:"MoreText",props:{text:{type:String,default:"\u9ED8\u8BA4\u4ECB\u7ECD"},end:{type:Number,default:10}},setup(e){const o=e,u=$(!1),d=$(!1);return o.text&&o.text.length>o.end&&(u.value=!0),(s,i)=>(a(),c("div",Q,[u.value?(a(),c(p,{key:0},[d.value?(a(),c("span",X,_(e.text)+"...",1)):(a(),c("span",R,_(e.text.substring(0,e.end))+"...",1)),t("span",{class:"desc",onClick:i[0]||(i[0]=l=>d.value=!d.value)},"["+_(d.value?"\u6536\u8D77":"\u8BE6\u60C5")+"]",1)],64)):(a(),c(p,{key:1},[W(_(e.text),1)],64))]))}},Z=h(Y,[["__scopeId","data-v-1cdd94bd"]]);const L=e=>(S("data-v-a9bc649f"),e=e(),D(),e),tt={class:"info"},et={class:"flex"},st={class:"left"},ot=["src"],nt={class:"right"},at={class:"title"},ct={class:"box"},lt=["src"],it={class:"nickname"},_t={class:"tags"},dt={class:"description"},rt={class:"btnGroup"},ut={class:"btn1"},mt=L(()=>t("span",null,"\u64AD\u653E\u5168\u90E8",-1)),pt={class:"btn2"},ht=L(()=>t("span",null,"\u6536\u85CF",-1)),yt={class:"btn3"},vt={__name:"info",props:{myData:{type:Object,default:()=>({coverImgUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",name:"\u9ED8\u8BA4\u6807\u9898",creator:{avatarUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",nickname:"\u9ED8\u8BA4\u6635\u79F0",backgroundUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"},tags:["\u9ED8\u8BA4\u6807\u7B7E1","\u9ED8\u8BA4\u6807\u7B7E2","\u9ED8\u8BA4\u6807\u7B7E3"],description:"\u9ED8\u8BA4\u63CF\u8FF0"})}},setup(e){return(o,u)=>{const d=r("icon-play-one"),s=r("icon-like"),i=r("icon-more");return a(),c("div",tt,[t("div",et,[t("div",st,[t("img",{src:e.myData.coverImgUrl+"?params=180y180",alt:"\u5C01\u9762"},null,8,ot)]),t("div",nt,[t("p",at,_(e.myData.name),1),t("div",ct,[t("img",{class:"avatar",src:e.myData.creator.avatarUrl,alt:"\u4F5C\u8005"},null,8,lt),t("span",it,_(e.myData.creator.nickname),1),t("div",_t,[(a(!0),c(p,null,x(e.myData.tags,l=>(a(),c("a",{key:l},"#"+_(l),1))),128))])]),t("div",dt,[n(Z,{text:e.myData.description,end:90},null,8,["text"])]),t("div",rt,[t("button",ut,[n(d,{class:"playIcon",theme:"outline",size:"22",strokeWidth:4,title:"\u70B9\u51FB\u64AD\u653E"}),mt]),t("button",pt,[n(s,{class:"playIcon",theme:"outline",size:"18",strokeWidth:4,title:"\u70B9\u51FB\u6536\u85CF"}),ht]),t("button",yt,[n(i,{class:"playIcon",theme:"outline",size:"18",strokeWidth:4,title:"\u66F4\u591A"})])])])])])}}},ft=h(vt,[["__scopeId","data-v-a9bc649f"]]);const gt={class:"playlist"},bt={class:"flex"},kt={__name:"index",setup(e){const{Playlist:o}=I(),u=$("tracks"),d=w(()=>o.playlist.tracks.length),s=w(()=>o.playlist);return window.addEventListener("beforeunload",()=>{localStorage.setItem("playlist",JSON.stringify(o.playlist)),localStorage.setItem("comments",JSON.stringify(o.comments)),localStorage.setItem("hotComments",JSON.stringify(o.hotComments))}),(i,l)=>{const y=r("el-tab-pane"),v=r("el-tabs");return a(),c("div",gt,[t("div",bt,[n(ft,{myData:b(s)},null,8,["myData"]),n(v,{class:"tab",modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=f=>u.value=f)},{default:k(()=>[n(y,{lazy:"",label:`\u6B4C\u66F2 ${b(d)} `,name:"tracks"},{default:k(()=>[n(K,{myData:b(s)},null,8,["myData"])]),_:1},8,["label"]),n(y,{lazy:"",label:"\u8BC4\u8BBA",name:"comments"},{default:k(()=>[n(U)]),_:1})]),_:1},8,["modelValue"])])])}}},wt=h(kt,[["__scopeId","data-v-c34e582d"]]);export{wt as default};
