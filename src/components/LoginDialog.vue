<template>
  <!-- 未登录显示 -->
  <div class="loginDialog" v-if="isLogin==false">
    <div class="avatar" @click="loginShow">
      <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <a>点击登录</a>
    </div>
    <!-- 登陆弹框 -->
    <el-dialog v-model="dialogVisible" title="Tips" width="300px">
      <template #header="{ close, titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass">登录</h4>
      </template>
      <div class="login-form">
        <el-form :model="loginParams" :rules="loginRules" ref="loginFormRef">
          <el-form-item prop="phone">
            <el-input v-model="loginParams.phone" prefix-icon="Cellphone" placeholder="请输入手机号码" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginParams.password" type="password" prefix-icon="Lock" placeholder="请输入登录密码" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button class="loginBtn" type="primary" @click="login" :loading="btnLoding">登录</el-button>
      </template>
    </el-dialog>
  </div>
  <!-- 已登录显示 -->
  <div class="loginDialog" v-else-if="isLogin==true">
    <div class="avatar">
      <div ref="card" class="card" @mouseover="imgMouseOver" @mouseout="imgMouseOut">
        <!-- 昵称 -->
        <p class="nickname">{{loginData.profile.nickname}}</p>
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
      <!-- 用户头像 -->
      <img :src="loginData.profile.avatarUrl+'?param=100y100'" :alt="'用户ID='+loginData.profile.userId" ref="img"
        class="img" @mouseover="imgMouseOver" @mouseout="imgMouseOut">
    </div>
  </div>
</template>


<script setup>
import { ref, reactive } from "vue"
import { useLoginStore } from "@/pinia/module/login.js"
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"

const router = useRouter()
const { get_login, get_logout } = useLoginStore()
const { loginParams, isLogin, loginData } = storeToRefs(useLoginStore())

const routerPush = (name, id) => {
  router.push({ name: name, query: { id: id } })
}

// 登录弹框
let dialogVisible = ref(false)
// 登录按钮加载状态
let btnLoding = ref(false)
// 表单对象
const loginFormRef = ref(null);
// 登录表单验证规则
let loginRules = reactive({
  phone: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '请输入正确的密码', trigger: 'blur' }
  ]
})
// 点击显示登录框
const loginShow = () => {
  dialogVisible.value = true
}
// 登录
const login = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      // 按钮开始加载
      btnLoding.value = true
      // 请求结束，按钮关闭加载
      get_login().finally(() => btnLoding.value = false)
    } else {
      console.log('表单验证不通过')
      return false
    }
  })
  // dialogVisible = false
}
// 控制card显隐
let card = ref(null)
let img = ref(null)
// 鼠标移入
const imgMouseOver = () => {
  card.value.style.display = 'block'
  console.log("鼠标移入");
}
// 鼠标移出
const imgMouseOut = () => {
  card.value.style.display = 'none'
  console.log("鼠标移出");
}

</script>

<style lang="less" scoped>
:deep(.el-input__wrapper) {
  border-radius: 20px;
  background-color: #F1F5F9;
}

:deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px #34d399 inset;
}

:deep(.el-dialog) {
  border-radius: 8px;
}

.vip {
  margin: 0 4px;
}

.loginDialog {

  .avatar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    position: relative;

    .card {
      display: none;
      width: 200px;
      border-radius: 8px;
      box-sizing: border-box;
      border: 2px solid #FFF;
      background-color: #FFF;
      position: absolute;
      left: calc(50% - 20px);
      top: calc(50% + 20px);
      transform: translate(-50%, 0);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      transition: .3s;
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
        transform: scale(2) translate3d(-10px, 10px, 0);
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
      transition: .3s;

      &:hover {
        transform: scale(2) translate3d(-10px, 10px, 0);
        box-shadow: rgb(0 0 0 / 4%) 0px 2px 4px 0px;
      }

      // 只对后面的兄弟元素生效，前面的兄弟元素无法控制，只能使用js控制
      &:hover+.card {
        display: block;
      }
    }
  }
}



.loginBtn {
  width: 100%;
  border-radius: 20px;
}
</style>