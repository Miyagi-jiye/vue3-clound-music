import { defineStore } from "pinia";
import { useSonglistDetail, useSonglistComment, useMusicUrl } from "@/api/index.js";
import vue from "@/assets/img/vue.svg"//默认播放音乐的图片

const usePlaylistStore = defineStore("playlist", {
  state: () => ({
    playlist: JSON.parse(localStorage.getItem('playlist')) || {},// 歌单列表是否有保存数据
    playlistCache: [],//缓存请求过的歌单数据
    comments: JSON.parse(localStorage.getItem('comments')) || [],// 歌单评论列表
    hotComments: JSON.parse(localStorage.getItem('hotComments')) || [],// 热评论列表
    currentPlayMusic: { id: 1, name: 'Vue.js 渐进式JavaScript 框架', ar: [{ name: '尤雨溪' }], al: { picUrl: vue }, dt: 100 * 1000 },// 当前播放的音乐
    toPlayList: [{ id: 1, name: 'Vue.js 渐进式JavaScript 框架', ar: [{ name: '尤雨溪' }], al: { picUrl: vue }, dt: 100 * 1000 }],//歌单播放列表
    playListIndex: 0,//播放列表索引下标
  }),
  // 相当于 computed 计算属性
  getters: {
    // 返回播放列表长度
    playListCount(state) {
      return state.toPlayList.length;
    },
    // 返回当前播放音乐在播放列表的位置索引
    thisIndex(state) {
      return state.toPlayList.findIndex((item) => item.id === state.currentPlayMusic.id);
    },
    // 下一首，返回的是对象{}
    nextSong(state) {
      const { thisIndex, playListCount } = this
      if (thisIndex === playListCount - 1) {//如果是最后一个
        return state.toPlayList.at(0);//返回第一项
      } else {
        const nextIndex = thisIndex + 1//下一项等于当前索引加一
        return state.toPlayList[nextIndex];//返回下一项
      }
    },
    // 上一首，返回的是对象{}
    prevSong(state) {
      const { thisIndex } = this
      if (thisIndex === 0) {//如果是第一个
        return state.toPlayList.at(-1);//返回最后一个
      } else {
        const prevIndex = thisIndex - 1//上一项等于当前索引减一
        return state.toPlayList[prevIndex];//返回上一项
      }
    }
  },
  actions: {
    // 获取歌单详情
    async get_songlistDetail(id) {
      // 判断是否已经缓存过
      if (this.playlistCache.some((item) => item.id === id) === true) {
        console.log('缓存已存在直接使用');
        // 找到缓存中的歌单数据返回
        this.playlist = this.playlistCache.find((item) => item.id === id)
      } else {
        const res = await useSonglistDetail(id);//没有缓存发起请求
        this.playlist = res.data.playlist;
        console.log("没有缓存发起请求");
        this.playlistCache.push(res.data.playlist)//存入缓存
        console.log("获取歌单详情", res.data);
      }
    },
    // 获取歌单评论
    async get_songlistComment(id) {
      const res = await useSonglistComment(id);
      this.comment = res.data.comments;
      this.hotComments = res.data.hotComments;
      console.log("获取歌单评论", res.data);
    },
    // 获取歌曲url
    async get_musicUrl(id) {
      const res = await useMusicUrl(id);
      console.log("获取歌曲url", res.data);
      return res.data;
    },
    // 添加歌单全部歌曲到播放列表
    push_musicToPlayList() {
      this.toPlayList = this.playlist.tracks;
      if (this.toPlayList.length !== 0) {
        this.change_playMusic(this.toPlayList[this.playListIndex])// 从歌单第一首开始播放
      } else {
        return false
      }
    },
    // 改变当前播放音乐
    change_playMusic(obj) {
      // 判断当前播放音乐是否是该歌曲
      if (this.currentPlayMusic.id !== obj.id) {
        this.currentPlayMusic = obj
      } else {
        return false
      }
    },
    // 添加单首歌曲到播放列表
    push_toPlayList(obj) {
      // 判断是否已经存在该歌曲
      if (this.toPlayList.some((item) => item.id === obj.id) === true) {
        return false
      } else {
        this.toPlayList.push(obj)
      }
    },
    // 清空播放列表
    clear_toPlayList() {
      this.toPlayList = []
      // 恢复默认
      this.currentPlayMusic = { id: 1, name: 'Vue.js 渐进式JavaScript 框架', ar: [{ name: '尤雨溪' }], al: { picUrl: vue }, dt: 0 }
    },
    // 上一首音乐
    pre_music() {
      this.currentPlayMusic = this.prevSong
    },
    // 下一首音乐
    next_music() {
      this.currentPlayMusic = this.nextSong
    },
  }
})

// 导出并重命名
export default usePlaylistStore