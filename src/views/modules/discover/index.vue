<template>
  <div class="discover">
    <el-skeleton style="display: flex; flex-direction: column; width: 100%" :loading="loading" animated :count="1">
      <!-- 骨架屏 -->
      <template #template>
        <el-skeleton-item variant="h1" style="width: 20%; margin: 20px 0; height: 40px" />
        <el-skeleton-item variant="image" style="width: 100%; height: 30vh" />
        <el-skeleton-item variant="h1" style="width: 20%; margin: 20px 0; height: 40px" />
        <div style="display: flex; gap: 10px">
          <el-skeleton-item variant="rect" style="width: 90px; margin: 10px 0px; height: 30px" v-for="item in 9" />
        </div>
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 20px;
          ">
          <el-skeleton-item variant="rect" style="width: 150px; height: 150px" v-for="item in 9" />
        </div>
      </template>
      <!-- 加载结束显示 -->
      <template #default>
        <!-- 未登录 -->
        <div v-show="isLogin == false">
          <p class="banner">推荐</p>
          <Banner :myData="banner" />
          <Title title="推荐歌单" :showRight="true" :right="{ text: '查看全部', size: 14 }"
            @rightClick="routerPush('allPlaylist','推荐歌单')" />
          <Recommend :myData="recommend" :end="10" />
          <Title title="精品歌单" :showRight="true" :right="{ text: '查看全部', size: 14 }"
            @rightClick="routerPush('allPlaylist','精品歌单')" />
          <Tag :myData="tags" :activeTag="highqualityParams.cat" :end="8" @emitClick="tagClick" />
          <Recommend :myData="highquality" :end="10" />
          <Title title="新歌速递" :showRight="true" :right="{ text: '查看全部', size: 14 }"
            @rightClick="routerPush('allPlaylist','新歌速递')" />
          <NewSong :myData="newSong" />
          <Title title="新专速递" :showRight="true" :right="{ text: '查看全部', size: 14 }"
            @rightClick="routerPush('allPlaylist','新专速递')" />
          <Album :myData="album" />
          <Title title="最新MV" :showRight="true" :right="{ text: '查看全部', size: 14 }"
            @rightClick="routerPush('allPlaylist','最新MV')" />
          <Mv :myData="mv" />
        </div>
        <!-- 已登录 -->
        <div v-show="isLogin == true">
          <Title title="每日专属推荐" />
          <Daily :dailySongs="dailySongs" :fm="fm" />
          <Title title="你的专属歌单" />
          <Recommend :myData="privateRecommend" />
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup>
import Tag from "@/components/Tag.vue";
import Album from "@/views/modules/discover/album.vue";
import Daily from "@/views/modules/discover/daily.vue";
import Mv from "@/views/modules/discover/mv.vue";
import NewSong from "@/views/modules/discover/newSong.vue";
import Recommend from "@/views/modules/discover/recommend.vue";
import Title from "@/components/Title.vue";
import Banner from "@/views/modules/discover/banner.vue";
import { useDiscoverStore } from "@/pinia/module/discover.js";
import { useLoginStore } from "@/pinia/module/login.js";
import { storeToRefs } from "pinia";
import { ref, watch, provide, onMounted } from "vue";
import { useRouter } from "vue-router";

const {
  get_highquality,
  get_highqualityTags,
  get_newestAlbum,
  get_banner,
  get_recommend,
  get_newSong,
  get_mv,
  get_recommendResource,
  get_recommendSongs,
  get_personalFm,
} = useDiscoverStore();
const {
  highquality,
  highqualityParams,
  tags,
  banner,
  recommend,
  newSong,
  mv,
  privateRecommend,
  dailySongs,
  fm,
  album,
} = storeToRefs(useDiscoverStore());
const { isLogin } = storeToRefs(useLoginStore());
const router = useRouter();

provide("get_personalFm", get_personalFm);

const init = () => {
  if (isLogin.value == true) {
    get_recommendResource();
    get_recommendSongs();
    get_personalFm();
  } else {
    get_banner();
    get_recommend();
    get_newSong();
    get_mv();
    get_newestAlbum();
    get_highqualityTags();
    get_highquality();
  }
};

// 初始化
init();

// 监听登录状态变化
watch(isLogin, () => {
  init();
});

let loading = ref(false); // 骨架屏

// 骨架屏关闭显示
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});

// 点击精品歌单标签
const tagClick = (val) => {
  highqualityParams.value.cat = val;
  get_highquality();
};
// 路由跳转
const routerPush = (name, type) => {
  router.push({ name: name, query: { type: type } });
};
</script>

<style lang="less" scoped>
.discover {
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px 20px 20px;
  background-color: var(--my-background-color);
  min-height: 100vh;
}

.banner {
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  padding: 20px 0;
}
</style>
