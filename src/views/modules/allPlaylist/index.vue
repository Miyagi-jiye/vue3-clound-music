<template>
  <div class="allPlaylist">
    <!-- 大标题 -->
    <div class="title">
      <p>{{route.query.type}}</p>
    </div>
    <!-- 显示内容 -->
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
    <div v-show="route.query.type == '新歌速递'">
      <Tag :myData="newSongParamsData" :activeTag="newSongParams.name" @emitClick="tagClick1" />
      <Album :myData="newSong" />
    </div>
    <div v-show="route.query.type == '最新MV'">
      <Tag :myData="newMvParamsData" :activeTag="newMvParams.area" @emitClick="tagClick2" />
      <Mv :myData="newMv" />
    </div>
  </div>
</template>

<script setup>
import Mv from "@/views/modules/discover/mv.vue";
import Album from "@/views/modules/discover/album.vue";
import Tag from "@/components/Tag.vue";
import Recommend from "@/views/modules/discover/recommend.vue";
import { useRoute } from "vue-router";
import { useAllPlaylistStore } from "@/pinia/module/allPlaylist.js";
import { storeToRefs } from "pinia";

const {
  get_highquality,
  get_highqualityTags,
  get_recommend,
  get_albumList,
  get_topSong,
  get_newMv
} = useAllPlaylistStore();
const {
  highquality,
  highqualityParams,
  highqualityMore,
  tags,
  recommend,
  albumList,
  albumListParams,
  newSong,
  newSongParams,
  newSongParamsData,
  newMv,
  newMvParams,
  newMvParamsData
} = storeToRefs(useAllPlaylistStore());
const route = useRoute();

const init = () => {
  if (route.query.type == "精品歌单") {
    get_highqualityTags();
    get_highquality();
  } else if (route.query.type == "推荐歌单") {
    get_recommend();
  } else if (route.query.type == "新专速递") {
    get_albumList();
  } else if (route.query.type == "新歌速递") {
    get_topSong();
  } else if (route.query.type == "最新MV") {
    get_newMv();
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
// 点击新歌速递标签
const tagClick1 = (val) => {
  switch (val) {
    case "华语":
      newSongParams.value.type = 7;
      newSongParams.value.name = "华语";
      break;
    case "欧美":
      newSongParams.value.type = 96;
      newSongParams.value.name = "欧美";
      break;
    case "日本":
      newSongParams.value.type = 8;
      newSongParams.value.name = "日本";
      break;
    case "韩国":
      newSongParams.value.type = 16;
      newSongParams.value.name = "韩国";
      break;
    case "全部":
      newSongParams.value.type = 0;
      newSongParams.value.name = "全部";
      break;
  }
  get_topSong();

};
// 点击最新MV标签
const tagClick2 = (val) => {
  switch (val) {
    case "内地":
      newMvParams.value.area = "内地";
      break;
    case "港台":
      newMvParams.value.area = "港台";
      break;
    case "欧美":
      newMvParams.value.area = "欧美";
      break;
    case "日本":
      newMvParams.value.area = "日本";
      break;
    case "韩国":
      newMvParams.value.area = "韩国";
      break;
  }
  get_newMv();
};

// 加载更多
const loadMore = () => {
  if (route.query.type == "精品歌单") {
    get_highquality();
  }
  if (route.query.type == "新专速递") {
    albumListParams.value.limit += 20;
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
