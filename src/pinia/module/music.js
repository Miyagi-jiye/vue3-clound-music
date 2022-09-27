import { defineStore } from "pinia";
import { useToplistDetail, useToplistArtist, useArtistList, useArtistDetail, useArtists, useArtistDesc, useArtistAlbum, useArtistMV } from "@/api/index.js";

export const useMusicStore = defineStore("music", {
  state: () => ({
    toplist: [],//榜单详情
    artistList: [],//歌手分类列表
    artistHotSong: [],//歌手50首热门单曲
    artist: {},//歌手简略详情（有图片）
    artistDesc: {},//歌手更多详情
    artistAlbum: [],//歌手热门专辑
    artistMV: [],//歌手热门MV
    artistParams: {
      type: -1,
      area: -1,
      initial: -1,
      limit: 30,
      offset: 1,
    }//歌手筛选参数
  }
  ),
  getters: {
    // 榜单前四
    oneToFour: (state) => {
      return state.toplist.slice(0, 4).map((item) => {
        return { id: item.id, name: item.name, playCount: item.playCount, picUrl: item.coverImgUrl, tracks: item.tracks }
      })
    },
    // 剩余榜单
    fiveToEnd: (state) => {
      return state.toplist.slice(4, state.toplist.length).map((item) => {
        return { id: item.id, name: item.name, playCount: item.playCount, picUrl: item.coverImgUrl }
      })
    },
  },
  actions: {
    // 获取所有榜单详情摘要
    async get_toplist() {
      const res = await useToplistDetail()
      this.toplist = res.data.list
      console.log("获取所有榜单详情摘要", res.data);
    },
    // 获取歌手分类列表
    async get_artistList() {
      const res = await useArtistList(this.artistParams)
      this.artistList = res.data.artists
      console.log("获取歌手分类列表", res.data);
    },
    // 获取热门歌手列表100（未使用）
    async get_toplistArtist() {
      const res = await useToplistArtist()
      console.log("获取热门歌手列表100", res.data);
    },
    // 获取歌手简略描述（未使用）
    async get_artistDetail(id) {
      const res = await useArtistDetail(id)
      console.log("获取歌手简略描述", res.data.data);
    },
    // 获取歌手50首热门单曲以及简略详情
    async get_artists(id) {
      const res = await useArtists(id)
      this.artist = res.data.artist
      this.artistHotSong = res.data.hotSongs
      console.log("获取歌手50首热门单曲以及简略详情", res.data);
    },
    // 获取歌手详细描述
    async get_artistDesc(id) {
      const res = await useArtistDesc(id)
      this.artistDesc = res.data
      console.log("获取歌手详细描述", res.data);
    },
    // 获取歌手热门专辑
    async get_artistAlbum(id) {
      const res = await useArtistAlbum(id)
      this.artistAlbum = res.data.hotAlbums
      console.log("获取歌手热门专辑", res.data);
    },
    // 获取歌手热门MV
    async get_artistMV(id) {
      const res = await useArtistMV(id)
      // 添加一个新属性，将imgurl属性名改为picUrl，复用mv组件
      res.data.mvs.forEach((item) => {
        item.picUrl = item.imgurl
      });
      this.artistMV = res.data.mvs
      console.log("获取歌手热门MV", res.data);
    },
  },
  // 开启数据持久化
  persist: true,
})
