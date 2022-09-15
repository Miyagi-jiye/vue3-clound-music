<template>
  <div class="loginDialog" v-if="isLogin==false">
    <div class="avatar hidden-less-800" @click="loginShow">
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
  <div class="loginDialog" v-else-if="isLogin==true">
    <div class="avatar" title="查看详情" @click="routerPush('userDetail',loginData.profile.userId)">
      <img :src="loginData.profile.avatarUrl+'?param=50y50'" :alt="'用户ID='+loginData.profile.userId">
      <p>{{loginData.profile.nickname}}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { useLoginStore } from "@/pinia/module/login.js"
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router";

const router = useRouter()
const { get_login } = useLoginStore()
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

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
  }
}

.loginBtn {
  width: 100%;
  border-radius: 20px;
}
</style>