import { defineStore } from "pinia";
import { useDjBanner, useDjPersonalizeRecommend, useDjRecommend } from "@/api/index.js";

export const useDjStore = defineStore("dj", {
  state: () => ({
    djBanner: [],//电台banner
    djRecommend: [],//电台推荐
    djPersonalizeRecommend: [],//电台推荐
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
      // 修改数据结构
      this.djPersonalizeRecommend = res.data.data.map((item) => {
        return {
          id: item.id,
          picUrl: item.picUrl,//图片
          name: item.rcmdtext,//推荐理由
          programCount: item.programCount,//节目数量
          playCount: item.subCount,//订阅数量
          secondCategory: item.secondCategory ??= null,//二级分类: 有的话显示，没有的话不显示
          desc: item.desc,//描述
          artistName: item.dj.nickname,//主播名
        };
      });
      // this.djPersonalizeRecommend = res.data.data
      console.log("获取电台个性推荐", res.data, this.djPersonalizeRecommend);
    },
    // 获取推荐电台
    async get_djRecommend() {
      const res = await useDjRecommend()
      this.djRecommend = res.data.djRadios.map((item) => {
        return {
          id: item.id,
          picUrl: item.picUrl,//图片
          name: item.name,//电台名
          programCount: item.programCount,//节目数量
          playCount: item.subCount ??= 0,//订阅数量
          secondCategory: item.secondCategory ??= null,//二级分类: 有的话显示，没有的话不显示
          desc: item.desc ??= '暂无描述',//描述
          artistName: item.dj.nickname,//主播名
        };
      });
      console.log("获取推荐电台", res.data, this.djRecommend);
    },
  },
  // 开启数据持久化
  persist: true,
})
