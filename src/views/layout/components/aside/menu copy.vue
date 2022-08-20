<template>
  <div style="padding-top:20px">
    <div class="group" v-for="item in store" :key="item.gid">
      <p class="group-titlle">{{ item.groupName }}</p>
      <div class="group-item" :class="currentPath == item1.cid ? 'active' : ''" v-for="item1 in item.children"
        :key="item1.cid" @click="currentActive(item1)">
        <component :is="'icon-' + item1.icon" theme="outline" size="22" :strokeWidth="2" />
        <span>{{ item1.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { useRouter } from 'vue-router'
import { ElMessage } from "element-plus";
// 路由
const router = useRouter()
// 当前激活id
let currentPath = ref(0)
// 数据
const store = reactive([
  {
    gid: 1,
    groupName: '在线音乐',
    children: [
      { cid: 1.1, name: '推荐', icon: 'planet', path: '/discover' },
      { cid: 1.2, name: '音乐馆', icon: 'music', path: '/music' },
      { cid: 1.3, name: '视频', icon: 'video-one', path: '/video' },
      { cid: 1.4, name: '电台', icon: 'fm', path: '/dj' }
    ]
  },
  {
    gid: 2,
    groupName: '我的音乐',
    children: [
      { cid: 2.1, name: '我喜欢', icon: 'like' },
      { cid: 2.2, name: '本地歌曲', icon: 'computer' },
      { cid: 2.3, name: '下载歌曲', icon: 'download-three' },
      { cid: 2.4, name: '最近播放', icon: 'play-two' }
    ]
  }
])
// 点击激活事件
const currentActive = (item) => {
  currentPath.value = item.cid;
  console.log(item.path);
  console.log(item.cid);
  if (item.path) {
    router.push(item.path);
  } else {
    ElMessage.error('暂无路径');
  }
}
// 组件点击跳转相应页面
</script>

<style lang="less" scoped>
.group {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &-titlle {
    margin: 14px;
    font-size: 16px;
    font-weight: bold;
  }

  &-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    border-radius: 4px;
    padding: 8px;
    margin-top: 6px;
    box-sizing: border-box;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      background-color: rgb(229 231 235);
    }

    span {
      margin-left: 6px;
    }
  }
}

.active {
  background-image: linear-gradient(to right, #2dd4bf, #34d399);
  color: #fff;
}
</style>