<template>
  <div style="width:100%">
    <div class="header">
      <div class="left">
        <icon-left theme="outline" size="26" :strokeWidth="2" />
        <icon-right theme="outline" size="26" :strokeWidth="2" />
        <el-input v-model="search" placeholder="搜索音乐、MV、歌单" :prefix-icon="Search" />
      </div>
      <div class="right">
        <div class="avatar" @click="loginShow">
          <el-avatar :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <a>点击登录</a>
        </div>
        <icon-hamburger-button theme="outline" size="28" :strokeWidth="2" />
      </div>
    </div>
    <!-- 登陆弹框 -->
    <el-dialog v-model="dialogVisible" title="Tips" width="300px">
      <template #header="{ close, titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass">登录</h4>
      </template>
      <div class="login-form">
        <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="Cellphone" placeholder="请输入手机号码" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" prefix-icon="Lock" placeholder="请输入登录密码" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button class="loginBtn" type="primary" @click="login">登录</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { Search } from '@icon-park/vue-next'//字节跳动图标组件
import { useLogin } from "@/api/index.js"
// 搜索关键字
let search = ref('')
// 登录弹框
let dialogVisible = ref(false)
// 登录表单
let loginForm = reactive({
  username: '',
  password: ''
})
// 表单对象
const loginFormRef = ref(null);
// 登录表单验证规则
let loginRules = reactive({
  username: [
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
      useLogin(loginForm.username, loginForm.password).then(res => {
        console.log(res)
      })
    } else {
      console.log('error submit!!')
      return false
    }
  })
  // dialogVisible = false
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  // overflow: hidden;

  .left {
    // min-width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;

    span:nth-child(1) {
      padding-right: 8px;
      cursor: pointer;

      &:hover {
        color: rgb(52 211 153);
      }
    }

    span:nth-child(2) {
      padding-left: 8px;
      cursor: pointer;

      &:hover {
        color: rgb(52 211 153);
      }
    }

    .el-input {
      margin: 0 16px;
      width: 200px;
    }

    :deep(.el-input__wrapper) {
      border-radius: 20px;
      background-color: #F1F5F9;
    }

    :deep(.el-input__wrapper.is-focus) {
      box-shadow: 0 0 0 1px #34d399 inset;
    }
  }

  .right {
    // min-width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    .avatar {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      cursor: pointer;
      font-size: 14px;

      .el-avatar {
        margin: 0 8px;
      }

      &:hover {
        color: #34d399;
      }
    }

    span {
      cursor: pointer;

      &:hover {
        color: #34d399;
      }
    }
  }
}

.loginBtn {
  width: 100%;
}
</style>