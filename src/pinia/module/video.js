import { defineStore } from "pinia";
import { useVideoGroupList, useVideoGroup, useVideoTimelineAll, useMvAll } from "@/api/index.js";

export const useVideoStore = defineStore("video", {
  state: () => ({
    // videoGroupList: [],//获取视频标签列表
    // videoGroup: [],
    // videoTimelineAll: [],
    mvAll: [],//全部mv
    mvTotal: 100,
    mvAllParams: {
      type: "全部",
      area: "全部",
      order: "上升最快",
      limit: 20,
      offset: 1,
    }//请求参数
  }
  ),
  getters: {},
  actions: {
    // // 获取视频标签列表
    // async get_videoGroupList() {
    //   const res = await useVideoGroupList()
    //   this.videoGroupList = res.data.data
    //   console.log("获取视频标签列表", res.data);
    // },
    // // 获取视频标签/分类下的视频
    // async get_videoGroup(id) {
    //   const res = await useVideoGroup(id)
    //   this.videoGroup = res.data
    //   console.log("获取视频标签/分类下的视频", res.data);
    // },
    // // 获取全部视频列表
    // async get_videoTimelineAll() {
    //   const res = await useVideoTimelineAll()
    //   this.videoTimelineAll = res.data
    //   console.log("获取全部视频列表", res.data);
    // },
    // 获取全部MV视频
    async get_mvAll() {
      const res = await useMvAll(this.mvAllParams)
      this.mvAll = res.data.data
      if (res.data.count) {
        this.mvTotal = res.data.count
      }
      console.log("获取全部MV视频", res.data);
    },
  }
})
