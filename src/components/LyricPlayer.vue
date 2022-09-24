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
            {{ songs.name }}
          </div>
          <div class="subtitle">
            <router-link v-for="ar in songs.ar" :key="ar.id" :to="{ name: 'artistDetail', params: { id: ar.id } }"
              class="ar">
              {{ ar.name }}
            </router-link>
            -
            <router-link :to="{ name: 'albumDetail', params: { id: songs.al.id } }" class="al">
              {{ songs.al.name }}
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
        <div title='播放速度' @click="iconClick('speed')" class="icon-hover play-speed"
          :class="{activeMode:playSpeed !== 1}">{{playSpeed}}x</div>
        <icon-go-start theme="outline" size="34" :strokeWidth="5" title="上一首" @click="iconClick('pre')"
          class="icon-hover" />
        <icon-play-one v-show="audioStatus === false" theme="filled" size="44" @click="iconClick('play')"
          :strokeWidth="5" title="点击播放" class="icon-hover" />
        <icon-pause v-show="audioStatus === true" theme="filled" size="44" :strokeWidth="5" @click="iconClick('pause')"
          title="点击暂停" class="icon-hover" />
        <icon-go-end theme="outline" size="34" :strokeWidth="5" title="下一首" @click="iconClick('next')"
          class="icon-hover" />
        <icon-play-once theme="outline" size="18" :strokeWidth="5" title='播完暂停' class="icon-hover"
          v-show="playMode=='playOnce'" @click="iconClick('playCycle')" />
        <icon-loop-once theme="outline" size="18" :strokeWidth="5" title='单曲循环' class="icon-hover"
          :class="{activeMode:playMode=='loopOnce'}" v-show="playMode=='loopOnce'" @click="iconClick('playOnce')" />
        <icon-play-cycle theme="outline" size="18" :strokeWidth="5" title='歌单循环' class="icon-hover"
          :class="{activeMode:playMode=='playCycle'}" v-show="playMode=='playCycle'" @click="iconClick('loopOnce')" />
      </div>
    </div>
  </div>
</template>

<script setup>
import VolumeIcon from "@/components/VolumeIcon.vue"//音量组件
import { ref, watch, inject } from "vue";
import { formatTime } from "@/utils/formatPlayMusicTime.js"//格式化播放时间

const prop = defineProps({
  songs: {
    type: Object,
    default: () => ({
      id: 1234,
      name: "歌曲名",
      al: { id: 1234, name: "专辑", picUrl: "图片链接", pic: "图片id" },
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

// 接收爷爷组件传递的响应式值和方法
let audioStatus = inject('audioStatus')//播放状态
let playMode = inject('playMode')//播放模式
let playSpeed = inject('playSpeed')//播放速度
const playClick = inject('playClick')
const pauseClick = inject('pauseClick')
const preClick = inject('preClick')
const nextClick = inject('nextClick')
const playSpeedClick = inject('playSpeedClick')

// 图标点击事件
const iconClick = (name) => {
  if (name == "pause") {
    pauseClick()
  }
  if (name == "play") {
    playClick()
  }
  if (name == "pre") {
    preClick()
  }
  if (name == "next") {
    nextClick()
  }
  if (name == "playOnce") {
    playMode.value = name
    console.log("播完暂停");
  }
  if (name == "loopOnce") {
    playMode.value = name
    console.log("单曲循环");
  }
  if (name == "playCycle") {
    playMode.value = name
    console.log("歌单循环");
  }
  if (name == 'speed') {
    playSpeedClick()
  }
};
// 进度条
let step = ref(0);
// 监听时间变化改变进度条进度
watch(
  () => prop.currentTime,
  () => {
    if (isNaN(prop.duration) !== true) {
      step.value = parseInt((prop.currentTime / prop.duration) * 100);
    }
  }
);

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
    max-width: 50vh;
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

          .ar {
            margin-right: 8px;
          }

          .al {
            margin-left: 8px;
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
      // justify-content: center;
      justify-content: space-between;
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

// 速率样式
.play-speed {
  max-width: 16px;
}

// 播放模式图标激活样式
.activeMode {
  color: #fff;
  opacity: 0.88;
}
</style>
