// 模块化统一导入
import useLayoutStore from '@/pinia/module/layout.js'// 布局
import useLoginStore from '@/pinia/module/login.js'// 登录
import useAppStore from '@/pinia/module/App.js'// 语言国际化
import useDiscoverStore from '@/pinia/module/discover.js'// 推荐

// 自定义一个统一导出的方法:useStore()
export default function useStore() {
  return {
    layout: useLayoutStore(),
    login: useLoginStore(),
    App: useAppStore(),
    discover: useDiscoverStore(),
  }
}