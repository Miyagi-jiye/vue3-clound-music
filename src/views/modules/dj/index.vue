<template>
  <div class="dj">
    <p class="title">推荐电台</p>
    <Banner :myData="djBanner" />
    <p class="title">推荐电台</p>
    <Mv :myData="djRecommend" />
    <p class="title">猜你喜欢</p>
    <Recommend :myData="djPersonalizeRecommend" />
    <p class="title">热门电台</p>
    <Mv :myData="djPersonalizeRecommend" />
  </div>
</template>

<script setup>
import Recommend from '@/views/modules/discover/recommend.vue'
import Mv from "@/views/modules/discover/mv.vue"
import Banner from "@/views/modules/discover/banner.vue";
import { useDjStore } from "@/pinia/module/dj.js";
import { useLoginStore } from "@/pinia/module/login.js";
import { storeToRefs } from "pinia";

const { getID } = storeToRefs(useLoginStore());
const { get_djBanner, get_djPersonalizeRecommend, get_djRecommend } = useDjStore();
const { djBanner, djPersonalizeRecommend, djRecommend } = storeToRefs(useDjStore());


const init = () => {
  get_djBanner();
  get_djPersonalizeRecommend();
  get_djRecommend()
}

init()
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
