<template>
  <div class="title">
    <p>{{ title }}</p>
    <icon-right theme="outline" size="22" :strokeWidth="2" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: () => '默认标题'
  }
})
</script>

<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  // font-size: 18px;
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  padding: 30px 0;
}
</style>