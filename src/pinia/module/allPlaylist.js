import { defineStore } from "pinia";
import { useMvFirst, useTopSong, useAlbumList, useHighquality, useHighqualityTags, useNewestAlbum, useRecommend, useNewSong, useMv } from "@/api/index.js";

export const useAllPlaylistStore = defineStore("allPlaylist", {
  state: () => ({
    recommend: [],// 推荐歌单
    newMv: [],// 最新mv
    newMvParams: {
      limit: 50,
      area: '内地',//全部,内地,港台,欧美,日本,韩国,不填则为全部
    },// 最新mv参数
    newMvParamsData: [
      { name: '内地' },
      { name: '港台' },
      { name: '欧美' },
      { name: '日本' },
      { name: '韩国' },
    ],// 最新mv类型数据
    album: [],//最新专辑
    albumList: [],//专辑列表
    albumListParams: {
      limit: 20,
      offset: 1,
    },// 专辑列表参数
    tags: [],// 精品歌单标签
    highquality: [],// 精品歌单
    highqualityMore: false,// 精品歌单是否显示更多
    highqualityLastTime: 0,// 精品歌单最后一次请求时间
    highqualityParams: {
      limit: 50,
      before: 0,// 精品歌单最后一次请求时间
      cat: "华语",
    },// 精品歌单参数
    newSong: [],//新歌速递
    newSongParams: {
      type: 0,
      name: '全部',
    },//新歌速递参数,全部:0,华语:7,欧美:96,日本:8,韩国:16
    newSongParamsData: [
      { name: '全部', type: 0 },
      { name: '华语', type: 7 },
      { name: '欧美', type: 96 },
      { name: '日本', type: 8 },
      { name: '韩国', type: 16 }
    ],//新歌速递类型数据
  }),
  getters: {},
  actions: {
    // 获取推荐歌单
    async get_recommend() {
      const res = await useRecommend();
      this.recommend = res.data.result;
      console.log("获取推荐歌单", res.data);
    },
    // 获取推荐MV
    async get_mv() {
      const res = await useMv();
      this.mv = res.data.result;
      console.log("获取推荐MV", res.data);
    },
    // 获取新专辑
    async get_newestAlbum() {
      const res = await useNewestAlbum();
      this.album = res.data.albums;
      console.log("获取新专辑", res.data);
    },
    // 获取精品歌单标签
    async get_highqualityTags() {
      const res = await useHighqualityTags();
      this.tags = res.data.tags;
      console.log("获取精品歌单标签", res.data);
    },
    // 获取精品歌单
    async get_highquality() {
      const res = await useHighquality(this.highqualityParams);
      this.highquality = [...this.highquality, ...res.data.playlists];
      this.highqualityMore = res.data.more;// 是否有更多
      this.highqualityParams.before = res.data.lasttime;// 精品歌单最后一次请求时间
      console.log("获取精品歌单", res.data, this.highqualityMore);
    },
    // 获取数字专辑
    async get_albumList() {
      const res = await useAlbumList(this.albumListParams);
      // 修改数据结构
      const newRes = res.data.products.map((item) => {
        return {
          name: item.albumName,
          picUrl: item.coverUrl,
          artist: { name: item.artistName },
          id: item.albumId,
        };
      })
      // 合并数组(分页失效)
      // this.albumList = [...this.albumList, ...newRes];
      // 直接请求limit条数据
      this.albumList = newRes;
      console.log("获取数字专辑", res.data);
    },
    // 获取新歌速递
    async get_topSong() {
      const res = await useTopSong(this.newSongParams.type);
      // 修改数据结构
      const newRes = res.data.data.map((item) => {
        return {
          name: item.name,
          picUrl: item.album.picUrl,
          artist: { name: item.artists[0].name, id: item.artists[0].id },
          songId: item.id,
        };
      })
      this.newSong = newRes;
      console.log("获取新歌速递", res.data);
    },
    // 获取最新MV
    async get_newMv() {
      const res = await useMvFirst(this.newMvParams);
      this.newMv = res.data.data;
      console.log("获取最新MV", res.data);
    },
  },
  // 开启数据持久化
  persist: true,
})

// 导出并重命名
export default useAllPlaylistStore