import{J as h,V as g,M as p,W as P,X as f,Y as o,Z as L,$ as _}from"./index.7dfac5f1.js";const r=""+new URL("vue.5532db34.svg",import.meta.url).href,M=h("playlist",{state:()=>({playlist:{trackIds:[],tracks:[],creator:{}},comments:{comments:[],hotComments:[],total:0},commentParams:{limit:20,offset:1},commentMoreParams:{limit:20,offset:1},currentPlayMusic:{id:1,name:"Vue.js \u6E10\u8FDB\u5F0FJavaScript \u6846\u67B6",ar:[{id:12345,name:"\u5C24\u96E8\u6EAA"}],al:{id:12345,name:"\u4E13\u8F91",picUrl:r},dt:0},toPlayList:[{id:1,name:"Vue.js \u6E10\u8FDB\u5F0FJavaScript \u6846\u67B6",ar:[{id:12345,name:"\u5C24\u96E8\u6EAA"}],al:{id:12345,name:"\u4E13\u8F91",picUrl:r},dt:0}],lyric:[],songs:{},songCommentParams:{limit:20,offset:1},songsAll:[],audioStatus:!1,audioCurrentTime:0,audioDuration:0,progressStatus:0,playMode:"playOnce",playSpeed:1,volume:50}),getters:{currentPlayID(s){return s.currentPlayMusic.id},playListCount(s){return s.toPlayList.length},thisIndex(s){return s.toPlayList.findIndex(t=>t.id===s.currentPlayMusic.id)},nextSong(s){const{thisIndex:t,playListCount:e}=this;if(t===e-1)return s.toPlayList.at(0);{const n=t+1;return s.toPlayList[n]}},prevSong(s){const{thisIndex:t}=this;if(t===0)return s.toPlayList.at(-1);{const e=t-1;return s.toPlayList[e]}}},actions:{async get_songComment(s){const{data:t}=await g(s,this.songCommentParams);return console.log("\u83B7\u53D6\u5355\u9996\u6B4C\u66F2\u8BC4\u8BBA",t),t},async get_songDetail(s){const t=await p(s);this.songs=t.data.songs[0],console.log("\u83B7\u53D6\u5355\u9996\u6B4C\u66F2\u8BE6\u60C5",t.data),this.change_playMusic(this.songs),this.push_toPlayList(this.songs)},async get_songDetailAll(s){const t=await P(this.playlist.trackIds.join(","));this.songsAll=t.data.songs,this.playlist.tracks=this.songsAll,console.log("\u83B7\u53D6\u5168\u90E8\u6B4C\u66F2\u8BE6\u60C5",t.data)},async get_songlistDetail(s){const t=await f(s);this.playlist=t.data.playlist,this.playlist.trackIds=t.data.playlist.trackIds.map(e=>Number(e.id)),console.log("\u83B7\u53D6\u6B4C\u5355\u8BE6\u60C5",t.data)},async get_songlistComment(s){const t=await o(s,this.commentParams);this.comments=t.data,console.log("\u83B7\u53D6\u6B4C\u5355\u8BC4\u8BBA",t.data)},async get_songlistCommentMore(s){const t=await o(s,this.commentMoreParams);t.data.more!=!1&&(t.data.comments.forEach(e=>{this.comments.comments.push(e)}),console.log("\u83B7\u53D6\u66F4\u591A\u6B4C\u5355\u8BC4\u8BBA",t.data))},async get_musicUrl(s){const t=await L(s);return console.log("\u83B7\u53D6\u6B4C\u66F2url",t.data),t.data},push_musicToPlayList(s){if(s)this.toPlayList=s,this.toPlayList.length!==0&&this.change_playMusic(this.toPlayList[0]);else if(this.toPlayList=this.playlist.tracks,this.toPlayList.length!==0)this.change_playMusic(this.toPlayList[0]);else return!1},async change_playMusic(s){if(this.currentPlayMusic.id!==s.id)await this.get_lyric(s.id),this.currentPlayMusic=s;else return!1},push_toPlayList(s){if(this.toPlayList.some(t=>t.id===s.id)===!0)return!1;this.toPlayList.push(s)},clear_toPlayList(){this.toPlayList=[{id:1,name:"Vue.js \u6E10\u8FDB\u5F0FJavaScript \u6846\u67B6",ar:[{id:12345,name:"\u5C24\u96E8\u6EAA"}],al:{id:12345,name:"\u4E13\u8F91",picUrl:r},dt:0}],this.currentPlayMusic={id:1,name:"Vue.js \u6E10\u8FDB\u5F0FJavaScript \u6846\u67B6",ar:[{id:12345,name:"\u5C24\u96E8\u6EAA"}],al:{id:12345,name:"\u4E13\u8F91",picUrl:r},dt:0}},delete_toPlayList(s){this.toPlayList.splice(this.toPlayList.findIndex(t=>t.id==s),1)},pre_music(){if(this.toPlayList==[]){console.log("\u7A7A\u6570\u7EC4");return}this.currentPlayMusic=this.prevSong,this.get_lyric(this.currentPlayMusic.id)},next_music(){if(this.toPlayList==[]){console.log("\u7A7A\u6570\u7EC4");return}this.currentPlayMusic=this.nextSong,this.get_lyric(this.currentPlayMusic.id)},async get_lyric(s){try{const t=await _(s);this.lyric=this.parse_lyric(t.data.lrc.lyric),console.log("\u83B7\u53D6\u6B4C\u8BCD",t.data)}catch(t){console.log(t)}},handle_lyric(s){let t=[];return t=s.split(/\s*\n*\[.*?\]\s*/).filter(e=>!!e),t},parse_lyric(s){let t=s.split(`
`),e=/\[\d*:\d*\.\d*\]/g,n=/\[\d*/i,c=/\:\d*\.\d*/i,l=[];return t.filter(i=>!!i),t.forEach(function(i){let a=i.match(e);if(!a)return;a=a[0];let u=a.match(n)[0].substring(1),m=a.match(c)[0].substring(1),y=parseInt(u)*60+parseFloat(m),d=i.replace(e,"").trim();l.push({time:Number(y.toFixed(3)),lyric:d,next:0})}),l.forEach((i,a)=>{a==l.length-1?i.next=i.time+999:i.next=l[a+1].time}),console.log("\u683C\u5F0F\u5316\u540E\u7684\u6B4C\u8BCD",l),l}},persist:!0});export{M as u};
