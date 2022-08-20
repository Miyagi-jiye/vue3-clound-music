import { defineStore } from "pinia";
import { useBanner, useRecommend, useNewSong, useMv } from "@/api/index.js";

const useDiscoverStore = defineStore("discover", {
  state: () => ({
    banner: [],
    recommend: [],
    newSong: [],
    mv: []
  }),
  getters: {},
  actions: {
    // 获取轮播图
    async get_banner() {
      const res = await useBanner();
      this.banner = res.data.banners;
      console.log("获取轮播图", this.banner);
    },
    // 获取推荐歌单
    async get_recommend() {
      const res = await useRecommend();
      this.recommend = res.data.result;
      console.log("获取推荐歌单", this.recommend);
    },
    // 获取推荐新音乐
    async get_newSong() {
      const res = await useNewSong();
      this.newSong = res.data.result;
      console.log("获取推荐新音乐", this.newSong);
    },
    // 获取推荐MV
    async get_mv() {
      const res = await useMv();
      this.mv = res.data.result;
      console.log("获取推荐MV", this.mv);
    }
  },
})

// 导出并重命名
export default useDiscoverStore