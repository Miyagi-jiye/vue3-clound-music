import { defineStore } from "pinia";

const useLayoutStore = defineStore("layout", {
  state: () => ({
    collapse: false,
  }),
  getters: {},
  actions: {},
})

// 导出并重命名
export default useLayoutStore