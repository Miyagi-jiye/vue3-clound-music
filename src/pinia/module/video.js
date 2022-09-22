import { defineStore } from "pinia";
import { useVideoTimelineRecommend, useVideoGroupList, useVideoGroup, useVideoTimelineAll, useMvAll } from "@/api/index.js";

export const useVideoStore = defineStore("video", {
  state: () => ({
    // videoGroupList: [],//获取视频标签列表
    // videoGroup: [],
    // videoTimelineAll: [],
    videoTimelineRecommend: [],//获取推荐视频
    videoTimelineRecommendOffset: 0,
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
    // 获取推荐视频
    async get_videoTimelineRecommend() {
      if (this.videoTimelineRecommendOffset == 0) {
        const res = await useVideoTimelineRecommend(this.videoTimelineRecommendOffset)
        this.videoTimelineRecommend = res.data.datas
        // 修改数据结构
        this.videoTimelineRecommend.forEach(item => {
          item.artistName = item.data.creator ? item.data.creator.nickname : "加载失败"
          item.vid = item.data.vid
          item.name = item.data.title
          item.picUrl = item.data.coverUrl
          item.playCount = item.data.playTime
          item.duration = item.data.durationms
        })
        console.log("获取推荐视频", res.data, this.videoTimelineRecommend);
      } else {
        const res = await useVideoTimelineRecommend(this.videoTimelineRecommendOffset)
        // 修改数据结构
        res.data.datas.forEach(item => {
          item.artistName = item.data.creator ? item.data.creator.nickname : "加载失败"
          item.vid = item.data.vid
          item.name = item.data.title
          item.picUrl = item.data.coverUrl
          item.playCount = item.data.playTime
          item.duration = item.data.durationms
        })
        this.videoTimelineRecommend = [...this.videoTimelineRecommend, ...res.data.datas]
        console.log("获取推荐视频", res.data, this.videoTimelineRecommend);
      }
    },
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
