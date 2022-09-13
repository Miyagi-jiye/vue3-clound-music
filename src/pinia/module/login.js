import { defineStore } from "pinia";
import { useLogin, useLoginStatus, useRegisterAnonimous } from "@/api/index.js"
import { ElMessage } from 'element-plus'

export const useLoginStore = defineStore("login", {
  state: () => ({
    loginParams: {
      phone: "",
      password: ""
    },
    loginData: {
      account: {},
      profile: {},
      bindings: [],
      token: '',
      cookie: ''
    },
    isLogin: false,
    visitorCookie: ''
  }),
  getters: {},
  actions: {
    // 登录
    async get_login() {
      try {
        // 获取游客cookie
        // await this.get_registerAnonimous()
        const res = await useLogin(this.loginParams)
        if (res.data.code == 502) {
          ElMessage({
            showClose: true,//是否显示关闭按钮
            grouping: true,//是否将多条消息组合到一条消息中
            message: res.data.msg ? res.data.msg : '登录失败',//内容保底
            type: 'error',//消息类型
          })
          console.log("登录失败", res.data);
        } else {
          ElMessage({
            showClose: true,//是否显示关闭按钮
            grouping: true,//是否将多条消息组合到一条消息中
            message: res.data.msg ? res.data.msg : '登录成功',//内容保底
            type: 'success',//消息类型
          })
          this.loginData = res.data
          this.loginData.token = "bearer" + this.loginData.token//格式化token
          console.log("登录成功", res.data);
        }
      } catch (error) {
        console.log("登录捕获错误", error);
      }
    },
    // 获取游客cookie
    async get_registerAnonimous() {
      const res = await useRegisterAnonimous();
      document.cookie = res.data.cookie
      this.visitorCookie = res.data.cookie
      console.log("获取游客cookie", res.data);
    },
  },
})

// 导出并重命名
export default useLoginStore