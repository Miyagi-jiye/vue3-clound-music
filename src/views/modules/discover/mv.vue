<template>
  <div class="MV">
    <div class="vfor" v-for="item in myData" :key="item.id">
      <div class="mv">
        <img class="img" v-img-lazy="item.picUrl + '?param=400y200'" :alt="'MVID=' + item.id">
        <div class="playCount">
          <icon-play theme="outline" size="12" :strokeWidth="4" title='播放量' />
          <p>{{  playCountFilter(item.playCount)  }}</p>
        </div>
        <icon-play-one class="playIcon" theme="filled" size="50" :strokeWidth="4" title='点击播放' />
      </div>
      <p class="name">{{  item.name  }}</p>
      <p class="artistName">{{  item.artistName  }}</p>
    </div>
  </div>
</template>

<script setup>
// 过滤播放量
import { playCountFilter } from '@/utils/playCountFilter'
defineProps({
  myData: {
    type: Array,
    default: () => [{ id: 123456, artistName: '默认作者', name: '默认歌曲', playCount: '默认播放量', picUrl: '' }]
  }
})
</script>

<style lang="less" scoped>
.MV {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); //自动分配列宽
  grid-gap: 20px;

  .vfor {

    .mv {
      position: relative;
      overflow: hidden;
      border-radius: var(--my-border-radius);

      &:hover {
        cursor: pointer;

        .playCount {
          display: none;
        }

        .playIcon {
          opacity: 1; //显示播放图标

          &:hover {
            color: #34d399;
          }
        }
      }

      .img {
        width: 100%;
        height: auto;
        border-radius: var(--my-border-radius);
        transition: all 1s ease;

        &:hover {
          transform: scale(1.3); //放大
          filter: brightness(0.5); //颜色变暗
        }
      }

      .playCount {
        position: absolute;
        right: 4px;
        bottom: 6px;
        color: #fff;
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 4px;
      }

      .playIcon {
        // 居中
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // 播放图标
        color: #fff;
        opacity: 0; //隐藏播放图标
        transition: all 0.5s ease;
        cursor: pointer;
      }
    }

    .artistName,
    .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .name {
      font-size: 16px;
      margin-top: 6px;
    }

    .artistName {
      font-size: 12px;
      margin-top: 4px;
      color: #999;
    }

  }
}
</style>