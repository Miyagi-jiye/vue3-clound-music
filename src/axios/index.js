import axios from "axios";
import NProgress from "nprogress"; //引入nprogress 进度条插件
import "nprogress/nprogress.css"; //引入nprogress 进度条样式文件

if (import.meta.env.MODE == "development") {
  axios.defaults.baseURL = '/api';//代理环境
} else if (import.meta.env.MODE == 'production') {
  axios.defaults.baseURL = 'http://guowei.fun:3000/api';//生产环境
}
// axios.defaults.withCredentials = true;

const http = axios.create({
  withCredentials: true,// Cookie跨域请求时是否需要使用凭证
  // baseURL: '/api', 
});

// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    // 开启进度条
    NProgress.start();
    // 添加 token 验证的 Authorization 字段
    // 如果token存在
    // if (token) {
    // config.headers['token'] = loginData.value.token
    // config.headers.common['token'] = loginData.value.token
    // config.headers.accessToken = loginData.value.token
    // }
    // console.log("请求拦截器触发：", config);
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // console.log("请求错误", error);
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 关闭进度条
    NProgress.done();
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // console.log("响应拦截器触发：", response);
    return response;
  },
  function (error) {
    // 关闭进度条
    NProgress.done();
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // console.log("响应错误", error);
    return Promise.reject(error);
  }
);

export default http;