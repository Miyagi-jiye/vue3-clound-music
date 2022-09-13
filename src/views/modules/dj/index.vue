<template>
  <div class="dj">
    <p class="title">推荐电台</p>
    <Banner :myData="djBanner" />
    <p class="title">猜你喜欢</p>
    <!-- <Mv :myData="djPersonalizeRecommend" /> -->
  </div>
</template>

<script setup>
import Mv from "@/views/modules/discover/mv.vue"
import Banner from "@/views/modules/discover/banner.vue";
import { useDjStore } from "@/pinia/module/dj.js";
import { storeToRefs } from "pinia";
const { get_djBanner, get_djPersonalizeRecommend } = useDjStore();
const { djBanner, djPersonalizeRecommend } = storeToRefs(useDjStore());
get_djBanner();
get_djPersonalizeRecommend()
</script>

<style lang="less" scoped>
.dj {
  padding: 0 20px 20px 20px;
  background-color: #fff;
  min-height: 100vh;

  .title {
    font-size: 30px;
    font-weight: bold;
    width: 100%;
    padding: 20px 0;
  }
}
</style>
