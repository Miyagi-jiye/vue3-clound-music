<template>
  <div>
    <!-- 图标 -->
    <div class="volumeIcon hidden-less-600">
      <component
        :is="volumeStatus === 0 ? 'icon-volume-mute' : volumeStatus == 100 ? 'icon-volume-notice' : 'icon-volume-small'"
        theme="outline" size="22" :strokeWidth="2" title='音量' @dblclick="mute" />
    </div>
    <!-- 音量条 -->
    <div class="hidden">
      <div class="volume">
        <el-slider v-model="volumeStatus" vertical height="100px" :show-tooltip='false' @input="volumeChange" />
        <p>{{ volumeStatus }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'

// 初始音量值
let volumeStatus = ref(50)

// 子传父
const emit = defineEmits(["volumeEmit"])

// 音量调拖动
function volumeChange() {
  emit("volumeEmit", volumeStatus.value)
}
// 双击静音
function mute() {
  volumeStatus.value = 0
  emit("volumeEmit", 0)
}

onMounted(() => {

  const volumeIcon = document.querySelector('.volumeIcon')
  const volumeHidden = document.querySelector(".hidden")

  let flag = ref(false)
  let timer = ref(null)
  let timer1 = ref(null)


  // 音量条，鼠标移入移出
  volumeHidden.onmouseenter = () => {
    flag.value = true
    clearTimeout(timer)
  }
  volumeHidden.onmouseleave = () => {
    timer = setTimeout(() => {
      flag.value = false
      volumeHidden.style.display = 'none'
    }, 500)
  }

  // 音量图标，鼠标移入移出
  volumeIcon.onmouseenter = () => {
    clearTimeout(timer1)
    volumeHidden.style.display = 'block'
  }
  volumeIcon.onmouseleave = () => {
    timer1 = setTimeout(() => {
      if (flag.value) {
        return
      } else {
        volumeHidden.style.display = 'none'
      }
    }, 500)
  }

})
</script>

<style lang="less" scoped>
.volumeIcon {
  cursor: pointer;

  &:hover {
    color: #34d399;
  }
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
}
</style>