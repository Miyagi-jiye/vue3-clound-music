<template>
  <div class="palyer">
    <!-- 原生播放器 -->
    <!--chrome浏览器不支持自动播放-->
    <audio type="file" ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${songID}.mp3`"
      preload="metadata">
      您的浏览器不支持audio标签,您还是换个浏览器吧
    </audio>
    <!-- 进度条 -->
    <el-slider ref="progressBar" v-model="progressStatus" @input="progressBarClick" :show-tooltip="false" />
    <!-- 播放器 -->
    <div class="group">
      <div class="detail">
        <img :src="Playlist.currentPlayMusic.al.picUrl + '?param=50y50'" fit="cover" />
        <div class="info">
          <p class="top">{{ Playlist.currentPlayMusic.name }}</p>
          <div class="bottom">
            <a v-for="item in Playlist.currentPlayMusic.ar" :key="item.name">{{ item.name }}</a>
          </div>
          <!-- <div class="bottom hidden-less-600">
            <icon-like theme="outline" size="18" :strokeWidth="2" title='我喜欢' />
            <icon-down-two theme="outline" size="18" :strokeWidth="2" title='下载' />
            <icon-more-two theme="outline" size="18" :strokeWidth="2" title='更多信息' />
            <icon-comment theme="outline" size="18" :strokeWidth="2" title='评论' />
          </div> -->
          <!-- <div class="bottom hidden-more-600">
            <icon-play ref="playIcon" v-show="audioStatus === false" theme="filled" size="24" :strokeWidth="4"
              title='点击播放' @click="playIconClick" />
            <icon-pause ref="pauseIcon" v-show="audioStatus === true" theme="filled" size="24" :strokeWidth="4"
              title='点击暂停' @click="pauseIconClick" />
            <icon-music-list theme="filled" size="24" :strokeWidth="4" title='歌曲列表' />
          </div> -->
        </div>
      </div>
      <div class="button">
        <icon-play-once class="hidden-less-600" theme="outline" size="22" :strokeWidth="2" title='顺序播放' />
        <icon-go-start class="hidden-less-600" theme="outline" size="28" :strokeWidth="4" title='上一首' />
        <icon-play style="color: #34d399;" ref="playIcon" v-show="audioStatus === false" theme="filled" size="38"
          :strokeWidth="2" title='点击播放' @click="playIconClick" />
        <icon-pause-one style="color: #34d399;" ref="pauseIcon" v-show="audioStatus === true" theme="filled" size="38"
          :strokeWidth="2" title='点击暂停' @click="pauseIconClick" />
        <icon-go-end class="hidden-less-600" theme="outline" size="28" :strokeWidth="4" title='下一首' />
        <!-- 动态音量效果图标组件 -->
        <component class="hidden-less-600"
          :is="volumeStatus === 0 ? 'icon-volume-mute' : volumeStatus == 100 ? 'icon-volume-notice' : 'icon-volume-small'"
          ref="volumeIcon" theme="outline" size="22" :strokeWidth="2" title='音量' @click="showVolumeStep" />
        <!-- 音量按钮 -->
        <div class="volume" ref="volumeSetting">
          <el-slider v-model="volumeStatus" vertical height="100px" :show-tooltip='false' @input="volumeChange" />
          <p>{{ volumeStatus }}</p>
        </div>
        <!-- 待播放歌曲列表 -->
        <MusicListIcon :myData="toPlayList" :currentPlayMusic='currentPlayMusic' @dblclickChild="dblclickEvent" />
      </div>
      <div class="list">
        <p>{{ formatTime(audioCurrentTime) }} / {{ formatTime(audioDuration) }}</p>
        <icon-text-message theme="outline" size="18" :strokeWidth="3" title='歌词' />
        <icon-music-list theme="outline" size="18" :strokeWidth="3" title='歌曲列表' />
      </div>
    </div>
  </div>
</template>

<script setup>
import MusicListIcon from '@/components/MusicListIcon.vue';
import { ref, nextTick, onMounted, watch, computed } from 'vue'
import { ElMessage } from 'element-plus';
import useStore from "@/pinia/index.js"
// 接收子组件的值
function dblclickEvent(e) {
  console.log('接收子组件的值', e);

  if (Playlist.currentPlayMusic.id !== e.id) {
    // 更改当前播放的音乐
    Playlist.currentPlayMusic = e
  } else {
    return false
  }
}
const { Playlist } = useStore()
const songID = computed(() => Playlist.currentPlayMusic.id)
const toPlayList = computed(() => Playlist.toPlayList)
const currentPlayMusic = computed(() => Playlist.currentPlayMusic)
// 监听歌曲id的变化
watch(songID, () => {
  console.log(songID.value);
  playIconClick()//播放
})
// 定义虚拟dom对象
const audio = ref('')
const playIcon = ref('')
const pauseIcon = ref('')
const volumeIcon = ref('')
const progressBar = ref('')
const volumeSetting = ref('')
// 当前播放时间
let audioCurrentTime = ref(0)
// 歌曲总时长
let audioDuration = ref(0)
// 播放状态
let audioStatus = ref(false)
// 进度条
let progressStatus = ref(0)//默认0-100
// 音量
let volumeStatus = ref(1)
// 播放
function playIconClick() {
  audioStatus.value = true//显示播放按钮
  // 延迟播放，等歌曲加载完毕
  setTimeout(() => {
    audio.value.play().then(() => {
      console.log('播放成功')
      audioStatus.value = true//显示播放按钮
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
// 点击显示控制音量条
function showVolumeStep() {
  if (volumeSetting.value.style.display == '') {
    volumeSetting.value.style.display = 'flex'
  } else {
    volumeSetting.value.style.display = ''
  }
}
// 音量条改变
function volumeChange() {
  audio.value.volume = volumeStatus.value / 100//绑定音量
}
// 点击进度条/拖动进度条
function progressBarClick() {
  // console.log('点击触发', progressStatus.value, progressStatus.value * audio.value.duration / 100);
  audio.value.currentTime = Number(progressStatus.value * audio.value.duration / 100)//修改当前时间
}
// 格式化时间
function formatTime(time) {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  // 返回格式 00：00 不足两位的补零
  return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
}
onMounted(() => {
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
    // audio.value.playbackRate = 1// 播放速度 
    volumeStatus.value = audio.value.volume * 100//音量初始值绑定设置
  }
  init()
  // dom渲染完毕，监听播放时间更新的事件
  audio.value.ontimeupdate = function () {
    progressStatus.value = Number(audio.value.currentTime / audio.value.duration * 100)//百分比进度条
    audioCurrentTime.value = audio.value.currentTime//当前时间
    audioDuration.value = audio.value.duration//总时长
  };
  // 监听音频结束播放事件
  audio.value.onended = function () {
    audioStatus.value = false // 显示暂停图标
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
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        gap: 12px;
        // 文本一行显示，溢出显示省略号
        word-break: break-word;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
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

    .volume {
      position: absolute;
      right: 0px;
      bottom: 60px;
      z-index: 1;
      height: 170px;
      border-radius: 4px;
      // width: 40px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      box-sizing: border-box;
      box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;
      // 默认隐藏
      display: none;
    }

    span:hover {
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

    // 屏幕宽度小于1000px时，控制器隐藏
    @media screen and (max-width: 1000px) {
      display: none;
    }

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