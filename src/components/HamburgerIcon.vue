<template>
  <div>
    <icon-hamburger-button class="hamburgerIcon" theme="outline" :size="iconSize" :strokeWidth="2"
      @click="drawer = true" />
    <!-- 弹出框 -->

    <el-drawer v-model="drawer" direction="ttb" :size="size" :with-header="false">
      <!-- 头部插槽 -->
      <el-scrollbar>
        <slot name="header">
          <div class="header">
            <div class="left">导航菜单</div>
            <div class="right" @click="drawer = false">关闭按钮</div>
          </div>
        </slot>
        <!-- 默认插槽 -->
        <slot name="default">
          <div class="content">
            <div class="left">
              <!-- 菜单 -->
              <div class="menu">
                <div class="cube">方块</div>
                <div class="cube">方块</div>
                <div class="cube">方块</div>
                <div class="cube">方块</div>
                <div class="cube">方块</div>
                <div class="cube">方块</div>
              </div>
            </div>
            <div class="right">
              <!-- 用户详情 -->
              <div class="userInfo"></div>
            </div>
          </div>
        </slot>
      </el-scrollbar>
    </el-drawer>

  </div>
</template>

<script setup>
import { ref } from "vue"
defineProps({
  myData: {
    type: Array,
    default: () => []
  },
  // 弹出框大小
  size: {
    type: Number,
    default: () => 300
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
  border-bottom: 1px solid black
}


.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;

  .left {
    width: 200px;
    height: auto;
    border: 1px solid red
  }

  .right {
    width: 200px;
    height: auto;
    border: 1px solid red
  }
}
</style>