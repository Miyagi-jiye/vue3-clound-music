<template>
  <div class="discover-daily">
    <!-- 每日推荐 -->
    <div class="left">
      <img :src="dailySongs[0].al.picUrl" alt="每日推荐" class="img">
      <div class="content">
        <div class="title-box">
          <div class="box">
            <p>每</p>
            <p>日</p>
            <p>推</p>
            <p>荐</p>
          </div>
        </div>
      </div>
      <button class="playIcon" @click="routerPush('dailySongs')">
        <icon-play-one theme="filled" size="30" :strokeWidth="4" title='查看详情' />
      </button>
    </div>
    <!-- 私人FM -->
    <div class="right">
      <div class="img-box">
        <img :src="fm[fmIndex].album.picUrl+'?param=180y180'" alt="">
      </div>
      <div class="control-box">
        <div class="info">
          <div class="title">{{fm[fmIndex].album.name}}</div>
          <div class="subtitle">
            <p v-for="item in fm[fmIndex].artists">{{item.name}}</p>
          </div>
        </div>
        <div class="control">
          <icon-unlike theme="filled" size="20" :strokeWidth="3" title='不喜欢' class="play-one unlike" />
          <icon-play-one v-show="audioStatus==false" theme="filled" size="25" :strokeWidth="3" title='点击播放'
            class="play-one" @click="play" />
          <icon-pause v-show="audioStatus==true" theme="filled" size="25" :strokeWidth="3" title='点击暂停' class="play-one"
            @click="pause" />
          <icon-go-end theme="filled" size="25" :strokeWidth="3" title='下一首' class="play-one" @click="playNext" />
        </div>
        <div class="sign">
          <icon-broadcast-radio theme="filled" size="25" fill="#ff6363" :strokeWidth="3" />
          <p>私人FM</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue"
import { useRouter } from 'vue-router'
import { usePlaylistStore } from "@/pinia/module/playlist.js"//播放列表
import { storeToRefs } from "pinia"

const { get_songDetail } = usePlaylistStore()//播放单首歌曲方法
const { audioStatus } = storeToRefs(usePlaylistStore())//播放状态

const router = useRouter()
// 封面
const prop = defineProps({
  dailySongs: Array,
  fm: Array
})
const get_personalFm = inject('get_personalFm')

let fmIndex = ref(0)//私人FM歌曲索引

const routerPush = (name) => {
  router.push({ name: name })
}

const playNext = () => {
  fmIndex.value++
  // 当前播放的歌曲索引等于歌曲列表长度-1时，获取更多歌曲列表
  if (fmIndex.value == prop.fm.length - 1) {
    get_personalFm()//获取私人FM
  }
  // 如果是播放状态切歌
  if (audioStatus.value == true) {
    get_songDetail(prop.fm[fmIndex.value].id)//播放单首歌曲
  }
}

const play = () => {
  get_songDetail(prop.fm[fmIndex.value].id)//播放单首歌曲
  audioStatus.value = true
}
const pause = () => {
  audioStatus.value = false
}
</script>

<style lang="less" scoped>
.discover-daily {
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;

  // 每日推荐
  .left {
    flex: 1;
    width: 30vw;
    min-width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    background: linear-gradient(270deg, transparent, rgba(0, 0, 0, .28));


    .img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200%;
      z-index: -1;
      object-fit: cover;
      -webkit-animation: move 38s infinite;
      animation: move 38s infinite; // 无限循环
      -webkit-animation-direction: alternate;
      animation-direction: alternate;

      @keyframes move {
        0% {
          transform: translateY(0);
        }

        100% {
          transform: translateY(-50%);
        }
      }
    }

    .playIcon {
      position: absolute;
      bottom: 20px;
      right: 20px;
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
      border: 1px solid hsla(0, 0%, 100%, .08);
      color: #fff;
      position: absolute;
      right: 1.6rem;
      bottom: 1.4rem;
      background: #ffffff24;
      border-radius: 50%;
      margin-bottom: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      width: 44px;
      transition: .2s;
      cursor: pointer;

      &:hover {
        background: hsla(0, 0%, 100%, .44);
      }
    }

    .content {
      height: 198px;
      width: 50%;
      display: flex;
      align-items: center;
      border-radius: .94rem;

      .title-box {
        height: 148px;
        width: 148px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 25px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        .box {
          height: 100%;
          width: 100%;
          font-weight: 600;
          font-size: 64px;
          line-height: 48px;
          opacity: .96;
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          place-items: center;
        }
      }
    }
  }

  // 私人FM
  .right {
    flex: 1;
    background: linear-gradient(to left top, rgb(59, 68, 171), rgb(119, 171, 208));
    padding: 1rem;
    border-radius: 8px;
    height: 200px;
    box-sizing: border-box;
    display: flex;
    gap: 1rem;


    .img-box {
      height: 168px;
      width: 168px;
      border-radius: 8px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .control-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #FFF;
      width: 100%;
      position: relative;

      .info {
        display: flex;
        flex-direction: column;


        .title {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 1rem;
          // 保留两行
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          word-break: break-all;
        }

        .subtitle {
          opacity: 0.68;
          // 保留两行
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          word-break: break-all;
        }
      }

      .control {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        z-index: 1;

        .play-one {
          backdrop-filter: blur(8px);
          border: 1px solid hsla(0, 0%, 100%, 0.08);
          color: #fff;
          background: #ffffff24;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 35px;
          width: 35px;
          transition: 0.2s;
          cursor: pointer;

          &:hover {
            background: hsla(0, 0%, 100%, 0.44);
          }
        }
      }

      .sign {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 1.2rem;
        font-weight: 600;
        opacity: 0.68;
        // 不换行
        white-space: nowrap;
        // 居中右对齐
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 4px;
      }
    }
  }
}

.unlike:hover {
  color: #ff5757 !important;
}
</style>