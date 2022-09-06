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
        path: 'discover',
        name: 'discover',
        component: () => import("@/views/modules/discover/index.vue"),
        meta: {
          menu: 'discover',
          keepAlive: true,
        }
      },
      {
        path: 'playlist',
        name: 'playlist',
        component: () => import("@/views/modules/playlist/index.vue"),
        meta: {
          menu: 'playlist',
          keepAlive: true,
        }
      },
      {
        path: 'artistDetail/:id',
        name: 'artistDetail',
        component: () => import("@/views/modules/artistDetail/index.vue"),
        meta: {
          menu: 'artistDetail',
          keepAlive: true,
        },
        // props: true
      },
      {
        path: 'albumDetail/:id',
        name: 'albumDetail',
        component: () => import("@/views/modules/albumDetail/index.vue"),
        meta: {
          menu: 'albumDetail',
          keepAlive: true,
        },
        // props: true
      },
      {
        path: 'videoDetail/:id',
        name: 'videoDetail',
        component: () => import("@/views/modules/videoDetail/index.vue"),
        meta: {
          menu: 'videoDetail',
          keepAlive: true,
        }
      },
      {
        path: 'searchDetail/:id',
        name: 'searchDetail',
        component: () => import("@/views/modules/searchDetail/index.vue"),
        meta: {
          menu: 'searchDetail',
          keepAlive: true,
        }
      },
      {
        path: 'video',
        name: 'video',
        component: () => import("@/views/modules/video/index.vue"),
        meta: {
          menu: 'video',
          keepAlive: true,
        }
      },
      {
        path: 'music',
        name: 'music',
        component: () => import("@/views/modules/music/index.vue"),
        meta: {
          menu: 'music',
          keepAlive: true,
        }
      },
      {
        path: 'dj',
        name: 'dj',
        component: () => import("@/views/modules/dj/index.vue"),
        meta: {
          menu: 'dj',
          keepAlive: true,
        }
      }
    ]
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
  // // 开启进度条
  // NProgress.start();
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
  // // 关闭进度条
  // NProgress.done();
});

export default router