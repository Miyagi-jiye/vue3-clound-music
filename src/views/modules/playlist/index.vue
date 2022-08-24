<template>
  <div class="playlist">
    <div class="flex">
      <Info :myData='playlist' />
      <el-tabs class="tab" v-model="activeTab">
        <el-tab-pane lazy :label="`歌曲 ${songLength} `" name="tracks">
          <SongList :myData='playlist' />
        </el-tab-pane>
        <el-tab-pane lazy label="评论" name="comments">
          <SongComments />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import SongComments from "@/views/modules/playlist/songComments.vue"// 歌曲评论组件
import SongList from '@/views/modules/playlist/songList.vue'// 歌曲列表组件
import Info from "@/views/modules/playlist/info.vue"// 歌单详情组件
import { ref, computed } from "vue"
import useStore from "@/pinia/index.js"
const { Playlist } = useStore()
// 默认激活菜单
const activeTab = ref("tracks")
// 歌曲数量
const songLength = computed(() => Playlist.playlist.tracks.length)
// 歌单数据
const playlist = computed(() => Playlist.playlist)
// 监听页面刷新，刷新时localStorage保存数据，防止页面刷新丢失数据
window.addEventListener("beforeunload", () => {
  localStorage.setItem("playlist", JSON.stringify(Playlist.playlist))
  localStorage.setItem("comments", JSON.stringify(Playlist.comments))
  localStorage.setItem("hotComments", JSON.stringify(Playlist.hotComments))
})
</script>

<style lang="less" scoped>
:deep(.el-tabs__nav-wrap:after) {
  height: 0;
}

.playlist {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  .flex {
    display: flex;
    flex-direction: column;

    .tab {
      margin-top: 15px;
    }
  }
}
</style>