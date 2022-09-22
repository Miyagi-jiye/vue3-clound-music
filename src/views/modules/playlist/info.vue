<template>
  <div class="info">
    <div class="flex">
      <div class="left">
        <img v-lazy="myData.coverImgUrl + '?param=180y180'" alt="封面">
      </div>
      <div class="right">
        <p class="title">{{ myData.name }}</p>
        <div class="box">
          <img class="avatar" v-lazy="myData.creator.avatarUrl + '?param=40y40'" alt="作者">
          <span class="nickname">{{ myData.creator.nickname }}</span>
          <div class="tags">
            <a v-for="item in myData.tags" :key="item">#{{ item }}</a>
          </div>
        </div>
        <div class="description">
          <MoreText :text="myData.description" :end="90" />
        </div>
        <div class="btnGroup">
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
        <!-- <PlayAllButton /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
// import PlayAllButton from '@/components/PlayAllButton.vue';
import MoreText from '@/views/modules/playlist/MoreText.vue'// 更多详情组件
import { usePlaylistStore } from "@/pinia/module/playlist.js"

const { push_musicToPlayList } = usePlaylistStore()

defineProps({
  myData: {
    type: Object,
    // default: () => ({
    //   coverImgUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    //   name: '默认标题',
    //   creator: {
    //     avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    //     nickname: '默认昵称',
    //     backgroundUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    //   },
    //   tags: ['默认标签1', '默认标签2', '默认标签3'],
    //   description: '默认描述'
    // })
  }
})

// 全部添加到播放列表
const addPlayList = () => {
  push_musicToPlayList()
}
</script>

<style lang="less" scoped>
.info {
  width: 100%;
  height: 100%;

  .flex {
    display: flex;
    flex-direction: row;
    gap: 20px;

    .left {
      max-width: 100%;
      height: auto;

      @media screen and (max-width: 600px) {
        display: none;
      }

      img {
        width: 180px;
        height: 180px;
        border-radius: var(--my-border-radius);
      }
    }

    .right {
      flex: 1;

      .title {
        // 溢出隐藏换2行
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        // 字体
        font-size: 24px;
        font-weight: bold;
        line-height: 1.2;
      }

      .box {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 0 8px 0;
        font-size: 12px;
        // 不允许换行
        white-space: nowrap;

        .avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }

        .nickname {
          margin-left: 8px;
        }

        .tags {
          margin-left: 20px;

          a {
            margin-left: 8px;
            color: #999;

            &:hover {
              cursor: pointer;
              color: #34d399;
            }
          }
        }
      }

      .description {
        font-size: 12px;
        color: rgba(55, 65, 81, 1);
      }

      .btnGroup {
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
    }
  }
}
</style>