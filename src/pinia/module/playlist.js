import { defineStore } from "pinia";
import { useSonglistDetail, useSonglistComment, useMusicUrl, useLyric } from "@/api/index.js";
import vue from "@/assets/img/vue.svg"//默认播放音乐的图片

const usePlaylistStore = defineStore("playlist", {
  state: () => ({
    playlist: JSON.parse(localStorage.getItem('playlist')) || {},// 歌单列表是否有保存数据
    playlistCache: [],//缓存请求过的歌单数据
    comments: JSON.parse(localStorage.getItem('comments')) || {},// 歌单评论数据
    currentPlayMusic: { id: 1, name: 'Vue.js 渐进式JavaScript 框架', ar: [{ name: '尤雨溪' }], al: { picUrl: vue }, dt: 0 },// 当前播放的音乐
    toPlayList: [{ id: 1, name: 'Vue.js 渐进式JavaScript 框架', ar: [{ name: '尤雨溪' }], al: { picUrl: vue }, dt: 0 }],//歌单播放列表
    lyric: [],//歌词
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
      this.comments = res.data
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
        this.change_playMusic(this.toPlayList[0])// 从歌单第一首开始播放
      } else {
        return false
      }
    },
    // 改变当前播放音乐
    async change_playMusic(obj) {
      // 判断当前播放音乐是否是自己
      if (this.currentPlayMusic.id !== obj.id) {
        await this.get_lyric(obj.id)
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
      // 恢复默认设置
      this.toPlayList = [{ id: 1, name: 'Vue.js 渐进式JavaScript 框架', ar: [{ name: '尤雨溪' }], al: { picUrl: vue }, dt: 0 }]
      this.currentPlayMusic = { id: 1, name: 'Vue.js 渐进式JavaScript 框架', ar: [{ name: '尤雨溪' }], al: { picUrl: vue }, dt: 0 }
    },
    // 上一首音乐
    pre_music() {
      if (this.toPlayList == []) { console.log("空数组"); return }
      this.currentPlayMusic = this.prevSong
      this.get_lyric(this.currentPlayMusic.id)
    },
    // 下一首音乐
    next_music() {
      if (this.toPlayList == []) { console.log("空数组"); return }
      this.currentPlayMusic = this.nextSong
      this.get_lyric(this.currentPlayMusic.id)
    },
    // 获取歌词
    async get_lyric(id) {
      const res = await useLyric(id)
      this.lyric = this.parse_lyric(res.data.lrc.lyric)//格式化歌词
      console.log("获取歌词", res.data);
    },
    // 处理歌词
    handle_lyric(lyric) {
      let array = []
      // 截取 [00:01.02] 以及过滤为null或undefined的字符串，返回新数组
      array = lyric.split(/\s*\n*\[.*?\]\s*/).filter(v => !!v)
      // console.log("处理后的歌词", array);
      return array
    },
    // 格式化歌词方法
    parse_lyric(lrc) {
      // 分割歌词，返回数组
      let lyrics = lrc.split("\n");
      // 1.定义正则表达式提取[00:00.000]
      let reg1 = /\[\d*:\d*\.\d*\]/g;
      // 2.定义正则表达式提取 [00
      let reg2 = /\[\d*/i;
      // 3.定义正则表达式提取 :00
      let reg3 = /\:\d*/i;
      // 4.定义数组保存处理好的歌词
      let lyricArray = [];
      // 5.遍历歌词数组
      lyrics.forEach(function (lyric) {
        // 1.提取时间 [00:00.000]
        let timeStr = lyric.match(reg1);
        if (!timeStr) { return }
        timeStr = timeStr[0];
        // 2.提取分钟
        let minStr = timeStr.match(reg2)[0].substring(1);
        // 3.提取秒钟
        let secondStr = timeStr.match(reg3)[0].substring(1);
        // 4.合并时间, 将分钟和秒钟都合并为秒钟
        let time = parseInt(minStr) * 60 + parseInt(secondStr);
        // 5.处理歌词
        let text = lyric.replace(reg1, "").trim();
        // 6.保存数据
        lyricArray.push({ time: time, lyric: text, pre: 0 })
      });
      // 添加下一句歌词的时间
      lyricArray.forEach((item, index) => {
        // 如果是最后一句歌词
        if (index == lyricArray.length - 1) {
          item.pre = item.time + 999
        } else {
          item.pre = lyricArray[index + 1].time
        }
      })
      console.log("格式化后的歌词", lyricArray);
      return lyricArray;
    }
  }
})

// 导出并重命名
export default usePlaylistStore