<template>
  <div class="recommend">
    <div class="vfor" v-for="item in myData" :key="item.id">
      <div class="cardImg">
        <img v-if="item.picUrl" class="discoverImg" v-lazy="item.picUrl + '?param=300y300'" :alt="'歌单ID=' + item.id"
          :key="item.id" @click="routerPush('playlist',item.id)">
        <img v-else-if="item.coverImgUrl" class="discoverImg" v-lazy="item.coverImgUrl + '?param=300y300'"
          :alt="'歌单ID=' + item.id" @click="routerPush('playlist',item.id)">
        <icon-play-one class="playIcon" theme="filled" size="50" :strokeWidth="4" title='点击播放'
          @click="playMusic(item.id)" />
        <div class="playCount">
          <icon-headset theme="filled" size="12" :strokeWidth="4" />
          <text v-if="item.playCount">{{ playCountFilter(item.playCount) }}</text>
          <text v-else-if="item.playcount">{{ playCountFilter(item.playcount) }}</text>
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
import { usePlaylistStore } from "@/pinia/module/playlist.js"
import { playCountFilter } from '@/utils/playCountFilter'// 过滤播放量

const router = useRouter()
const { get_songlistDetail, push_musicToPlayList } = usePlaylistStore()

defineProps({
  myData: {
    type: Array,
    default: () => [{ id: 123456, picUrl: '', coverImgUrl: '', name: '默认简介', playCount: 999 }]
  }
})

// 跳转到歌单详情页
const routerPush = (name, id) => {
  router.push({ name: name, query: { id: id } })
}
// 获取歌单所有歌曲
const playMusic = async (id) => {
  await get_songlistDetail(id)
  push_musicToPlayList()
  console.log("将歌单添加到播放列表");
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
      max-width: 300px; //请求图片的最大宽度
      width: 100%;
      overflow: hidden;
      border-radius: var(--my-border-radius);
      position: relative;
      transition: all 0.3s ease;

      &:hover {
        cursor: pointer;
        transform: translateY(-4px);

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
          // transform: scale(1.2);
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