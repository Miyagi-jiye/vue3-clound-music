<template>
  <div class="title">
    <div class="left">
      <p>{{ title }}</p>
      <icon-right theme="outline" size="22" :strokeWidth="2" />
    </div>
    <template v-if="right">
      <div class="right" @click="refresh">
        <p>刷新</p>
        <icon-refresh theme="outline" size="22" :strokeWidth="2" class="refresh" />
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: () => '默认标题'
  },
  right: {
    type: Boolean,
    default: () => false
  }
})
const emit = defineEmits(['emitClick'])
// 点击刷新执行动画
const refresh = () => {
  const refresh = document.querySelector('.refresh')
  refresh.style.animation = 'rotate 1.5s infinite linear'
  setTimeout(() => {
    refresh.style.animation = ''
  }, 1500)
  emit('emitClick')
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  // font-size: 18px;
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  padding: 30px 0;

  .left,
  .right {
    display: flex;
    align-items: center;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    flex-wrap: nowrap;

    p {
      margin-right: 10px;
    }
  }

  .right {
    font-size: 16px;
    cursor: pointer;

    .refresh {
      // &:hover {
      //   animation: rotate 1.5s infinite linear;
      // }

      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>