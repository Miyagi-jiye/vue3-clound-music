<template>
  <div class="userDetail-comment">
    <div class="title" v-show="userComment.comments.length!==0">最新评论</div>
    <div class="vfor" v-for="item in userComment.comments" :key="item.time">
      <div class="left">
        <img v-lazy="item.user.avatarUrl+'?param=100y100'" alt="" class="img">
      </div>
      <div class="right">
        <div class="colunm">
          <p class="nickname">{{item.user.nickname}}</p>
          <p class="time">{{item.timeStr}}</p>
        </div>
        :
        <p class="content">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserDetailStore } from "@/pinia/module/userDetail.js"
import { storeToRefs } from "pinia";

const { userComment } = storeToRefs(useUserDetailStore())//数据
</script>

<style lang="less" scoped>
.userDetail-comment {
  margin-top: 20px;

  .title {
    font-size: 14px;
    color: #333;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .vfor {
    display: flex;
    flex-direction: row;
    gap: 10px;

    // 除了最后一个
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    .left {
      width: 30px;

      .img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }

    .right {
      display: flex;
      flex-direction: row;
      gap: 10px;
      flex-wrap: wrap;
      flex: 1;
      color: #000000bd;

      .colunm {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .nickname {
          font-size: 14px;
          font-weight: 700;
        }

        .time {
          font-size: 12px;
          color: #00000099;
        }
      }

      .content {
        font-size: 14px;
        flex: 1;
      }
    }
  }
}
</style>