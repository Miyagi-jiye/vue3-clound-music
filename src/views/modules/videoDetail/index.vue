<template>
  <div class="videoDetail">
    <videoPlay v-bind="options" />
    <Info :videoDetail="videoDetail" @emitClick="scroll" class="info" />
    <p class="mvs-title">相似推荐</p>
    <MV :myData="mvs" @clickEmit="emitRouterPush" class="mv" />
    <p id="comment" class="comment-title">发表评论</p>
    <SongComments :comments="commentMv.comments" :hotComments="commentMv.hotComments" class="comment" />
  </div>
</template>

<script setup>
import Info from "@/views/modules/videoDetail/info.vue"// 详情组件
import MV from "@/views/modules/discover/mv.vue"// MV组件(复用首页MV组件)
import SongComments from "@/views/modules/playlist/songComments.vue"// 评论组件(复用歌单评论组件)

import { useRouter, useRoute } from 'vue-router';
import 'vue3-video-play/dist/style.css'// vue3-video-play插件样式文件
import { videoPlay } from 'vue3-video-play'// vue3-video-play插件
import { reactive, watch } from 'vue';
import { useVideoDetailStore } from "@/pinia/module/videoDetail.js"
import { storeToRefs } from "pinia";

const router = useRouter()
const route = useRoute()
const { get_mvUrl, get_mvDetail, get_commentMv, get_simiMv } = useVideoDetailStore()
const { videoUrl, videoDetail, commentMv, mvs } = storeToRefs(useVideoDetailStore())

// 播放器配置
const options = reactive({
  width: '100%', //播放器高度
  height: 'auto', //播放器高度
  color: "#409eff", //主题色
  title: '', //视频名称
  // poster: "",//视频封面
  src: videoUrl, //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false,  //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'fullScreen'] //显示所有按钮,
})

get_mvUrl(route.params.id)
get_mvDetail(route.params.id)
get_commentMv(route.params.id)
get_simiMv(route.params.id)

// 监听路由id变化
watch(() => route.params.id, () => {
  // 只在当前页生效
  if (route.name == 'videoDetail') {
    get_mvUrl(route.params.id)
    get_mvDetail(route.params.id)
    get_commentMv(route.params.id)
    get_simiMv(route.params.id)
  }
})
// 切换mv
const emitRouterPush = (id) => {
  router.push({ name: "videoDetail", params: { id: id } })
}
// 滚动到评论
const scroll = () => {
  let target = document.getElementById("comment")
  if (target) {
    console.log("触发");
    target.scrollIntoView({ behavior: "smooth" })
  }
}
</script>

<style lang="less" scoped>
.videoDetail {
  padding: 20px;
  background-color: #FFF;
  scroll-behavior: smooth; //滚动过渡
  min-height: 100vh;

  .mvs-title {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #182026;
  }

  .info {
    margin-top: 20px;
  }

  .mv {
    margin-top: 20px;
  }

  .comment-title {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #182026;
  }

  .comment {
    margin-top: 20px;
  }
}
</style>