<template>
  <div>
    <p>home页</p>
    <ElementPlusTest />
    <HelloWorld msg="父传子" @success="handleSuccess" />
  </div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import ElementPlusTest from "@/components/ElementPlusTest.vue"
// 父组件接收子组件传递的参数
const handleSuccess = (e) => {
  console.log('子组件传过来的值', e)
}
</script>

<style scoped>
</style>