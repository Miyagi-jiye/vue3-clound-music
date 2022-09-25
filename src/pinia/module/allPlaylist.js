import { defineStore } from "pinia";
import { useAlbumList, useHighquality, useHighqualityTags, useNewestAlbum, useRecommend, useNewSong, useMv } from "@/api/index.js";

export const useAllPlaylistStore = defineStore("allPlaylist", {
  state: () => ({
    recommend: [],// 推荐歌单
    newSong: [],// 最新音乐
    mv: [],// 最新mv
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
  }),
  getters: {},
  actions: {
    // 获取推荐歌单
    async get_recommend() {
      const res = await useRecommend();
      this.recommend = res.data.result;
      console.log("获取推荐歌单", res.data);
    },
    // 获取推荐新音乐
    async get_newSong() {
      const res = await useNewSong();
      this.newSong = res.data.result;
      console.log("获取推荐新音乐", res.data);
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
  },
})

// 导出并重命名
export default useAllPlaylistStore