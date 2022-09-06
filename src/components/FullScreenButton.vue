<template>
  <div>
    <el-tooltip
      effect="dark"
      :content="tooltipContent"
      placement="bottom"
      :enterable="false"
    >
      <div @click="fullScreen" class="icon-hover">
        <icon-off-screen
          theme="outline"
          :size="iconSize"
          v-if="fullScreenState"
        />
        <icon-full-screen theme="outline" :size="iconSize" v-else />
      </div>
    </el-tooltip>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

defineProps({
  iconSize: {
    type: String,
    default: () => "20",
  },
});

// 全屏状态
let fullScreenState = ref(false);
// 全屏方法
const fullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen(); // 退出全屏
    fullScreenState.value = false; // 全屏状态为false
  } else {
    document.documentElement.requestFullscreen(); // 开启全屏
    fullScreenState.value = true; // 全屏状态为true
  }
};
const tooltipContent = computed(() =>
  fullScreenState.value ? "退出全屏" : "点击全屏"
); //用来显示tooltip上的文字
</script>

<style lang="less" scoped>
.icon-hover {
  cursor: pointer;

  &:hover {
    color: #34d399;
  }
}
</style>
