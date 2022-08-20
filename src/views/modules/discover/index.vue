<template>
  <div class="main">
    <p class="title">推荐</p>
    <Banner :myData='banner' />
    <Title title="你的专属歌单" />
    <Recommend :myData='recommend' />
    <Title title="推荐新音乐" />
    <NewSong :myData='newsong' />
    <Title title="推荐MV" />
    <Mv :myData='mv' />
  </div>
</template>

<script setup>
import { computed } from "vue"
import Mv from "@/views/modules/discover/mv.vue"
import NewSong from "@/views/modules/discover/newSong.vue";
import Recommend from '@/views/modules/discover/recommend.vue'
import Title from "@/components/Title.vue"
import Banner from "@/views/modules/discover/banner.vue"
import useStore from "@/pinia/index.js"
const { discover } = useStore()
discover.get_banner()
discover.get_recommend()
discover.get_newSong()
discover.get_mv()
let banner = computed(() => discover.banner)
let recommend = computed(() => discover.recommend)
let newsong = computed(() => discover.newSong)
let mv = computed(() => discover.mv)
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.title {
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  padding: 20px 0;
}
</style>