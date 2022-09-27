import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import NProgress from "nprogress"; //引入nprogress 进度条插件
import "nprogress/nprogress.css"; //引入nprogress 进度条样式文件
import { ElMessage } from "element-plus";
import { useLoginStore } from "@/pinia/module/login.js"

const layout = () => import("@/views/layout/index.vue")
// 定义路由黑名单(需要登陆才能访问的路由)
const blacklist = ['myLike']

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
          type: "query",
          menu: 'playlist',
          keepAlive: true,
        }
      },
      {
        path: 'artistDetail/:id',
        name: 'artistDetail',
        component: () => import("@/views/modules/artistDetail/index.vue"),
        meta: {
          type: "params",
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
          type: "params",
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
          type: "params",
          menu: 'videoDetail',
          keepAlive: true,
        }
      },
      {
        path: 'searchDetail/:id',
        name: 'searchDetail',
        component: () => import("@/views/modules/searchDetail/index.vue"),
        meta: {
          type: "params",
          menu: 'searchDetail',
          keepAlive: true,
        }
      },
      {
        path: 'userDetail',
        name: 'userDetail',
        component: () => import("@/views/modules/userDetail/index.vue"),
        meta: {
          type: "query",
          menu: 'userDetail',
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
        },
      },
      {
        path: 'myLike',
        name: 'myLike',
        component: () => import("@/views/modules/myLike/index.vue"),
        meta: {
          menu: 'myLike',
          keepAlive: true,
        },
      },
      {
        path: 'dailySongs',
        name: 'dailySongs',
        component: () => import("@/views/modules/dailySongs/index.vue"),
        meta: {
          menu: 'dailySongs',
          keepAlive: true,
        },
      },
      {
        path: 'allPlaylist',
        name: 'allPlaylist',
        component: () => import("@/views/modules/allPlaylist/index.vue"),
        meta: {
          menu: 'allPlaylist',
          keepAlive: true,
        }
      },
      {
        path: 'test',
        name: 'test',
        component: () => import("@/views/modules/test/index.vue"),
        meta: {
          menu: 'test',
          keepAlive: true,
        },
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
  routes: routes,
  // 始终滚动到顶部
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

// 页面路由刚开始切换的时候
router.beforeEach((to, from, next) => {
  // // 开启进度条
  // NProgress.start();
  // 判断是否在黑名单中
  if (blacklist.includes(to.name)) {
    // 判断是否登录
    const { isLogin } = useLoginStore()
    if (isLogin) {
      next()
    } else {
      ElMessage.warning('请先进行登录')
      return
    }
  } else {
    next();
  }
});

// 页面路由切换完毕的时候
router.afterEach((to, from, next) => {
  // // 关闭进度条
  // NProgress.done();
});

export default router