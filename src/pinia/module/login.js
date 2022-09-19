import { defineStore } from "pinia";
import { useLogin, useLoginStatus, useLogout, useRegisterAnonimous } from "@/api/index.js"
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
    isLogin: false,
    visitorCookie: '',//游客cookie
    dialogVisible: false,//登录弹出框
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
          this.isLogin = true//登录状态
          this.dialogVisible = false
          // this.loginData.token = "bearer" + this.loginData.token//格式化token
          console.log("登录成功", res.data);
          const res1 = await useLoginStatus()
          console.log("登录状态", res1.data);
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
        this.loginData = {}//清空数据
        this.loginParams = {}
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