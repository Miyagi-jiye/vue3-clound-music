<template>
  <div class="playAllButton">
    <button class="btn1" @click="addPlayList">
      <icon-play-one class="playIcon" theme="outline" size="22" :strokeWidth="4" title='点击播放' />
      <span>播放全部</span>
    </button>
    <button class="btn2">
      <icon-like class="playIcon" theme="outline" size="18" :strokeWidth="4" title='点击收藏' />
      <span>收藏</span>
    </button>
    <button class="btn3">
      <icon-more class="playIcon" theme="outline" size="18" :strokeWidth="4" title='更多' />
    </button>
  </div>
</template>

<script setup>
import useStore from "@/pinia/index.js"
const { Playlist } = useStore()

const addPlayList = () => {
  Playlist.change_playMusic(obj)// 改变播放对象
  Playlist.push_musicToPlayList()// 添加歌单全部歌曲到播放列表
  Playlist.push_toPlayList(obj)// 添加单首歌曲到播放列表
}
</script>

<style lang="less" scoped>
.playAllButton {
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  // 不允许换行
  white-space: nowrap;
  flex-wrap: nowrap;
  margin-top: 20px;

  .btn1 {
    display: flex;
    gap: 5px;
    height: 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background-color: rgb(5 150 105 / 1);
    font-size: .875rem;
    line-height: 1.25rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-duration: .15s;
    color: rgb(255 255 255 / 1);
    width: 128px;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: rgb(4 120 87 / 1);
    }
  }

  .btn2 {
    display: flex;
    gap: 5px;
    height: 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border-width: 1px;
    font-size: .875rem;
    line-height: 1.25rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-duration: .15s;
    width: 128px;
    background-color: transparent;

    cursor: pointer;
    border: 1px solid #999;

    &:hover {
      --tw-border-opacity: 1;
      border-color: rgb(16 185 129 / var(--tw-border-opacity));
      --tw-text-opacity: 1;
      color: rgb(16 185 129 / var(--tw-text-opacity));
    }
  }

  .btn3 {
    display: flex;
    height: 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border-width: 1px;
    font-size: .875rem;
    line-height: 1.25rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-duration: .15s;
    width: 32px;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid #999;

    &:hover {
      --tw-border-opacity: 1;
      border-color: rgb(16 185 129 / var(--tw-border-opacity));
      --tw-text-opacity: 1;
      color: rgb(16 185 129 / var(--tw-text-opacity));
    }
  }
}
</style>