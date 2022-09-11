import { defineStore } from "pinia";
import { useAlbum, useCommentAlbum } from "@/api/index.js";

export const useUserDetailStore = defineStore("userDetail", {
  state: () => ({
    album: {},//专辑详情
  }),
  getters: {},
  actions: {
    // 获取专辑评论
    async get_commentAlbum(id) {
      const res = await useCommentAlbum(id, this.commentAlbumParams)
      this.commentAlbum = res.data
      console.log("获取专辑评论", res.data);
    },
  }
})
