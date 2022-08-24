import http from "@/axios/index.js";

// 登录接口
export function useLogin(phone, password) {
  return http({
    method: "get",
    url: "/login/cellphone",
    params: { phone: phone, password: password }
  });
}
// 登录状态接口
export function useLoginStatus() {
  return http({
    method: "get",
    url: "/login/status"
  });
}
// 获取轮播图
export function useBanner() {
  return http({
    method: "get",
    url: "/banner"
  });
}
// 获取推荐歌单
export function useRecommend() {
  return http({
    method: "get",
    url: "/personalized"
  });
}
// 获取推荐MV
export function useMv() {
  return http({
    method: "get",
    url: "/personalized/mv"
  });
}
// 获取推荐新音乐
export function useNewSong() {
  return http({
    method: "get",
    url: "/personalized/newsong"
  });
}
// 获取推荐电台
export function useDj() {
  return http({
    method: "get",
    url: "/personalized/djprogram"
  });
}
// 获取歌单详情
export function useSonglistDetail(id) {
  return http({
    method: "get",
    url: "/playlist/detail",
    params: { id: id }
  });
}
// 获取歌单动态
export function useSonglistDynamic(id) {
  return http({
    method: "get",
    url: "/playlist/detail/dynamic",
    params: { id: id }
  });
}
// 获取歌单评论
export function useSonglistComment(id) {
  return http({
    method: "get",
    url: "/comment/playlist",
    params: { id: id }
  });
}
// 获取音乐 url
export function useMusicUrl(id) {
  return http({
    method: "get",
    url: "/song/url",
    params: { id: id, br: 320000 }
  });
}