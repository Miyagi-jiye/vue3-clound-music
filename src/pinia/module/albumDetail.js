import { defineStore } from "pinia";
import { useAlbum, useCommentAlbum} from "@/api/index.js";

export const useAlbumDetailStore = defineStore("albumDetail", {
  state: () => ({
    commentAlbum: {},//专辑评论
    album: {},//专辑详情
  }
  ),
  getters: {},
  actions: {
    // 获取专辑评论
    async get_commentAlbum(id) {
      const res = await useCommentAlbum(id)
      this.commentAlbum = res.data
      console.log("获取专辑评论", res.data);
    },
    // 获取专辑详情
    async get_album(id) {
      const res = await useAlbum(id)
      this.album = res.data
      console.log("获取专辑详情", res.data);
    }
  }
})
