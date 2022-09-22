<template>
  <div class="loadMore">
    <p>加载更多</p>
  </div>
</template>

<script setup>

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