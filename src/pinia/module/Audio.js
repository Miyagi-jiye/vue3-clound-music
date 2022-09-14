import { defineStore } from "pinia";
import { useSonglistDetail, useSonglistComment, useMusicUrl, useLyric, useSongDetail } from "@/api/index.js";
import vue from "@/assets/img/vue.svg"//默认播放音乐的图片

export const useAudioStore = defineStore("audio", {
  state: () => ({
    audio: new Audio(),
    loopType: 0,//循环模式 0 单曲循环 1 列表循环 2随机播放
    volume: 50,//音量
    isPlay: false, //是否播放中
    isPause: false,//是否暂停
    sliderInput: false,//是否正在拖动进度条
    ended: false,//是否播放结束
    muted: false,//是否静音
    currentTime: 0,//当前播放时间
    duration: 0,//总播放时长
    toPlayList: [
      {
        id: 1, name: 'Vue.js 渐进式JavaScript 框架',
        ar: [{ id: 12345, name: '尤雨溪' }],
        al: { id: 12345, name: '专辑', picUrl: vue },
        dt: 0
      }
    ],//歌单待播放列表数组
    currentPlayMusic: {
      id: 1,
      name: 'Vue.js 渐进式JavaScript 框架',
      ar: [{ id: 12345, name: '尤雨溪' }],
      al: { id: 12345, name: '专辑', picUrl: vue },
      dt: 0
    },// 当前播放的音乐对象//单首歌曲详情
    playlist: {
      tracks: [],
      creator: {}
    },// 歌单列表数据
  }),
  actions: {
    // audio初始化设置
    audioInit() {
      this.audio.volume = Number(50 / 100) // 音乐音量 [0, 1]  最小值 0  最大值 1
      this.audio.autoplay = false //是否自动播放
      this.audio.controls = false //是否显示原生播放器
    },
    // 播放歌曲路径，传入歌曲id
    audioSrc(id) {
      this.audio.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    },
    // 播放
    audioPlay() {
      // 延迟播放，等歌曲加载完毕
      // setTimeout(() => {
      this.audio.play().then(() => {
        console.log('播放成功')
      }).catch((err) => {
        console.log("播放出错", err);
      })
      // }, 500)

    },
    // 暂停
    audioPause() {
      this.audio.pause()
    },
    // 单首歌曲添加到播放列表
    push_toPlayList(id) {
      // 判断数组中是否已经存在该歌曲
      if (this.toPlayList.some((item) => item.id === id) === true) {
        return false
      } else {
        this.toPlayList.push(this.songs)
      }
    },
    // 歌单替换待播放列表
    replace_toPlayList(id) {
      this.toPlayList = this.playlist.tracks
    },
    // 获取歌单详情
    async get_songlistDetail(id) {
      const res = await useSonglistDetail(id);
      this.playlist = res.data.playlist;
      console.log("获取歌单详情", res.data);
    },
    // 获取单首歌曲详情
    async get_songDetail(id) {
      const res = await useSongDetail(id);
      this.currentPlayMusic = res.data.songs[0]
      console.log("获取单首歌曲详情", res.data);
    },
  }
})

// 导出并重命名
export default useAudioStore