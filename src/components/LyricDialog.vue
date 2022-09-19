<template>
  <div>
    <img :src="currentPlayMusic.al.picUrl + '?param=50y50'" fit="cover" @click="drawer = true" class="img" />

    <el-drawer v-model="drawer" direction="btt" :size="size" :with-header="false">

      <slot name="default">
        <div class="lyricDialog">
          <!-- 左边播放器 -->
          <div class="left-side" v-show="playerShow==true">
            <LyricPlayer :songs="currentPlayMusic" :currentTime="currentTime" :duration="duration" />
          </div>
          <!-- 右边滚动歌词 -->
          <div class="right-side" v-show="lyricShow==true">
            <!-- 有歌词时显示 -->
            <div class="lyric-container" v-if="lyric.length!==0">
              <!-- 歌词 -->
              <p class="lyric-item" v-for="item in lyric"
                :class="{ lyricActive: (currentTime >= item.time && currentTime <= item.next) }">
                {{ item.lyric }}
              </p>
            </div>
            <!-- 无歌词时显示 -->
            <div class="lyric-container" v-else>
              <p class="lyric-item lyricActive">暂无歌词</p>
            </div>
          </div>
          <!-- 退出按钮 -->
          <div class="close" @click="drawer = false">
            <icon-down theme="filled" size="40" class="downIcon" />
          </div>
          <!-- 切换按钮 -->
          <div class="switch" @click="showView">
            <icon-app-switch theme="filled" size="25" class="switchIcon" />
          </div>
        </div>
      </slot>

    </el-drawer>

  </div>
</template>

<script setup>
import LyricPlayer from "@/components/LyricPlayer.vue";
import { ref, onMounted, watch } from "vue"

let drawer = ref(false)
let index = ref(0)//激活歌词索引
let playerShow = ref(true)//播放器显示
let lyricShow = ref(true)//歌词显示
let i = 1;

// 点击切换歌词显示界面
const showView = () => {
  i++;
  if (i == 1) {
    playerShow.value = true
    lyricShow.value = true
  }
  if (i == 2) {
    playerShow.value = false
    lyricShow.value = true
  }
  if (i == 3) {
    playerShow.value = true
    lyricShow.value = false
    i = 0
  }
  console.log("切换显示界面", i);
}
const prop = defineProps({
  currentPlayMusic: {
    type: Object,
    default: () => ({
      id: 1,
      name: '歌曲名加备注()',
      ar: [{ id: 123456, name: "歌手" }],
      al: { id: 123456, name: '歌曲', picUrl: "图片链接" },
      dt: 0
    })
  },
  // 弹窗大小
  size: {
    type: String,
    default: () => '100%'
  },
  // 歌词
  lyric: {
    type: Array,
    default: () => ([{ time: 0, lyric: '作词 : ', next: 9999 }])
  },
  // 当前播放时间
  currentTime: {
    type: Number,
    default: () => 0
  },
  // 总时长
  duration: {
    type: Number,
    default: () => 0
  },
})
onMounted(() => {
  // 监听歌曲时间的变化获取歌词索引
  watch(() => prop.currentTime, (newVal, oldVal) => {
    // console.log("变化", newVal, oldVal);
    for (let i = 0; i < prop.lyric.length; i++) {
      if (prop.currentTime >= prop.lyric[i].time && prop.currentTime <= prop.lyric[i].next) {
        index.value = i;//激活歌词的索引
      }
    }
  })
  // 监听歌曲的歌词索引变化，改变滚动条距离顶部的距离
  watch(() => index.value, (newVal, oldVal) => {
    // console.log("变化", newVal, oldVal);
    const active = document.querySelector('.lyricActive')//激活歌词dom
    const container = document.querySelector('.right-side')//歌词容器dom
    // dom渲染完毕
    if (active && container) {
      container.scrollTop = active.offsetHeight * index.value - (container.clientHeight / 2)//滚动条距离顶部距离
    }
  })
})
</script>

<style lang="less" scoped>
// 滚动条样式
::-webkit-scrollbar {
  width: 0px; //隐藏滚动条
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  box-shadow: inset 0 0 3px #e0e0e0;
  background-color: #e0e0e0;
}

// 溢出隐藏不换行
.text-hidden {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

// 去除默认内边距
:deep(.el-drawer__body) {
  padding: 0;
  background: linear-gradient(to left top, rgb(40, 32, 54), rgb(46, 51, 77));
}

.img {
  width: 50px;
  height: 50px;
  box-shadow: 0 6px 8px -2px rgb(0 0 0 / 16%);
  border-radius: 4px;
  cursor: pointer;
}

.lyricDialog {
  // 居中对齐
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;

  /*左边播放器*/
  .left-side {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;
    margin: 0 20px;
    z-index: 1;
  }

  /*右边滚动歌词*/
  .right-side {
    flex: 1;
    width: 100%;
    height: 90%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    font-weight: 600;
    color: #fff;
    margin: 0 20px;
    z-index: 0;

    /*滚动歌词*/
    .lyric-container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;

      .lyric-item {
        height: 50px;
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 20px;
        color: #fff;
        opacity: 0.28;
        transition: all .4s ease-out;
        // 水平垂直对齐
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: rgb(255 255 255 / 18%);
        }
      }
    }
  }

  /*关闭按钮*/
  .close {
    position: fixed;
    z-index: 999;
    right: 10px;
    top: 10px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    opacity: 0.28;
    transition: all 0.2s;
    // 居中对齐
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgb(255 255 255 / 8%);
      opacity: 0.88;
    }

    .downIcon {
      color: #fff;
    }
  }

  /*切换按钮*/
  .switch {
    position: fixed;
    z-index: 999;
    left: 10px;
    top: 10px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    opacity: 0.28;
    transition: all 0.2s;
    // 居中对齐
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgb(255 255 255 / 8%);
      opacity: 0.88;
    }

    .switchIcon {
      color: #fff;
    }
  }
}


// 歌词激活样式
.lyricActive {
  opacity: 1 !important;
  color: #FFF !important;
  font-size: 24px !important;
  // transform: scale(1.2) !important;
}
</style>