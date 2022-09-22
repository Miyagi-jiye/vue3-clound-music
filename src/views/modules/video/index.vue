<template>
  <div class="video">
    <el-tabs class="tab" v-model="activeTab">
      <el-tab-pane lazy label="MV" name="mv">
        <Filter @clickEmit="emitMvAll" />
        <MV :myData="mvAll" class="MV" />
        <Pagination :myData="mvAllParams" :mvTotal="mvTotal" @emitClick="emitPage" class="pagination" />
      </el-tab-pane>
      <el-tab-pane lazy label="视频" name="video">
        <MV :myData="videoTimelineRecommend" class="MV" />
        <div class="loadMore">
          <p @click="loadMore">加载更多</p>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import Pagination from "@/views/modules/video/pagination.vue"; //分页组件
import Filter from "@/views/modules/video/filter.vue"; //筛选组件
import MV from "@/views/modules/discover/mv.vue"; //复用首页MV组件
import { ref } from "vue";
import { useVideoStore } from "@/pinia/module/video.js";
import { storeToRefs } from "pinia";

const activeTab = ref("mv"); // 默认激活菜单

const { get_videoGroupList, get_mvAll, get_videoTimelineRecommend } = useVideoStore();
const { mvAll, mvAllParams, mvTotal, videoTimelineRecommend, videoTimelineRecommendOffset } = storeToRefs(useVideoStore());

const init = () => {
  get_videoGroupList()//获取视频分类
  get_mvAll();//初始化获取mv视频
  get_videoTimelineRecommend();//初始化获取推荐视频
}

init()

// 筛选点击事件
const emitMvAll = (e) => {
  mvAllParams.value.type = e.type;
  mvAllParams.value.area = e.area;
  mvAllParams.value.order = e.order;
  mvAllParams.value.offset = 1; //回到第一页才能获取到count
  get_mvAll();
};
// 分页点击事件
const emitPage = () => {
  get_mvAll();
};
// 加载更多
const loadMore = () => {
  videoTimelineRecommendOffset.value++;
  get_videoTimelineRecommend();
};
</script>

<style lang="less" scoped>
// tab样式
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

.loadMore {
  margin: 20px 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #34d399;
  font-size: 14px;

  p {
    cursor: pointer;

    &:hover {
      color: rgba(8, 88, 59, 0.733);
    }
  }
}

// 加载更多视频
.video {
  padding: 0 20px 20px 20px;
  background-color: #fff;
  min-height: 100vh;
  position: relative;

  .backToTopIcon {
    position: absolute;
    right: 40px;
    bottom: 140px;
  }

  .MV {
    margin-top: 20px;
  }

  .pagination {
    margin-top: 20px;
  }
}
</style>
