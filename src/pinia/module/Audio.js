import { defineStore } from "pinia";
import { useSonglistDetail, useSonglistComment, useMusicUrl } from "@/api/index.js";
import vue from "@/assets/img/vue.svg"//默认播放音乐的图片

const useAudioStore = defineStore("audio", {
  state: () => ({
    audio: new Audio(),
  }),
  actions: {
    // audio初始化设置
    audioInit() {
      this.audio.volume = Number(10 / 100) // 音乐音量 [0, 1]  最小值 0  最大值 1
      this.audio.autoplay = false //是否自动播放
      this.audio.controls = false //是否显示原生播放器
    },
    // 播放歌曲路径，传入歌曲id
    audioSrc(id) {
      this.audio.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    },
    // 播放
    audioPlay() {
      this.audio.play()
    },
    // 暂停
    audioPause() {
      this.audio.pause()
    },
  }
})

// 导出并重命名
export default useAudioStore