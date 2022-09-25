import { defineStore } from "pinia";
import { useSongComment, useSonglistDetail, useSonglistComment, useMusicUrl, useLyric, useSongDetail, useSongDetailAll } from "@/api/index.js";
import vue from "@/assets/img/vue.svg"//默认播放音乐的图片

export const usePlaylistStore = defineStore("playlist", {
  state: () => ({
    playlist: {
      trackIds: [],//全部歌曲id
      tracks: [],//20首歌曲
      creator: {}
    },// 歌单列表数据
    comments: {
      comments: [],
      hotComments: [],
      total: 0
    },// 歌单评论数据
    commentParams: {
      limit: 20,
      offset: 1
    },// 歌单评论参数
    commentMoreParams: {
      limit: 20,
      offset: 1
    },// 歌单更多评论参数
    currentPlayMusic: { id: 1, name: 'Vue.js 渐进式JavaScript 框架', ar: [{ id: 12345, name: '尤雨溪' }], al: { id: 12345, name: '专辑', picUrl: vue }, dt: 0 },// 当前播放的音乐
    toPlayList: [{ id: 1, name: 'Vue.js 渐进式JavaScript 框架', ar: [{ id: 12345, name: '尤雨溪' }], al: { id: 12345, name: '专辑', picUrl: vue }, dt: 0 }],//歌单播放列表
    lyric: [],//歌词
    songs: {},//单首歌曲详情
    songCommentParams: {
      limit: 20,
      offset: 1
    },//单首歌曲评论参数
    songsAll: [],//全部歌曲详情
    audioStatus: false,//播放状态
    audioCurrentTime: 0,// 当前播放时间
    audioDuration: 0,// 歌曲总时长
    progressStatus: 0,//默认0-100 // 进度条
    playMode: 'playOnce',// 播放模式
    playSpeed: 1,  // 播放速度
    volume: 50,//音量
  }),
  // 相当于 computed 计算属性
  getters: {
    // 返回当前播放的歌曲id
    currentPlayID(state) {
      return state.currentPlayMusic.id
    },
    // 返回播放列表长度
    playListCount(state) {
      return state.toPlayList.length;
    },
    // 返回当前播放音乐在播放列表的位置索引
    thisIndex(state) {
      return state.toPlayList.findIndex((item) => item.id === state.currentPlayMusic.id);
    },
    // 下一首，返回的是对象{obj}
    nextSong(state) {
      const { thisIndex, playListCount } = this
      if (thisIndex === playListCount - 1) {//如果是最后一个
        return state.toPlayList.at(0);//返回第一项
      } else {
        const nextIndex = thisIndex + 1//下一项等于当前索引加一
        return state.toPlayList[nextIndex];//返回下一项
      }
    },
    // 上一首，返回的是对象{obj}
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
    // 获取单首歌曲评论
    async get_songComment(id) {
      const { data } = await useSongComment(id, this.songCommentParams);
      console.log("获取单首歌曲评论", data);
      return data;
    },
    // 获取单首歌曲详情,并播放
    async get_songDetail(id) {
      const res = await useSongDetail(id);
      this.songs = res.data.songs[0]
      console.log("获取单首歌曲详情", res.data);
      this.change_playMusic(this.songs)//改变当前播放音乐
      this.push_toPlayList(this.songs)//添加单首歌曲到播放列表
    },
    // 获取全部歌曲详情
    async get_songDetailAll(ids) {
      const res = await useSongDetailAll(this.playlist.trackIds.join(','));
      this.songsAll = res.data.songs
      this.playlist.tracks = this.songsAll//重新渲染列表（建议分页或使用虚拟化列表，不然容易卡顿）
      console.log("获取全部歌曲详情", res.data);
    },
    // 获取歌单详情
    async get_songlistDetail(id) {
      const res = await useSonglistDetail(id);
      this.playlist = res.data.playlist;
      // 设置全部歌曲id数组
      this.playlist.trackIds = res.data.playlist.trackIds.map(item => { return Number(item.id) })
      console.log("获取歌单详情", res.data);
    },
    // 获取歌单评论
    async get_songlistComment(id) {
      const res = await useSonglistComment(id, this.commentParams);
      this.comments = res.data
      console.log("获取歌单评论", res.data);
    },
    // 获取更多歌单评论
    async get_songlistCommentMore(id) {
      const res = await useSonglistComment(id, this.commentMoreParams);
      if (res.data.more == false) return //是否还有剩余评论
      // 1.循环数组添加(每一个都有proxy)
      res.data.comments.forEach(item => {
        this.comments.comments.push(item)
      });
      console.log("获取更多歌单评论", res.data);
    },
    // 获取歌曲url(未使用)
    async get_musicUrl(id) {
      const res = await useMusicUrl(id);
      console.log("获取歌曲url", res.data);
      return res.data;
    },
    // 添加歌单全部歌曲到播放列表
    push_musicToPlayList(array) {
      // 如果有传递参数
      if (array) {
        this.toPlayList = array
        if (this.toPlayList.length !== 0) {
          this.change_playMusic(this.toPlayList[0])// 从歌单第一首开始播放
        }
      } else {
        this.toPlayList = this.playlist.tracks;
        if (this.toPlayList.length !== 0) {
          this.change_playMusic(this.toPlayList[0])// 从歌单第一首开始播放
        } else {
          return false
        }
      }
    },
    // 改变当前播放音乐
    async change_playMusic(obj) {
      // 判断当前播放音乐是否是自己
      if (this.currentPlayMusic.id !== obj.id) {
        await this.get_lyric(obj.id)//获取歌词
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
      this.toPlayList = [{ id: 1, name: 'Vue.js 渐进式JavaScript 框架', ar: [{ id: 12345, name: '尤雨溪' }], al: { id: 12345, name: '专辑', picUrl: vue }, dt: 0 }]
      this.currentPlayMusic = { id: 1, name: 'Vue.js 渐进式JavaScript 框架', ar: [{ id: 12345, name: '尤雨溪' }], al: { id: 12345, name: '专辑', picUrl: vue }, dt: 0 }
    },
    // 删除播放列表中的歌曲
    delete_toPlayList(id) {
      // 从 findIndex 找到的索引的位置开始删除 1 个元素
      this.toPlayList.splice(this.toPlayList.findIndex((item) => item.id == id), 1)
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
      try {
        const res = await useLyric(id)
        this.lyric = this.parse_lyric(res.data.lrc.lyric)//格式化歌词
        console.log("获取歌词", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    // 处理歌词(未使用)
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
      // 3.定义正则表达式提取 :00.000
      let reg3 = /\:\d*\.\d*/i;
      // 4.定义数组保存处理好的歌词
      let lyricArray = [];
      // 过滤空行歌词
      lyrics.filter(v => !!v)
      // 5.遍历歌词数组
      lyrics.forEach(function (lyric) {
        // 1.提取时间 [00:00.000]
        let timeStr = lyric.match(reg1);
        if (!timeStr) { return }
        timeStr = timeStr[0];
        // 2.提取分钟,删除[
        let minStr = timeStr.match(reg2)[0].substring(1);
        // 3.提取秒钟,删除:
        let secondStr = timeStr.match(reg3)[0].substring(1);
        // 4.合并时间, 将分钟和秒钟都合并为秒钟
        let time = parseInt(minStr) * 60 + parseFloat(secondStr);
        // console.log(minStr, "分", secondStr, "秒", Number(time).toFixed(3));
        // 5.处理歌词
        let text = lyric.replace(reg1, "").trim();
        // 6.保存数据
        lyricArray.push({ time: Number(time.toFixed(3)), lyric: text, next: 0 })
      });
      // 添加下一句歌词的时间
      lyricArray.forEach((item, index) => {
        // 如果是最后一句歌词
        if (index == lyricArray.length - 1) {
          item.next = item.time + 999
        } else {
          item.next = lyricArray[index + 1].time
        }
      })
      console.log("格式化后的歌词", lyricArray);
      return lyricArray;
    }
  }
})

// 导出并重命名
export default usePlaylistStore