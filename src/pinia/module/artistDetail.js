import { defineStore } from "pinia";
import { useArtists, useArtistDesc } from "@/api/index.js";

export const useArtistDetailStore = defineStore("artistDetail", {
  state: () => ({
    artistDesc: {},//歌手详情
  }
  ),
  getters: {},
  actions: {
    // 获取歌手50首热门单曲
    async get_artists(id) {
      const res = await useArtists(id)
      console.log("获取歌手50首热门单曲", res.data);
    },
    // 获取歌手详细描述
    async get_artistDesc(id) {
      const res = await useArtistDesc(id)
      this.artistDesc = res.data
      console.log("获取歌手详细描述", res.data);
    },
  }
})
