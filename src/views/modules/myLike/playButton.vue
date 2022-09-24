<template>
  <div>
    <icon-play theme="outline" size="20" class="play" @click="get_songDetail(myData.id)" />
  </div>
</template>

<script setup>
import { usePlaylistStore } from "@/pinia/module/playlist.js"

const { get_songDetail } = usePlaylistStore()//获取歌曲详情

defineProps({
  size: {
    type: Number,
    default: 20
  },
  myData: {
    type: Object,
    default: {}
  }
})

</script>

<style lang="less" scoped>
.play {
  cursor: pointer;

  &:hover {
    color: #34d399;
  }
}
</style>