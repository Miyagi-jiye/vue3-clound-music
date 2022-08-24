import { defineStore } from "pinia";
import { useSonglistDetail, useSonglistComment, useMusicUrl } from "@/api/index.js";

const usePlaylistStore = defineStore("playlist", {
  state: () => ({
    playlist: JSON.parse(localStorage.getItem('playlist')) || {},// 歌单列表是否有保存数据
    privileges: [],
    comments: JSON.parse(localStorage.getItem('comments')) || [],// 歌单评论列表
    hotComments: JSON.parse(localStorage.getItem('hotComments')) || [],// 热评论列表
    currentPlayMusic: { id: 329925, name: '歌曲名', ar: [{ name: '歌手1' }, { name: '歌手2' }], al: { picUrl: 'https://p2.music.126.net/I4yWRd-spvMPQplOnnT6eg==/19054536509925566.jpg?param=50y50' } },// 当前播放的音乐
    toPlayList: [],//歌单播放列表
  }),
  getters: {
    // 获取歌单所有歌曲播放id
    get_songlistPlayId(state) {
      return state.tracks.map((item) => item.id)
    }
  },
  actions: {
    // 获取歌单详情
    async get_songlistDetail(id) {
      const res = await useSonglistDetail(id);
      this.playlist = res.data.playlist;
      this.privileges = res.data.privileges;
      console.log("获取歌单详情", res.data);
    },
    // 获取歌单评论
    async get_songlistComment(id) {
      const res = await useSonglistComment(id);
      this.comment = res.data.comments;
      this.hotComments = res.data.hotComments;
      console.log("获取歌单评论", res.data);
    },
    // 获取歌曲url
    async get_musicUrl(id) {
      const res = await useMusicUrl(id);
      console.log("获取歌曲url", res.data);
      return res.data;
    },
    // 添加歌单全部歌曲到播放列表
    push_musicToPlayList() {
      this.toPlayList = this.playlist.tracks;
    },
    // 添加到播放列表
    push_toPlayList(obj) {
      this.toPlayList.push(obj)
      this.toPlayList = new Set(this.toPlayList)
    }
  }
})

// 导出并重命名
export default usePlaylistStore