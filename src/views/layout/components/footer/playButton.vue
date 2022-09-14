<template>
  <div>
    <icon-play style="color: #34d399;" v-show="audioStatus === false" theme="filled" size="38" :strokeWidth="2"
      title='点击播放' @click="play('play')" />
    <icon-pause-one style="color: #34d399;" v-show="audioStatus === true" theme="filled" size="38" :strokeWidth="2"
      title='点击暂停' @click="play('pause')" />
  </div>
</template>

<script setup>
const play = (name) => {
  if (name == 'play') {
    audioStatus == true
  }
  if (name == 'pause') {
    audioStatus == false
  }
}
</script>

<style scoped>

</style>