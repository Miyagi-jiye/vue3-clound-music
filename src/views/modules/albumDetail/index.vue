<template>
  <div class="albumDetail" v-if="album.songs">
    <Info :album="album.album" class="info" />
    <el-tabs v-model="activeTab" class="tab">
      <el-tab-pane lazy :label="`歌曲 ${album.songs.length}`" name="tracks">
        <SongList :tracks="album.songs" :options="1" class="songList" />
      </el-tab-pane>
      <el-tab-pane lazy :label="`评论 ${commentAlbum.total}`" name="comments">
        <SongComments :comments="commentAlbum.comments" :hotComments="commentAlbum.hotComments" class="comment" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import Info from "@/views/modules/albumDetail/info.vue"//详情组件
import SongComments from "@/views/modules/playlist/songComments.vue"// 歌单评论组件
import SongList from '@/views/modules/artistDetail/songList.vue'// 热门歌曲列表组件

import { ref, watch } from "vue"
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAlbumDetailStore } from '@/pinia/module/albumDetail.js';

let activeTab = ref("tracks")//默认激活tab

const router = useRouter()
const route = useRoute()

const { get_album, get_commentAlbum } = useAlbumDetailStore()
const { commentAlbum, album } = storeToRefs(useAlbumDetailStore())

get_album(route.params.id)//获取专辑信息
get_commentAlbum(route.params.id)//获取专辑评论

// 监听路由参数专辑id变化
watch(() => route.params.id, () => {
  // 只在当前页触发
  if (route.name == "albumDetail") {
    get_album(route.params.id)
    get_commentAlbum(route.params.id)
  }
})
</script>

<style lang="less" scoped>
/*tab栏样式*/
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

.albumDetail {
  // padding: 20px;
  background-color: #FFF;
  box-sizing: border-box;

  .tab {
    padding: 0 20px;
    box-sizing: border-box;
  }

  .songList {
    margin-top: 20px;
  }

  .comment {
    margin-top: 20px;
  }
}
</style>