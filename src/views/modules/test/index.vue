<template>
  <div>
    <div @click="audioPlay">播放</div>
    <div v-for="item in playlist.tracks" @click="play(item.id)">{{item.name}}</div>
    <div @click="audioPause">暂停</div>
  </div>
</template>

<script setup>
import { useAudioStore } from "@/pinia/module/audio.js"
import { storeToRefs } from "pinia";

const { currentPlayMusic, toPlayList, playlist } = storeToRefs(useAudioStore())
const { get_songlistDetail, get_songDetail, audioInit, audioPlay, audioPause, audioSrc } = useAudioStore()

audioInit()//初始化
get_songlistDetail(7636600373)//歌单

const play = async (id) => {
  await audioSrc(id)//设置播放链接
  await get_songDetail(id)//当前播放歌曲详情
  audioPlay()//播放
}
</script>

<style scoped>

</style>