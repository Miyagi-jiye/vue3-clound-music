<template>
  <div class="palyer">
    <!-- 进度条 -->
    <el-slider v-model="progress" :format-tooltip="formatTooltip" />
    <!-- 播放器 -->
    <div class="group">
      <div class="detail">
        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />
        <div class="info">
          <div class="top">
            <p>桃花笑-泠鸢</p>
            <p>-</p>
            <a>泠鸢yousa</a>
          </div>
          <div class="bottom">
            <icon-like theme="outline" size="18" :strokeWidth="2" title='我喜欢' />
            <icon-down-two theme="outline" size="18" :strokeWidth="2" title='下载' />
            <icon-more-two theme="outline" size="18" :strokeWidth="2" title='更多信息' />
            <icon-comment theme="outline" size="18" :strokeWidth="2" title='评论' />
          </div>
        </div>
      </div>
      <div class="button">
        <icon-play-once theme="outline" size="22" :strokeWidth="2" title='顺序播放' />
        <icon-go-start theme="outline" size="28" :strokeWidth="4" title='上一首' />
        <icon-play theme="filled" size="38" :strokeWidth="2" title='点击播放' />
        <icon-go-end theme="outline" size="28" :strokeWidth="4" title='下一首' />
        <icon-volume-mute v-if="volume === 0" theme="outline" size="22" :strokeWidth="2" title='静音'
          @click="showVolumeSet" />
        <icon-volume-notice v-else-if="volume == 100" theme="outline" size="22" :strokeWidth="2" title='音量大'
          @click="showVolumeSet" />
        <icon-volume-small v-else theme="outline" size="22" :strokeWidth="2" title='音量' @click="showVolumeSet" />
        <div class="volume">
          <el-slider v-model="volume" vertical height="100px" :show-tooltip='false' />
          <p>{{ volume }}</p>
        </div>
      </div>
      <div class="list">
        <p>00:20 / 02:28</p>
        <icon-text-message theme="outline" size="18" :strokeWidth="3" title='歌词' />
        <icon-music-list theme="outline" size="18" :strokeWidth="3" title='歌曲列表' />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 进度条
let progress = ref(0)
// 音量
let volume = ref(0)
// 格式化进度条显示信息
const formatTooltip = (val) => {
  return val / 100
}
// 点击显示音量设置
const showVolumeSet = () => {
  volume = document.querySelector('.volume');
  if (volume.style.display === 'flex') {
    volume.style.display = 'none'
  } else {
    volume.style.display = 'flex'
  }
}
</script>

<style lang="less" scoped>
.palyer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
}

.el-slider {
  width: 100%;
  height: 100%;
  // height: var(--progress-bar-height);
  // overflow: hidden;

  // 未播放阴影进度条
  :deep(.el-slider__runway) {
    height: 4px;
  }

  // 进度条小圆点
  :deep(.el-slider__button) {
    height: 20px;
    width: 20px;
    border: solid 2px #34d399;
  }

  // 已播放进度条
  :deep(.el-slider__bar) {
    background-color: #34d399;
    height: 4px;
  }
}

.group {
  width: 100%;
  height: calc(100% - var(--progress-bar-height));
  background-color: #fff;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  .detail {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    gap: 18px;

    .el-image {
      width: 50px;
      height: 50px;
      border-radius: 4px;
    }

    .info {
      width: 200px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-between;

      .top {
        font-size: 14px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        gap: 8px;

        a {
          color: #9AA8BC;
          cursor: pointer;

          &:hover {
            color: #34d399;
          }
        }
      }

      .bottom {
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        gap: 12px;
        // 图标颜色
        color: #9AA8BC;

        span:hover {
          color: #34d399;
          cursor: pointer;
        }
      }
    }
  }

  .button {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    gap: 20px;
    // 音量控制
    position: relative;

    // 屏幕宽度小于600px时，控制器隐藏
    @media screen and (max-width: 600px) {
      display: none;
    }

    .volume {
      position: absolute;
      right: -6px;
      bottom: 60px;
      height: 170px;
      border-radius: 4px;
      // width: 40px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      box-sizing: border-box;
      box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;
      // 默认隐藏
      display: none;
    }

    span:nth-child(3) {
      color: #34d399;
    }

    span:hover {
      color: #34d399;
      cursor: pointer;
    }

  }

  .list {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    gap: 20px;

    // 屏幕宽度小于1000px时，控制器隐藏
    @media screen and (max-width: 1000px) {
      display: none;
    }

    p {
      white-space: nowrap;
    }

    span:hover {
      color: #34d399;
      cursor: pointer;
    }
  }
}
</style>