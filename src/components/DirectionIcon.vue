<template>
  <div class="goBack">
    <icon-left theme="outline" size="26" :strokeWidth="2" @click="router.back()" />
    <icon-right theme="outline" size="26" :strokeWidth="2" @click="router.forward()" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
</script>

<style lang="less" scoped>
.goBack {
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    cursor: pointer;

    &:hover {
      color: rgb(52 211 153);
    }
  }
}
</style>