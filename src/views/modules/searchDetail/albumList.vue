<template>
  <div class="albumList">
    <div v-for="item in albums" :key="item.id" class="vfor">
      <div class="img-box">
        <img :src="item.picUrl+'?param=60y60'" :alt="'专辑ID='+item.id" class="img">
        <icon-play theme="outline" size="25" :strokeWidth="4" title='播放' class="icon-play"
          @click="routerPush('albumDetail',item.id)" />
      </div>
      <div class="play-box whiteSpace">
        <p class="name whiteSpace" @click="routerPush('albumDetail',item.id)">{{item.name}}</p>
      </div>
      <div class="artists whiteSpace">
        <p v-for="artist in item.artists" :key="artist.id" class="artists-name whiteSpace"
          @click="routerPush('artistDetail',artist.id)">{{artist.name}}</p>
      </div>
      <p class="publishTime whiteSpace">{{timestampToTime(item.publishTime)}}</p>
      <p class="size whiteSpace">{{item.size}}首</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  albums: {
    type: Array,
    default: () => [{
      id: 123456,
      name: "专辑名",
      artist: {},
      artists: [{ id: 123456, name: "歌手" }],
      company: "公司版权",
      picUrl: "图片链接",
      publishTime: 11111111,//发布时间
      size: 3 //歌曲数
    }]
  }
})
const emit = defineEmits(['routerEmit'])
/* 时间戳转换为时间(只保留年月日) */
function timestampToTime(timestamp) {
  timestamp = timestamp ? timestamp : null;
  let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  return Y + M + D
}
// 路由跳转
const routerPush = (name, id) => {
  emit("routerEmit", name, id)
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

// 播放图标
.icon-play {
  cursor: pointer;
  color: #ffffff;
  position: absolute;
  opacity: 0;
  transition: all 0.25s;

  &:hover {
    color: #34d399 !important;
  }
}

.albumList {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .vfor {
    display: flex;
    align-items: center;
    gap: 20px;

    &:hover {
      background-color: var(--my-hover-background-color);
      border-radius: 4px;

      .icon-play {
        opacity: 1;
      }
    }

    .img-box {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;

      .img {
        border-radius: 4px;
        width: 60px;
        height: 60px;
        display: block;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }

    }

    .play-box {
      flex: 3;
      display: flex;
      justify-content: space-between;

      .name {
        &:hover {
          cursor: pointer;
          color: #34d399;
        }
      }
    }

    .artists {
      flex: 3;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;

      &-name:hover {
        cursor: pointer;
        color: #34d399;
      }


    }

    .publishTime {
      flex: 3;
      color: #999;
    }

    .size {
      flex: 1;
      color: #999;
    }
  }
}
</style>