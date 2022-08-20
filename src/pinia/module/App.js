import { defineStore } from "pinia";

const useAppStore = defineStore("App", {
  state: () => ({
    locale: 'zhCn',
  }),
  getters: {},
  actions: {},
})

// 导出并重命名
export default useAppStore