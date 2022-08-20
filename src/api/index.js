import http from "@/axios/index.js";

// 登录接口
export async function useLogin(phone, password) {
  return await http({
    method: "get",
    url: "/login/cellphone",
    params: { phone: phone, password: password }
  });
}
// 登录状态接口
export async function useLoginStatus() {
  return await http({
    method: "get",
    url: "/login/status"
  });
}
// 获取轮播图
export async function useBanner() {
  return await http({
    method: "get",
    url: "/banner"
  });
}
// 获取推荐歌单
export async function useRecommend() {
  return await http({
    method: "get",
    url: "/personalized"
  });
}
// 获取推荐MV
export async function useMv() {
  return await http({
    method: "get",
    url: "/personalized/mv"
  });
}
// 获取推荐新音乐
export async function useNewSong() {
  return await http({
    method: "get",
    url: "/personalized/newsong"
  });
}
// 获取推荐电台
export async function useDj() {
  return await http({
    method: "get",
    url: "/personalized/djprogram"
  });
}