import { defineStore } from "pinia";
import { useUserDetail, useUserPlaylist, useUserRecord, useUserEvent, useCommentEvent, useUserFollows } from "@/api/index.js";

export const useUserDetailStore = defineStore("userDetail", {
  state: () => ({
    userDetail: {
      bindings: [],//绑定信息
      createDays: 0,//创建天数
      createTime: 0,//创建时间
      level: 0,//等级
      listenSongs: 0,//累计听歌
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
      }
    },//用户详情
    userPlaylist: [],//用户所有歌单
    userPlaylistParams: {
      uid: 0,
      limit: 100,
      offset: 1
    },//请求参数
    userCreatedPlaylist: [],//用户创建歌单
    userCollectPlaylist: [],//用户收藏歌单
    userRecord: [],//播放记录
    userRecordParams: {
      uid: 0,
      type: 0,//0:最近一周，1：所有时间
    },//请求参数
    userEvent: [],//用户动态
    userEventParams: {
      uid: 0,
      limit: 30,
      lasttime: -1,
    },//请求参数
    activeTab: 'create'//默认激活tab
  }),
  getters: {},
  actions: {
    // 获取用户详情
    async get_userDetail(uid) {
      const res = await useUserDetail(uid)
      this.userDetail = res.data
      console.log("获取用户详情", res.data);
    },
    // 获取用户歌单
    async get_userPlaylist(uid) {
      this.userPlaylistParams.uid = uid//修改uid
      const res = await useUserPlaylist(this.userPlaylistParams)
      // 过滤歌单，分为自己创建的和收藏的
      this.userCreatedPlaylist = res.data.playlist.filter(item => item.userId == uid);
      this.userCollectPlaylist = res.data.playlist.filter(item => item.userId != uid);
      // console.log(this.userCreatedPlaylist, this.userCollectPlaylist);
      this.userPlaylist = res.data.playlist
      console.log("获取用户歌单", res.data);
    },
    // 获取用户歌曲播放记录
    async get_userRecord(uid) {
      this.userRecordParams.uid = uid
      const res = await useUserRecord(this.userRecordParams)
      this.userRecord = res.data.allData
      console.log("获取用户歌曲播放记录", res.data);
    },
    // 获取用户动态
    async get_userEvent(uid) {
      this.userEventParams.uid = uid//设置uid
      const res = await useUserEvent(this.userEventParams)
      this.userEvent = res.data
      console.log("获取用户动态", res.data);
    },
    // 获取动态评论
    async get_commentEvent() {
      const res = await useCommentEvent()
      console.log("获取动态评论", res.data);
    },
    // 获取用户关注列表
    async get_userFollows() {
      const res = await useUserFollows()
      console.log("获取动态评论", res.data);
    },
  }
})
