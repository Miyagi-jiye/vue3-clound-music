import { defineStore } from "pinia";
import { useCloudSearch } from "@/api/index.js";

export const useSearchDetailStore = defineStore("searchDetail", {
  state: () => ({
    //歌曲数据
    songs: [],
    songCount: 10,
    //视频数据
    videos: [],
    videoCount: 10,
    // MV数据
    mvs: [],
    mvCount: 10,
    // 专辑数据
    albums: [],
    albumCount: 10,
    // 歌手数据
    artists: [],
    artistCount: 10,
    // 歌单数据
    playlists: [],
    playlistCount: 10,
    // 用户数据
    userprofiles: [],
    userprofileCount: 10,
    // 电台数据
    djRadios: [],
    djRadiosCount: 10,
    // 搜索参数
    searchParams: {
      keywords: "",
      limit: 20,//每页条数
      offset: 1,
      type: 1,//单曲
    }
  }
  ),
  getters: {
    getterSongs: (state) => {
      return { tracks: state.songs }
    }
  },
  actions: {
    // 详细搜索返回数据
    async get_cloudSearch() {
      const res = await useCloudSearch(this.searchParams)
      // 歌曲
      this.songs = res.data.result.songs
      this.songCount = res.data.result.songCount
      // 视频
      this.videos = res.data.result.videos
      this.videoCount = res.data.result.videoCount
      // MV
      this.mvs = res.data.result.mvs
      this.mvCount = res.data.result.mvCount
      // 专辑
      this.albums = res.data.result.albums
      this.albumCount = res.data.result.albumCount
      // 歌手
      this.artists = res.data.result.artists
      this.artistCount = res.data.result.artistCount
      // 歌单
      this.playlists = res.data.result.playlists
      this.playlistCount = res.data.result.playlistCount
      // 用户
      this.userprofiles = res.data.result.userprofiles
      this.userprofileCount = res.data.result.userprofileCount
      // 电台
      this.djRadios = res.data.result.djRadios
      this.djRadiosCount = res.data.result.djRadiosCount
      console.log("详细搜索返回数据", res.data);
    },
  },
  // 开启数据持久化
  persist: true,
})
