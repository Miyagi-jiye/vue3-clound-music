import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'//自动导入插件
// import Components from 'unplugin-vue-components/vite'//自动注册组件插件
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'// 自动注册组件的解析器

// https://vitejs.dev/config/
export default defineConfig({
  //本地运行时的路径
  base: "./",
  // 插件
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
  // 路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  // 代理服务器
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
})
