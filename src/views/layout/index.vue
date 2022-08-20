<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="layout.collapse ? '64px' : '240px'">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <el-scrollbar>
            <router-view v-slot="{ Component }">
              <component :is="Component" />
            </router-view>
          </el-scrollbar>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from "@/views/layout/components/header/header.vue"
import Menu from "@/views/layout/components/aside/menu.vue"
import Footer from "@/views/layout/components/footer/footer.vue"
import useStore from '@/pinia';
const { layout } = useStore();
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
}

.el-aside {
  background-color: #F9FAFB;

  @media screen and(max-width:800px) {
    display: none;
  }
}

.el-header {
  height: 56px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color);
  box-sizing: border-box;
  /* 溢出显示滚动 */
  overflow: auto;
}

.el-main {
  background-color: #f4f4f5;
  /* 取消内边距 */
  padding: 0;
}

.el-footer {
  background-color: #ffffff;
  height: 70px;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--el-border-color);
  box-sizing: border-box;
  /* 取消内边距 */
  padding: 0;
}
</style>