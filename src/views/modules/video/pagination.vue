<template>
  <div class="pagination">
    <el-pagination v-model:currentPage="myData.offset" v-model:page-size="myData.limit" :page-sizes="[10, 20, 30, 40]"
      :small="small" :background="background" :layout=layout :total="mvTotal" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const prop = defineProps({
  myData: {
    type: Object,
    default: () => ({})
  },
  mvTotal: {
    type: Number,
    default: () => 500
  }
})

const emit = defineEmits(["emitClick"]);

const background = ref(true);
const small = ref(false);
const layout = ref("total,sizes, prev, pager, next, jumper")

// 屏幕宽度变化,改变配置
function resize() {
  if (window.innerWidth <= 800 && window.innerWidth >= 600) {
    small.value = false
    layout.value = "prev, pager, next"
  } else if (window.innerWidth <= 600) {
    small.value = true
    layout.value = "prev, pager, next"
  } else {
    small.value = false
    layout.value = "total,sizes, prev, pager, next, jumper"
  }
}
// 监听屏幕宽度变化
window.onresize = () => {
  resize()
}
// 初始化执行一次
onMounted(() => {
  resize()
})
// 卸载监听屏幕宽度变化事件
onUnmounted(() => {
  window.onresize = null
})
// 每页显示条数
const handleSizeChange = () => {
  emit("emitClick");
};
// 当前页
const handleCurrentChange = () => {
  emit("emitClick");
};
</script>

<style lang="less" scoped>
.el-pagination {
  justify-content: center;
}
</style>
