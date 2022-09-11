<template>
  <div class="albumDetail" v-if="album.songs">
    <Info :album="album.album" class="info" />
    <el-tabs v-model="activeTab" class="tab">
      <el-tab-pane lazy :label="`歌曲 ${album.songs.length}`" name="tracks">
        <SongList :tracks="album.songs" :options="1" class="songList" />
      </el-tab-pane>
      <el-tab-pane lazy :label="`评论 ${commentAlbum.total}`" name="comments">
        <SongComments :comments="commentAlbum.comments" :hotComments="commentAlbum.hotComments" class="comment" />
        <LoadMore v-show="commentAlbum.total >  commentAlbum.comments.length" :limit="commentAlbumParams.limit"
          :offset="commentAlbumParams.offset" @emitloadMore="loadeMore" class="loadMore" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import Info from "@/views/modules/albumDetail/info.vue"//详情组件
import LoadMore from "@/views/modules/albumDetail/loadMore.vue"//加载更多评论组件
import SongComments from "@/views/modules/playlist/songComments.vue"// 歌单评论组件
import SongList from '@/views/modules/artistDetail/songList.vue'// 热门歌曲列表组件

import { ref, watch, onUnmounted } from "vue"
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAlbumDetailStore } from '@/pinia/module/albumDetail.js';

let activeTab = ref("tracks")//默认激活tab

const router = useRouter()
const route = useRoute()

const { get_album, get_commentAlbum, get_commentMore } = useAlbumDetailStore()
const { commentAlbum, album, commentAlbumParams, commentMoreParams } = storeToRefs(useAlbumDetailStore())

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

// 加载更多专辑评论
const loadeMore = (e) => {
  commentMoreParams.value.offset = e
  get_commentMore(route.params.id)
}
onUnmounted(() => {
  // 离开页面还原评论页数
  commentMoreParams.value.offset = 1
  console.log("卸载");
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
  min-height: 100vh;

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

  .loadMore {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>