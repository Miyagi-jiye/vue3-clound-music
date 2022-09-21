<template>
  <div class="userDetail-follow" v-if="myData">
    <div class="vfor" v-for="item in myData" :key="item.userId">
      <div class="left">
        <img :src="item.avatarUrl+'?param=100y100'" alt="头像" class="img" @click="routerPush('userDetail',item.userId)">
        <img v-if="item.avatarDetail!==null" :src="item.avatarDetail.identityIconUrl" alt="vip" class="vipIcon">
      </div>
      <div class="center">
        <p class="nickname">{{item.nickname}}</p>
        <p class="signature" v-if="item.signature">{{item.signature}}</p>
        <div class="row">
          <p>歌单：{{item.playlistCount}}</p>
          <p>粉丝：{{item.followeds}}</p>
        </div>
      </div>
      <div class="right">
        <div class="follow" v-show="item.followed==false">
          <icon-plus theme="filled" size="16" :strokeWidth="3" class="icon" />
          <p>关注</p>
        </div>
        <div class="follow" v-show="item.followed==true&&item.mutual==false">
          <p class="follow-true">已关注</p>
        </div>
        <div class="follow" v-show="item.followed==true&&item.mutual==true">
          <p class="follow-true">互相关注</p>
        </div>
        <div class="mail">
          <icon-send-email theme="filled" size="16" :strokeWidth="3" class="icon" />
          <p>私信</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const prop = defineProps({
  myData: {
    type: Array,
    default: []
  }
})

const routerPush = (name, id) => {
  router.push({ name, query: { id: id } })
}
</script>

<style lang="less" scoped>
.userDetail-follow {
  // 自适应布局
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 10px;

  .vfor {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      border-radius: 8px;
      background-color: var(--my-hover-background-color);
    }

    .left {
      font-size: 0;
      width: 60px;
      position: relative;

      .img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid #fff;
        box-sizing: border-box;
        box-shadow: rgb(0 0 0 / 18%) 0px 2px 4px 0px;
      }

      .vipIcon {
        width: 15px;
        height: 15px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }

    .center {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      margin: 0 10px;

      .row {
        display: flex;
        flex-direction: row;
        font-size: 14px;
        color: #666;

        p {
          white-space: nowrap;
        }


        p:not(:last-child) {
          margin-right: 10px;

          &:after {
            content: "|";
            margin-left: 10px;
            color: #ccc;
          }
        }
      }

      .nickname {
        font-size: 14px;
        // 溢出省略号
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .signature {
        font-size: 14px;
        color: #666;
        // 溢出隐藏，只显示一行
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      // 私信
      .mail {
        font-size: 14px;
        color: #666;
        display: flex;
        padding: 6px 8px;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
          color: #d9822b;
          background-color: #fff;
        }

        .icon {
          margin-right: 6px;
        }
      }

      // 关注
      .follow {
        font-size: 14px;
        color: #666;
        display: flex;
        padding: 6px 8px;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
          color: #d92b2b;
          background-color: #fff;
        }

        .icon {
          margin-right: 6px;
        }

        .follow-true {
          color: #d92b2b;
        }
      }

    }
  }
}
</style>