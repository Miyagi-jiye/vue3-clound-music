import{v as o,Y as r,Z as e,_ as l,$ as n,a0 as c,a1 as u,a2 as g,a3 as d}from"./index.5ccd2579.js";const A=o("music",{state:()=>({toplist:[],artistList:[],artistHotSong:[],artist:{},artistDesc:{},artistAlbum:[],artistMV:[]}),getters:{oneToFour:s=>s.toplist.slice(0,4).map(t=>({id:t.id,name:t.name,playCount:t.playCount,picUrl:t.coverImgUrl,tracks:t.tracks})),fiveToEnd:s=>s.toplist.slice(4,s.toplist.length).map(t=>({id:t.id,name:t.name,playCount:t.playCount,picUrl:t.coverImgUrl}))},actions:{async get_toplist(){const s=await r();this.toplist=s.data.list,console.log("\u83B7\u53D6\u6240\u6709\u699C\u5355\u8BE6\u60C5\u6458\u8981",s.data)},async get_artistList(s,t,a){const i=await e(s,t,a);this.artistList=i.data.artists,console.log("\u83B7\u53D6\u6B4C\u624B\u5206\u7C7B\u5217\u8868",i.data)},async get_toplistArtist(){const s=await l();console.log("\u83B7\u53D6\u70ED\u95E8\u6B4C\u624B\u5217\u8868100",s.data)},async get_artistDetail(s){const t=await n(s);console.log("\u83B7\u53D6\u6B4C\u624B\u7B80\u7565\u63CF\u8FF0",t.data.data)},async get_artists(s){const t=await c(s);this.artist=t.data.artist,this.artistHotSong=t.data.hotSongs,console.log("\u83B7\u53D6\u6B4C\u624B50\u9996\u70ED\u95E8\u5355\u66F2\u4EE5\u53CA\u7B80\u7565\u8BE6\u60C5",t.data)},async get_artistDesc(s){const t=await u(s);this.artistDesc=t.data,console.log("\u83B7\u53D6\u6B4C\u624B\u8BE6\u7EC6\u63CF\u8FF0",t.data)},async get_artistAlbum(s){const t=await g(s);this.artistAlbum=t.data.hotAlbums,console.log("\u83B7\u53D6\u6B4C\u624B\u70ED\u95E8\u4E13\u8F91",t.data)},async get_artistMV(s){const t=await d(s);t.data.mvs.forEach(a=>{a.picUrl=a.imgurl}),this.artistMV=t.data.mvs,console.log("\u83B7\u53D6\u6B4C\u624B\u70ED\u95E8MV",t.data)}}});export{A as u};
