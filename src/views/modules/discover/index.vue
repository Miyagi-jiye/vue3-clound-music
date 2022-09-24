<template>
  <div class="discover">
    <!-- 未登录 -->
    <div v-show="isLogin==false">
      <p class="banner">推荐</p>
      <Banner :myData='banner' />
      <Title title="精品歌单" :right="true" @emitClick="titleRightClick" />
      <Tag :myData="tags" :activeTag="highqualityParams.cat" :end="8" @emitClick="tagClick" />
      <Recommend :myData='highquality' />
      <Title title="推荐歌单" />
      <Recommend :myData='recommend' :end="10" />
      <Title title="发现新音乐" />
      <NewSong :myData='newSong' />
      <Title title="新专速递" />
      <Album :myData='album' />
      <Title title="最新MV" />
      <Mv :myData='mv' />
    </div>
    <!-- 已登录 -->
    <div v-show="isLogin==true">
      <Title title="每日专属推荐" />
      <Daily :dailySongs="dailySongs" :fm="fm" />
      <Title title="你的专属歌单" />
      <Recommend :myData='privateRecommend' />
    </div>
  </div>
</template>

<script setup>
import Tag from "@/components/Tag.vue"
import Album from "@/views/modules/discover/album.vue"
import Daily from "@/views/modules/discover/daily.vue";
import Mv from "@/views/modules/discover/mv.vue"
import NewSong from "@/views/modules/discover/newSong.vue";
import Recommend from '@/views/modules/discover/recommend.vue'
import Title from "@/components/Title.vue"
import Banner from "@/views/modules/discover/banner.vue"
import { useDiscoverStore } from "@/pinia/module/discover.js"
import { useLoginStore } from "@/pinia/module/login.js"
import { storeToRefs } from "pinia"
import { watch, provide } from 'vue'

const { get_highquality, get_highqualityTags, get_newestAlbum, get_banner, get_recommend, get_newSong, get_mv, get_recommendResource, get_recommendSongs, get_personalFm } = useDiscoverStore()
const { highquality, highqualityParams, tags, banner, recommend, newSong, mv, privateRecommend, dailySongs, fm, album } = storeToRefs(useDiscoverStore())
const { isLogin } = storeToRefs(useLoginStore())

provide('get_personalFm', get_personalFm)

const init = () => {
  if (isLogin.value == true) {
    get_recommendResource()
    get_recommendSongs()
    get_personalFm()
  } else {
    get_banner()
    get_recommend()
    get_newSong()
    get_mv()
    get_newestAlbum()
    get_highqualityTags()
    get_highquality()
  }
}
// 初始化
init()
// 监听登录状态变化
watch(isLogin, () => {
  init()
})

// 点击标签
const tagClick = (val) => {
  highqualityParams.value.cat = val
  get_highquality()
}
// 点击刷新
const titleRightClick = () => {
  get_highquality()
}
</script>

<style lang="less" scoped>
.discover {
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px 20px 20px;
  background-color: var(--my-background-color);
  min-height: 100vh;
}

.banner {
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  padding: 20px 0;
}
</style>