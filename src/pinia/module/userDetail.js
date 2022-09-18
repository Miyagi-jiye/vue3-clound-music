import { defineStore } from "pinia";
import { useUserDetail, useUserPlaylist, useUserRecord, useUserEvent, useCommentEvent, useUserFollows, useUserFolloweds } from "@/api/index.js";

export const useUserDetailStore = defineStore("userDetail", {
  state: () => ({
    /** 用户详情 */
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
    },
    /** 用户歌单数据 */
    userPlaylist: [],//用户所有歌单
    userPlaylistParams: {
      uid: 0,
      limit: 100,
      offset: 1
    },
    userCreatedPlaylist: [],//用户创建歌单
    userCollectPlaylist: [],//用户收藏歌单
    /** 听歌排行数据 */
    userRecord: [],
    userRecordParams: {
      uid: 0,
      type: 0,//0:最近一周，1：所有时间
    },
    /** 用户动态数据 */
    userEvents: {
      events: [
        {
          user: {},
          info: {
            likedCount: 0,//点赞
            commentCount: 0,//评论数 
            shareCount: 0,//分享数
            threadId: "A_EV_2_6559519865_32953014",//动态id
          },
          json: {
            msg: '',//动态内容
          },
          type: 0,//18 分享单曲,19 分享专辑,17、28 分享电台节目,22 转发,39 发布视频,35、13 分享歌单,24 分享专栏文章,41、21 分享视频
          showTime: 0,
          eventTime: 0,
        }
      ],
      lasttime: 0,
      more: false,
      size: 2
    },
    userEventParams: {
      uid: 0,
      limit: 30,
      lasttime: -1,
    },
    /** 用户动态评论数据*/
    userComment: {
      oldThreadId: "A_EV_2_6559519865_32953014",//接收的动态id
      comments: [
        {
          user: {
            avatarUrl: '',//头像
            nickname: '',//昵称
            userId: 0,//用户id
          },
          commentId: 0,
          content: "回复内容",
          time: 1663413438203,//时间戳
          timeStr: "昨天19:17"
        }
      ],
      more: false,
      total: 0,
      userId: 0,
    },
    /** 用户关注数据 */
    userFollows: {
      follow: [],
      more: false,
    },
    userFollowsParams: {
      uid: 0,
      limit: 30,
      offset: 1,
    },
    /** 用户粉丝数据 */
    userFolloweds: {
      followeds: [{
        avatarDetail: {
          identityIconUrl: '',//vip图标
        },
        vipRights: {}
      }],
      more: false,
      size: 0,
    },
    userFollowedsParams: {
      uid: 0,
      limit: 30,
      offset: 1,
    },
    /** 默认激活tab */
    activeTab: 'create'
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
      // 格式化json数据
      res.data.events.map(item => item.json = JSON.parse(item.json));
      // 如果还有转发内容的也转换一下
      res.data.events.forEach(item1 => {
        if (item1.json.event) {
          item1.json.event.json = JSON.parse(item1.json.event.json)
        }
      });
      this.userEvents = res.data
      console.log("获取用户动态", this.userEvents);
    },
    // 获取动态评论,需要获取用户动态的threadId
    async get_commentEvent(threadId) {
      // 如果threadId没有更新就不请求
      if (this.userComment.oldThreadId == threadId) return
      const res = await useCommentEvent(threadId)
      this.userComment = res.data//更新数据
      this.userComment.oldThreadId = threadId//更新threadId
      console.log("获取动态评论", res.data);
    },
    // 获取用户关注列表
    async get_userFollows(uid) {
      this.userFollowsParams.uid = uid
      const res = await useUserFollows(this.userFollowsParams)
      if (res.data.more == false) {
        this.userFollows = res.data
      }
      else {
        this.userFollows.more = res.data.more
        // 合并旧数据
        this.userFollows.follow = [...this.userFollows.follow, ...res.data.follow]
      }
      console.log("获取用户关注列表", res.data);
    },
    // 获取用户粉丝列表
    async get_userFolloweds(uid) {
      this.userFollowedsParams.uid = uid
      const res = await useUserFolloweds(this.userFollowedsParams)
      this.userFolloweds = res.data
      console.log("获取用户粉丝列表", res.data);
    },
  }
})
