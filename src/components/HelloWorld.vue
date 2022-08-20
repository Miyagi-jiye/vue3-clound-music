<script setup>
// 子组件接收父组件传递的参数
defineProps({
  msg: String
})
//子组件传递参数给父组件
const emit = defineEmits(["success"]);
const testBtn = () => {
  emit("success", 5)
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <button type="button" @click="testBtn">子传父</button>
  </div>
</template>