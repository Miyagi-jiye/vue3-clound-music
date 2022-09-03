<template>

  <div class="music">
    <el-tabs class="tab" v-model="activeTab">
      <el-tab-pane lazy label="排行榜" name="toplist">
        <p class="title">官方榜</p>
        <RankingList :oneToFour="oneToFour" />
        <p class="title">全球榜</p>
        <Recommend :myData="fiveToEnd" />
      </el-tab-pane>
      <el-tab-pane lazy label="歌手" name="artist">
        <Artist :artistList="artistList" @clickEmit="emitArtists" @routerEmit="emitToArtistDetail" />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script setup>
import Artist from "@/views/modules/music/artist.vue"//歌手组件
import Recommend from '@/views/modules/discover/recommend.vue'//卡片组件
import RankingList from "@/views/modules/music/rankingList.vue"//官方榜组件
import { ref } from "vue"
import { storeToRefs } from 'pinia';
import { useMusicStore } from '@/pinia/module/music.js';
import { useRouter } from "vue-router"

const router = useRouter()

let activeTab = ref("toplist")

const { fiveToEnd, oneToFour, artistList } = storeToRefs(useMusicStore())
const { get_toplist, get_artistList } = useMusicStore()

get_toplist()//获取所有榜单详情摘要
get_artistList(-1, -1, -1)//初始化获取热门歌手列表

// 歌手筛选
function emitArtists(e) {
  get_artistList(e.type, e.area, e.initial)
}
// 前往歌手详情页,传递歌手id参数
function emitToArtistDetail(id) {
  router.push({ name: "artistDetail", params: { id: id } })
}
</script>

<style lang="less" scoped>
:deep(.el-tabs__nav-wrap:after) {
  height: 0;
}

:deep(.el-tabs__header) {
  margin: 0;
}

:deep(.el-tabs__item.is-active) {
  font-size: 16px !important;
  font-weight: 600 !important;
}

.tab {
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;
}

.music {
  padding: 0 20px 20px 20px;
  background-color: var(--my-background-color);
  box-sizing: border-box;
}

.title {
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  padding: 20px 0;
}
</style>