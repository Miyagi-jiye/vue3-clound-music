import{A as D,e as $,a as l,o as n,c as a,b as e,F as h,m as k,n as P,u as z,f as d,t as r,I as v,X as S}from"./index.5ccd2579.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const M={class:"songList"},W=S('<div class="grid" data-v-d1e3b409><div class="song" data-v-d1e3b409>\u6B4C\u66F2</div><div class="singer" data-v-d1e3b409>\u6B4C\u624B</div><div class="album" data-v-d1e3b409>\u4E13\u8F91</div><div class="durtion" data-v-d1e3b409>\u65F6\u957F</div></div>',1),x={class:"list"},N=["onDblclick"],B={class:"overflow song"},I={class:"name"},q={key:0,class:"icon-vip"},F={key:1,class:"icon-sq"},j=["onClick"],A={class:"block hidden-less-400"},E={class:"iconList"},O={class:"overflow singer"},Q=["onClick"],R={class:"overflow album"},X=["onClick"],G={class:"overflow duration"},H={__name:"songList",props:{myData:{type:Object,default:()=>({tracks:[{id:0,name:"\u6B4C\u66F2\u540D",ar:[{id:"\u6B4C\u624Bid",name:"\u6B4C\u624B"}],al:{name:"\u4E13\u8F91"},dt:"\u65F6\u957F"}]})}},setup(m){const{Playlist:_}=D(),y=$();function f(o){let c=Math.floor(o/1e3%60),i=Math.floor(o/1e3/60);return`${i<10?"0"+i:i}:${c<10?"0"+c:c}`}const p=o=>{console.log("\u64AD\u653E",o),_.push_toPlayList(o),_.change_playMusic(o)},b=o=>{console.log("\u6DFB\u52A0\u5230\u64AD\u653E\u5217\u8868",o),_.push_toPlayList(o)},u=(o,c)=>{y.push({name:o,params:{id:c}})};return(o,c)=>{const i=l("icon-play"),g=l("icon-like"),C=l("icon-add"),w=l("icon-down-two"),L=l("icon-more-two");return n(),a("div",M,[W,e("div",x,[(n(!0),a(h,null,k(m.myData.tracks,s=>(n(),a("div",{class:P(["item",{active:z(_).currentPlayMusic.id==s.id}]),key:s.id,onDblclick:t=>p(s)},[e("span",B,[d(i,{theme:"outline",size:"16",strokeWidth:4,title:"\u64AD\u653E",onClick:t=>p(s),class:"icon-play"},null,8,["onClick"]),e("p",I,r(s.name),1),s.fee==1?(n(),a("div",q,"VIP")):v("",!0),s.sq?(n(),a("div",F,"SQ")):v("",!0),s.mv!==0?(n(),a("div",{key:2,class:"icon-mv",onClick:t=>u("videoDetail",s.mv)},"MV",8,j)):v("",!0),e("div",A,[e("div",E,[d(g,{theme:"outline",size:"16",strokeWidth:4,title:"\u559C\u6B22",class:"icon-like"}),d(C,{theme:"outline",size:"16",strokeWidth:4,title:"\u6DFB\u52A0\u5230\u64AD\u653E\u5217\u8868",onClick:t=>b(s)},null,8,["onClick"]),d(w,{theme:"outline",size:"16",strokeWidth:4,title:"\u4E0B\u8F7D"}),d(L,{theme:"outline",size:"16",strokeWidth:4,title:"\u66F4\u591A\u64CD\u4F5C"})])])]),e("span",O,[(n(!0),a(h,null,k(s.ar,t=>(n(),a("p",{class:"name",key:t.id,onClick:J=>u("artistDetail",t.id)},r(t.name),9,Q))),128))]),e("span",R,[e("p",{class:"name",onClick:t=>u("albumDetail",s.al.id)},r(s.al.name),9,X)]),e("span",G,r(f(s.dt)),1)],42,N))),128))])])}}},U=V(H,[["__scopeId","data-v-d1e3b409"]]);export{U as S};
