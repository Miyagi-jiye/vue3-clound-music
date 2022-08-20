import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import NProgress from "nprogress"; //引入nprogress 进度条插件
import "nprogress/nprogress.css"; //引入nprogress 进度条样式文件

const layout = () => import("@/views/layout/index.vue")
// 路由配置
const routes = [
  {
    path: "/",
    name: 'layout',
    component: layout,
    redirect: "/discover",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/modules/home/index.vue")
      },
      {
        path: 'discover',
        name: 'discover',
        component: () => import("@/views/modules/discover/index.vue"),
        meta: {
          menu: 'discover',
          keepAlive: true,
        }
      },
    ]
  },
  // 登录页面
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/global/login.vue"),
  },
  // 404页面
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/global/404.vue"),
  },
]

// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

// 页面路由刚开始切换的时候
router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start();
  // 登录页直接放行
  if (to.path === "/login") return next();
  // // 获取token
  // const TOKEN = window.sessionStorage.getItem("token");
  // // 没有token就跳转到登录页
  // if (!TOKEN) return next("/login");
  // // 有token就放行
  next();
});

// 页面路由切换完毕的时候
router.afterEach(() => {
  // 关闭进度条
  NProgress.done();
});

export default router