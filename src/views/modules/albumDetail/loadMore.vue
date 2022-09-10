<template>
  <div class="loadMore">
    <p @click="loadMore">加载更多</p>
  </div>
</template>

<script setup>
const prop = defineProps({
  limit: {
    type: Number,
    default: () => 20
  },
  offset: {
    type: Number,
    default: () => 1
  }
})

const emit = defineEmits(['emitloadMore'])

let i = prop.offset//分页

const loadMore = () => {
  i++
  emit("emitloadMore", i)
  console.log(i)
}
</script>

<style lang="less" scoped>
.loadMore {
  margin: 20px 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #34d399;
  font-size: 14px;

  p {
    cursor: pointer;

    &:hover {
      color: rgba(8, 88, 59, 0.733);
    }
  }
}
</style>