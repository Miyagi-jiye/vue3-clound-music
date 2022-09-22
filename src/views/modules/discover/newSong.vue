<template>
  <div class="discover-newSong">
    <div class="flex" v-for="item in myData" :key="item.id">
      <span class="father">
        <img class="img" v-lazy="item.picUrl + '?param=100y100'" :alt="'新歌ID=' + item.id">
        <icon-play-one class="playIcon" theme="filled" size="25" :strokeWidth="4" title='点击播放' @click="play(item.id)" />
      </span>
      <div class="title">
        <span>{{ item.name }}</span>
        <p>{{ item.song.artists[0].name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePlaylistStore } from "@/pinia/module/playlist.js"
import { storeToRefs } from "pinia"

defineProps({
  myData: {
    type: Array,
    default: () => [{ id: 123456, picUrl: '', name: '默认简介', song: { artists: [{ name: '默认作者' }] } }]
  }
})

const { get_songDetail } = usePlaylistStore()

const play = (id) => {
  get_songDetail(id)
}
</script>

<style lang="less" scoped>
.discover-newSong {
  display: grid;
  // 自适应列
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;

  .flex {
    display: flex;
    flex-direction: row;
    gap: 10px;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--my-hover-background-color);
      cursor: pointer;
      border-radius: var(--my-border-radius);

      .father {
        .playIcon {
          opacity: 1; //显示播放图标
          cursor: pointer;
        }
      }
    }

    .father {
      position: relative;

      .img {
        width: 60px;
        height: 60px;
        border-radius: var(--my-border-radius);
      }

      .playIcon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        opacity: 0;
        transition: all 0.3s ease;

        &:hover {
          color: #34d399;
          opacity: 1;
        }
      }
    }

    .title {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      align-items: center;

      span {
        font-size: 16px;
        // 溢出不换行省略号
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p {
        font-size: 14px;
        color: #999;
        // 溢出不换行省略号
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>