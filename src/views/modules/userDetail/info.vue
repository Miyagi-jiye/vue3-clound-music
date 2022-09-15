<template>
  <div class="userDetail-info" :style="{backgroundImage:'url('+userDetail.profile.backgroundUrl+')'}">
    <div class="box">
      <div class="left">
        <div class="avatar">
          <img :src="userDetail.profile.avatarUrl+'?param=300y300'" :alt="'用户ID='+userDetail.profile.userId">
        </div>
      </div>
      <div class="right">
        <div style="display:flex;gap:10px">
          <!-- 昵称 -->
          <div class="nickname">{{userDetail.profile.nickname}}</div>
          <!-- 等级，性别，vip -->
          <div class="iconGroup">
            <icon-male v-if="userDetail.profile.gender==1" theme="outline" size="20" fill="#002bff" />
            <icon-female v-else-if="userDetail.profile.gender==2" theme="outline" size="20" fill="#ff00f7" />
            <div class="level">LV{{userDetail.level}}</div>
            <icon-vip-one v-show="userDetail.profile.vipType !== 0" theme="outline" size="20" fill="#34d399" />
          </div>
        </div>
        <!-- 私信，关注 -->
        <div class="btnGroup">
          <el-button round plain type="success">
            <icon-entertainment theme="outline" size="16" class="el-icon--left" />歌手页
          </el-button>
          <el-button round plain type="warning">
            <icon-communication theme="outline" size="18" class="el-icon--left" />发私信
          </el-button>
          <el-button round plain type="danger">
            <icon-plus theme="outline" size="18" class="el-icon--left" />关注
          </el-button>
        </div>
        <div class="birthday">生日：{{timestampToTime(userDetail.profile.birthday,"年月日")}}</div>
        <div class="createDays">村龄：{{createDayFilter(userDetail.createDays)}}</div>
        <div class="city">所在地区：{{cityFilter(userDetail.profile.province)}}</div>
        <div class="signature">个人简介：{{userDetail.profile.signature}}</div>
        <div class="signature">累计听歌：{{userDetail.listenSongs}}</div>
        <!-- 动态，关注，粉丝 -->
        <div class="followGroup">
          <div class="eventCount">
            <span>{{userDetail.profile.eventCount}}</span>
            <p>动态</p>
          </div>
          <div class="follows">
            <span>{{userDetail.profile.follows}}</span>
            <p>关注</p>
          </div>
          <div class="followeds">
            <span>{{userDetail.profile.followeds}}</span>
            <p>粉丝</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import city from "@/utils/city.js"//城市代码
import { timestampToTime } from "@/utils/timestamp.js"//时间戳转换

defineProps({
  userDetail: {
    type: Object,
    default: () => ({
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
      },//用户详情
    })
  }
})
// 城市代码转换
const cityFilter = (cityCode) => {
  let cityName = "用户已隐藏";
  city.forEach(item => {
    if (Number(item.code) == Number(cityCode) / 10000) {
      cityName = item.name
    }
  });
  return cityName
}
// 村龄转换
const createDayFilter = (day) => {
  return parseInt(day / 365) + '年'
}

</script>

<style lang="less" scoped>
:deep(.el-button+.el-button) {
  margin-left: 0;
}

.nickname {
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2;
  white-space: nowrap;
}

.iconGroup {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

// 等级图标
.level {
  font-size: 12px;
  font-weight: bold;
  padding: 2px;
  color: #d33434;
  border: 2px solid #d33434;
  border-radius: 4px;
  cursor: pointer;
}

.userDetail-info {
  background-repeat: no-repeat;
  background-size: cover;
  // 居中
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start; //左对齐

  .box {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
    // 模糊遮罩
    // background: rgba(255,255,255, 0.26);
    // background: linear-gradient(to bottom, #ffffff00, #00000029);
    background-color: rgb(255 255 255 / 50%);
    backdrop-filter: blur(4px);
    border-radius: 8px;
    margin: 20px;
    // 阴影
    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;


      .avatar {
        width: 160px;
        height: 160px;

        img {
          border-radius: 50%;
          width: 100%;
          object-fit: cover;
        }
      }
    }

    .right {
      max-width: 350px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;

      .city,
      .birthday,
      .createDays,
      .signature {
        font-size: 14px;
      }



      .followGroup {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        // 分割线
        padding-top: 10px;
        border-top: 1px solid #0000004a;

        .eventCount,
        .follows,
        .followeds {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;

          span {
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;

            &:hover {
              text-decoration: underline;
            }
          }

          p {
            font-size: 14px;
          }
        }
      }

      .btnGroup {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
      }
    }

  }
}
</style>