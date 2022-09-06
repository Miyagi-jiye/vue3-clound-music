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
      <div class="item" v-for="item in myData.tracks" :key="item.id"
        :class="{ active: Playlist.currentPlayMusic.id == item.id }" @dblclick="play(item)">
        <span class="overflow song">
          <icon-play theme="outline" size="16" :strokeWidth="4" title='播放' @click="play(item)" class="icon-play" />
          <p class="name">{{ item.name }}</p>
          <div class="icon-vip" v-if="item.fee == 1">VIP</div>
          <div class="icon-sq" v-if="item.sq">SQ</div>
          <div class="icon-mv" v-if="item.mv !== 0" @click="routerPush('videoDetail', item.mv)">MV</div>
          <!-- hover操作栏 -->
          <div class="block hidden-less-400">
            <div class="iconList">
              <icon-like theme="outline" size="16" :strokeWidth="4" title='喜欢' class="icon-like" />
              <icon-add theme="outline" size="16" :strokeWidth="4" title='添加到播放列表' @click="addPlayList(item)" />
              <icon-down-two theme="outline" size="16" :strokeWidth="4" title='下载' />
              <icon-more-two theme="outline" size="16" :strokeWidth="4" title='更多操作' />
            </div>
          </div>
        </span>
        <span class="overflow singer">
          <p class="name" v-for="item1 in item.ar" :key="item1.id">{{ item1.name }}</p>
        </span>
        <span class="overflow album">
          <p class="name">{{ item.al.name }}</p>
        </span>
        <span class="overflow duration">{{ format(item.dt) }}</span>
      </div>
    </div>
    <!-- 加载更多 -->
    <!-- <div class="loadMore">
      <p>加载更多</p>
    </div> -->
  </div>
</template>

<script setup>
import useStore from "@/pinia/index.js"
import { useRouter } from "vue-router"
const { Playlist } = useStore()
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
  Playlist.push_toPlayList(item)
  Playlist.change_playMusic(item)
}
// 添加到播放列表
const addPlayList = (item) => {
  console.log('添加到播放列表', item)
  Playlist.push_toPlayList(item)
}
// 跳转到视频详情页
const routerPush = (name, id) => {
  router.push({ name: name, params: { id: id } })
}
</script>

<style lang="less" scoped>
// .song {
//   min-width: 200px;
// }

// .singer {
//   min-width: 200px;
// }

// .album {
//   min-width: 100px;
// }

// .duration {
//   min-width: 80px;
// }

// 不换行文本溢出显示省略号
.name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// vip标签
.icon-vip {
  font-size: 20px;
  padding: 2px;
  color: #34d399;
  border: 1px solid #34d399;
  border-radius: 4px;
  zoom: 0.5;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
}

// 高质量音频标签
.icon-sq {
  font-size: 20px;
  padding: 2px;
  color: #d37334;
  border: 1px solid #d37334;
  border-radius: 4px;
  zoom: 0.5;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
}

// mv标签
.icon-mv {
  font-size: 20px;
  padding: 2px;
  color: #34d399;
  border: 1px solid #34d399;
  border-radius: 4px;
  zoom: 0.5;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
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

.songList {
  display: flex;
  flex-direction: column;

  .grid {
    display: grid;
    grid-template-columns: 4fr 2fr 2fr 2fr;
    gap: 20px;
    font-size: 14px;
    color: #7f848c;

  }

  .list {
    font-size: 14px;

    .item {
      display: grid;
      grid-template-columns: 4fr 2fr 2fr 2fr;
      gap: 20px;
      margin: 10px 0;
      padding: 10px 0;
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



        .block {
          margin-left: auto;
          display: none;
        }
      }
    }
  }

  .loadMore {
    margin: 20px 0;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #34d399;
    font-size: 14px;

    p {
      cursor: pointer;

      &:hover {
        color: rgba(8, 88, 59, 0.733);
      }
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
</style>