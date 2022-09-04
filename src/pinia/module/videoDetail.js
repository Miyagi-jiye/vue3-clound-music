import { defineStore } from "pinia";
import { useMvDetail, useMvUrl, useCommentMv, useSimiMv } from "@/api/index.js";

export const useVideoDetailStore = defineStore("videoDetail", {
  state: () => ({
    videoUrl: "",//播放地址
    videoDetail: {},//视频详情
    commentMv: {},//mv评论
    mvs: [],//相似mv
  }
  ),
  getters: {},
  actions: {
    // 获取MV播放地址
    async get_mvUrl(id) {
      const res = await useMvUrl(id)
      this.videoUrl = res.data.data.url
      console.log("获取MV播放地址", res.data);
    },
    // 获取MV详情
    async get_mvDetail(id) {
      const res = await useMvDetail(id)
      this.videoDetail = res.data.data
      console.log("获取MV详情", res.data);
    },
    // 获取MV评论
    async get_commentMv(id) {
      const res = await useCommentMv(id)
      this.commentMv = res.data
      console.log("获取MV评论", res.data);
    },
    // 获取相似MV
    async get_simiMv(id) {
      const res = await useSimiMv(id)
      this.mvs = res.data.mvs
      console.log("获取相似MV", res.data);
    },
  }
})
