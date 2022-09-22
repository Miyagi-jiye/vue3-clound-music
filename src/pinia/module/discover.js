import { defineStore } from "pinia";
import { useBanner, useRecommend, useNewSong, useMv, useRecommendResource, useRecommendSongs, usePersonalFm } from "@/api/index.js";

export const useDiscoverStore = defineStore("discover", {
  state: () => ({
    banner: [],
    recommend: [],
    newSong: [],
    mv: [],
    privateRecommend: [],//私人推荐
    dailySongs: [
      {
        al: {
          picUrl: 'http://p4.music.126.net/c51QlUiKp4vq5ZKfMJqDnw==/109951167570282279.jpg'
        }
      }
    ],//每日推荐
    recommendReasons: [],//歌曲推荐理由
    fm: [
      {
        album: {
          picUrl: 'http://p4.music.126.net/c51QlUiKp4vq5ZKfMJqDnw==/109951167570282279.jpg',
          name: '私人FM'
        },
        artists: [{ name: '只分享你最想听的音乐' }]
      }
    ],//私人FM
    fmIndex: 0,//私人FM播放索引
  }),
  getters: {},
  actions: {
    // 获取轮播图
    async get_banner() {
      const res = await useBanner();
      this.banner = res.data.banners;
      console.log("获取轮播图", res.data);
    },
    // 获取推荐歌单
    async get_recommend() {
      const res = await useRecommend();
      this.recommend = res.data.result;
      console.log("获取推荐歌单", res.data);
    },
    // 获取推荐新音乐
    async get_newSong() {
      const res = await useNewSong();
      this.newSong = res.data.result;
      console.log("获取推荐新音乐", res.data);
    },
    // 获取推荐MV
    async get_mv() {
      const res = await useMv();
      this.mv = res.data.result;
      console.log("获取推荐MV", res.data);
    },
    // 获取每日专属推荐歌单
    async get_recommendResource() {
      const res = await useRecommendResource();
      this.privateRecommend = res.data.recommend;
      console.log("获取每日专属推荐歌单", res.data);
    },
    // 获取每日专属推荐歌曲
    async get_recommendSongs() {
      const res = await useRecommendSongs();
      this.dailySongs = res.data.data.dailySongs;
      this.recommendReasons = res.data.data.recommendReasons;
      console.log("获取每日专属推荐歌曲", res.data);
    },
    // 获取私人FM
    async get_personalFm() {
      // 判断是不是第一次请求
      if (this.fmIndex === 0) {
        const res = await usePersonalFm();
        this.fm = res.data.data;
        console.log("获取私人FM", res.data);
      } else {
        const res = await usePersonalFm();
        this.fm = [...this.fm, ...res.data.data];
        console.log("获取更多私人FM", this.fm);
      }
      this.fmIndex++
    }
  },
})

// 导出并重命名
export default useDiscoverStore