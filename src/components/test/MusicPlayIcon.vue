<template>
  <div>
    <icon-play style="color: #34d399;" v-show="audioStatus === false" theme="filled" size="38" :strokeWidth="2"
      title='点击播放' @click="playIconClick" />
    <icon-pause-one style="color: #34d399;" v-show="audioStatus === true" theme="filled" size="38" :strokeWidth="2"
      title='点击暂停' @click="pauseIconClick" />
    <component style="color: #34d399;" :is="audioStatus == false ? 'icon-play' : 'icon-pause-one'" theme="filled"
      size="38" :strokeWidth="2" :title="audioStatus == false ? '点击播放' : '点击暂停'" @click="playIconClick" />

    <div class="bottom hidden-less-600">
      <icon-like theme="outline" size="18" :strokeWidth="2" title='我喜欢' />
      <icon-down-two theme="outline" size="18" :strokeWidth="2" title='下载' />
      <icon-more-two theme="outline" size="18" :strokeWidth="2" title='更多信息' />
      <icon-comment theme="outline" size="18" :strokeWidth="2" title='评论' />
    </div>
  </div>
</template>

<script setup>
const playIconClick = () => {
  audioStatus == !audioStatus
}
</script>

<style scoped>
</style>