<template>
  <div class="rankingList">
    <div class="vfor" v-for="item in oneToFour" :key="item.id">
      <div class="left">
        <img class="discoverImg" v-img-lazy="item.picUrl + '?param=300y300'" :alt="'歌单ID=' + item.id"
          @click="toPlaylist(item.id)">
        <icon-play-one class="playIcon" theme="filled" size="50" :strokeWidth="4" title='点击播放'
          @click="playMusic(item.id)" />
        <div class="playCount">
          <icon-headset theme="filled" size="12" :strokeWidth="4" />
          <text>{{ playCountFilter(item.playCount) }}</text>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <div class="songList" v-for="(tracks, index) in item.tracks" :key="index">
            <div>{{ index + 1 }}</div>
            <p class="nowrap">{{ tracks.first }} - {{ tracks.second }}</p>
          </div>
          <div @click="toPlaylist(item.id)" class="seeMore">
            查看更多
            <icon-right theme="outline" size="20" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { playCountFilter } from '@/utils/playCountFilter' // 过滤播放量
import { useRouter } from 'vue-router';
import useStore from "@/pinia/index.js";

defineProps({
  oneToFour: {
    type: Array,
    default: () => [{}]
  }
})

const router = useRouter()
const { Playlist } = useStore()

// 跳转到歌单详情页
const toPlaylist = async (id) => {
  Playlist.get_songlistComment(id)
  await Playlist.get_songlistDetail(id)
  router.push({ name: 'playlist' })
}
// 获取歌单所有歌曲
const playMusic = async (id) => {
  await Playlist.get_songlistDetail(id)
  Playlist.push_musicToPlayList()
  console.log("将歌单添加到播放列表");
}
</script>

<style lang="less" scoped>
.rankingList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  // overflow: hidden;

  .vfor {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.25s;

    &:hover {
      background-color: var(--my-hover-background-color);
      border-radius: 8px;
      transform: translateY(-4px);
    }

    .left {
      height: 10rem;
      width: 10rem;
      border-radius: var(--my-border-radius);
      position: relative;
      transition: all 1s ease;


      &:hover {

        .playCount {
          display: none;
        }

        .playIcon {
          opacity: 1; //显示播放图标

          &:hover {
            color: #34d399;
            cursor: pointer;
            zoom: 120%;
          }
        }

        .discoverImg {
          cursor: pointer;
          // transform: scale(1.3); //放大
          filter: brightness(0.8); //颜色变暗
        }
      }

      .discoverImg {
        width: 10rem;
        height: 10rem;
        border-radius: var(--my-border-radius);
        transition: all 1s ease;
      }

      .playIcon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        transition: all .3s ease;
        opacity: 0; // 默认隐藏
      }

      .playCount {
        position: absolute;
        right: 4px;
        bottom: 6px;
        font-size: 12px;
        color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.6);
      }

    }

    .right {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      // padding: 20px;
      justify-content: space-between;
      overflow: hidden;

      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0px 20px;

        .songList {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          // border: 1px solid;
          box-sizing: border-box;
          padding: 10px;
          font-size: 18px;
          font-weight: bold;
          line-height: 1.2;
          transition: all 0.25s;

          .nowrap {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }

        }

        .seeMore {
          padding: 10px;
          margin-left: 20px;
          font-size: 16px;
          font-weight: bold;
          line-height: 1.2;
          box-sizing: border-box;
          color: rgba(0, 0, 0, 0.644);
          display: flex;
          align-items: center;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

.name {
  width: 100%;
  height: auto;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 10px;
}
</style>