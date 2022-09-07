<template>
  <div class="artistDetail-songList">
    <!-- 标题栏 -->
    <div class="grid">
      <div>歌曲</div>
      <div v-show="options == 0">专辑</div>
      <div v-show="options == 1">歌手</div>
      <div>时长</div>
    </div>
    <!-- 歌曲详情栏 -->
    <div class="list">
      <div class="item" v-for="item in tracks" :key="item.id"
        :class="{ active: Playlist.currentPlayMusic.id == item.id }">
        <!-- 歌曲名 -->
        <span class="overflow">
          <icon-like class="likeIcon" theme="outline" size="16" :strokeWidth="4" title='喜欢' />
          <p class="name">{{ item.name }}</p>
          <!-- hover操作栏 -->
          <div class="block">
            <div class="iconList">
              <icon-play theme="outline" size="16" :strokeWidth="4" title='播放' @click="play(item)" />
              <icon-add theme="outline" size="16" :strokeWidth="4" title='添加到播放列表' @click="addPlayList(item)" />
              <icon-down-two theme="outline" size="16" :strokeWidth="4" title='下载' />
              <icon-more-two theme="outline" size="16" :strokeWidth="4" title='更多操作' />
            </div>
          </div>
        </span>
        <!-- 专辑名 -->
        <span class="overflow">
          <p class="name" v-show="options == 0">{{ item.al.name }}</p>
          <p class="name" v-show="options == 1" v-for="item1 in item.ar">{{ item1.name }}</p>
        </span>
        <!-- 时长 -->
        <span class="overflow">{{ format(item.dt) }}</span>
      </div>
    </div>
    <!-- 加载更多 -->
    <div class="loadMore">
      <p>加载更多</p>
    </div>
  </div>
</template>

<script setup>
import useStore from "@/pinia/index.js"

defineProps({
  tracks: {
    type: Array,
    default: () => [{ id: 0, name: '歌曲名', ar: [{ id: '歌手id', name: '歌手' }], al: { name: '专辑' }, dt: '时长' }]
  },
  // 0：歌曲，专辑，时长
  // 1：歌曲，歌手，时长
  options: {
    type: Number,
    default: () => 0
  }
})

const { Playlist } = useStore()

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
</script>

<style lang="less" scoped>
// 不换行文本溢出显示省略号
.name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

.artistDetail-songList {
  display: flex;
  flex-direction: column;

  .grid {
    display: grid;
    // grid-template-columns: repeat(4, 1fr);
    grid-template-columns: 3fr 3fr 1fr;
    gap: 20px;
    font-size: 14px;
    color: #7f848c;
    padding: 10px;

  }

  .list {
    font-size: 14px;

    .item {
      display: grid;
      // grid-template-columns: repeat(4, 1fr);
      grid-template-columns: 3fr 3fr 1fr;
      gap: 20px;
      margin: 10px 0;
      padding: 10px 0;
      color: #334155;
      padding: 10px;


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

        .likeIcon {
          cursor: pointer;
          color: #7f848c;

          &:hover {
            color: #ff5b5b;
          }
        }

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