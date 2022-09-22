<template>
  <div class="discover-banner" v-if="myData">
    <Swiper slides-per-group-auto slides-per-view="auto" :navigation="true" :grab-cursor="true">
      <SwiperSlide v-for="(item,index) in myData" :key="index">
        <img v-if="item.imageUrl" v-img-lazy="item.imageUrl + '?param=1080y400'" :alt="item.typeTitle + item.targetId"
          class="banner-image" />
        <img v-else-if="item.pic" v-img-lazy="item.pic + '?param=1080y400'" :alt="item.typeTitle + item.targetId"
          class="banner-image" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"; // 引入Swiper组件
import "swiper/css"; // 引入Swiper样式

defineProps({
  myData: {
    type: Array,
    // default: () => [{ imageUrl: "", pic: "" }],
  },
});
</script>

<style lang="less" scoped>
.banner-image {
  cursor: pointer;
  border-radius: var(--my-border-radius);
  object-fit: cover;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 100%;
  height: auto;
}

.swiper {
  margin: 0 -10px; //减去外边距

  .swiper-slide {

    // 屏幕宽度小于800px时，每行显示1个
    @media (min-width: 800px) {
      width: 50%;
      padding: 0 10px; //内边距
      box-sizing: border-box;
    }
  }
}
</style>
