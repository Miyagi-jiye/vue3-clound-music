<template>
  <div>
    <icon-hamburger-button theme="outline" :size="iconSize" :strokeWidth="2" @click="drawer = true" />
    <!-- 弹出框 -->
    <el-drawer v-model="drawer" direction="rtl" :size="size" :with-header="false">
      <!-- 头部插槽 -->
      <slot name="header">
        <div class="title">123</div>
      </slot>
      <!-- 默认插槽 -->
      <slot name="default">
        <div></div>
      </slot>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue"
defineProps({
  myData: {
    type: Array,
    default: () => []
  },
  // 弹出框大小
  size: {
    type: Number,
    default: () => 300
  },
  // 图标显示大小
  iconSize: {
    type: String,
    default: () => '28'
  },
})
// 弹框显示
let drawer = ref(false)
</script>

<style lang="less" scoped>
// 去除默认内边距
:deep(.el-drawer__body) {
  padding: 0;
}
</style>