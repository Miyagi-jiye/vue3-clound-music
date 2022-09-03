<template>
  <div class="artistDetail">
    <Info :artist="artist" class="info" />
    <el-tabs v-model="activeTab">
      <el-tab-pane lazy label="热门歌曲" name="tracks">
        <SongList :tracks="artistHotSong" class="songList" />
      </el-tab-pane>
      <el-tab-pane lazy label="歌手详情" name="details">
        <Detail :artistDesc="artistDesc" class="detail" />
      </el-tab-pane>
      <el-tab-pane lazy label="专辑" name="albums">
        <Album :artistAlbum="artistAlbum" class="album" @routerEmit="routerEmit" @clickEmit="clickEmit" />
      </el-tab-pane>
      <el-tab-pane lazy label="MV" name="mvs">
        <MV :myData="artistMV" class="mv" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import SongList from '@/views/modules/artistDetail/songList.vue'// 热门歌曲列表组件
import Info from '@/views/modules/artistDetail/info.vue'// 歌手详情组件
import Detail from '@/views/modules/artistDetail/detail.vue'// 歌手更多详情组件
import Album from '@/views/modules/artistDetail/album.vue'// 歌手热门专辑组件
import MV from "@/views/modules/discover/mv.vue"// 复用首页MV组件

import { ref, watch } from "vue"
import { storeToRefs } from 'pinia';
import { useMusicStore } from '@/pinia/module/music.js';
import useStore from "@/pinia/index.js"
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()
const { Playlist } = useStore()

let activeTab = ref("tracks")//默认激活tab

const { artistHotSong, artist, artistDesc, artistAlbum, artistMV } = storeToRefs(useMusicStore())
const { get_artistDesc, get_artists, get_artistAlbum, get_artistMV } = useMusicStore()

// 路由跳转携带歌手id参数
get_artists(route.params.id)//获取歌手50首热门单曲和简历详情
get_artistDesc(route.params.id)//获取歌手详细描述
get_artistAlbum(route.params.id)//获取歌手热门专辑
get_artistMV(route.params.id)//获取歌手热门MV

// 监听路由参数歌手id变化
watch(() => route.params.id, () => {
  get_artists(route.params.id)//获取歌手50首热门单曲和简历详情
  get_artistDesc(route.params.id)//获取歌手详细描述
  get_artistAlbum(route.params.id)//获取歌手热门专辑
  get_artistMV(route.params.id)//获取歌手热门MV
})

// 跳转到专辑详情页
function routerEmit(id) {
  router.push({ name: "albumDetail", params: { id: id } })
}
// 添加到播放列表，自动按顺序播放
async function clickEmit(id) {
  console.log("点击全部播放");
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

.artistDetail {
  padding: 20px;
  background-color: #FFF;
  box-sizing: border-box;

  .info {
    margin-bottom: 20px;
  }

  .songList {
    margin-top: 20px;
  }

  .detail {
    margin-top: 20px;
  }

  .album {
    margin-top: 20px;
  }

  .mv {
    margin-top: 20px;
  }
}
</style>