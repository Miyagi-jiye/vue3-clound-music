<template>
  <div style="line-height: 1.25rem;color:#6B7280" v-if="props.text">
    <template v-if="show">
      <span v-if="!isShow">{{ text.substring(0, end) }}...</span>
      <span v-else>{{ text }}...</span>
      <span class="desc" @click="isShow = !isShow">[{{ isShow ? '收起' : '详情' }}]</span>
    </template>
    <template v-else>{{ text }}</template>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: '默认简介'
  },
  end: {
    type: Number,
    default: 10
  }
})

const show = ref(false)
const isShow = ref(false)

// 如果文本存在且长度大于end，则显示详情按钮
if (props.text && props.text.length > props.end) {
  show.value = true
}

</script>

<style lang="less" scoped>
.desc {
  margin-left: 20px;
  cursor: pointer;
  color: #34d399;

}
</style>
