<template>
  <div>
    <el-badge :value="toPlayList.length" :hidden="toPlayList.length == 0 ? true : false">
      <!-- 播放列表图标 -->
      <icon-music-list class="musicList" theme="outline" :size="iconSize" :strokeWidth="3" title='歌曲列表'
        @click="drawer = true" />
    </el-badge>
    <!-- 弹出框 -->
    <el-drawer v-model="drawer" direction="rtl" :size="size" :with-header="false">
      <!-- 头部插槽 -->
      <slot name="header">
        <div class="title">
          <div class="large-title">播放列表</div>
          <div class="small-title">
            <span>共{{ toPlayList.length }}首歌曲</span>
            <div class="icon" @click="clear_toPlayList()">
              <icon-delete theme="outline" size="14" :strokeWidth="4" title='清空' />
              <span>清空</span>
            </div>
          </div>
        </div>
      </slot>
      <!-- 默认插槽 -->
      <slot name="default">
        <div @dblclick="change_playMusic(item)" class="card" :class="currentPlayMusic.id == item.id ? 'active' : ''"
          v-for="item in toPlayList" :key="item.id">
          <div class="img">
            <img v-lazy="item.al.picUrl + '?param=40y40'" alt="加载中...">
          </div>
          <div class="detail">
            <span>{{ item.name }}</span>
            <div class="author">
              <span v-for="ar in item.ar" :key="ar.id">{{ ar.name }}</span>
            </div>
          </div>
          <div class="delete">
            <a class="deleteIcon" @click="delete_toPlayList(item.id)">移除</a>
            <div class="duration">{{ format(item.dt) }}</div>
          </div>
        </div>
      </slot>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePlaylistStore } from "@/pinia/module/playlist.js"
import { storeToRefs } from "pinia";

const { currentPlayMusic, toPlayList } = storeToRefs(usePlaylistStore())
const { delete_toPlayList, change_playMusic, clear_toPlayList } = usePlaylistStore()

defineProps({
  // 弹出框大小
  size: {
    type: Number,
    default: () => 300
  },
  // 播放列表图标大小
  iconSize: {
    type: String,
    default: () => '38'
  },
})

// 弹框显示
let drawer = ref(false)

// 格式化毫秒
function format(times) {
  // 秒
  let sec = Math.floor(times / 1000 % 60);
  // 分
  let min = Math.floor(times / 1000 / 60);
  // 返回格式 00：00 不足两位的补零
  return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
}
</script>

<style lang="less" scoped>
// 去除默认内边距
:deep(.el-drawer__body) {
  padding: 0;
}

.musicList {
  transition: all 0.15s ease;

  &:hover {
    cursor: pointer;
    color: #34d399;
  }
}

// 头部样式
.title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 10px;
  white-space: nowrap;
  width: 100%;

  .large-title {
    font-size: 24px;
    font-weight: bold;
  }

  .small-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;

    .icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;
      color: #999;

      &:hover {
        cursor: pointer;
        color: #ee5959;
      }
    }
  }
}

// 内容卡片样式
.card {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  font-size: 14px;
  white-space: nowrap;
  width: 100%;

  &:hover {
    cursor: pointer;
    background-color: rgb(245 245 244 1);

    .delete {
      .deleteIcon {
        display: block;
      }

      .duration {
        display: none;
      }
    }
  }

  .img {
    width: 40px;
    height: 40px;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }

  .detail {
    flex: 1;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;
    width: 100%;

    span {
      word-break: break-word;
      -webkit-line-clamp: 1;
      text-overflow: ellipsis;
      white-space: normal;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }

    .author {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      overflow: hidden;
    }
  }

  .delete {
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; //左对齐

    .deleteIcon {
      color: #ee5959;
      width: 100%;
      text-align: center;
      display: none;
    }

    .duration {
      display: block;
    }
  }

}

// 卡片激活样式
.active {
  color: #34d399;
  border-left: 2px solid #34d399;
}
</style>