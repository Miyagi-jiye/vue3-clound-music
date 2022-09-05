import { defineStore } from "pinia";
import { useVideoGroupList, useVideoGroup, useVideoTimelineAll } from "@/api/index.js";

export const useVideoStore = defineStore("video", {
  state: () => ({
    videoGroupList: [],//获取视频标签列表
    videoGroup: [],
    videoTimelineAll: []
  }
  ),
  getters: {},
  actions: {
    // 获取视频标签列表
    async get_videoGroupList() {
      const res = await useVideoGroupList()
      this.videoGroupList = res.data.data
      console.log("获取视频标签列表", res.data);
    },
    // 获取视频标签/分类下的视频
    async get_videoGroup(id) {
      const res = await useVideoGroup(id)
      this.videoGroup = res.data
      console.log("获取视频标签/分类下的视频", res.data);
    },
    // 获取全部视频列表
    async get_videoTimelineAll() {
      const res = await useVideoTimelineAll()
      this.videoTimelineAll = res.data
      console.log("获取全部视频列表", res.data);
    },
  }
})
