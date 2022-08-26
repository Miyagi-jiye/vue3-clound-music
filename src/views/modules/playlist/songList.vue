<template>
  <div class="songList">
    <!-- 标题栏 -->
    <div class="grid">
      <div>歌曲</div>
      <div>歌手</div>
      <div>专辑</div>
      <div>时长</div>
    </div>
    <!-- 歌曲详情栏 -->
    <div class="list">
      <div class="item" v-for="item in myData.tracks" :key="item.id">
        <span class="overflow">
          <icon-like class="likeIcon" theme="outline" size="16" :strokeWidth="4" title='喜欢' />
          <p class="name">{{ item.name }}</p>
          <div class="block">
            <div class="iconList">
              <icon-play theme="outline" size="16" :strokeWidth="4" title='播放' @click="play(item)" />
              <icon-add theme="outline" size="16" :strokeWidth="4" title='添加到' />
              <icon-down-two theme="outline" size="16" :strokeWidth="4" title='下载' />
              <icon-more-two theme="outline" size="16" :strokeWidth="4" title='更多操作' />
            </div>
          </div>
        </span>
        <span class="overflow">
          <p class="name" v-for="item1 in item.ar" :key="item1.id">{{ item1.name }}</p>
        </span>
        <span class="overflow">
          <p class="name">{{ item.al.name }}</p>
        </span>
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
const { Playlist } = useStore()

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

.songList {
  display: flex;
  flex-direction: column;

  .grid {
    display: grid;
    // grid-template-columns: repeat(4, 1fr);
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 20px;
    font-size: 12px;
    color: #7f848c;

  }

  .list {
    font-size: 12px;

    .item {
      display: grid;
      // grid-template-columns: repeat(4, 1fr);
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 20px;
      margin: 10px 0;
      padding: 10px 0;
      color: #334155;

      &:hover {
        background-color: #fff;
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
</style>