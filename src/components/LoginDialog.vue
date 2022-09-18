<template>
  <!-- 未登录显示 -->
  <div class="loginDialog hidden-less-800" v-if="isLogin==false">
    <div class="avatar" @click="dialogVisible = true">
      <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <a>点击登录</a>
    </div>
    <!-- 登陆弹框 -->
    <LoginDialog />
  </div>
  <!-- 已登录显示 -->
  <div class="loginDialog hidden-less-800" v-else-if="isLogin==true">
    <div class="avatar">
      <!-- 用户卡片 -->
      <Transition>
        <div class="card" v-show="showCard==true" @mouseenter="cardMouseEnter" @mouseleave="cardMouseLeave">
          <!-- 昵称 -->
          <p class="nickname">{{loginData.profile.nickname}}</p>
          <!-- 动态，关注，粉丝 -->
          <div class="followGroup">
            <div class="item" @click="routerPush('userDetail',loginData.profile.userId,'dynamic')">
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
          <!-- 菜单项 -->
          <div class="menu-item" @click="routerPush('userDetail',loginData.profile.userId)">
            <icon-user theme="outline" size="18" />
            个人中心
            <icon-right theme="outline" size="18" />
          </div>
          <div class="menu-item">
            <icon-mail theme="outline" size="18" />
            我的消息
            <icon-right theme="outline" size="18" />
          </div>
          <!-- 分割线 -->
          <div class="split-line"></div>
          <div class="menu-item" @click="get_logout()">
            <icon-logout theme="outline" size="18" />
            退出登录
            <icon-right theme="outline" size="18" />
          </div>
        </div>
      </Transition>
      <!-- 用户头像 -->
      <img :src="loginData.profile.avatarUrl+'?param=100y100'" :alt="'用户ID='+loginData.profile.userId" class="img"
        @mouseenter="imgMouseEnter" @mouseleave="imgMouseLeave">
    </div>
  </div>
</template>


<script setup>
import LoginDialog from "@/components/Dialog.vue"//登录弹出框
import { ref } from "vue"
import { useLoginStore } from "@/pinia/module/login.js"
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"

const router = useRouter()
const { get_logout } = useLoginStore()
const { isLogin, loginData, dialogVisible } = storeToRefs(useLoginStore())

const routerPush = (name, id, activeTab) => {
  router.push({ name: name, query: { id: id, activeTab: activeTab } })
}

// 控制card显隐
let showCard = ref(false)
let timer;
// 头像鼠标移入
const imgMouseEnter = () => {
  if (timer) clearTimeout(timer)
  showCard.value = true
  // console.log("1", showCard.value);
}
// 头像鼠标移出
const imgMouseLeave = () => {
  // 延迟执行让用户有时间将鼠标移入卡片
  timer = setTimeout(() => {
    showCard.value = false
  }, 300);
  // console.log("2", showCard.value);
}
// 卡片鼠标移入
const cardMouseEnter = () => {
  if (timer) clearTimeout(timer)
  showCard.value = true
  // console.log("3", showCard.value);
}
// 卡片鼠标移出
const cardMouseLeave = () => {
  showCard.value = false
  // console.log("4", showCard.value);
}
</script>

<style lang="less" scoped>
/* card过渡动画 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


.vip {
  margin: 0 4px;
}

.loginDialog {
  margin: 0 100px;

  .avatar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    position: relative;

    .card {
      // display: none;
      width: 200px;
      border-radius: 8px;
      box-sizing: border-box;
      border: 2px solid #FFF;
      background-color: #FFF;
      position: absolute;
      left: calc(50%);
      top: calc(50% + 20px);
      transform: translate(-50%, 0);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      // 样式
      padding: 10px;

      // 昵称
      .nickname {
        width: 100%;
        margin-top: 25px;
        margin-bottom: 4px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #34d399;
      }

      // 关注
      .followGroup {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition: .3s;

          &:hover {
            color: #00aeec;

            p {
              color: #00aeec;
            }
          }

          span {
            font-size: 18px;
            cursor: pointer;
          }

          p {
            font-size: 12px;
            color: #9499a0;
          }
        }
      }

      // 菜单项
      .menu-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-radius: 8px;
        color: #61666d;
        cursor: pointer;
        transition: .3s;

        &:hover {
          background-color: var(--my-hover-background-color);
        }

      }

      // 分割线
      .split-line {
        margin: 8px 0;
        width: 100%;
        height: 1px;
        background: #e3e5e7;
      }


      // 兄弟元素
      &:hover+.img {
        transform: scale(2) translate3d(0, 10px, 0);
      }
    }

    // 头像
    .img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid #fff;
      box-sizing: border-box;
      z-index: 1;
      transition: .4s;

      &:hover {
        transform: scale(2) translate3d(0, 10px, 0);
        box-shadow: rgb(0 0 0 / 4%) 0px 2px 4px 0px;
      }
    }
  }
}
</style>