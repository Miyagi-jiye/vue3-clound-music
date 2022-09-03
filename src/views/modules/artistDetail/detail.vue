<template>
  <div class="artistDetail-detail">
    <p class="profile">个人简介</p>
    <div class="briefDesc">{{ artistDesc.briefDesc }}</div>
    <div v-for="item in artistDesc.introduction" class="introduction">
      <div class="title">{{ item.ti }}</div>
      <div v-for="str in item.txt.split(/\n/)" class="content">{{ str }}</div>
    </div>
  </div>
</template>

<script setup>
const prop = defineProps({
  artistDesc: {
    type: Object,
    default: () => ({ briefDesc: '个人简介', introduction: [{ ti: "标题", txt: "内容" }], topicData: [] })
  }
})


</script>

<style lang="less" scoped>
.artistDetail-detail {
  .profile {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .briefDesc {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
    color: #676767;
  }

  .introduction {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;

    .title {
      font-size: 16px;
      font-weight: bold;
    }

    .content {
      font-size: 14px;
      line-height: 1.5;
      color: #676767;
    }
  }
}
</style>