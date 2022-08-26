<template>
  <div>
    <!--chrome浏览器不支持自动播放-->
    <audio type="file" id="audioPlay" :src="`https://music.163.com/song/media/outer/url?id=${myData}.mp3`" controls loop
      autoplay preload="metadata" muted>
      您的浏览器不支持audio标签,您还是换个浏览器吧
    </audio>
  </div>
</template>

<script setup>
defineProps({
  myData: {
    // type: String,//不校验，number和字符串都可以
    default: '1969576178'
  }
})
// 控制audio播放器的各种属性
const audio = document.getElementById('audioPlay')
// 播放
const play = () => {
  audio.play()
}
// 暂停
const pause = () => {
  audio.pause()
}
// 重置
const reset = () => {
  audio.pause()
  audio.currentTime = 0
}
// 音量
const volume = (value) => {
  audio.volume = value
}
// 改变当前时间
const time = (value) => {
  audio.currentTime = value
}
// 总时间
const duration = () => {
  return audio.duration
}
// 当前时间
const currentTime = () => {
  return audio.currentTime
}

// 控制audio播放器的各种事件
// 播放
const onPlay = (callback) => {
  audio.addEventListener('play', callback)
}
// 暂停
const onPause = (callback) => {
  audio.addEventListener('pause', callback)
}
// 重置
const onStop = (callback) => {
  audio.addEventListener('stop', callback)
}
// 进度条更新
const onTimeUpdate = (callback) => {
  audio.addEventListener('timeupdate', callback)
}
// 总时长改变
const onDurationChange = (callback) => {
  audio.addEventListener('durationchange', callback)
}
// 播放完毕
const onEnded = (callback) => {
  audio.addEventListener('ended', callback)
}
// 错误
const onError = (callback) => {
  audio.addEventListener('error', callback)
}
</script>

<style scoped>
</style>