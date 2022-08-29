<template>
  <div>
    <p>home页</p>
    <HelloWorld msg="父传子" @success="handleSuccess" />
  </div>
</template>

<script setup>
import HelloWorld from '@/components/test/HelloWorld.vue'
// 父组件接收子组件传递的参数
const handleSuccess = (e) => {
  console.log('子组件传过来的值', e)
}
</script>

<style scoped>
</style>