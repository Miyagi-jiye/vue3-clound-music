<template>
  <div class="userInfo" v-if="isLogin==true"
    :style="{backgroundImage:'url('+loginData.profile.backgroundUrl+'?param=400y400)'}">
    <div class="box">
      <div class="left" @click="routerPush('userDetail',loginData.profile.userId)">
        <img :src="loginData.profile.avatarUrl+'?param=100y100'" :alt="'用户ID='+loginData.profile.userId">
      </div>
      <div class="center">
        <!-- 昵称 性别 vip-->
        <div class="nickname">
          {{loginData.profile.nickname}}
          <icon-male v-if="loginData.profile.gender==1" theme="outline" size="20" fill="#002bff" class="icon" />
          <icon-female v-else-if="loginData.profile.gender==2" theme="outline" size="20" fill="#ff00f7" class="icon" />
          <icon-vip-one v-show="loginData.profile.vipType !== 0" theme="outline" size="20" fill="#34d399"
            class="icon" />
        </div>
        <div class="signature">{{loginData.profile.signature}}</div>
      </div>
      <div class="right" @click="routerPush('userDetail',loginData.profile.userId)">
        详情<icon-right theme="outline" size="18" />
      </div>
    </div>
    <!-- 动态，关注，粉丝 -->
    <div class="followGroup">
      <div class="item">
        <span>{{loginData.profile.eventCount}}</span>
        <p>动态</p>
      </div>
      <div class="item">
        <span>{{loginData.profile.follows}}</span>
        <p>关注</p>
      </div>
      <div class="item">
        <span>{{loginData.profile.followeds}}</span>
        <p>粉丝</p>
      </div>
    </div>
  </div>
  <div class="userInfo" v-else-if="isLogin==false">
    <LoginDialog />
  </div>
</template>

<script setup>
import LoginDialog from "@/components/LoginDialog.vue"
import { useLoginStore } from "@/pinia/module/login.js"
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const { loginData, isLogin } = storeToRefs(useLoginStore())
const router = useRouter()
const routerPush = (name, id) => {
  router.push({ name: name, query: { id: id } })
}
</script>

<style lang="less" scoped>
.icon {
  margin-left: 10px;
}

.userInfo {

  margin: 20px;
  padding: 10px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;

  .box {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    // 模糊遮罩
    background-color: rgb(255 255 255 / 50%);
    backdrop-filter: blur(4px);
    padding: 10px;
    border-radius: 8px;
    // 溢出隐藏
    overflow: hidden;

    .left {
      font-size: 0; //解决图片缝隙

      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        cursor: pointer;
        border: 2px solid #fff;
        box-sizing: border-box;
        image-rendering: -webkit-optimize-contrast;
      }
    }

    .center {
      flex: 1;
      margin: 0 10px;
      overflow: hidden;

      .nickname {
        display: flex;
        flex-direction: row;
        align-items: center;
        white-space: nowrap;
      }

      .signature {
        font-size: 12px;
        margin-top: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    .right {
      display: flex;
      width: 50px;
      text-align: center;
      margin: auto;
      cursor: pointer;
      overflow: hidden;

      &:hover {
        color: #34d399;
      }
    }
  }

  .followGroup {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px 10px 10px;
    position: relative;


    .item {

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      span {
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      p {
        font-size: 14px;
      }
    }

    .item:not(:last-child)::after {
      content: '';
      width: 2px;
      height: 40%;
      border-radius: 8px;
      position: absolute;
      background: #ffffff82;
      top: 25px;
      margin-left: 43%;
    }


  }
}
</style>