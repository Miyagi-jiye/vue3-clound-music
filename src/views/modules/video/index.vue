<template>
  <div class="video">
    <el-tabs class="tab" v-model="activeTab">
      <el-tab-pane lazy label="视频" name="video">

      </el-tab-pane>
      <el-tab-pane lazy label="MV" name="mv">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useVideoStore } from "@/pinia/module/video.js"
import { storeToRefs } from "pinia"
// 默认激活菜单
const activeTab = ref("video")
const { get_videoGroupList } = useVideoStore()
get_videoGroupList()
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
</style>