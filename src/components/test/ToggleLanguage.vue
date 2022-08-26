<template>
  <div>
    <el-select v-model="selectValue" placeholder="Select" size="large" @change="selectLanguage">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import useStore from '@/pinia/index.js';
const { App } = useStore();
let selectValue = ref(App.locale);
const options = [
  {
    value: 'zhCn',
    label: '简体中文',
  },
  {
    value: 'en',
    label: 'English',
  },
];
function selectLanguage(val) {
  App.locale = val;
}
</script>