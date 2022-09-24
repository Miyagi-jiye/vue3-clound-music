<template>
  <div class="myLike">
    <!-- 歌曲列表 -->
    <div v-for="(item,index) in likeListSongs" :key="index" class="vfor">
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
        <PlayButton :myData="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PlayButton from "@/views/modules/myLike/playButton.vue";//播放按钮
import SongListTag from "@/components/SongListTag.vue";//歌曲列表tag
import { useMyLikeStore } from "@/pinia/module/myLike.js"
import { useLoginStore } from "@/pinia/module/login.js"
import { storeToRefs } from "pinia";
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

// 是否已经有了数据，没有则初始化请求数据
if (likeListSongs.value.length == 0) {
  init()
}

</script>

<style lang="less" scoped>
// 激活歌曲
.activeSong {
  color: #16da92 !important;
  border-radius: 4px !important;
  background-color: var(--my-hover-background-color) !important;
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