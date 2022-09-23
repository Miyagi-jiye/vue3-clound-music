<template>
  <div class="userDetail-dynamic" v-if="events">
    <div v-for="(item,index) in events" :key="item.showTime" class="vfor">
      <div class="left">
        <!-- 头像 -->
        <img :src="item.user.avatarUrl+'?param=100y100'" alt="" class="img">
      </div>
      <div class="right">
        <!-- 昵称 -->
        <div class="row">
          <p class="nickname">{{item.user.nickname}}</p>
          <p class="type">{{typeFilter(item.type)}}</p>
        </div>
        <!-- 发布时间 -->
        <p class="time">{{timestampToTime(item.eventTime)}}</p>
        <!-- 动态内容 -->
        <p class="content">{{item.json.msg}}</p>
        <!-- 转发内容 -->
        <div v-if="item.json.event" class="child">
          <div class="row">
            <p class="nickname">{{item.json.event.user.nickname}}</p>
            <p class="type">{{typeFilter(item.json.event.type)}}</p>
          </div>
          <p class="time">{{timestampToTime(item.json.event.eventTime)}}</p>
          <p class="content">{{item.json.event.json.msg}}</p>
        </div>
        <!-- 点赞，评论，分享 -->
        <div class="buttonGroup">
          <div class="item">
            <icon-thumbs-up theme="outline" :strokeWidth="2" size="16" v-show="item.info.likedCount==0" />
            <icon-thumbs-up theme="filled" :strokeWidth="2" size="16" fill="#d33434"
              v-show="item.info.likedCount!==0" />
            <p v-show="item.info.likedCount!==0">({{item.info.likedCount}})</p>
            <p v-show="item.info.likedCount==0">点赞</p>
          </div>
          <div class="item" @click="commentClick(item.info.threadId,index)">
            <icon-comment theme="outline" :strokeWidth="2" size="16" />
            <p v-show="item.info.commentCount!==0">({{item.info.commentCount}})</p>
            <p v-show="item.info.commentCount==0">评论</p>
          </div>
          <div class="item">
            <icon-share-three theme="outline" :strokeWidth="2" size="16" />
            <p v-show="item.info.shareCount!==0">({{item.info.shareCount}})</p>
            <p v-show="item.info.shareCount==0">分享</p>
          </div>
        </div>
        <!-- 评论 -->
        <Comment v-show="index==showIndex && flag==true" />
        <!-- 回复评论 -->
        <div class="inputComment" v-show="index==showIndex && flag==true">
          <el-input v-model="input" placeholder="回复评论" type="textarea" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Comment from "@/views/modules/userDetail/comment.vue";//评论组件
import { timestampToTime } from "@/utils/timestamp.js"//时间戳转换
import { ref, computed } from "vue";
import { useUserDetailStore } from "@/pinia/module/userDetail.js"
import { storeToRefs } from "pinia";

const { userEvents } = storeToRefs(useUserDetailStore())//数据
const { get_commentEvent } = useUserDetailStore()//方法

const events = computed(() => userEvents.value.events)
//18 分享单曲,19 分享专辑,17、28 分享电台节目,22 转发,39 发布视频,35、13 分享歌单,24 分享专栏文章,41、21 分享视频
const typeFilter = (type) => {
  switch (type) {
    case 18:
      return "分享歌曲";
    case 19:
      return "分享专辑";
    case 17 || 28:
      return "分享电台节目";
    case 22:
      return "转发";
    case 39:
      return "发布视频";
    case 35 || 13:
      return "发布动态";
    case 24:
      return "分享专栏文章";
    case 41 || 21:
      return "分享视频";
    case 57:
      return "分享歌曲";
    default:
      return type;
  }
}
let showIndex = ref(null)//显示评论的索引
let flag = ref(false)//是否显示评论
const input = ref('')//评论内容
//点击评论
const commentClick = async (threadId, index) => {
  await get_commentEvent(threadId)
  flag.value = !flag.value
  if (index !== showIndex.value) {
    flag.value = true//点击不同的评论，显示另一个评论
  }
  showIndex.value = index//记录点击的索引
  // console.log(index, flag.value);
}
</script>

<style lang="less" scoped>
.userDetail-dynamic {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .vfor {
    display: flex;
    flex-direction: row;
    gap: 10px;
    // 分割线
    box-sizing: border-box;
    border-bottom: 1px solid #e3e5e7;
    padding-bottom: 14px;

    .left {
      width: 40px
    }

    .right {
      display: flex;
      flex-direction: column;
      flex: 1;

      .row {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .buttonGroup {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 20px;
        margin-top: 20px;

        .item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          opacity: 0.7;
          cursor: pointer;

          &:hover {
            opacity: 1;
          }
        }
      }

      .inputComment {
        margin-top: 20px;
      }

      .child {
        background-color: #e3e5e7;
        border-radius: 8px;
        padding: 20px;
        white-space: break-spaces;
      }
    }
  }
}

.img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.nickname {
  font-size: 14px;
  color: #34d399;
}

.type {
  font-size: 14px;
  color: #000000bd;
}

.time {
  font-size: 12px;
  color: #666;
  margin: 10px 0;
}

.content {
  line-height: 1.2;
  margin-bottom: 10px;
  // 文本换行
  word-break: break-all;
}
</style>