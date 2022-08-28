<template>
  <div>
    <div class="avatar hidden-less-600" @click="loginShow">
      <el-avatar :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <a>点击登录</a>
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
        <el-button class="loginBtn" type="primary" @click="login" :loading="btnLoding">登录</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
import { useLogin } from "@/api/index.js"
import { ElMessage } from 'element-plus'
// 路由
const router = useRouter()
// 登录弹框
let dialogVisible = ref(false)
// 登录表单
let loginForm = reactive({
  username: '',
  password: ''
})
// 登录按钮加载状态
let btnLoding = ref(false)
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
      // 按钮开始加载
      btnLoding.value = true
      useLogin(loginForm.username, loginForm.password)
        // 请求成功
        .then(res => {
          console.log("获取登录信息", res.data)
          if (res.data.code == 502) {
            ElMessage({
              showClose: true,//是否显示关闭按钮
              grouping: true,//是否将多条消息组合到一条消息中
              message: res.data.msg || '登录失败',//内容保底
              type: 'error',//消息类型
            })
          } else {
            ElMessage({
              showClose: true,//是否显示关闭按钮
              grouping: true,//是否将多条消息组合到一条消息中
              message: res.data.msg || '登录成功',//内容保底
              type: 'success',//消息类型
            })
            if (res.data.token) {
              localStorage.setItem('token', JSON.stringify(res.data.token))
            }
            if (res.data.cookie) {
              localStorage.setItem('cookie', JSON.stringify(res.data.cookie))
            }
          }
        })
        // 请求错误
        .catch(err => {
          console.log(err)
        })
        // 请求结束
        .finally(() => {
          // 按钮结束加载
          btnLoding.value = false
        })
    } else {
      console.log('表单验证不通过')
      return false
    }
  })
  // dialogVisible = false
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

.avatar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #34d399;
  }
}

.loginBtn {
  width: 100%;
  border-radius: 20px;
}
</style>