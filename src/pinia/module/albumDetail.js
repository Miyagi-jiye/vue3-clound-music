import { defineStore } from "pinia";
import { useAlbum, useCommentAlbum } from "@/api/index.js";

export const useAlbumDetailStore = defineStore("albumDetail", {
  state: () => ({
    album: {
      album: {},
      songs: []
    },//专辑详情
    commentAlbum: {
      comments: [],
      hotComments: [],
      total: 100
    },//专辑评论
    commentAlbumParams: {
      limit: 20,
      offset: 1
    },//初始专辑评论参数
    commentMoreParams: {
      limit: 20,
      offset: 1
    },//更多专辑评论参数
  }
  ),
  getters: {},
  actions: {
    // 获取专辑评论
    async get_commentAlbum(id) {
      const res = await useCommentAlbum(id, this.commentAlbumParams)
      this.commentAlbum = res.data
      console.log("获取专辑评论", res.data);
    },
    // 获取更多专辑评论
    async get_commentMore(id) {
      const res = await useCommentAlbum(id, this.commentMoreParams)
      if (res.data.more == false) return //是否还有剩余评论
      // 1.循环数组添加(每一个都有proxy)
      res.data.comments.forEach(item => {
        this.commentAlbum.comments.push(item)
      });
      // 2.解构数组合并(state中的解构有一层proxy,请求返回的没有)
      // this.commentAlbum.comments = [...this.commentAlbum.comments, ...res.data.comments]
      console.log("获取更多专辑评论", res.data);
    },
    // 获取专辑详情
    async get_album(id) {
      const res = await useAlbum(id)
      this.album = res.data
      console.log("获取专辑详情", res.data);
    }
  }
})
