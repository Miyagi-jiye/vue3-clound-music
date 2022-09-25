<template>
  <div class="title">
    <div class="left">
      <p>{{ title }}</p>
      <icon-right theme="outline" size="22" :strokeWidth="2" />
    </div>
    <template v-if="showRight">
      <div class="right" @click="rightClick">
        <p :style="{'font-size':right.size+'px'}">{{right.text}}</p>
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
    type: Object,
    default: () => ({
      text: '查看全部',
      size: 16,
    })
  },
  showRight: {
    type: Boolean,
    default: () => false
  }
})

const emit = defineEmits(['rightClick'])

const rightClick = () => {
  console.log('点击了查看全部')
  emit('rightClick')
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
  }

  .left {
    user-select: none;
  }

  .right {
    font-size: 16px;
    cursor: pointer;

    p {
      margin-right: 10px;
      font-weight: 600;
      opacity: .68;

      &:hover {
        text-decoration: underline;
      }
    }

    .refresh {
      // &:hover {
      //   animation: rotate 1.5s infinite linear;// 旋转动画 1.5s 无限循环 线性
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