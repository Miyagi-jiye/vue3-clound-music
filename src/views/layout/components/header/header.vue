<template>
  <div style="width:100%">
    <div class="header">
      <div class="left">
        <DirectionIcon />
        <SearchPopover />
      </div>
      <div class="right">
        <LoginDialog />
        <HamburgerIcon iconSize='28' />
      </div>
    </div>
  </div>
</template>

<script setup>
import DirectionIcon from "@/components/DirectionIcon.vue"//前进后退按钮
import LoginDialog from "@/components/LoginDialog.vue"//登录头像组件
import HamburgerIcon from "@/components/HamburgerIcon.vue"//汉堡按钮弹框
import SearchPopover from "@/components/SearchPopover.vue"//搜索组件
</script>

<style lang="less" scoped>
:deep(.el-input__wrapper) {
  border-radius: 20px;
  background-color: #F1F5F9;
}

:deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px #34d399 inset;
}

.header {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  // overflow: hidden;

  .left {
    // min-width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .right {
    // min-width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
}
</style>