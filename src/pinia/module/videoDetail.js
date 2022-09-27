import { defineStore } from "pinia";
import { useMvDetail, useMvUrl, useCommentMv, useSimiMv, useCommentVideo, useVideoUrl, useVideoDetail, useRelatedAllvideo } from "@/api/index.js";

export const useVideoDetailStore = defineStore("videoDetail", {
  state: () => ({
    videoUrl: "",//播放地址
    videoDetail: {},//视频详情
    commentMv: {
      comments: [],
      hotComments: [],
      total: 0
    },//mv评论
    mvs: [],//相似mv
    commentParams: {
      id: 123,
      limit: 20,
      offset: 1
    },//评论参数
  }
  ),
  getters: {},
  actions: {
    // 获取播放地址
    async get_mvUrl(id) {
      if (id.length == 32) {
        const res = await useVideoUrl(id)
        this.videoUrl = res.data.urls[0].url
        console.log("获取视频播放地址", res.data);
      } else {
        const res = await useMvUrl(id)
        this.videoUrl = res.data.data.url
        console.log("获取MV播放地址", res.data);
      }
    },
    // 获取详情
    async get_mvDetail(id) {
      if (id.length == 32) {
        const res = await useVideoDetail(id)
        this.videoDetail = res.data.data
        console.log("获取视频详情", res.data);
      } else {
        const res = await useMvDetail(id)
        this.videoDetail = res.data.data
        console.log("获取MV详情", res.data);
      }
    },
    // 获取相似推荐
    async get_simiMv(id) {
      if (id.length == 32) {
        const res = await useRelatedAllvideo(id)
        this.mvs = res.data.data
        console.log("获取相关视频", res.data);
      } else {
        const res = await useSimiMv(id)
        this.mvs = res.data.mvs
        console.log("获取相似MV", res.data);
      }
    },
    // 获取评论
    async get_commentMv(id) {
      if (id.length == 32) {
        this.commentParams.id = id
        const res = await useCommentVideo(this.commentParams)
        this.commentMv = res.data
        console.log("获取视频评论", res.data);
      } else {
        this.commentParams.id = id
        const res = await useCommentMv(this.commentParams)
        this.commentMv = res.data
        console.log("获取MV评论", res.data);
      }
    },
  },
  // 开启数据持久化
  persist: true,
})
