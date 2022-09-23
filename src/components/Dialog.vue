<template>
  <div>
    <!-- 登陆弹框 -->
    <el-dialog v-model="dialogVisible" title="Tips" width="300px">
      <template #header="{ close, titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass">登录</h4>
      </template>
      <!-- 密码登录 -->
      <div class="login-form" v-show="showView=='pwd'">
        <el-form :model="loginParams" :rules="loginRules" ref="loginFormRef">
          <el-form-item prop="phone">
            <el-input v-model="loginParams.phone" prefix-icon="Cellphone" placeholder="请输入手机号码" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginParams.password" type="password" prefix-icon="Lock" placeholder="请输入登录密码" />
          </el-form-item>
        </el-form>
      </div>
      <!-- 二维码登录 -->
      <div class="qrcode-vue" v-show="showView=='qr'">
        <qrcode-vue :value="value" :size="size" level="H" />
      </div>
      <!-- 验证码登录 -->
      <template #footer>
        <!-- 显示密码登录 -->
        <div v-show="showView=='pwd'">
          <el-button class="loginBtn" type="primary" @click="login()" :loading="btnLoding">登录</el-button>
          <p class="captcha" @click="switchDialog('forget')">忘记密码</p>
          <img :src="scanCode" alt="二维码登录" class="scan-code" @click="switchDialog('qr')">
        </div>
        <!-- 显示二维码登录 -->
        <div v-show="showView=='qr'" style="text-align:center">{{qrStatus}}</div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue'// 二维码插件
import scanCode from "@/assets/img/scan-code.png"//二维码登录
import { ElMessage } from 'element-plus'
import { ref, reactive, watch } from "vue"
import { useLoginStore } from "@/pinia/module/login.js"
import { storeToRefs } from "pinia"
import { useRouter } from 'vue-router'
const router = useRouter()

const { get_login, get_loginQrKey, get_loginQrCreate, get_loginQrCheck, get_userAccount } = useLoginStore()
const { loginParams, dialogVisible, loginQrUrl, isLogin } = storeToRefs(useLoginStore())
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
// 手机登录
const login = () => {
  loginFormRef.value.validate(async (valid) => {
    if (valid) {
      btnLoding.value = true// 按钮开始加载
      get_login()
        .then((res) => {
          if (res.data.code == 200) router.push({ path: '/' })
        })
        .finally(() => btnLoding.value = false)// 请求结束，按钮关闭加载
    } else {
      console.log('表单验证不通过')
      return false
    }
  })
}
// 默认显示界面
let showView = ref('pwd')
// 二维码登录
let value = ref('')// 二维码内容
let size = ref(200)// 二维码大小
// 定时器 (二维码登录 watch监听)
let qrTime = null
let qrStatus = ref('加载中...')// 二维码状态
// 二维码登录
const QrLogin = async () => {
  // 1.获取二维码key
  await get_loginQrKey()
  // 2.获取二维码url
  await get_loginQrCreate()
  // 3.赋值显示二维码内容
  value.value = loginQrUrl.value
  // 4.轮询二维码状态 (800 为二维码过期,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies))
  qrTime = setInterval(async () => {
    const res = await get_loginQrCheck()
    qrStatus.value = res.message// 二维码状态显示到页面上
    if (res.code == 800) {
      QrLogin()// 二维码过期，重新获取
    }
    if (res.code === 803) {
      clearInterval(qrTime)// 清除定时器
      ElMessage.success('登录成功')
      dialogVisible.value = false// 关闭弹框
      isLogin.value = true// 登录状态
      console.log("登录状态", isLogin.value);
    }
  }, 1000)
}
// 切换登录方式
const switchDialog = (view) => {
  if (view == 'pwd') {
    console.log("密码登录");
    showView.value = 'pwd'
  }
  if (view == 'qr') {
    console.log("二维码登录");
    showView.value = 'qr'
    QrLogin()// 调用二维码登录接口
  }
  if (view == 'forget') {
    console.log("忘记密码");
    ElMessage.warning('功能开发中...')
  }
}
// 监听弹框显示状态
watch(dialogVisible, (val) => {
  if (!val) {
    // 返回密码登录界面
    showView.value = 'pwd'
    // 清除轮询定时器
    clearInterval(qrTime)
  }
})
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

:deep(.el-dialog__body) {
  padding: 20px;
}

// 密码登录
.loginBtn {
  width: 100%;
  border-radius: 20px;
  margin-bottom: 30px;
}

// 验证码
.captcha {
  position: absolute;
  left: 20px;
  bottom: 20px;
  font-size: 14px;

  &:hover {
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -5px;
      left: 0;
      height: 2px;
      width: 100%;
      border-radius: 50%;
      color: #34d399;
      background-color: #34d399;
    }
  }
}

// 二维码登录
.scan-code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-bottom-right-radius: 8px;
}

// 二维码居中
.qrcode-vue {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>