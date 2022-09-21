<template>
  <div class="dailySongs-info">
    <div class="title" :style="{backgroundImage:'url('+myData[0].al.picUrl+')'}">
      <div class="mask">
        <div class="left hidden-less-600">
          <p class="day">{{day}}</p>
        </div>
        <div class="right">
          <div class="top">
            <p>每日歌曲推荐</p>
            <p>根据你的音乐口味生成，每天6:00更新</p>
          </div>
          <PlayAllButton :myData="myData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PlayAllButton from "@/components/PlayAllButton.vue";// 播放全部按钮

let day = new Date().getDate()// 获取当前日期

const prop = defineProps({
  myData: Array
})
</script>

<style lang="less" scoped>
.dailySongs-info {

  .title {
    height: 150px;

    .mask {
      background-color: rgba(255, 255, 255, 0.7);
      // backdrop-filter: blur(4px);
      // 布局
      display: flex;
      flex-direction: row;
      height: 100%;

      .left {
        width: 200px;
        padding: 20px;
        position: relative;
        // 居中
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;

        .day {
          font-size: 60px;
          font-weight: 700;
          color: #fff;
          text-shadow: 0 0 10px #000;
        }
      }

      .right {
        flex: 1;
        z-index: 1;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .top {
          display: flex;
          flex-direction: column;

          p:nth-child(1) {
            font-size: 24px;
            font-weight: 700;
          }

          p:nth-child(2) {
            font-size: 14px;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>