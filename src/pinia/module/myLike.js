import { defineStore } from "pinia";
import { useLikelist, useSongDetailAll } from "@/api/index.js"

export const useMyLikeStore = defineStore("myLike", {
  state: () => ({
    likeListIds: [],//喜欢的歌曲列表ids
    likeListSongs: [],//喜欢的歌曲列表详情
  }),
  getters: {
    // 拼接ids,返回字符串
    likeList_ids(state) {
      return state.likeListIds.join(',')
    }
  },
  actions: {
    // 获取我喜欢音乐列表
    async get_likeList(uid) {
      const res = await useLikelist(uid);
      this.likeListIds = res.data.ids
      console.log("获取我喜欢音乐列表", res.data);
    },
    // 获取全部歌曲详情
    async get_songDetailAll() {
      const res = await useSongDetailAll(this.likeListIds.join(','));//拼接ids
      this.likeListSongs = res.data.songs
      console.log("获取全部歌曲详情", res.data);
    },
  },
  // 开启数据持久化
  persist: true,

  // // 持久化存储插件更多配置
  // persist: {
  //   // 修改存储中使用的键名称，默认为当前 Store的 id
  //   key: 'storekey',
  //   // 修改为 sessionStorage，默认为 localStorage
  //   storage: window.sessionStorage,
  //   // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
  //   paths: ['nested.data'],//选择你要存储的数据
  // },
})

// 导出并重命名
export default useMyLikeStore