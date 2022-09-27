<template>
  <div class="discover-album">
    <div v-for="item in myData" :key="item.id" class="vfor">
      <div class="cover">
        <!-- 播放按钮,有没有歌曲id或者专辑id -->
        <button v-if="item.songId" class="playIcon" @click="get_songDetail(item.songId)">
          <icon-play-one theme="filled" size="25" :strokeWidth="4" title='点击播放' />
        </button>
        <button v-else-if="item.id" class="playIcon" @click="routerPush('albumDetail',item.id)">
          <icon-play-one theme="filled" size="25" :strokeWidth="4" title='查看详情' />
        </button>
        <!-- 专辑封面 -->
        <img class="album-picUrl" v-lazy="item.picUrl+'?param=200y200'" :alt="'专辑ID='+item.id">
        <!-- 专辑阴影 -->
        <div class="shadow" :style="{backgroundImage:'url('+item.picUrl+'?param=10y10)'}"></div>
      </div>
      <div class="album-name title" @click="routerPush('albumDetail',item.id)">{{item.name}}</div>
      <!-- 有没有作者id -->
      <div class="album-artist title" v-if="item.artist.id" @click="routerPush('artistDetail',item.artist.id)">
        {{item.artist.name}}
      </div>
      <div class="album-artist title" v-else>{{item.artist.name}}</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { usePlaylistStore } from "@/pinia/module/playlist.js"
const { get_songDetail } = usePlaylistStore()//pinia中的方法

const router = useRouter()

defineProps({
  myData: {
    type: Array,
    default: () => []
  }
})

const routerPush = (name, id) => {
  router.push({ name: name, params: { id: id } })
}
</script>

<style lang="less" scoped>
.discover-album {
  display: grid;
  // 自适应布局
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 40px 30px;

  .cover {
    font-size: 0;
    position: relative;
    z-index: 1;

    &:hover {
      .shadow {
        opacity: 1;
      }

      .playIcon {
        opacity: 1;
      }
    }

    .album-picUrl {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      cursor: pointer;
    }

    .shadow {
      position: absolute;
      top: 12px;
      height: 100%;
      width: 100%;
      filter: blur(10px) opacity(.6);
      transform: scale(.92, .96);
      z-index: -1;
      background-size: cover;
      border-radius: .75em;
      aspect-ratio: 1/1;
      // 控制显隐
      transition: opacity .3s;
      opacity: 0;
    }

    .playIcon {
      opacity: 0;
      // 透明效果
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
      background: #ffffff24;
      border: 1px solid hsla(0, 0%, 100%, .08);
      border-radius: 50%;
      color: #fff;
      // 居中
      position: absolute;
      right: 50%;
      bottom: 50%;
      transform: translate(50%, 50%);
      // 居中图标
      display: flex;
      justify-content: center;
      align-items: center;
      height: 39px;
      width: 39px;
      transition: .2s;
      cursor: pointer;

      &:hover {
        background: hsla(0, 0%, 100%, .44);
      }
    }
  }

  .album-name {
    font-size: 16px;
    font-weight: 700;
    color: #000;
    margin-top: 10px;
    margin-bottom: 5px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .album-artist {
    font-size: 12px;
    color: #999;
    cursor: pointer;

    &:hover {
      color: #34d399;
    }
  }
}

.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>