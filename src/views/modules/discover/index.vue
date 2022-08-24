<template>
  <div class="discover">
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

const { Discover } = useStore()
Discover.get_banner()
Discover.get_recommend()
Discover.get_newSong()
Discover.get_mv()
let banner = computed(() => Discover.banner)
let recommend = computed(() => Discover.recommend)
let newsong = computed(() => Discover.newSong)
let mv = computed(() => Discover.mv)
</script>

<style lang="less" scoped>
.discover {
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