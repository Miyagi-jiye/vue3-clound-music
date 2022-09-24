<template>
  <div class="VolumeIcon">
    <!-- 图标 -->
    <div class="volumeIcon">
      <component :is="volume === 0 ? 'icon-volume-mute' : volume == 100 ? 'icon-volume-notice' : 'icon-volume-small'"
        theme="outline" size="22" :strokeWidth="2" title='音量' @click="mute" />
    </div>
    <!-- 音量条 -->
    <div class="hidden">
      <div class="volume">
        <el-slider v-model="volume" vertical height="100px" :show-tooltip='false' @input="volumeSetting()" />
        <p>{{ volume }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'

let volume = inject('volume')// 初始音量值
const volumeSetting = inject('volumeSetting')// 音量拖动设置音量

// 点击静音,再次点击还原音量
function mute() {
  if (volume.value == 0) {
    volume.value = 50
    volumeSetting()
  } else {
    volume.value = 0
    volumeSetting()
  }
}

onMounted(() => {

  const volumeIcon = document.querySelector('.volumeIcon')
  const volumeHidden = document.querySelector(".hidden")

  let timer1 = ref(null)

  // 音量条，鼠标移入移出
  volumeHidden.onmouseenter = () => {
    clearTimeout(timer1)
  }
  volumeHidden.onmouseleave = () => {
    volumeHidden.style.display = 'none'
  }

  // 音量图标，鼠标移入移出
  volumeIcon.onmouseenter = () => {
    clearTimeout(timer1)
    volumeHidden.style.display = 'block'
  }
  volumeIcon.onmouseleave = () => {
    timer1 = setTimeout(() => {
      volumeHidden.style.display = 'none'
    }, 500)
  }

})
</script>

<style lang="less" scoped>
.VolumeIcon {
  position: relative;
}

.volumeIcon :hover {
  color: #34d399;
  cursor: pointer;
}

.hidden {
  display: none;
  position: absolute;
  top: -150px;
  right: -5px;
  transition: all 1s;
  z-index: 9999;
}

.volume {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  height: 150px;
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;

  .p {
    color: #000;
  }
}
</style>