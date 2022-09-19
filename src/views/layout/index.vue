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
        <el-main id="myMain">
          <!-- <el-scrollbar> -->
          <router-view v-slot="{ Component }">
            <Transition name="slide-fade">
              <!-- <KeepAlive> -->
              <component :is="Component" />
              <!-- </KeepAlive> -->
            </Transition>
          </router-view>
          <!-- </el-scrollbar> -->
        </el-main>
        <!-- 回到顶部 -->
        <el-backtop target="#myMain" :bottom="90" :right="20" />
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from "@/views/layout/components/header/header.vue";
import Menu from "@/views/layout/components/aside/menu.vue";
import Footer from "@/views/layout/components/footer/footer.vue";
</script>

<style lang="less" scoped>
/* 下面我们会解释这些 class 是做什么的 */
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.el-container {
  height: 100vh;
  overflow: hidden;
}

.el-aside {
  background-color: #f9fafb;

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
  // overflow: auto;
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
