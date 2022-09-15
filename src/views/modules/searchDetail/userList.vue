<template>
  <div class="userList">
    <div v-for="item in userprofiles" class="vfor">
      <div class="img-box">
        <img :src="item.avatarUrl+'?param=100y100'" :alt="'用户ID='+item.userId" class="img">
        <img v-if="item.avatarDetail" :src="item.avatarDetail.identityIconUrl+'?param=10y10'" alt="音乐人图标"
          class="img-icon">
      </div>
      <p class="nickname whiteSpace" @click="routerPush('userDetail',item.userId)">
        {{item.nickname}}
        <icon-vip-one v-if="item.vipType !== 0" theme="outline" size="20" fill="#34d399" style="margin:0 8px;" />
      </p>
      <p class="gender whiteSpace">
        {{filterGender(item.gender)}}
        <icon-male v-if="item.gender==1" theme="outline" size="20" fill="#5e87d6" />
        <icon-female v-else-if="item.gender==2" theme="outline" size="20" fill="#d65ea1" />
      </p>
      <div class="followeds whiteSpace">粉丝：{{filterFollow(item.followeds)}}</div>
      <el-button round size="small" class="follow">+ 关注</el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

defineProps({
  userprofiles: {
    type: Array,
    default: () => [{
      avatarUrl: "用户头像",
      backgroundUrl: "背景图片",
      gender: 0,//0:保密 1:男性 2:女性
      city: 12456,//城市代码
      province: 123456,//省份代码
      nickname: "用户名",
      signature: "个人签名",
      vipType: 12,//vip类型
      userType: 123,//用户类型
      userId: 123456,//用户id
      avatarDetail: { identityIconUrl: '音乐人icon' },
      followeds: 123456,//粉丝数
    }]
  }
})
// 过滤性别
function filterGender(number) {
  if (number == 1) {
    return "男"
  }
  if (number == 2) {
    return "女"
  }
  if (number == 0) {
    return "未知"
  }
}
// 过滤粉丝数
function filterFollow(number) {
  if (number >= 10000) {
    return (number / 10000).toFixed(1) + '万'
  } else {
    return number
  }
}
// 跳转到用户详情页
const routerPush = (name, id) => {
  router.push({ name: name, query: { id: id } })
}
</script>

<style lang="less" scoped>
// 溢出不换行省略号
.whiteSpace {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.userList {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .vfor {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;

    &:hover {
      background-color: var(--my-hover-background-color);
      border-radius: 4px;
    }

    .img-box {
      width: 50px;
      height: 50px;
      position: relative;

      .img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        box-shadow: 0 6px 8px -2px rgb(0 0 0 / 16%);
      }

      .img-icon {
        width: 15px;
        height: 15px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }


    .nickname {
      flex: 2;
      display: flex;
      align-items: center;
      white-space: nowrap;

      &:hover {
        cursor: pointer;
        color: #34d399;
      }
    }

    .gender {
      flex: 1;
      color: #999;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .followeds {
      flex: 2;
      color: #999;
    }

    .follow {
      color: #000;
      // background-color: rgba(184, 181, 181, 0.733);
    }
  }
}
</style>