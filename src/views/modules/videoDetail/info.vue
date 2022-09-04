<template>
  <div class="videoDetail-info">
    <div class="name">{{ videoDetail.name }}</div>
    <div class="row">
      <div class="artists">
        <p class="title">演唱:</p>
        <div v-for="item in videoDetail.artists" class="artists-name" @click="routerPush('artistDetail', item.id)">
          {{ item.name }}</div>
      </div>
      <div class="playCount">{{ playCountFilter(videoDetail.playCount) }}次观看</div>
      <div class="publishTime">发布时间: {{ videoDetail.publishTime }}</div>
    </div>
    <div class="btnGroup">
      <el-button round>
        <icon-like theme="outline" size="16" fill="#ff5b5b" class="el-icon--left" />喜欢
      </el-button>
      <el-button round>
        <icon-star theme="outline" size="16" fill="#ffc107" class="el-icon--left" />收藏 {{ videoDetail.subCount }}
      </el-button>
      <el-button round>
        <icon-download theme="outline" size="16" class="el-icon--left" />下载
      </el-button>
      <el-button round @click="emitClick">
        <icon-comment theme="outline" size="16" class="el-icon--left" />评论 {{
            videoDetail.commentCount
        }}
      </el-button>
      <el-button round>
        <icon-share theme="outline" size="16" class="el-icon--left" />分享 {{ videoDetail.shareCount }}
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { playCountFilter } from '@/utils/playCountFilter'// 过滤播放量

const router = useRouter()
const emit = defineEmits(['emitClick'])
defineProps({
  videoDetail: {
    type: Object,
    default: () => ({
      id: 123456,//mvid
      artistId: 123,//歌手id
      artistName: "歌手名",
      name: "MV名",
      cover: "mv封面",
      playCount: 1234,//播放量
      subCount: 1234,//收藏数
      commentCount: 1234,//评论数
      shareCount: 25,//分享数
      publishTime: "2021-09-03",//发布时间
      brs: [],//清晰度
      artists: [],//演唱歌手
    })
  }
})
// 点击滚到评论区
const emitClick = () => {
  emit("emitClick")
}
// 跳转到歌手详情页
const routerPush = (name, id) => {
  router.push({ name: name, params: { id: id } })
}
</script>

<style lang="less" scoped>
// 修改原样式
:deep(.el-button+.el-button) {
  margin-left: 0 !important;
}

button.el-button.is-round {
  color: black;

  &:hover {
    background-color: #f5f8faa8;
    color: #34d399;
  }
}

.videoDetail-info {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .name {
    font-size: 22px;
    font-weight: bold;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;

    .artists {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;

      .title {
        color: #999;
      }

      &-name {
        color: #404040;
        cursor: pointer;

        &:hover {
          color: #34d399;
        }

      }
    }

    .playCount {
      color: #999;
    }

    .publishTime {
      color: #999;
    }
  }

  .btnGroup {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: row; */
    gap: 20px;
  }
}
</style>