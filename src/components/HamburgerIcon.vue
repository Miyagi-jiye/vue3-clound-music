<template>
  <div>
    <icon-hamburger-button class="hamburgerIcon" theme="outline" :size="iconSize" :strokeWidth="2"
      @click="drawer = true" />
    <!-- 弹出框 -->

    <el-drawer v-model="drawer" direction="rtl" :size="size" :with-header="false">
      <!-- 头部插槽 -->
      <el-scrollbar>
        <slot name="header">
          <div class="header">
            <div class="title">导航菜单</div>
            <icon-close theme="outline" size="20" title="关闭" class="close" @click="drawer = false" />
          </div>
        </slot>
        <!-- 默认插槽 -->
        <slot name="default">
          <div class="content">
            <!-- 菜单 -->
            <Menu />
          </div>
        </slot>
      </el-scrollbar>
    </el-drawer>

  </div>
</template>

<script setup>
import { ref } from "vue"
import Menu from "@/views/layout/components/aside/menu.vue"

defineProps({
  myData: {
    type: Array,
    default: () => []
  },
  // 弹出框大小
  size: {
    type: String,
    default: () => "50%"
  },
  // 图标显示大小
  iconSize: {
    type: String,
    default: () => '28'
  },
})
// 弹框显示
let drawer = ref(false)
</script>

<style lang="less" scoped>
// 汉堡按钮
.hamburgerIcon {
  cursor: pointer;

  &:hover {
    color: #34d399;
  }
}

// 去除默认内边距
:deep(.el-drawer__body) {
  padding: 0;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  top: 0;
  background-color: white;
  // border-bottom: 1px solid black;

  .title {
    font-weight: bold;
  }

  .close {
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      color: #d33434;
      transform: rotate(90deg);
    }
  }
}


.content {
  width: 100%;
  height: auto;
}
</style>