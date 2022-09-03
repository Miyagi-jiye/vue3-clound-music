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
// 获取游客cookie
export function useRegisterAnonimous() {
  return http({
    method: "get",
    url: "/register/anonimous",
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
// 获取歌曲详情
export function useSongDetail(id) {
  return http({
    method: "get",
    url: "/song/detail",
    params: { ids: id }
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
// 获取热搜列表(简略)
export function useSearchHot() {
  return http({
    method: "get",
    url: "/search/hot"
  });
}
// 获取热搜列表(详细)
export function useSearchHotDetail() {
  return http({
    method: "get",
    url: "/search/hot/detail"
  });
}
// 获取默认搜索关键词
export function useSearchDefault() {
  return http({
    method: "get",
    url: "/search/default",
  });
}
// 搜索
export function useSearch(keywords) {
  return http({
    method: "get",
    url: "/search",
    params: { keywords: keywords }
  });
}
// 获取搜索建议
export function useSearchSuggest(keywords) {
  return http({
    method: "get",
    url: "/search/suggest",
    params: { keywords: keywords }
  });
}
// 搜索多重匹配
export function useSearchMultimatch(keywords) {
  return http({
    method: "get",
    url: "/search/multimatch",
    params: { keywords: keywords }
  });
}
// 获取歌词
export function useLyric(id) {
  return http({
    method: "get",
    url: "/lyric",
    params: { id: id }
  });
}
// 获取所有榜单
export function useToplist() {
  return http({
    method: "get",
    url: "/toplist",
  });
}
// 获取所有榜单内容摘要
export function useToplistDetail() {
  return http({
    method: "get",
    url: "/toplist/detail",
  });
}
// 获取歌手榜
export function useToplistArtist() {
  return http({
    method: "get",
    url: "/toplist/artist",
  });
}
// 获取歌手分类列表,
// type: -1:全部 1:男歌手 2:女歌手 3:乐队
// area: -1:全部 7华语 96欧美 8:日本 16韩国 0:其他
// initial: 按字母排列,-1：热门,0：#
export function useArtistList(type, area, initial) {
  return http({
    method: "get",
    url: "/artist/list",
    params: { type: type || -1, area: area || -1, initial: initial || -1 }
  });
}
// 获取歌手详情
export function useArtistDetail(id) {
  return http({
    method: "get",
    url: "/artist/detail",
    params: { id: id }
  });
}
// 获取歌手热门单曲
export function useArtists(id) {
  return http({
    method: "get",
    url: "/artists",
    params: { id: id }
  });
}
// 获取歌手 mv
export function useArtistMV(id) {
  return http({
    method: "get",
    url: "/artist/mv",
    params: { id: id }
  });
}
// 获取歌手专辑
export function useArtistAlbum(id) {
  return http({
    method: "get",
    url: "/artist/album",
    params: { id: id }
  });
}
// 获取歌手描述
export function useArtistDesc(id) {
  return http({
    method: "get",
    url: "/artist/desc",
    params: { id: id }
  });
}
// 获取相似歌手
export function useSimiArtist(id) {
  return http({
    method: "get",
    url: "/simi/artist",
    params: { id: id }
  });
}
// 获取相似歌单
// 相似 mv
// 获取相似音乐
// 获取专辑评论,limit默认20
export function useCommentAlbum(id) {
  return http({
    method: "get",
    url: "/comment/album",
    params: { id: id }
  });
}
// 获取专辑内容
export function useAlbum(id) {
  return http({
    method: "get",
    url: "/album",
    params: { id: id }
  });
}