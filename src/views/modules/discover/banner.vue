<template>
  <div>
    <el-carousel :interval="8000" type="card" height="16vw" :initial-index="1" :loop="true" indicator-position="none">
      <el-carousel-item v-for="item in myData" :key="item.imageUrl">
        <img class="banner" v-img-lazy="item.imageUrl + '?param=1080y400'" :alt="item.typeTitle">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
defineProps({
  myData: {
    type: Array,
    default: () => [{ imageUrl: '' }]
  }
})
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
</style>