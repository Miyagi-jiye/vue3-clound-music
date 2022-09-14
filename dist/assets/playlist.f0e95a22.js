import{y as d}from"./index.27a5e7b1.js";import{c as g,d as p,e as o,f as P,g as f}from"./login.0ae22fc4.js";import{v as l}from"./vue.73cea66e.js";const S=d("playlist",{state:()=>({playlist:{tracks:[],creator:{}},comments:{comments:[],hotComments:[],total:0},commentParams:{limit:20,offset:1},commentMoreParams:{limit:20,offset:1},currentPlayMusic:{id:1,name:"Vue.js \u6E10\u8FDB\u5F0FJavaScript \u6846\u67B6",ar:[{id:12345,name:"\u5C24\u96E8\u6EAA"}],al:{id:12345,name:"\u4E13\u8F91",picUrl:l},dt:0},toPlayList:[{id:1,name:"Vue.js \u6E10\u8FDB\u5F0FJavaScript \u6846\u67B6",ar:[{id:12345,name:"\u5C24\u96E8\u6EAA"}],al:{id:12345,name:"\u4E13\u8F91",picUrl:l},dt:0}],lyric:[],songs:{},audioStatus:!1}),getters:{currentPlayID(s){return s.currentPlayMusic.id},playListCount(s){return s.toPlayList.length},thisIndex(s){return s.toPlayList.findIndex(t=>t.id===s.currentPlayMusic.id)},nextSong(s){const{thisIndex:t,playListCount:e}=this;if(t===e-1)return s.toPlayList.at(0);{const n=t+1;return s.toPlayList[n]}},prevSong(s){const{thisIndex:t}=this;if(t===0)return s.toPlayList.at(-1);{const e=t-1;return s.toPlayList[e]}}},actions:{async get_songDetail(s){const t=await g(s);this.songs=t.data.songs[0],console.log("\u83B7\u53D6\u5355\u9996\u6B4C\u66F2\u8BE6\u60C5",t.data),this.change_playMusic(this.songs),this.push_toPlayList(this.songs)},async get_songlistDetail(s){const t=await p(s);this.playlist=t.data.playlist,console.log("\u83B7\u53D6\u6B4C\u5355\u8BE6\u60C5",t.data)},async get_songlistComment(s){const t=await o(s,this.commentParams);this.comments=t.data,console.log("\u83B7\u53D6\u6B4C\u5355\u8BC4\u8BBA",t.data)},async get_songlistCommentMore(s){const t=await o(s,this.commentMoreParams);t.data.more!=!1&&(t.data.comments.forEach(e=>{this.comments.comments.push(e)}),console.log("\u83B7\u53D6\u66F4\u591A\u6B4C\u5355\u8BC4\u8BBA",t.data))},async get_musicUrl(s){const t=await P(s);return console.log("\u83B7\u53D6\u6B4C\u66F2url",t.data),t.data},push_musicToPlayList(){if(this.toPlayList=this.playlist.tracks,this.toPlayList.length!==0)this.change_playMusic(this.toPlayList[0]);else return!1},async change_playMusic(s){if(this.currentPlayMusic.id!==s.id)await this.get_lyric(s.id),this.currentPlayMusic=s;else return!1},push_toPlayList(s){if(this.toPlayList.some(t=>t.id===s.id)===!0)return!1;this.toPlayList.push(s)},clear_toPlayList(){this.toPlayList=[{id:1,name:"Vue.js \u6E10\u8FDB\u5F0FJavaScript \u6846\u67B6",ar:[{id:12345,name:"\u5C24\u96E8\u6EAA"}],al:{id:12345,name:"\u4E13\u8F91",picUrl:l},dt:0}],this.currentPlayMusic={id:1,name:"Vue.js \u6E10\u8FDB\u5F0FJavaScript \u6846\u67B6",ar:[{id:12345,name:"\u5C24\u96E8\u6EAA"}],al:{id:12345,name:"\u4E13\u8F91",picUrl:l},dt:0}},pre_music(){if(this.toPlayList==[]){console.log("\u7A7A\u6570\u7EC4");return}this.currentPlayMusic=this.prevSong,this.get_lyric(this.currentPlayMusic.id)},next_music(){if(this.toPlayList==[]){console.log("\u7A7A\u6570\u7EC4");return}this.currentPlayMusic=this.nextSong,this.get_lyric(this.currentPlayMusic.id)},async get_lyric(s){try{const t=await f(s);this.lyric=this.parse_lyric(t.data.lrc.lyric),console.log("\u83B7\u53D6\u6B4C\u8BCD",t.data)}catch(t){console.log(t)}},handle_lyric(s){let t=[];return t=s.split(/\s*\n*\[.*?\]\s*/).filter(e=>!!e),t},parse_lyric(s){let t=s.split(`
`),e=/\[\d*:\d*\.\d*\]/g,n=/\[\d*/i,c=/\:\d*\.\d*/i,r=[];return t.filter(i=>!!i),t.forEach(function(i){let a=i.match(e);if(!a)return;a=a[0];let u=a.match(n)[0].substring(1),m=a.match(c)[0].substring(1),y=parseInt(u)*60+parseFloat(m),h=i.replace(e,"").trim();r.push({time:Number(y.toFixed(3)),lyric:h,next:0})}),r.forEach((i,a)=>{a==r.length-1?i.next=i.time+999:i.next=r[a+1].time}),console.log("\u683C\u5F0F\u5316\u540E\u7684\u6B4C\u8BCD",r),r}}});export{S as u};
