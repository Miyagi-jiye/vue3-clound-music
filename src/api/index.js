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
/*______________________________________首页推荐__________________________________________*/
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
/*______________________________________歌单__________________________________________*/
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
// 可选参数 : 
// limit: 取出评论数量 , 默认为 20
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
// before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
export function useSonglistComment(id, obj) {
  return http({
    method: "get",
    url: "/comment/playlist",
    params: {
      id: id,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit,
    }
  });
}
/*______________________________________歌曲__________________________________________*/
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
// 获取歌词
export function useLyric(id) {
  return http({
    method: "get",
    url: "/lyric",
    params: { id: id }
  });
}
/*______________________________________搜索__________________________________________*/
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
// 搜索(更全)
// 可选参数 : 
// limit : 返回数量 , 默认为 30 
// offset : 偏移数量，用于分页 ,  如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
export function useCloudSearch(obj) {
  return http({
    method: "get",
    url: "/cloudsearch",
    params: {
      keywords: obj.keywords,
      type: obj.type,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit,
    }
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
/*______________________________________排行榜__________________________________________*/
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
/*______________________________________歌手__________________________________________*/
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
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
export function useArtistList(obj) {
  return http({
    method: "get",
    url: "/artist/list",
    params: {
      type: obj.type,
      area: obj.area,
      initial: obj.initial,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit,
    }
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
/*______________________________________相似__________________________________________*/
// 获取相似歌手
export function useSimiArtist(id) {
  return http({
    method: "get",
    url: "/simi/artist",
    params: { id: id }
  });
}
// 获取相似歌单
export function useSimiPlaylist(id) {
  return http({
    method: "get",
    url: "/simi/playlist",
    params: { id: id }
  });
}
// 获取相似 mv
export function useSimiMv(mvid) {
  return http({
    method: "get",
    url: "/simi/mv",
    params: { mvid: mvid }
  });
}
// 获取相似音乐
export function useSimiSong(id) {
  return http({
    method: "get",
    url: "/simi/song",
    params: { id: id }
  });
}
/*______________________________________专辑__________________________________________*/
// 获取专辑评论
// 必选参数 : id: 专辑 id
// 可选参数 : 
// limit: 取出评论数量 , 默认为 20
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
// before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
export function useCommentAlbum(id, obj) {
  return http({
    method: "get",
    url: "/comment/album",
    params: {
      id: id,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit,
    }
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
/*______________________________________MV__________________________________________*/
// 获取 mv 数据
export function useMvDetail(mvid) {
  return http({
    method: "get",
    url: "/mv/detail",
    params: { mvid: mvid }
  });
}
// 获取 mv 播放地址
// 可选参数 : 
// r: 分辨率
export function useMvUrl(id) {
  return http({
    method: "get",
    url: "/mv/url",
    params: { id: id }
  });
}
// 获取 mv 评论
// 可选参数 : 
// limit: 取出评论数量 , 默认为 20,最多一页100条
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
// before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
export function useCommentMv(obj) {
  return http({
    method: "get",
    url: "/comment/mv",
    params: {
      id: obj.id,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit,
    }
  });
}
// 获取全部 mv
// 可选参数 :
// area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 
// type: 类型,可选值为全部,官方版,原声,现场版,网易出品,不填则为全部
// order: 排序,可选值为上升最快,最热,最新,不填则为上升最快
// limit: 取出数量 , 默认为 30
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
export function useMvAll(obj) {
  return http({
    method: "get",
    url: "/mv/all",
    params: {
      area: obj.area,
      type: obj.type,
      order: obj.order,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit
    }
  });
}
// 获取最新 mv
// 可选参数 : 
// area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部
// limit: 取出数量 , 默认为 30
export function useMvFirst(area = "全部") {
  return http({
    method: "get",
    url: "/mv/first",
    params: { area: area }
  });
}
// 获取 mv 排行
// 可选参数 : 
// limit: 取出数量 , 默认为 30
// area: 地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
export function useTopMv() {
  return http({
    method: "get",
    url: "/top/mv",
  });
}
// 获取 mv 点赞转发评论数数据
export function useMvDetailInfo(mvid) {
  return http({
    method: "get",
    url: "/mv/detail/info",
    params: { mvid: mvid }
  });
}
// 获取网易出品 mv
// 可选参数 : 
// limit: 取出数量 , 默认为 30
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
export function useMvExclusiveRcmd() {
  return http({
    method: "get",
    url: "/mv/exclusive/rcmd",
  });
}
/*______________________________________视频__________________________________________*/
// 获取视频标签列表
export function useVideoGroupList() {
  return http({
    method: "get",
    url: "/video/group/list",
  });
}
// 获取视频分类列表(系统错误302)
export function useVideoCategoryList() {
  return http({
    method: "get",
    url: "/video/category/list",
  });
}
// 获取视频标签/分类下的视频
// 必选参数 : id: videoGroup 的 id
export function useVideoGroup(id) {
  return http({
    method: "get",
    url: "/video/group",
    params: { id: id }
  });
}
// 获取全部视频列表
export function useVideoTimelineAll() {
  return http({
    method: "get",
    url: "/video/timeline/all",
  });
}
// 相关视频
export function useRelatedAllvideo(id) {
  return http({
    method: "get",
    url: "/related/allvideo",
    params: { id: id }
  });
}
// 视频详情
export function useVideoDetail(id) {
  return http({
    method: "get",
    url: "/video/detail",
    params: { id: id }
  });
}
// 获取视频点赞转发评论数数据
export function useVideoDetailInfo(vid) {
  return http({
    method: "get",
    url: "/video/detail/info",
    params: { vid: vid }
  });
}
// 获取视频播放地址
export function useVideoUrl(id) {
  return http({
    method: "get",
    url: "/video/url",
    params: { id: id }
  });
}
// 获取视频评论
// 可选参数 : 
// limit: 取出评论数量 , 默认为 20
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
// before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
export function useCommentVideo(obj) {
  return http({
    method: "get",
    url: "/comment/video",
    params: {
      id: obj.id,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit,
    }
  });
}
/*______________________________________电台__________________________________________*/
// 电台 banner
export function useDjBanner() {
  return http({
    method: "get",
    url: "/dj/banner",
  });
}
// 电台个性推荐
export function useDjPersonalizeRecommend() {
  return http({
    method: "get",
    url: "/dj/personalize/recommend",
  });
}
// 推荐电台
export function usePersonalizedDjprogram() {
  return http({
    method: "get",
    url: "/personalized/djprogram",
  });
}
// 推荐节目
export function useProgramRecommend() {
  return http({
    method: "get",
    url: "/program/recommend",
  });
}
// 热门电台
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
export function useDjHot() {
  return http({
    method: "get",
    url: "/dj/hot",
  });
}