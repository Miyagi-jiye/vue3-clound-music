<template>
  <div class="info">
    <div class="flex">
      <div class="left">
        <img :src="myData.album.picUrl + '?param=180y180'" alt="封面">
      </div>
      <div class="right">
        <p class="title">{{ myData.album.name }}</p>
        <!-- 改动部分 -->
        <div class="alias">
          <p v-for="item in myData.album.artists">{{ item.name }}</p>
        </div>
        <!-- 改动部分 -->
        <div class="box">
          <p>发布时间：{{ timestampToTime(myData.album.publishTime) }}</p>
          <p v-if="myData.album.subType">音源：{{ myData.album.subType }}</p>
          <p v-if="myData.album.company">版权：{{ myData.album.company }}</p>
        </div>
        <div class="description">
          <MoreText :text="myData.album.description" :end="90" v-if="myData.album.description" />
        </div>
        <!-- 全部播放 -->
        <PlayAllButton :myData="myData.songs" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MoreText from '@/views/modules/playlist/MoreText.vue'// 更多详情组件
import PlayAllButton from "@/components/PlayAllButton.vue"//全部播放，收藏，更多

defineProps({
  myData: {
    type: Object,
    // default: () => (
    //   {
    //     album: {
    //       id: 0,//专辑id
    //       // description: '描述',
    //       name: '专辑名',
    //       picUrl: '',
    //       subType: "音源",
    //       company: "版权",
    //       artists: [{ name: "歌手" }],
    //       publishTime: 123456
    //     },
    //     songs: []
    //   }
    // )
  }
})
/* 时间戳转换为时间 */
function timestampToTime(timestamp) {
  timestamp = timestamp ? timestamp : null;
  let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  // 下面不需要
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + M + D;
}
</script>

<style lang="less" scoped>
.filter {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.info {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;

  .flex {
    display: flex;
    flex-direction: row;
    gap: 20px;
    // 玻璃态
    background: rgba(255, 255, 255, .2);
    backdrop-filter: blur(30px);
    // padding: 10px;
    border-radius: 8px;

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

      .alias {
        display: flex;
        align-items: center;
        padding-top: 12px;
        font-size: 16px;
        flex-direction: row;
        flex-wrap: wrap;
        color: #34d399;

        p:not(:last-child)::after {
          content: '/';
          display: inline-block;
          margin: 0 5px;
          color: black;
        }
      }

      .box {
        display: flex;
        gap: 10px;
        padding: 12px 0 8px 0;
        font-size: 14px;
        white-space: nowrap;
        flex-wrap: wrap;
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