<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="240px">
        <el-scrollbar>
          <Menu />
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <Transition name="slide-fade">
            <!-- 非活跃的组件将会被缓存！ -->
            <KeepAlive v-if="route.meta.keepAlive">
              <el-scrollbar>
                <router-view v-slot="{ Component }">
                  <component :is="Component" />
                </router-view>
              </el-scrollbar>
            </KeepAlive>
            <!-- 不缓存 -->
            <el-scrollbar v-else>
              <router-view v-slot="{ Component }">
                <component :is="Component" />
              </router-view>
            </el-scrollbar>
          </Transition>
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
import { useRoute } from "vue-router";
const route = useRoute()
</script>

<style lang="less" scoped>
/* 下面我们会解释这些 class 是做什么的 */
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.el-container {
  height: 100vh;
  overflow: hidden;
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