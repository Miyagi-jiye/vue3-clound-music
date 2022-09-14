import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/reset.css'// 全局样式重置
import '@/assets/style/root.css'// 全局样式配置

import ElementPlus from 'element-plus'//element-plus组件库
import 'element-plus/dist/index.css'//element-plus组件库样式
import 'element-plus/theme-chalk/dark/css-vars.css'; //element-plus暗黑模式主题样式
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; //element-plus图标

import router from "@/router/index.js"// 路由配置
import { createPinia } from "pinia";//pinia第一步

import { install } from '@icon-park/vue-next/es/all';//引入字节跳动图标库
import '@icon-park/vue-next/styles/index.css';//字节跳动图标库样式

import { useIntersectionObserver } from '@vueuse/core';//引入vueuse中的判断方法:该元素是否在视口中

import VueLazyLoad from 'vue3-lazyload'//图片懒加载加载动画等
import loading from "@/assets/img/loading.gif"
import viteSvg from "@/assets/img/vite.svg"

const app = createApp(App)

const pinia = createPinia();//pinia第二步

install(app);//字节跳动图标库安装到app实例上

// console.log(".env文件", import.meta.env.MODE);//运行环境

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
} //遍历图标组件并挂载
app.use(pinia)
app.use(router)
app.use(ElementPlus)

// 全局自定义指令，图片懒加载，v-img-lazy="{src: '图片地址', placeholder: '占位图地址'}"
app.directive("img-lazy", {
  mounted(el, binding) {
    // 判断el是否在视口中
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      // isIntersecting 是否在视口中,返回布尔值
      if (isIntersecting) {
        el.src = binding.value;
        stop();
      }
      // console.log("图片懒加载触发状态:", isIntersecting, "绑定懒加载图片链接:", binding.value, "绑定元素:", el);
    });
  }
});

app.use(VueLazyLoad, {
  loading: loading,//加载图片
  error: viteSvg,//错误图片
  lifecycle: {
    // 加载中
    // loading: (el) => {
    //   console.log('loading', el)
    // },
    // 加载失败
    error: (el) => {
      console.log('error', el)
    },
    // 加载完毕
    // loaded: (el) => {
    //   console.log('loaded', el)
    // }
  },
  delay: 500//手动延时
})

app.mount('#app')
