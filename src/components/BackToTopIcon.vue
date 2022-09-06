<template>
  <div id="backToTop" class="backToTopIcon">
    <icon-to-top theme="outline" :size="iconSize" />
  </div>
</template>

<script setup>
defineProps({
  iconSize: {
    type: String,
    default: () => "20",
  },
});
// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  console.log(121);
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}

// 点击按钮，返回顶部
function topFunction() {
  console.log("点击");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

<style lang="less" scoped>
.backToTopIcon {
  background-color: #999;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
