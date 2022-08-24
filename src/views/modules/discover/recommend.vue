<template>
  <div class="recommend">
    <div class="vfor" v-for="item in myData" :key="item.id">
      <div class="cardImg">
        <img class="discoverImg" v-img-lazy="item.picUrl + '?param=300y300'" :alt="'歌单ID=' + item.id"
          @click="toPlaylist(item.id)">
        <icon-play-one class="playIcon" theme="filled" size="50" :strokeWidth="4" title='点击播放'
          @click="playMusic(item.id)" />
        <div class="playCount">
          <icon-headset theme="filled" size="12" :strokeWidth="4" />
          <text>{{ playCountFilter(item.playCount) }}</text>
        </div>
      </div>
      <div class="name">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useStore from "@/pinia/index.js"
// 过滤播放量
import { playCountFilter } from '@/utils/playCountFilter'

const router = useRouter()
const { Playlist } = useStore()

defineProps({
  myData: {
    type: Array,
    default: () => [{ id: 123456, picUrl: '', name: '默认简介' }]
  }
})

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
  console.log("将歌单歌曲全部添加到播放列表");
}
</script>

<style lang="less" scoped>
.recommend {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;

  .vfor {
    width: 100%;
    height: auto;

    .cardImg {
      height: auto;
      width: 100%;
      overflow: hidden;
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
          transform: scale(1.3); //放大
          filter: brightness(0.5); //颜色变暗
        }
      }

      .discoverImg {
        max-width: 100%;
        height: auto;
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

    .name {
      width: 100%;
      height: auto;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-top: 10px;
    }
  }
}
</style>