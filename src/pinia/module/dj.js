import { defineStore } from "pinia";
import { useDjBanner, useDjPersonalizeRecommend, usePersonalizedDjprogram } from "@/api/index.js";

export const useDjStore = defineStore("dj", {
  state: () => ({
    djBanner: [],//全部mv
    djPersonalizeRecommend:[],//个性推荐
  }
  ),
  getters: {},
  actions: {
    // 获取电台banner
    async get_djBanner() {
      const res = await useDjBanner()
      this.djBanner = res.data.data
      console.log("获取电台banner", res.data);
    },
    // 获取电台个性推荐
    async get_djPersonalizeRecommend() {
      const res = await useDjPersonalizeRecommend()
      this.djPersonalizeRecommend = res.data.data
      console.log("获取电台个性推荐", res.data);
    },
  }
})
