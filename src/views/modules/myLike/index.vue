<template>
  <div class="myLike">
    <!-- 标题 -->
    <div class="title" :style="{backgroundImage:'url('+likeListSongs[0].al.picUrl+')'}">
      <div class="mask">
        <div class="left hidden-less-600">
          <p class="day">{{day}}</p>
        </div>
        <div class="right">
          <div class="top">
            <p>每日歌曲推荐</p>
            <p>根据你的音乐口味生成，每天6:00更新</p>
          </div>
          <PlayAllButton />
        </div>
      </div>
    </div>
    <!-- 功能栏 -->
    <!-- 歌曲列表 -->
    <div v-for="(item,index) in likeListSongs" :key="index" class="vfor" @dblclick="play(item)"
      :class="{activeSong:currentPlayMusic.id == item.id }">
      <div class="left">{{index+1}}</div>
      <img v-lazy="item.al.picUrl+'?param=50y50'" :alt="'歌曲ID='+item.id" class="img hidden-less-400">
      <div class="center">
        <div class="top">
          <p>{{item.name}}</p>
          <p v-if="item.alia[0]">（{{item.alia[0]}}）</p>
        </div>
        <div class="bottom">
          <SongListTag :mySongData="item" />
          <div class="artist">
            <p v-for="ar in item.ar" class="ar">{{ar.name}}</p>
          </div>
          <p class="al">{{item.al.name}}</p>
        </div>
      </div>
      <div class="right">
        <icon-play theme="outline" size="20" class="play" @click="play(item)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PlayAllButton from "@/components/PlayAllButton.vue";// 播放全部按钮
import SongListTag from "@/components/SongListTag.vue";//歌曲列表tag
import { usePlaylistStore } from "@/pinia/module/playlist.js"
import { useMyLikeStore } from "@/pinia/module/myLike.js"
import { useLoginStore } from "@/pinia/module/login.js"
import { storeToRefs } from "pinia";
// import { defineAsyncComponent } from "vue";// 异步组件
// const a = defineAsyncComponent(() => import("@/components/PlayAllButton.vue"))//异步组件
// 歌单列表
const { currentPlayMusic } = storeToRefs(usePlaylistStore())
const { change_playMusic, push_toPlayList } = usePlaylistStore()//改变当前播放对象,添加到播放列表
// 我喜欢
const { likeListSongs } = storeToRefs(useMyLikeStore())
const { get_likeList, get_songDetailAll } = useMyLikeStore()//获取歌曲详情
// 登录
const { loginData } = storeToRefs(useLoginStore())

// 初始化执行
const init = async () => {
  await get_likeList(loginData.value.userId)//获取我喜欢列表ids
  get_songDetailAll()//获取歌曲详情
}

let day = new Date().getDate()
// 是否已经有了数据，没有则初始化请求数据
if (likeListSongs.value.length == 0) {
  init()
}

// 播放音乐
const play = async (obj) => {
  await change_playMusic(obj)
  await push_toPlayList(obj)
  console.log(currentPlayMusic.value);
}
</script>

<style lang="less" scoped>
// 激活歌曲
.activeSong {
  color: #16da92 !important;
  border-radius: 4px !important;
  background-color: var(--my-hover-background-color) !important;
}

.title {

  .mask {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(4px);
    // 布局
    display: flex;
    flex-direction: row;

    .left {
      width: 200px;
      padding: 20px;
      position: relative;
      // 居中
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;

      .day {
        font-size: 60px;
        font-weight: 700;
        color: #fff;
        text-shadow: 0 0 10px #000;
      }
    }

    .right {
      flex: 1;
      z-index: 1;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .top {
        display: flex;
        flex-direction: column;

        p:nth-child(1) {
          font-size: 24px;
          font-weight: 700;
        }

        p:nth-child(2) {
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
  }
}

.myLike {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
  // padding: 20px;

  .vfor {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;

    &:hover {
      background-color: var(--my-hover-background-color);
      border-radius: 4px;
    }

    .left {
      width: 30px;
      color: #999;
    }

    .img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      margin-right: 10px;
      margin-left: 10px;
      border-radius: 4px;
      box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 15%);
    }

    .center {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;

      .top {
        display: flex;
        flex-direction: row;
        font-size: 14px;

        p:nth-child(1) {
          white-space: nowrap;
        }

        p:nth-child(2) {
          color: #999;
          // 溢出省略号
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }

      .bottom {
        display: flex;
        flex-direction: row;
        align-items: center;

        .artist {
          display: flex;
          flex-direction: row;
          font-size: 12px;
          color: #6a6a6a;
          //英文字母显示不全
          line-height: 16px;
          // 不换行
          white-space: nowrap;

          // 除最后一个之外的
          .ar {
            &:hover {
              cursor: pointer;
            }

            &:not(:last-child):after {
              content: "/";
              display: inline;
              margin: 4px;
            }
          }
        }

        .al {
          font-size: 12px;
          color: #6a6a6a;
          //英文字母显示不全
          line-height: 16px;
          // 溢出省略号 
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;

          &:hover {
            cursor: pointer;
          }

          &::before {
            content: "-";
            display: inline;
            margin: 8px;
          }
        }
      }
    }

    .right {
      // width: 80px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end; //右对齐
      gap: 4px;
      font-size: 14px;
      color: #6a6a6a;

      .play {
        cursor: pointer;

        &:hover {
          color: #34d399;
        }
      }
    }
  }
}
</style>