<template>
  <div class="playlist" v-if="playlist">
    <div class="flex">
      <Info :myData='playlist' />
      <el-tabs class="tab" v-model="activeTab">
        <el-tab-pane lazy :label="`歌曲 ${playlist.tracks.length} `" name="tracks">
          <SongList :myData='playlist' />
        </el-tab-pane>
        <el-tab-pane lazy :label="`评论 ${comments.total} `" name="comments">
          <SongComments :comments="comments.comments" :hotComments="comments.hotComments"
            v-infinite-scroll="lodaMoreInfinite" />
          <LoadMore v-show="comments.total > comments.comments.length" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import LoadMore from "@/views/modules/albumDetail/loadMore.vue"//加载更多评论组件(复用)
import SongComments from "@/views/modules/playlist/songComments.vue"// 歌单评论组件
import SongList from '@/views/modules/playlist/songList.vue'// 歌单列表组件
import Info from "@/views/modules/playlist/info.vue"// 歌单详情组件
import { ref, onUnmounted } from "vue"
import { usePlaylistStore } from "@/pinia/module/playlist.js"
import { storeToRefs } from "pinia"
import { useRoute } from 'vue-router';

const { get_songlistDetail, get_songlistComment, get_songlistCommentMore } = usePlaylistStore()//pinia中的方法
const { playlist, comments, commentMoreParams } = storeToRefs(usePlaylistStore())
const route = useRoute()

get_songlistDetail(route.query.id)//获取歌单详情
get_songlistComment(route.query.id)// 获取歌单评论

// 默认激活菜单
const activeTab = ref("tracks")
// 无限加载(element-plus Infinite Scroll 无限滚动)
const lodaMoreInfinite = () => {
  // 激活tab判断
  if (activeTab.value == 'comments') {
    commentMoreParams.value.offset++//页数累加
    get_songlistCommentMore(route.query.id)///获取下一页评论数据
  }
}
onUnmounted(() => {
  // 离开页面还原评论页数
  commentMoreParams.value.offset = 1
  console.log("卸载");
})
</script>

<style lang="less" scoped>
:deep(.el-tabs__nav-wrap:after) {
  height: 0;
}

.playlist {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--my-background-color);
  min-height: 100vh;

  .flex {
    display: flex;
    flex-direction: column;

    .tab {
      margin-top: 15px;
    }
  }
}

:deep(.el-tabs__item.is-active) {
  font-size: 16px !important;
  font-weight: 600 !important;
}
</style>