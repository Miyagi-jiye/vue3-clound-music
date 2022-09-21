<template>
  <div class="userDetail">
    <Info :userDetail="userDetail" class="info" />
    <el-tabs v-model="activeTab" class="tab">
      <el-tab-pane lazy label="创建的歌单" name="create">
        <Recommend :myData="userCreatedPlaylist" class='Recommend' />
      </el-tab-pane>
      <el-tab-pane lazy label="收藏的歌单" name="collect">
        <Recommend :myData="userCollectPlaylist" class='Recommend' />
      </el-tab-pane>
      <el-tab-pane lazy label="听歌排行" name="record">
        <Record :myData="userRecord" class='Record' />
      </el-tab-pane>
      <el-tab-pane lazy label="动态" name="dynamic">
        <Dynamic class='Dynamic' />
      </el-tab-pane>
      <el-tab-pane lazy label="关注" name="follow">
        <Follow :myData="userFollows.follow" class="Follow" v-infinite-scroll="loadMoreFollow" />
      </el-tab-pane>
      <el-tab-pane lazy label="粉丝" name="fans">
        <Follow :myData="userFolloweds.followeds" class="Fans" />
        <Pagination :myData="userFollowedsParams" :mvTotal="userFolloweds.size" @emitClick="emitPage('fans')"
          class="pagination" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import Pagination from "@/views/modules/video/pagination.vue"; //分页组件(复用)
import Follow from '@/views/modules/userDetail/follow.vue'//关注，粉丝组件
import Dynamic from "@/views/modules/userDetail/dynamic.vue"//动态组件
import Record from "@/views/modules/userDetail/record.vue"//听歌排行组件
import Recommend from '@/views/modules/discover/recommend.vue'//歌单组件(复用)
import Info from "@/views/modules/userDetail/info.vue"//用户信息组件
import { watch } from "vue"
import { useUserDetailStore } from "@/pinia/module/userDetail.js"
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router"

const route = useRoute()

const {
  userDetail,
  userCreatedPlaylist,
  userCollectPlaylist,
  userRecord,
  userFollows,
  userFollowsParams,
  userFolloweds,
  userFollowedsParams,
  activeTab
} = storeToRefs(useUserDetailStore())//数据
const {
  get_userDetail,
  get_userPlaylist,
  get_userRecord,
  get_userEvent,
  get_userFollows,
  get_userFolloweds
} = useUserDetailStore()//方法

// 如果有携带激活tab栏参数，设置激活tab栏
// 没有携带就看store中设置的默认选中项，请求数据
const init = () => {
  get_userDetail(route.query.id)//用户详情
  if (route.query.activeTab) {
    activeTab.value = route.query.activeTab//改变激活项
    if (route.query.activeTab == 'create') {
      get_userPlaylist(route.query.id)//获取用户歌单
    }
    if (route.query.activeTab == 'collect') {
      get_userPlaylist(route.query.id)//获取用户歌单
    }
    if (route.query.activeTab == 'dynamic') {
      get_userEvent(route.query.id)//获取用户动态
    }
    if (route.query.activeTab == 'record') {
      get_userRecord(route.query.id)//获取用户播放记录
    }
    if (route.query.activeTab == 'follow') {
      get_userFollows(route.query.id)//获取用户关注
    }
    if (route.query.activeTab == 'fans') {
      get_userFolloweds(route.query.id)//获取用户粉丝
    }
  } else {
    if (activeTab.value == 'create') {
      get_userPlaylist(route.query.id)//获取用户歌单
    }
    if (activeTab.value == 'collect') {
      get_userPlaylist(route.query.id)//获取用户歌单
    }
    if (activeTab.value == 'record') {
      get_userRecord(route.query.id)//用户播放记录
    }
    if (activeTab.value == 'dynamic') {
      get_userEvent(route.query.id)//获取用户动态
    }
    if (activeTab.value == 'follow') {
      get_userFollows(route.query.id)//获取用户关注
    }
    if (activeTab.value == 'fans') {
      get_userFolloweds(route.query.id)//获取用户粉丝
    }
  }
}
// 初始化的时候执行一次
init()

console.log(route.query);
// 监听激活tab变化
watch(activeTab, () => {

  if (activeTab.value == 'create') {
    get_userPlaylist(route.query.id)//获取用户歌单
  }
  if (activeTab.value == 'collect') {
    get_userPlaylist(route.query.id)//获取用户歌单
  }
  if (activeTab.value == 'record') {
    get_userRecord(route.query.id)//用户播放记录
  }
  if (activeTab.value == 'dynamic') {
    get_userEvent(route.query.id)//获取用户动态
  }
  if (activeTab.value == 'follow') {
    get_userFollows(route.query.id)//获取用户关注
  }
  if (activeTab.value == 'fans') {
    get_userFolloweds(route.query.id)//获取用户粉丝
  }
})
// 监听路由参数的变化
watch(() => route.query, () => {
  // 只在当前页触发
  if (route.name == "userDetail") {
    // 先清空上一个用户的关注数据
    userFollows.value.follow = []
    userFollows.value.more = false
    userFollowsParams.value.offset = 1
    init()
  }
})
// 分页点击事件
const emitPage = (name) => {
  if (name == 'fans') {
    get_userFolloweds(route.query.id)//获取用户粉丝
  }
}
// 关注无限滚动事件
const loadMoreFollow = () => {
  if (activeTab.value == 'follow' && userFollows.value.more == true) {
    userFollowsParams.value.offset++//页码加1
    get_userFollows(route.query.id)//获取用户关注
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

    .Recommend,
    .Record,
    .Dynamic,
    .Follow,
    .Fans,
    .pagination {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>