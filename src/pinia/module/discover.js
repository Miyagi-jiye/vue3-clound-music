import { defineStore } from "pinia";
import { useBanner, useRecommend, useNewSong, useMv } from "@/api/index.js";

export const useDiscoverStore = defineStore("discover", {
  state: () => ({
    banner: [],
    recommend: [],
    newSong: [],
    mv: [],
    cache: {},//缓存请求
  }),
  getters: {},
  actions: {
    // 获取轮播图
    async get_banner() {
      if (this.cache.banner) {
        console.log("已缓存轮播图请求");
        this.banner = this.cache.banner
      } else {
        const res = await useBanner();
        this.banner = res.data.banners;
        this.cache.banner = this.banner
        console.log("获取轮播图", res.data);
      }
    },
    // 获取推荐歌单
    async get_recommend() {
      if (this.cache.recommend) {
        console.log("已缓存推荐歌单请求");
        this.recommend = this.cache.recommend
      } else {
        const res = await useRecommend();
        this.recommend = res.data.result;
        this.cache.recommend = this.recommend
        console.log("获取推荐歌单", res.data);
      }
    },
    // 获取推荐新音乐
    async get_newSong() {
      if (this.cache.newSong) {
        console.log("已缓存推荐新音乐请求");
        this.newSong = this.cache.newSong
      } else {
        const res = await useNewSong();
        this.newSong = res.data.result;
        this.cache.newSong = this.newSong
        console.log("获取推荐新音乐", res.data);
      }
    },
    // 获取推荐MV
    async get_mv() {
      if (this.cache.mv) {
        console.log("已缓存推荐mv请求");
        this.mv = this.cache.mv
      } else {
        const res = await useMv();
        this.mv = res.data.result;
        this.cache.mv = this.mv
        console.log("获取推荐MV", res.data);
      }
    }
  },
})

// 导出并重命名
export default useDiscoverStore