<template>
  <div class="songListTag">
    <div class="icon-vip" v-if="mySongData.fee == 1">VIP</div>
    <div class="icon-sq" v-if="mySongData.sq">SQ</div>
    <div class="icon-mv" v-if="mySongData.mv !== 0" @click="routerPush('videoDetail', mySongData.mv)">MV</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

defineProps({
  mySongData: {
    type: Object,
    default: () => (
      {
        fee: 0,//歌曲类型
        sq: {},//音频质量
        mv: 0,//MV ID
      }
    )
  }
})

const router = useRouter()
const routerPush = (name, id) => {
  router.push({ name: name, params: { id: id } })
}

</script>

<style lang="less" scoped>
.songListTag {
  display: flex;
  align-items: center;
  gap: 4px;

  // vip标签
  .icon-vip {
    font-size: 20px;
    padding: 2px;
    color: #34d399;
    border: 2px solid #34d399;
    border-radius: 4px;
    zoom: 0.5;
    cursor: pointer;
  }

  // 高质量音频标签
  .icon-sq {
    font-size: 20px;
    font-weight: bold;
    padding: 2px;
    color: #d37334;
    border: 2px solid #d37334;
    border-radius: 4px;
    zoom: 0.5;
    cursor: pointer;
  }

  // mv标签
  .icon-mv {
    font-size: 20px;
    padding: 2px;
    color: #d33434;
    border: 2px solid #d33434;
    border-radius: 4px;
    zoom: 0.5;
    cursor: pointer;
  }
}
</style>