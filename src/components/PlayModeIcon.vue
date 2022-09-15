<template>
  <div class="playModeIcon">
    <icon-play-once v-show="playMode === 'playOnce'" theme="outline" size="22" :strokeWidth="2" title='播完暂停'
      @click="playModeClick('loopOnce')" />
    <icon-loop-once v-show="playMode === 'loopOnce'" theme="outline" size="22" :strokeWidth="2" title='单曲循环'
      @click="playModeClick('playCycle')" />
    <icon-play-cycle v-show="playMode === 'playCycle'" theme="outline" size="22" :strokeWidth="2" title='歌单循环'
      @click="playModeClick('playOnce')" />
  </div>
</template>

<script setup>
import { inject } from "vue"

let playMode = inject('playMode')

// 播放模式切换
function playModeClick(name) {
  playMode.value = name
}
</script>

<style scoped>
.playModeIcon:hover {
  color: #34d399;
  cursor: pointer;
}
</style>