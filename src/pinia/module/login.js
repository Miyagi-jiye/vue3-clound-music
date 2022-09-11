import { defineStore } from "pinia";
import { useLogin } from "@/api/index.js"

export const useLoginStore = defineStore("login", {
  state: () => ({
    loginParams: {
      username: "",
      password: ""
    },
    loginData: {
      account: {},
      profile: {},
      bindings: [],
      token: '',
      cookie: ''
    }
  }),
  getters: {},
  actions: {
    // 登录
    async get_login() {
      const res = await useLogin(this.loginParams)
      this.loginData = res.data
      console.log("登录", res.data);
    }
  },
})

// 导出并重命名
export default useLoginStore