<template>
  <div>
    <div class="group" v-for="item in menuStore" :key="item.id">
      <p class="group-titlle">{{ item.groupName }}</p>
      <div class="group-item" :class="currentPath == item1.path ? 'active' : ''" v-for="item1 in item.children"
        :key="item1.path" @click="currentActive(item1)">
        <component :is="item1.icon" theme="outline" size="22" :strokeWidth="2" />
        <span>{{ item1.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from "element-plus";
// 路由
const router = useRouter()
const route = useRoute()
// 当前激活路径
let currentPath = ref(route.path)
// 数据
const menuStore = reactive([
  {
    id: 1,
    groupName: '在线音乐',
    children: [
      { name: '推荐', icon: 'icon-planet', path: '/discover' },
      { name: '音乐馆', icon: 'icon-music', path: '/music' },
      { name: '视频', icon: 'icon-video-one', path: '/video' },
      { name: '电台', icon: 'icon-fm', path: '/dj' }
    ]
  },
  {
    id: 2,
    groupName: '我的音乐',
    children: [
      { name: '我喜欢', icon: 'icon-like' },
      { name: '本地歌曲', icon: 'icon-computer' },
      { name: '下载歌曲', icon: 'icon-download-three' },
      { name: '最近播放', icon: 'icon-play-two' }
    ]
  }
])
// 点击激活菜单跳转相应页面
const currentActive = (item) => {
  currentPath.value = item.path;
  console.log(item.path);
  if (item.path) {
    router.push(item.path);
  } else {
    ElMessage.error('暂无该路径');
  }
}
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