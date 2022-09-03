<template>
  <div class="artistDetail-album">
    <div v-for="item in artistAlbum" :key="item.id" class="vfor">
      <div class="top">
        <img class="img" v-img-lazy="item.picUrl + '?param=300y300'" :alt="'专辑ID=' + item.id"
          @click="toPlaylist(item.id)" />
        <icon-play-one class="playIcon" theme="filled" size="50" :strokeWidth="4" title='点击播放'
          @click="playMusic(item.id)" />
      </div>
      <div class="bottom">
        <p class="name">{{ item.name }}</p>
        <p class="publishTime">{{ timestampToTime(item.publishTime) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  artistAlbum: {
    type: Array,
    default: () => [{ id: 123456, name: "专辑名", picUrl: "", publishTime: 123456 }]
  }
})
const emit = defineEmits(['routerEmit', 'clickEmit'])
/* 时间戳转换为时间 */
function timestampToTime(timestamp) {
  timestamp = timestamp ? timestamp : null;
  let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  // 下面不需要
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + M + D;
}
// 跳转到专辑详情页
const toPlaylist = (id) => {
  emit("routerEmit", id)
}
// 获取歌单所有歌曲
const playMusic = (id) => {
  emit("clickEmit", id)
}
</script>

<style lang="less" scoped>
.artistDetail-album {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;

  .vfor {
    width: 100%;
    height: auto;

    .top {
      height: auto;
      width: 100%;
      overflow: hidden;
      border-radius: var(--my-border-radius);
      position: relative;
      transition: all 0.3s ease;
      cursor: pointer;

      .img {
        max-width: 100%;
        height: auto;
        border-radius: var(--my-border-radius);
        transition: all 0.3s ease;
      }

      &:hover {
        transform: translateY(-4px);

        .img {
          filter: brightness(0.5);
        }

        .playIcon {
          opacity: 1; //显示播放图标

          &:hover {
            color: #34d399;
            zoom: 120%;
          }
        }
      }

      .playIcon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        transition: all .3s ease;
        opacity: 0; // 默认隐藏
      }
    }

    .bottom {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-top: 10px;
      font-size: 14px;

      .name {
        font-weight: bold;
      }

      .publishTime {
        color: #6b7280;
      }
    }
  }


}
</style>