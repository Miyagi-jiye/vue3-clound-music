// 模块化统一导入
import useLoginStore from '@/pinia/module/login.js'// 登录
import useDiscoverStore from '@/pinia/module/discover.js'// 推荐
import usePlaylistStore from '@/pinia/module/playlist.js'// 歌单

// 自定义一个统一导出的方法:useStore()
export default function useStore() {
  return {
    Login: useLoginStore(),
    Discover: useDiscoverStore(),
    Playlist: usePlaylistStore(),
  }
}