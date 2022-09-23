import { defineStore } from "pinia";
import { useRecommendSongs, useRecommendResource, useLogin, useLoginStatus, useLogout, useRegisterAnonimous, useLoginQrKey, useLoginQrCreate, useLoginQrCheck, useUserAccount } from "@/api/index.js"
import { ElMessage } from 'element-plus'

export const useLoginStore = defineStore("login", {
  state: () => ({
    loginParams: {
      phone: "",
      password: ""
    },
    loginData: {
      account: {},//用户信息
      profile: {
        userId: 0,//用户id
        nickname: "用户名",
        signature: "个性签名",
        gender: 1,//性别
        avatarUrl: "用户头像",
        backgroundUrl: "背景图片",
        birthday: 0,//生日
        city: 0,//城市代码
        province: 0,//省份代码
        vipType: 0,//vip
        playlistCount: 0,//创建的歌单数量
        followeds: 0,//粉丝数量
        follows: 0,//关注数量
        eventCount: 0,//动态数量
        followed: false,//是否已经关注
        followMe: false,//是否已经关注
      },//用户详情
      bindings: [],
      token: '',
      cookie: ''
    },
    isLogin: false,//是否登录
    visitorCookie: '',//游客cookie
    dialogVisible: false,//登录弹出框
    loginQrKey: '',//登录二维码key
    loginQrUrl: '',//登录二维码url
  }),
  getters: {
    // cookie
    getCookie(state) {
      return state.loginData.cookie
    },
    // userId
    getID(state) {
      return state.loginData.profile.userId
    },
  },
  actions: {
    // 登录
    async get_login() {
      try {
        // 获取游客cookie
        // await this.get_registerAnonimous()
        const res = await useLogin(this.loginParams)
        if (res.data.code == 200) {
          ElMessage({
            showClose: true,//是否显示关闭按钮
            grouping: true,//是否将多条消息组合到一条消息中
            message: '登录成功',//内容保底
            type: 'success',//消息类型
          })
          this.loginData = res.data
          this.isLogin = true//登录状态
          this.dialogVisible = false//关闭登录弹出框
          console.log("登录成功", res.data);
          return res.data
        } else {
          ElMessage({
            showClose: true,//是否显示关闭按钮
            grouping: true,//是否将多条消息组合到一条消息中
            message: '登录失败',//内容保底
            type: 'error',//消息类型
          })
          console.log("登录失败", res.data);
        }
      } catch (error) {
        console.log("登录捕获错误", error);
      }
    },
    // 退出登录
    async get_logout() {
      const res = await useLogout()
      if (res.data.code == 200) {
        this.isLogin = false//登录状态
        ElMessage.success({ message: '退出成功' })
      }
      console.log("退出登录", res.data);
    },
    // 获取游客cookie
    async get_registerAnonimous() {
      const res = await useRegisterAnonimous();
      this.visitorCookie = res.data.cookie
      console.log("获取游客cookie", res.data);
    },
    // 获取二维码key
    async get_loginQrKey() {
      const res = await useLoginQrKey();
      this.loginQrKey = res.data.data.unikey
      console.log("获取二维码key", res.data);
    },
    // 获取二维码
    async get_loginQrCreate() {
      const res = await useLoginQrCreate(this.loginQrKey);
      this.loginQrUrl = res.data.data.qrurl
      console.log("获取二维码", res.data);
    },
    // 检测二维码状态
    async get_loginQrCheck() {
      const res = await useLoginQrCheck(this.loginQrKey);
      console.log("检测二维码状态", res.data);
      return res.data
    },
    // 获取用户信息
    async get_userAccount() {
      const res = await useUserAccount();
      this.loginData = res.data
      console.log("获取用户信息", res.data);
      return res.data
    },
    // 获取登录状态(没有效果)
    async get_loginStatus() {
      const res = await useLoginStatus();
      console.log("获取登录状态", res.data);
    },

  },
  // 开启数据持久化
  persist: true,

  // // 持久化存储插件更多配置
  // persist: {
  //   // 修改存储中使用的键名称，默认为当前 Store的 id
  //   key: 'storekey',
  //   // 修改为 sessionStorage，默认为 localStorage
  //   storage: window.sessionStorage,
  //   // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
  //   paths: ['nested.data'],//选择你要存储的数据
  // },
})

// 导出并重命名
export default useLoginStore