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
        <Artist :artistList="artistList" />
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

let activeTab = ref("toplist")//激活tab栏

const { fiveToEnd, oneToFour, artistList } = storeToRefs(useMusicStore())
const { get_toplist, get_artistList } = useMusicStore()

get_toplist()//初始化获取所有榜单详情摘要
get_artistList()//初始化获取热门歌手列表

</script>

<style lang="less" scoped>
// tab栏样式
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

// 固定tab栏头部
:deep(.el-tabs) {
  margin: 0;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
}

// 固定tab栏头部
:deep(.el-tabs__header) {
  margin: 0;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
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
  min-height: 100vh;
}

.title {
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  padding: 20px 0;
}
</style>