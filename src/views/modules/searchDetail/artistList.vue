<template>
  <div class="artistlist">
    <div class="bottom">
      <div class="artistList" v-for="item in artists" @click="routerPush('artistDetail',item.id)" :key="item.id">
        <img class="img" v-lazy="item.picUrl + '?param=300y300'" :alt="'歌手ID=' + item.id" :key="item.id">
        <p class="name">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  artists: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['routerEmit'])
// 前往歌手详情页,传递歌手id参数
function routerPush(name, id) {
  emit("routerEmit", name, id)
}
</script>

<style lang="less" scoped>
.artistlist {
  .bottom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;

    .artistList {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        cursor: pointer;
      }

      .name {
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          color: #34d399;
        }
      }
    }
  }
}
</style>