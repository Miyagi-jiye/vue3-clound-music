<template>
  <div class="lyricPlayer">
    <div class="cover">
      <div class="cover-container">
        <img :src="songs.al.picUrl" :alt="'歌曲ID=' + songs.al.id" />
        <div class="shadow" :style="{ backgroundImage: 'url(' + songs.al.picUrl + ')' }"></div>
      </div>
    </div>
    <div class="controls">
      <!-- 歌曲详情 -->
      <div class="top-part">
        <div class="track-info">
          <div class="title">
            <router-link :to="{ name: 'albumDetail', params: { id: songs.al.id } }">
              {{ songs.al.name }}
            </router-link>
          </div>
          <div class="subtitle">
            <router-link v-for="ar in songs.ar" :key="ar.id" :to="{ name: 'artistDetail', params: { id: ar.id } }">
              {{ ar.name }}
            </router-link>
          </div>
        </div>
        <div class="like-icon">
          <icon-like theme="outline" size="20" />
        </div>
      </div>
      <!-- 进度条 -->
      <div class="progress-bar">
        <span class="time">{{ formatTime(currentTime) }}</span>
        <el-progress :percentage="step" :text-inside="true" :show-text="false" :stroke-width="6" class="slider" />
        <span class="time">{{ formatTime(duration) }}</span>
      </div>
      <!-- 播放器控件 -->
      <div class="media-controls">
        <icon-play-once theme="outline" size="18" :strokeWidth="4" title='顺序播放' @click="iconClick('order')"
          class="icon-hover" />
        <icon-go-start theme="outline" size="34" :strokeWidth="4" title="上一首" @click="iconClick('pre')"
          class="icon-hover" />
        <icon-play-one v-show="audioStatus === false" theme="filled" size="44" @click="iconClick('play')"
          :strokeWidth="4" title="点击播放" class="icon-hover" />
        <icon-pause v-show="audioStatus === true" theme="filled" size="44" :strokeWidth="4" @click="iconClick('pause')"
          title="点击暂停" class="icon-hover" />
        <icon-go-end theme="outline" size="34" :strokeWidth="4" title="下一首" @click="iconClick('next')"
          class="icon-hover" />
        <icon-play-cycle theme="outline" size="18" :strokeWidth="4" title='循环播放' @click="iconClick('cycle')"
          class="icon-hover" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const prop = defineProps({
  songs: {
    type: Object,
    default: () => ({
      al: { id: 1234, name: "歌曲", picUrl: "图片链接", pic: "图片id" },
      ar: [{ id: 1234, name: "歌手" }],
    }),
  },
  currentTime: {
    type: Number,
    default: () => 0,
  },
  duration: {
    type: Number,
    default: () => 0,
  },
});
const emit = defineEmits(["emitPlayer"]);

let audioStatus = ref(false); //播放状态

// 图标点击事件
const iconClick = (iconName) => {
  if (iconName == "pause") {
    audioStatus.value = false;
  }
  if (iconName == "play") {
    audioStatus.value = true;
  }
  if (iconName == "pre") {
    emit("emitPlayer")
  }
  if (iconName == "next") {
    emit("emitPlayer")
  }
  if (iconName == "order") {
    emit("emitPlayer")
  }
  if (iconName == "cycle") {
    emit("emitPlayer")
  }
};

const step = ref(0); // 进度条
// 监听时间变化改变进度条进度
watch(
  () => prop.currentTime,
  () => {
    if (isNaN(prop.duration) !== true) {
      step.value = parseInt((prop.currentTime / prop.duration) * 100);
    }
  }
);

// 格式化时间
function formatTime(time) {
  // 如果时间 等于0 或者 等于NaN 先显示00：00
  if (time == 0 || window.isNaN(time)) {
    return "00:00";
  }
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  // 返回格式 00：00 不足两位的补零
  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
}
</script>

<style lang="less" scoped>
.lyricPlayer {

  // 图片
  .cover .cover-container {
    position: relative;

    img {
      border-radius: 0.75em;
      width: 50vh;
      height: 50vh;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -o-object-fit: cover;
      object-fit: cover;
    }

    .shadow {
      position: absolute;
      top: 12px;
      height: 50vh;
      width: 50vh;
      filter: blur(16px) opacity(0.6);
      transform: scale(0.92, 0.96);
      z-index: -1;
      background-size: cover;
      border-radius: 0.75em;
    }
  }

  // 控制器
  .controls {
    max-width: 54vh;
    margin-top: 24px;
    color: #fff;

    // 1.歌曲详情
    .top-part {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .track-info {
        .title {
          margin: 8px 0;
          font-size: 1.4rem;
          font-weight: 600;
          opacity: 0.88;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }

        .subtitle {
          margin: 8px 0;
          font-size: 1rem;
          opacity: 0.58;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;

          a {
            margin-right: 8px;
          }
        }
      }

      .like-icon {
        padding: 6px;
        border-radius: 8px;
        color: #fff;
        opacity: 0.5;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          color: #d33434;
          background-color: rgba(255, 255, 255, 0.08);
          opacity: 0.88;
        }
      }
    }

    // 2.进度条
    .progress-bar {
      margin: 15px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .time {
        font-size: 14px;
        opacity: 0.58;
      }

      .slider {
        margin: 0 10px;
      }

      // 进度条宽度
      .el-progress--line {
        width: 100%;
      }
    }

    // 3.媒体控制器
    .media-controls {
      margin: 18px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }
  }
}

// 图标hover样式
.icon-hover {
  padding: 6px;
  border-radius: 8px;
  color: #fff;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    opacity: 0.88;
  }
}
</style>
