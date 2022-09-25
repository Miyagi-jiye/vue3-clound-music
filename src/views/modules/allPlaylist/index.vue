<template>
  <div class="allPlaylist">
    <div class="title">
      <p>{{route.query.type}}</p>
    </div>
    <div v-show="route.query.type == '精品歌单'">
      <Tag :myData="tags" :activeTag="highqualityParams.cat" :end="8" @emitClick="tagClick" />
      <Recommend :myData="highquality" />
      <div class="loadMore" v-if="highqualityMore" @click="loadMore">加载更多</div>
    </div>
    <div v-show="route.query.type == '推荐歌单'">
      <Recommend :myData="recommend" />
    </div>
    <div v-show="route.query.type == '新专速递'">
      <Album :myData="albumList" />
      <div class="loadMore" @click="loadMore('新专速递')">加载更多</div>
    </div>
  </div>
</template>

<script setup>
import Album from "@/views/modules/discover/album.vue";
import Tag from "@/components/Tag.vue";
import Recommend from "@/views/modules/discover/recommend.vue";

import { useRoute } from "vue-router";
import { useAllPlaylistStore } from "@/pinia/module/allPlaylist.js";
import { storeToRefs } from "pinia";
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
  get_albumList,
} = useAllPlaylistStore();
const {
  highquality,
  highqualityParams,
  highqualityMore,
  tags,
  banner,
  recommend,
  newSong,
  mv,
  privateRecommend,
  dailySongs,
  fm,
  album,
  albumList,
  albumListParams
} = storeToRefs(useAllPlaylistStore());
const route = useRoute();

const init = () => {
  if (route.query.type == "精品歌单") {
    get_highqualityTags();
    get_highquality();
  } else if (route.query.type == "推荐歌单") {
    get_recommend();
  } else if (route.query.type == "新专速递") {
    // get_newestAlbum();
    get_albumList();
  }
};
init()

// 点击精品歌单标签
const tagClick = (val) => {
  highqualityParams.value.cat = val;
  // 还原参数
  highqualityParams.value.before = 0;
  // 清空数据
  highquality.value = [];
  get_highquality();
};

// 加载更多
const loadMore = () => {
  if (route.query.type == "精品歌单") {
    get_highquality();
  }
  if (route.query.type == "新专速递") {
    albumListParams.value.limit += 10;
    get_albumList();
  }
};
</script>

<style lang="less" scoped>
.allPlaylist {
  padding: 20px;
  background: #fff;
  min-height: 100vh;

  .title {
    font-size: 50px;
    font-weight: 700;
    color: #000;
    margin-top: 10px;
    margin-bottom: 30px;
  }
}

.loadMore {
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  color: #999;
  cursor: pointer;

  &:hover {
    color: #34d399;
  }
}
</style>
