<template>
  <div class="palyer">
    <!-- 原生播放器 -->
    <audio type="file" ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${currentPlayMusic.id}.mp3`"
      preload="metadata">您的浏览器不支持audio标签,您还是换个浏览器吧</audio>
    <!-- 进度条 -->
    <el-slider ref="progressBar" v-model="progressStatus" @input="progressBarClick" :show-tooltip="false" />
    <!-- 播放器 -->
    <div class="group">
      <div class="detail">
        <!-- img歌词弹窗 -->
        <LyricDialog :lyric="lyric" :currentTime="audio.currentTime" :duration="audio.duration"
          :currentPlayMusic="currentPlayMusic" />
        <!-- 播放歌曲详情 -->
        <div class="info">
          <p class="top">{{ currentPlayMusic.name }}</p>
          <div class="bottom">
            <a v-for="item in currentPlayMusic.ar" :key="item.name">{{ item.name }}</a>
          </div>
        </div>
      </div>
      <div class="button">
        <!-- 播放模式：小于1000隐藏 -->
        <PlayModeIcon class="hidden-less-1000" />
        <!-- 上一首：小于1000隐藏 -->
        <icon-go-start class="item hidden-less-1000" theme="outline" size="28" :strokeWidth="4" title='上一首'
          @click="preClick()" />
        <!-- 播放按钮：永不隐藏 -->
        <PlayIcon />
        <!-- 下一首：小于1000隐藏 -->
        <icon-go-end class="item hidden-less-1000" theme="outline" size="28" :strokeWidth="4" title='下一首'
          @click="nextClick()" />
        <!-- 音量图标：小于1000隐藏 -->
        <VolumeIcon class="hidden-less-1000" />
        <!-- 待播放歌曲列表:小于1000才显示 -->
        <MusicListIcon class="hidden-more-1000" />
      </div>
      <div class="list hidden-less-1000">
        <p>{{ formatTime(audioCurrentTime) }} / {{ formatTime(audioDuration) }}</p>
        <icon-text-message theme="outline" size="22" :strokeWidth="3" title='歌曲评论' />
        <!-- 待播放歌曲列表 -->
        <MusicListIcon iconSize='24' />
      </div>
    </div>
  </div>
</template>

<script setup>
import PlayIcon from "@/components/PlayIcon.vue";//播放按钮组件
import PlayModeIcon from "@/components/PlayModeIcon.vue";//播放模式切换按钮组件
import VolumeIcon from "@/components/VolumeIcon.vue"//音量组件
import LyricDialog from '@/components/LyricDialog.vue';//歌词弹窗
import MusicListIcon from '@/components/MusicListIcon.vue';//音乐播放列表
import { formatTime } from "@/utils/formatPlayMusicTime.js"//格式化播放时间
import { ref, onMounted, watch, provide } from 'vue'
import { ElMessage } from 'element-plus';
import { usePlaylistStore } from "@/pinia/module/playlist.js"
import { storeToRefs } from "pinia";

const {
  currentPlayMusic,
  toPlayList,
  lyric,
  audioStatus,
  audioCurrentTime,
  audioDuration,
  progressStatus,
  playMode,
  playSpeed,
  volume
} = storeToRefs(usePlaylistStore())
const { pre_music, next_music } = usePlaylistStore()

// 定义虚拟dom对象
const audio = ref('')
const progressBar = ref('')

// 设置音量
function volumeSetting() {
  audio.value.volume = volume.value / 100
}
// 播放速度切换
function playSpeedClick(speed) {
  // 如果有传递参数
  if (speed) {
    audio.value.playbackRate = speed
  } else {
    playSpeed.value += 0.5
    // 大于2倍速还原到0.5倍速
    if (playSpeed.value > 2) {
      playSpeed.value = 0.5
    }
    audio.value.playbackRate = playSpeed.value//修改播放速率
  }
}
// 播放
function playIconClick() {
  audioStatus.value = true//显示播放按钮
  // 延迟播放，等歌曲加载完毕
  setTimeout(() => {
    audio.value.play().then(() => {
      console.log('播放成功')
      audioStatus.value = true//显示播放按钮
      if (playSpeed.value !== 1) {
        audio.value.playbackRate = playSpeed.value//记住播放速度
      }
    }).catch((err) => {
      console.log("播放出错", err);
      audioStatus.value = false//显示暂停按钮
      audio.value.currentTime = 0//重置进度
      ElMessage({
        showClose: true,//是否显示关闭按钮
        message: '没有播放权限',//内容保底
        type: 'error',//消息类型
      })
    })
  }, 500)
}
// 暂停
function pauseIconClick() {
  audioStatus.value = false
  audio.value.pause()
}
// 上一首
function preClick() {
  pre_music()
}
// 下一首
function nextClick() {
  next_music()
}
// 点击进度条/拖动进度条
function progressBarClick() {
  audio.value.currentTime = Number(progressStatus.value * audio.value.duration / 100)//修改当前时间
}
// 播放器初始化设置
function init() {
  audio.value.autoplay = false //是否自动播放
  audio.value.controls = false //是否显示原生播放器
  // audio.value.muted = true //是否静音
  // audio.value.loop = true //是否循环播放
  // audio.value.currentTime = 0 //当前播放进度条时间
  // audio.value.duration //总时长,只读属性
  audio.value.volume = 0.5 // 音乐音量 [0, 1]  最小值 0  最大值 1
  // audio.value.pause // 音乐是否暂停播放 true--暂停 false--播放
  // audio.value.ended // 音乐是否结束播放 true--结束 false--没有结束 设置了loop 音频重复循环播放 不会结束
  audio.value.playbackRate = 1// 播放速度 
}

// 传值和方法给各个儿孙组件
provide('audioStatus', audioStatus)
provide('playMode', playMode)
provide('playSpeed', playSpeed)
provide('volume', volume)
provide('playClick', playIconClick)
provide('pauseClick', pauseIconClick)
provide('preClick', preClick)
provide('nextClick', nextClick)
provide('playSpeedClick', playSpeedClick)
provide('volumeSetting', volumeSetting)

onMounted(() => {
  init()
  // dom渲染完毕，监听播放时间更新的事件
  audio.value.ontimeupdate = function () {
    progressStatus.value = Number(audio.value.currentTime / audio.value.duration * 100)//百分比进度条
    audioCurrentTime.value = parseInt(audio.value.currentTime)//当前时间
    audioDuration.value = audio.value.duration//总时长
  };
  // 监听音频结束播放事件
  audio.value.onended = function () {
    audioStatus.value = false // 显示暂停图标
    // 播完暂停
    if (playMode.value == 'playOnce') {
      pauseIconClick()
      console.log("播放结束,播完暂停");
    }
    // 单曲循环，重新播放
    if (toPlayList.value.length !== 0 && playMode.value == 'loopOnce') {
      playIconClick()
      console.log("播放结束,单曲循环");
    }
    // 歌单循环，继续播放
    if (toPlayList.value.length - 1 !== 0 && playMode.value == 'playCycle') {
      next_music()
      console.log("播放结束,歌单循环");
    }
  };

  // // // 当音量改变时
  // // audio.onvolumechange = function () {
  // //   console.log("音量改变", audio.volume);
  // // }
  // // 当音频播放暂停事件
  // audio.onpause = function () {
  //   console.log('暂停', audio.paused);
  // };
})

// 监听歌曲id的变化 
watch(
  () => currentPlayMusic.value.id,
  () => {
    console.log("歌曲id发生变化", currentPlayMusic.value.id);
    playIconClick()//播放
  })
</script>

<style lang="less" scoped>
.palyer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
}

.el-slider {
  width: 100%;
  height: 100%;
  // height: var(--progress-bar-height);
  // overflow: hidden;

  // 未播放阴影进度条
  :deep(.el-slider__runway) {
    height: 4px;
  }

  // 进度条小圆点
  :deep(.el-slider__button) {
    height: 20px;
    width: 20px;
    border: solid 2px #34d399;
  }

  // 已播放进度条
  :deep(.el-slider__bar) {
    background-color: #34d399;
    height: 4px;
  }
}

.group {
  width: 100%;
  height: calc(100% - var(--progress-bar-height));
  background-color: #fff;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  .detail {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    gap: 18px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 4px;
    }

    .info {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-between;

      .top {
        font-size: 18px;
        font-weight: 400;
        // 文本一行显示，溢出显示省略号
        word-break: break-word;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }

      .bottom {
        font-size: 14px;
        // 文本一行显示，溢出显示省略号
        word-break: break-word;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;

        a {
          margin-right: 5px;
          color: #5c7080;

          &:hover {
            cursor: pointer;
            color: #34d399;
          }
        }
      }
    }
  }

  .button {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    gap: 20px;
    // 音量控制
    position: relative;

    .item:hover {
      color: #34d399;
      cursor: pointer;
    }

  }

  .list {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    gap: 20px;

    p {
      white-space: nowrap;
    }

    span:hover {
      color: #34d399;
      cursor: pointer;
    }
  }
}
</style>