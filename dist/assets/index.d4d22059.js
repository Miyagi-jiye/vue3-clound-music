import{d as s,e as n,f as o,g as t,u as a}from"./login.29e155bb.js";import{y as c}from"./index.897618c7.js";import{u as i}from"./playlist.8bf48f71.js";const r=c("discover",{state:()=>({banner:[],recommend:[],newSong:[],mv:[],cache:{}}),getters:{},actions:{async get_banner(){if(this.cache.banner)console.log("\u5DF2\u7F13\u5B58\u8F6E\u64AD\u56FE\u8BF7\u6C42"),this.banner=this.cache.banner;else{const e=await s();this.banner=e.data.banners,this.cache.banner=this.banner,console.log("\u83B7\u53D6\u8F6E\u64AD\u56FE",e.data)}},async get_recommend(){if(this.cache.recommend)console.log("\u5DF2\u7F13\u5B58\u63A8\u8350\u6B4C\u5355\u8BF7\u6C42"),this.recommend=this.cache.recommend;else{const e=await n();this.recommend=e.data.result,this.cache.recommend=this.recommend,console.log("\u83B7\u53D6\u63A8\u8350\u6B4C\u5355",e.data)}},async get_newSong(){if(this.cache.newSong)console.log("\u5DF2\u7F13\u5B58\u63A8\u8350\u65B0\u97F3\u4E50\u8BF7\u6C42"),this.newSong=this.cache.newSong;else{const e=await o();this.newSong=e.data.result,this.cache.newSong=this.newSong,console.log("\u83B7\u53D6\u63A8\u8350\u65B0\u97F3\u4E50",e.data)}},async get_mv(){if(this.cache.mv)console.log("\u5DF2\u7F13\u5B58\u63A8\u8350mv\u8BF7\u6C42"),this.mv=this.cache.mv;else{const e=await t();this.mv=e.data.result,this.cache.mv=this.mv,console.log("\u83B7\u53D6\u63A8\u8350MV",e.data)}}}});function g(){return{Login:a(),Discover:r(),Playlist:i()}}export{g as u};
