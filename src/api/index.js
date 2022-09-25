import http from "@/axios/index.js";
// let cookie = "NMTID=00O2zdMzw3ro2vamEYruQj_KNE_T_wAAAGDRp9Odw"
// const cookie = "MUSIC_U=0eebe54dffcc5593e42fb58092670c612c3ebb7c08b31fe934909f3d1842087b519e07624a9f005371501b74f8cc7569ff0179c5ff5fe40811d460498fba833256458de2dffffeb17a561ba977ae766d; __remember_me=true; __csrf=bb8a8ca4d3daea80583b250f49a6c4bf; NMTID=00Ouj5ZYuCPBozm7kQRiebN3D2MgE0AAAGDVozZag"

/*______________________________________登录__________________________________________*/
// 登录接口
export function useLogin(obj) {
  return http({
    method: "post",
    url: "/login/cellphone",
    data: {
      // cookie: cookie,//跨域的时候需要cookie
      phone: obj.phone,
      password: obj.password,
    },
    // params: {
    //   phone: obj.phone,
    //   password: obj.password,
    // }
  });
}
// 退出登录
export function useLogout() {
  return http({
    method: "get",
    url: "/logout"
  });
}
// 登录状态
export function useLoginStatus() {
  return http({
    method: "get",
    url: "/login/status",
    timestamp: Date.now() //防止缓存
  });
}
// 刷新登录
export function useLoginRefresh() {
  return http({
    method: "get",
    url: "/login/refresh"
  });
}
// 获取游客cookie
export function useRegisterAnonimous() {
  return http({
    method: "get",
    url: "/register/anonimous",
  });
}
// 1. 二维码 key 生成接口
export function useLoginQrKey() {
  return http({
    method: "get",
    url: "/login/qr/key",
    params: {
      timestamp: Date.now() //防止缓存
    }
  });
}
// 2. 二维码生成接口
// 必选参数: key,由第一个接口生成
// 可选参数: qrimg 传入后会额外返回二维码图片 base64 编码
export function useLoginQrCreate(key) {
  return http({
    method: "get",
    url: "/login/qr/create",
    params: {
      key: key,
      qrimg: true,
      timestamp: Date.now()
    },
  });
}
// 3. 二维码检测扫码状态接口
// 必选参数: key,由第一个接口生成
// 轮询此接口可获取二维码扫码状态,
// 800 为二维码过期,
// 801 为等待扫码,
// 802 为待确认,
// 803 为授权登录成功(803 状态码下会返回 cookies)
export function useLoginQrCheck(key) {
  return http({
    method: "get",
    url: "/login/qr/check",
    params: {
      key: key,
      qrimg: true,
      timestamp: Date.now()
    },
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
// 新歌速递
// 说明 : 调用此接口 , 可获取新歌速递
// 必选参数 :
// type: 地区类型 id,对应以下:
// 全部:0
// 华语:7
// 欧美:96
// 日本:8
// 韩国:16
// 接口地址 : /top/song
// 调用例子 : /top/song?type=96
export function useTopSong(type) {
  return http({
    method: "get",
    url: "/top/song",
    params: {
      type: type
    }
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
// 精品歌单标签列表
// 说明 : 调用此接口 , 可获取精品歌单标签列表
// 接口地址 : /playlist/highquality/tags
// 调用例子 : /playlist/highquality/tags
export function useHighqualityTags() {
  return http({
    method: "get",
    url: "/playlist/highquality/tags"
  });
}
// 获取精品歌单
// 说明 : 调用此接口 , 可获取精品歌单
// 可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从精品歌单标签列表接口获取(/playlist/highquality/tags)
// limit: 取出歌单数量 , 默认为 50
// before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
// 接口地址 : /top/playlist/highquality
// 调用例子 : /top/playlist/highquality?before=1503639064232&limit=3
export function useHighquality(obj) {
  return http({
    method: "get",
    url: "/top/playlist/highquality",
    params: {
      cat: obj.cat,
      limit: obj.limit,
      before: obj.before
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
// 歌曲评论
// 说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要登录 )
// 必选参数 : id: 音乐 id
// 可选参数 : limit: 取出评论数量 , 默认为 20
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
// before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
// 接口地址 : /comment/music
// 调用例子 : /comment/music?id=186016&limit=1 对应晴天评论
export function useSongComment(id, obj) {
  return http({
    method: "get",
    url: "/comment/music",
    params: {
      id: id,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit,
    }
  });
}
// 获取歌单所有歌曲
// ids:歌曲id数组，用逗号分隔
export function useSongDetailAll(ids) {
  return http({
    method: "get",
    url: "/song/detail",
    params: { ids: ids }
  });
}
// 获取歌单所有歌曲
// 必选参数 : id : 歌单 id
// 可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
// 可选参数 : offset : 默认值为0
export function usePlaylistTrackAll(obj) {
  return http({
    method: "get",
    url: "/playlist/track/all",
    params: {
      id: obj.id,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit
    }
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
// 最新专辑
// 说明 : 调用此接口 ，获取云音乐首页新碟上架数据
// 接口地址 : /album/newest
// 调用例子 : /album/newest
export function useNewestAlbum() {
  return http({
    method: "get",
    url: "/album/newest",
  });
}
// 数字专辑-新碟上架
// 说明 : 调用此接口 ,可获取数字专辑-新碟上架
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// 接口地址 : /album/list
// 调用例子 : /album/list?limit=10
export function useAlbumList(obj) {
  return http({
    method: "get",
    url: "/album/list",
    params: {
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit,
    }
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
// 获取推荐视频
// 可选参数 : offset: 默认 0
// 接口地址 : /video/timeline/recommend
export function useVideoTimelineRecommend(offset) {
  return http({
    method: "get",
    url: "/video/timeline/recommend",
    params: { offset: offset * 8 }
  });
}
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
// 电台 - 推荐
// 说明 : 登录后调用此接口 , 可获得推荐电台
// 接口地址 : /dj/recommend
// 调用例子 : /dj/recommend
export function useDjRecommend() {
  return http({
    method: "get",
    url: "/dj/recommend",
  });
}
/*______________________________________用户__________________________________________*/
// 获取用户详情
export function useUserDetail(uid) {
  return http({
    method: "get",
    url: "/user/detail",
    params: { uid: uid }
  });
}
// 获取账号信息(登录后调用)
export function useUserAccount() {
  return http({
    method: "get",
    url: "/user/account",
  });
}
// 获取用户信息, 歌单，收藏，mv, dj 数量(登录后调用)
export function useUserSubcount() {
  return http({
    method: "get",
    url: "/user/subcount",
  });
}
// 获取用户等级信息(登录后调用)
export function useUserLevel() {
  return http({
    method: "get",
    url: "/user/level",
  });
}
// 获取用户绑定信息(登录后调用)
export function useUserBinding(uid) {
  return http({
    method: "get",
    url: "/user/binding",
    params: { uid: uid }
  });
}
// 更改用户绑定手机(登录后调用)
// 必选参数 :
// phone : 手机号码
// oldcaptcha: 原手机号码的验证码
// captcha:新手机号码的验证码
// 可选参数 :
// countrycode: 国家地区代码,默认 86
export function useUserReplacephone(obj) {
  return http({
    method: "get",
    url: "/user/replacephone",
    params: {
      phone: obj.phone,
      oldcaptcha: obj.oldcaptcha,
      captcha: obj.captcha
    }
  });
}
// 更新用户信息(登录后调用)
// 必选参数 :
// gender: 性别 0:保密 1:男性 2:女性
// birthday: 出生日期,时间戳 unix timestamp
// nickname: 用户昵称
// province: 省份id
// city: 城市id
// signature：用户签名
export function useUserUpdate(obj) {
  return http({
    method: "get",
    url: "/user/update",
    params: {
      gender: obj.gender,
      birthday: obj.birthday,
      nickname: obj.nickname,
      province: obj.province,
      city: obj.city,
      signature: obj.signature
    }
  });
}
// 获取用户歌单(登录后调用)
// 必选参数 : uid : 用户 id
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
export function useUserPlaylist(obj) {
  return http({
    method: "get",
    url: "/user/playlist",
    params: {
      uid: obj.uid,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit
    }
  });
}
// 获取用户电台(登录后调用)
export function useUserDj(uid) {
  return http({
    method: "get",
    url: "/user/dj",
    params: { uid: uid }
  });
}
// 获取用户动态
// 必选参数 : 
// uid : 用户 id
// 可选参数 : 
// limit : 返回数量 , 默认为 30
// lasttime : 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据
export function useUserEvent(obj) {
  return http({
    method: "get",
    url: "/user/event",
    params: {
      uid: obj.uid,
      limit: obj.limit,
      lasttime: obj.lasttime
    }
  });
}
// 获取动态评论
// 必选参数 : threadId : 动态 id，可通过 /event，/user/event 接口获取
export function useCommentEvent(threadId) {
  return http({
    method: "get",
    url: "/comment/event",
    params: { threadId: threadId }
  });
}
// 获取用户关注列表(登录后调用)
// 必选参数 : uid : 用户 id
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 ,如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
export function useUserFollows(obj) {
  return http({
    method: "get",
    url: "/user/follows",
    params: {
      uid: obj.uid,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit
    }
  });
}
// 获取用户粉丝列表(登录后调用)
// 必选参数 : uid : 用户 id
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 ,如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
export function useUserFolloweds(obj) {
  return http({
    method: "get",
    url: "/user/followeds",
    params: {
      uid: obj.uid,
      limit: obj.limit,
      offset: (obj.offset - 1) * obj.limit
    }
  });
}
// 获取用户播放记录(登录后调用)
// 必选参数 : uid : 用户 id
// 可选参数 : type : type=1 时只返回 weekData, type=0 时返回 allData
export function useUserRecord(obj) {
  return http({
    method: "get",
    url: "/user/record",
    params: {
      uid: obj.uid,
      type: obj.type
    }
  });
}
// 获取每日推荐歌单(登录后调用)
export function useRecommendResource() {
  return http({
    method: "get",
    url: "/recommend/resource"
  });
}
// 获取每日推荐歌曲(登录后调用)
export function useRecommendSongs() {
  return http({
    method: "get",
    url: "/recommend/songs"
  });
}
// 喜欢音乐列表(登录后调用)
// 必选参数 : uid: 用户 id
// 接口地址 : /likelist
export function useLikelist(uid) {
  return http({
    method: "get",
    url: "/likelist",
    params: { uid: uid }
  });
}
// 获取私人 FM(登录后调用)
export function usePersonalFm() {
  return http({
    method: "get",
    url: "/personal_fm",
    // 时间戳
    params: {
      timestamp: Date.now()
    }
  });
}