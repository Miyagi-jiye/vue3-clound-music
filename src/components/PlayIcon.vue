<template>
  <div class="playIcon">
    <icon-play fill="#34d399" v-show="audioStatus === false" theme="filled" size="38" :strokeWidth="2" title='点击播放'
      @click="playClick()" />
    <icon-pause-one fill="#34d399" v-show="audioStatus === true" theme="filled" size="38" :strokeWidth="2" title='点击暂停'
      @click="pauseClick()" />
  </div>
</template>

<script setup>
import { inject } from "vue"

let audioStatus = inject('audioStatus')//播放状态
const playClick = inject('playClick')//播放
const pauseClick = inject('pauseClick')//暂停

</script>

<style scoped>
.playIcon:hover {
  color: #34d399;
  cursor: pointer;
}
</style>