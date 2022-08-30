<template>
  <div>
    <img :src="imgUrl + '?param=50y50'" fit="cover" @click="drawer = true" class="img" />

    <el-drawer v-model="drawer" direction="btt" :size="size" :with-header="false">
      <el-scrollbar>
        <slot name="default">
          <div class="default">
            <!-- 退出按钮 -->
            <div class="header">
              <icon-down theme="filled" size="40" @click="drawer = false" class="downIcon" />
            </div>
            <!-- 歌词容器 -->
            <div class="lyric-container">
              <!-- 歌词 -->
              <p class="lyric-item" :class="{ lyricActive: (currentTime >= item.time && currentTime <= item.pre) }"
                v-for="item in lyric">
                {{  item.lyric  }}
              </p>
            </div>
          </div>
        </slot>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue"

let drawer = ref(false)

const prop = defineProps({
  imgUrl: {
    type: String,
    default: () => ''
  },
  size: {
    type: String,
    default: () => '100%'
  },
  lyric: {
    type: Array,
    default: () => [{}]
  },
  currentTime: {
    type: Number,
    default: () => 0
  },
  duration: {
    type: Number,
    default: () => 0
  }
})

onMounted(() => {

  watch(prop, () => {
    let lyricTop = document.querySelector('.lyric-item.lyricActive')
    let lyricDiv = document.querySelector('.lyric-container')

    //如果dom元素已经渲染出来了
    if (lyricTop && lyricDiv) {

      // console.log("高亮歌词距离顶部高度", lyricTop.offsetTop);
      // console.log("容器高度", lyricDiv.scrollHeight);
      // 如果歌词距离顶部高度大于等于屏幕高度的一半
      // 通过 transform：translateY(减去歌词距离顶部高度距离，加上屏幕高度的一半，减去歌词自身高度) 
      // 偏移父盒子的y轴，使歌词一直显示在屏幕中心
      if (lyricTop.offsetTop >= (window.screen.height / 2)) {
        lyricDiv.style.transform = `translateY(-${lyricTop.offsetTop - (window.screen.height / 2) + 60}px)`
      }

      // 如果播放结束或当前时间重置为0时(切换歌曲)，还原样式
      if (prop.currentTime == prop.duration || prop.currentTime == 0) {
        lyricDiv.style.transform = 'translateY(0)'
      }

    }
  })
})


</script>

<style lang="less" scoped>
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

.default {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  /*关闭按钮*/
  .header {
    position: fixed;
    z-index: 999;
    right: 20px;
    top: 20px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    opacity: 0.28;
    transition: all 0.2s;

    &:hover {
      background-color: rgb(255 255 255 / 8%);
      opacity: 0.88;
    }

    .downIcon {
      color: #fff;
    }
  }

  /*滚动歌词*/
  .lyric-container {
    transition: all 1s ease;

    .lyric-item {
      height: 60px;
      font-size: 20px;
      font-weight: bold;
      box-sizing: border-box;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      color: #fff;
      opacity: 0.28;
      transition: all 1s ease-in-out;

      &:hover {
        background-color: rgb(255 255 255 / 8%);
      }
    }
  }
}

.lyricActive {
  opacity: 1 !important;
  color: #FFF !important;
  font-size: 24px !important;
  // transform: scale(1.2) !important;
}
</style>