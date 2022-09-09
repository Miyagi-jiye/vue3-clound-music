<template>
  <div class="searchDetail">
    <el-tabs v-model="activeTab">
      <el-tab-pane lazy label="单曲" name="1">
        <SongList :myData="getterSongs" class="songList" />
        <Pagination :myData="searchParams" :mvTotal="songCount" @emitClick="emitPage" class="pagination" />
      </el-tab-pane>
      <el-tab-pane lazy label="专辑" name="10">
        <AlbumList :albums="albums" @routerEmit="routerPush" class="albumList" />
        <Pagination :myData="searchParams" :mvTotal="albumCount" @emitClick="emitPage" class="pagination" />
      </el-tab-pane>
      <el-tab-pane lazy label="歌手" name="100">
        <ArtistList :artists="artists" @routerEmit="routerPush" class="artistList" />
        <Pagination :myData="searchParams" :mvTotal="artistCount" @emitClick="emitPage" class="pagination" />
      </el-tab-pane>
      <el-tab-pane lazy label="歌单" name="1000">
        <Recommend :myData='playlists' class="playList" />
        <Pagination :myData="searchParams" :mvTotal="playlistCount" @emitClick="emitPage" class="pagination" />
      </el-tab-pane>
      <el-tab-pane lazy label="用户" name="1002">
        <UserList :userprofiles="userprofiles" class="userList" />
        <Pagination :myData="searchParams" :mvTotal="userprofileCount" @emitClick="emitPage" class="pagination" />
      </el-tab-pane>
      <el-tab-pane lazy label="MV" name="1004">
        <Mv :myData="mvs" class="video" />
        <Pagination :myData="searchParams" :mvTotal="mvCount" @emitClick="emitPage" class="pagination" />
      </el-tab-pane>
      <el-tab-pane lazy label="歌词" name="1006">
      </el-tab-pane>
      <el-tab-pane lazy label="电台" name="1009">
      </el-tab-pane>
      <el-tab-pane lazy label="视频" name="1014">
        <Mv :myData="videos" class="video" />
        <Pagination :myData="searchParams" :mvTotal="videoCount" @emitClick="emitPage" class="pagination" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import UserList from "@/views/modules/searchDetail/userList.vue"
import Recommend from '@/views/modules/discover/recommend.vue'//歌单推荐(复用)
import ArtistList from "@/views/modules/searchDetail/artistList.vue";//歌手列表
import AlbumList from "@/views/modules/searchDetail/albumList.vue"//专辑列表
import SongList from '@/views/modules/playlist/songList.vue'// 歌单列表组件(复用)
import Pagination from "@/views/modules/video/pagination.vue"; //分页组件(复用)
import Mv from "@/views/modules/discover/mv.vue"//视频组件(复用)

import { useSearchDetailStore } from "@/pinia/module/searchDetail.js";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from "vue"

const router = useRouter()
const route = useRoute()
let activeTab = ref("1")//默认激活tab

const { get_cloudSearch } = useSearchDetailStore();
const { mvs, mvCount, userprofiles, userprofileCount, playlists, playlistCount, artists, artistCount, albums, albumCount, videos, videoCount, songCount, getterSongs, searchParams } = storeToRefs(useSearchDetailStore());

// 初始化
searchParams.value.keywords = route.params.id
searchParams.value.type = Number(activeTab.value)
get_cloudSearch()//搜索

// 监听路由参数搜索关键字的变化
watch(() => route.params.id, () => {
  // 只在当前页触发
  if (route.name == "searchDetail") {
    searchParams.value.keywords = route.params.id//重新赋值搜索关键字
    get_cloudSearch()
  }
})
// 监听tab栏变化
watch(activeTab, () => {
  searchParams.value.type = Number(activeTab.value)//修改类型
  get_cloudSearch()
})
// 歌曲分页点击事件
const emitPage = () => {
  get_cloudSearch()
}
// 路由跳转携带参数
const routerPush = (name, id) => {
  router.push({ name: name, params: { id: id } })
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

.searchDetail {
  padding: 0 20px 20px 20px;
  background-color: #FFF;
  box-sizing: border-box;
  min-height: 100vh;

  .songList {
    margin-top: 20px;
  }

  .pagination {
    margin-top: 20px;
  }

  .video {
    margin-top: 20px;
  }

  .albumList {
    margin-top: 20px;
  }

  .artistList {
    margin-top: 20px;
  }

  .playList {
    margin-top: 20px;
  }

  .userList {
    margin-top: 20px;
  }
}
</style>