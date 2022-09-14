<template>
  <div class="userDetail-record">
    <div v-for="(item,index) in myData" :key="index" class="vfor" @dblclick="play(item.song)"
      :class="{activeSong:currentPlayMusic.id == item.song.id }">
      <div class="left">{{index+1}}</div>
      <img v-lazy="item.song.al.picUrl+'?param=50y50'" :alt="'歌曲ID='+item.song.id" class="img hidden-less-400">
      <div class="center">
        <div class="top">
          <p>{{item.song.name}}</p>
          <p v-if="item.song.alia[0]">（{{item.song.alia[0]}}）</p>
        </div>
        <div class="bottom">
          <SongListTag :mySongData="item.song"/>
          <div class="artist">
            <p v-for="ar in item.song.ar" class="ar">{{ar.name}}</p>
          </div>
          <p class="al">{{item.song.al.name}}</p>
        </div>
      </div>
      <div class="right">
        <icon-play theme="outline" size="14" class="play" @click="play(item.song)" />
        <p>{{playCountFilter(item.playCount)}}次</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SongListTag from "@/components/SongListTag.vue";//歌曲列表tag
import { playCountFilter } from "@/utils/playCountFilter.js"//播放量过滤
import { usePlaylistStore } from "@/pinia/module/playlist.js"
import { storeToRefs } from "pinia";

const { currentPlayMusic } = storeToRefs(usePlaylistStore())
const { change_playMusic, push_toPlayList } = usePlaylistStore()//改变当前播放对象,添加到播放列表


defineProps({
  myData: {
    type: Array,
    default: () => ([
      {
        playCount: 481,//播放次数
        score: 100,//播放比重
        song: {
          name: "月光奏鸣曲",
          al: {},
          alia: [],//括号翻译
          ar: [{ id: 0, name: 'name' }]
        }
      }
    ])
  }
})

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

.userDetail-record {
  display: flex;
  flex-direction: column;

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
      width: 80px;
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