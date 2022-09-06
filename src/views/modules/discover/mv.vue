<template>
  <div class="MV">
    <div class="vfor" v-for="item in myData" :key="item.id">
      <div class="mv">
        <img v-if="item.picUrl" class="img" v-img-lazy="item.picUrl + '?param=200y100'" :alt="'MVID=' + item.id"
          :key="item.id">
        <img v-else-if="item.cover" class="img" v-img-lazy="item.cover + '?param=400y200'" :alt="'MVID=' + item.id">
        <img v-else-if="item.coverUrl" class="img" v-img-lazy="item.coverUrl + '?param=400y200'"
          :alt="'MVID=' + item.vid" :key="item.vid">
        <div class="playCount">
          <icon-play theme="outline" size="12" :strokeWidth="4" title='播放量/播放时长' />
          <p v-if="item.playCount">{{ playCountFilter(item.playCount) }}</p>
          <p v-else-if="item.durationms">{{ formatTime(item.durationms) }}</p>
        </div>
        <icon-play-one v-if="item.id" class="playIcon" theme="filled" size="50" :strokeWidth="4" title='点击播放'
          @click="routerPush('videoDetail', item.id)" />
        <icon-play-one v-else-if="item.vid" class="playIcon" theme="filled" size="50" :strokeWidth="4" title='点击播放'
          @click="routerPush('videoDetail', item.vid)" />
      </div>
      <p v-if="item.name" class="name">{{ item.name }}</p>
      <p v-else-if="item.title" class="name">{{ item.title }}</p>
      <p v-if="item.artistName" class="artistName">{{ item.artistName }}</p>
      <div v-else-if="item.creator[0].userName" class="artistName">
        <p v-for="user in item.creator" :title="user.userId" class="userName">#{{ user.userName }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 过滤播放量
import { playCountFilter } from '@/utils/playCountFilter'
import { useRouter } from "vue-router"

defineProps({
  myData: {
    type: Array,
    default: () => [{
      id: 123456,
      vid: 123466,
      artistName: '默认作者',
      name: '默认歌曲',
      playCount: '默认播放量',
      picUrl: '',
      cover: '',
      coverUrl: '',
      durationms: 123456,//总时长
    }]
  }
})

const router = useRouter()

// 跳转到视频播放页播放mv
const routerPush = (name, id) => {
  router.push({ name: name, params: { id: id } })
}
// 格式化时间
function formatTime(time) {
  // 如果时间 等于0 或者 等于NaN 先显示00：00
  if (time == 0 || window.isNaN(time)) {
    return '00:00'
  }
  let sec = Math.floor(time / 1000 % 60);
  let min = Math.floor(time / 1000 / 60);
  // 返回格式 00：00 不足两位的补零
  return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
}
</script>

<style lang="less" scoped>
.MV {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); //自动分配列宽
  grid-gap: 20px;

  .vfor {

    .mv {
      position: relative;
      overflow: hidden;
      border-radius: var(--my-border-radius);
      transition: all 0.25s;

      &:hover {
        cursor: pointer;
        transform: translateY(-4px);

        .playCount {
          display: none;
        }

        .playIcon {
          opacity: 1; //显示播放图标

          &:hover {
            color: #34d399;
          }
        }
      }

      .img {
        width: 100%;
        height: auto;
        border-radius: var(--my-border-radius);
        transition: all 1s ease;

        &:hover {
          // transform: scale(1.3); //放大
          filter: brightness(0.5); //颜色变暗
        }
      }

      .playCount {
        position: absolute;
        right: 4px;
        bottom: 6px;
        color: #fff;
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 4px;
      }

      .playIcon {
        // 居中
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // 播放图标
        color: #fff;
        opacity: 0; //隐藏播放图标
        transition: all 0.5s ease;
        cursor: pointer;
      }
    }

    .artistName,
    .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .name {
      font-size: 16px;
      margin-top: 6px;
      line-height: 1.5;
    }

    .artistName {
      font-size: 14px;
      margin-top: 4px;
      color: #999;
      line-height: 1.2;
      display: flex;
      gap: 5px;
      flex-wrap: wrap;

      .userName {
        cursor: pointer;

        &:hover {
          color: #34d399;
        }
      }

    }

  }
}
</style>