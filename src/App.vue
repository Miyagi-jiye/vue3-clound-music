<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import useStore from '@/pinia/index.js';
const { App } = useStore();
</script>

<template>
  <el-config-provider :locale="App.locale == 'zhCn' ? zhCn : en">
    <router-view></router-view>
  </el-config-provider>
</template>
