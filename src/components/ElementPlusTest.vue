<template>
  <div>
    <el-space wrap direction="horizontal" spacer="|" alignment="center" size="large">
      <!-- 图标 -->
      <el-icon>
        <House />
      </el-icon>
      <el-icon>
        <Female />
      </el-icon>
      <el-icon>
        <Male />
      </el-icon>
      <!-- 链接 -->
      <el-link type="primary">primary</el-link>
      <el-link type="success">success</el-link>
      <el-link type="warning">warning</el-link>
      <el-link type="danger">danger</el-link>
      <el-link type="info">info</el-link>
      <!-- 按钮 -->
      <el-button plain type="primary" @click="btnMessage">按钮</el-button>
      <el-button plain type="success" @click="drawer = true">抽屉</el-button>
      <!-- 分页 -->
      <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
        :small="false" :disabled="false" :background="true" layout="total, sizes, prev, pager, next, jumper"
        :total="400" />

    </el-space>
    <!-- 滚动条 -->
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </div>
    </el-scrollbar>
    <!-- 弹框 -->
    <el-drawer v-model="drawer" title="标题" direction="ltr">
      <span>抽屉弹框</span>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from "element-plus"

const drawer = ref(false)
const currentPage = 1
const pageSize = 100
const btnMessage = () => {
  ElMessage.success('使用插件自动导入注册elementplus组件')
}
</script>

<style scoped>
/* 分页 */
.el-pagination {
  box-shadow: var(--el-box-shadow-lighter);
}

/* 滚动条 */
.scrollbar-flex-content {
  display: flex;
}

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>