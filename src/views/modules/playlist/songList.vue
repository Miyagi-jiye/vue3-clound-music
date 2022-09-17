<template>
  <div class="songList">
    <!-- 标题栏 -->
    <div class="grid">
      <div class="song">歌曲</div>
      <div class="singer">歌手</div>
      <div class="album">专辑</div>
      <div class="durtion">时长</div>
    </div>
    <!-- 歌曲详情栏 -->
    <div class="list">
      <div class="item" v-for="item in myData.tracks" :key="item.id" :class="{ active: currentPlayMusic.id == item.id }"
        @dblclick="play(item)">
        <span class="overflow">
          <icon-play theme="outline" size="16" :strokeWidth="4" title='播放' @click="play(item)" class="icon-play" />
          <p class="name">{{ item.name }}</p>
          <SongListTagVue :mySongData="item" />
          <!-- hover操作栏 -->
          <div class="block hidden-less-400">
            <div class="iconList">
              <icon-like theme="outline" size="16" :strokeWidth="4" title='喜欢' class="icon-like" />
              <icon-add theme="outline" size="16" :strokeWidth="4" title='添加到播放列表' @click="push_toPlayList(item)" />
              <icon-down-two theme="outline" size="16" :strokeWidth="4" title='下载' />
              <icon-more-two theme="outline" size="16" :strokeWidth="4" title='更多操作' />
            </div>
          </div>
        </span>
        <span class="overflow ">
          <p class="name" v-for="item1 in item.ar" :key="item1.id" @click="routerPush('artistDetail',item1.id)">
            {{item1.name }}
          </p>
        </span>
        <span class="overflow">
          <p class="name" @click="routerPush('albumDetail',item.al.id)">{{ item.al.name }}</p>
        </span>
        <span class="overflow">{{ format(item.dt) }}</span>
      </div>
    </div>
    <!-- 加载全部歌曲 -->
    <div class="loadAll" v-show="playlist.tracks.length !== playlist.trackIds.length">
      <p @click="get_songDetailAll()">加载全部</p>
    </div>
  </div>
</template>

<script setup>
import SongListTagVue from "@/components/SongListTag.vue";//歌曲列表tag
import { useRouter } from "vue-router"
import { usePlaylistStore } from "@/pinia/module/playlist.js"
import { storeToRefs } from "pinia";

const { currentPlayMusic, playlist } = storeToRefs(usePlaylistStore())
const { push_toPlayList, change_playMusic, get_songDetailAll } = usePlaylistStore()

const router = useRouter()

defineProps({
  myData: {
    type: Object,
    default: () => ({
      tracks: [{ id: 0, name: '歌曲名', ar: [{ id: '歌手id', name: '歌手' }], al: { name: '专辑' }, dt: '时长' }]
    })
  }
})

// 格式化毫秒
function format(times) {
  // 秒
  let sec = Math.floor(times / 1000 % 60);
  // 分
  let min = Math.floor(times / 1000 / 60);
  // 返回格式 00：00 不足两位的补零
  return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
}
// 添加到播放列表，并改变当前播放的对象
const play = (item) => {
  console.log('播放', item)
  push_toPlayList(item)
  change_playMusic(item)
}
// 跳转到视频详情页
const routerPush = (name, id) => {
  router.push({ name: name, params: { id: id } })
}
</script>

<style lang="less" scoped>
// 溢出不换行省略号
.whiteSpace {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}


.singer:not(:last-child)::after {
  content: '';
  display: inline-block;
  margin: 0 2px;
}


// 不换行文本溢出显示省略号
.name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


// 喜欢图标
.icon-like {
  cursor: pointer;
  color: #7f848c;

  &:hover {
    color: #ff5b5b !important;
  }
}

// 播放图标
.icon-play {
  cursor: pointer;
  color: #7f848c;

  &:hover {
    color: #34d399 !important;
  }
}

// 图标列表
.iconList {
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  span {
    cursor: pointer;
    color: #7f848c;

    &:hover {
      color: #34d399;
    }
  }
}



// 激活歌曲
.active {
  color: #16da92 !important;
  border-radius: 4px !important;
}

// 激活图标
.activeIcon {
  color: #ff5b5b !important;
}

.songList {
  display: flex;
  flex-direction: column;

  .grid {
    display: grid;
    grid-template-columns: 4fr 2fr 2fr minmax(40px, 1fr);
    gap: 20px;
    font-size: 14px;
    color: #7f848c;
    padding: 10px;
  }

  .list {
    font-size: 14px;

    .item {
      display: grid;
      grid-template-columns: 4fr 2fr 2fr minmax(40px, 1fr);
      gap: 20px;
      margin: 10px 0;
      padding: 10px;
      color: #334155;

      &:hover {
        background-color: var(--my-hover-background-color);
        border-radius: 4px;

        .overflow {
          .block {
            display: block
          }
        }
      }

      .overflow {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        gap: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        p {
          cursor: pointer;

          &:hover {
            color: #34d399;
          }
        }

        .block {
          margin-left: auto;
          display: none;
        }
      }
    }
  }

  .loadAll {
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #34d399;

    p:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>