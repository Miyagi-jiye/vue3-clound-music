<template>
  <div class="userDetail">
    <Info :userDetail="userDetail" class="info" />
    <el-tabs v-model="activeTab" class="tab" @tab-change="tabHandle">
      <el-tab-pane lazy label="创建的歌单" name="create">
        <Recommend :myData="userCreatedPlaylist" class='Recommend' />
      </el-tab-pane>
      <el-tab-pane lazy label="收藏的歌单" name="collect">
        <Recommend :myData="userCollectPlaylist" class='Recommend' />
      </el-tab-pane>
      <el-tab-pane lazy label="听歌排行" name="record">
        <Record :myData="userRecord" class='Record' />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import Record from "@/views/modules/userDetail/record.vue"
import Recommend from '@/views/modules/discover/recommend.vue'//歌单组件(复用)
import Info from "@/views/modules/userDetail/info.vue"//用户信息组件
import { ref } from "vue"
import { useUserDetailStore } from "@/pinia/module/userDetail.js"
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router"

const activeTab = ref("create")
const route = useRoute()

const { userDetail, userCreatedPlaylist, userCollectPlaylist, userRecord } = storeToRefs(useUserDetailStore())//数据
const { get_userDetail, get_userPlaylist, get_userRecord } = useUserDetailStore()//方法

get_userDetail(route.query.id)//用户详情
get_userPlaylist(route.query.id)//用户歌单
// get_userRecord(route.query.id)//用户播放记录
// 点击tab栏触发
const tabHandle = (name) => {
  if (name == "record") {
    get_userRecord(route.query.id)
    console.log("点击听歌排行");
  }
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

.userDetail {
  min-height: 100vh;
  background-color: #fff;

  .tab {
    padding: 0 20px;

    .Recommend {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .Record {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>