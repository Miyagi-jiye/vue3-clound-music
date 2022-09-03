<template>
  <div class="artist">
    <div class="top">
      <div class="area">
        <el-button round size="small" class="type-item" :class="{ active: params.area == item.value }"
          v-for="item in options.area" @click="areaClick(item.value)">
          {{ item.name }}
        </el-button>
      </div>
      <div class="type">
        <el-button round size="small" class="type-item" :class="{ active: params.type == item.value }"
          v-for="item in options.type" @click="typeClick(item.value)">
          {{ item.name }}
        </el-button>
      </div>
      <div class="initial">
        <el-button round size="small" class="type-item" :class="{ active: params.initial == item.value }"
          v-for="item in options.initial" @click="initialClick(item.value)">
          {{ item.name }}
        </el-button>
      </div>
    </div>
    <div class="bottom">
      <div class="artistList" v-for="item in artistList" @click="toArtistDetail(item.id)" :key="item.id">
        <img class="img" v-img-lazy="item.picUrl + '?param=150y150'" :alt="'歌手ID=' + item.id" :key="item.id">
        <p class="name">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"

const prop = defineProps({
  artistList: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['clickEmit', 'routerEmit'])

const params = reactive({
  type: -1,
  area: -1,
  initial: -1
})

const options = reactive({
  type: [
    { name: '全部', value: -1 },
    { name: '男', value: 1 },
    { name: "女", value: 2 },
    { name: "乐队", value: 3 }
  ],
  area: [
    { name: '全部', value: -1 },
    { name: '华语', value: 7 },
    { name: '欧美', value: 96 },
    { name: '日本', value: 8 },
    { name: '韩国', value: 16 },
    { name: '其他', value: 0 },
  ],
  initial: [
    { value: "-1", name: '热门' },
    { value: 'a', name: 'A' },
    { value: 'b', name: 'B' },
    { value: 'c', name: 'C' },
    { value: 'd', name: 'D' },
    { value: 'e', name: 'E' },
    { value: 'f', name: 'F' },
    { value: 'g', name: 'G' },
    { value: 'h', name: 'H' },
    { value: 'i', name: 'I' },
    { value: 'j', name: 'J' },
    { value: 'k', name: 'K' },
    { value: 'l', name: 'L' },
    { value: 'm', name: 'M' },
    { value: 'n', name: 'N' },
    { value: 'o', name: 'O' },
    { value: 'p', name: 'P' },
    { value: 'q', name: 'Q' },
    { value: 'r', name: 'R' },
    { value: 's', name: 'S' },
    { value: 't', name: 'T' },
    { value: 'u', name: 'U' },
    { value: 'v', name: 'V' },
    { value: 'w', name: 'W' },
    { value: 'x', name: 'X' },
    { value: 'y', name: 'Y' },
    { value: 'z', name: 'Z' },
    { value: '0', name: '#' },
  ]
})

// 筛选男，女，乐队
function typeClick(e) {
  params.type = e
  emit('clickEmit', params)
}
// 筛选语种
function areaClick(e) {
  params.area = e
  emit('clickEmit', params)
}
// 筛选名称
function initialClick(e) {
  params.initial = e
  emit('clickEmit', params)
}
// 前往歌手详情页
function toArtistDetail(id) {
  emit("routerEmit", id)
}
</script>

<style lang="less" scoped>
:deep(.el-button+.el-button) {
  margin-left: 0 !important;
}

.artist {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;

  .top {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .type {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      // display: grid;
      // grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));

      &-item {
        width: 60px;
        /* height: 30px; */
        padding: 10px;
      }
    }

    .area {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      // display: grid;
      // grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    }

    .initial {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      // display: grid;
      // grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    }
  }

  .bottom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;

    .artistList {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        cursor: pointer;
      }

      .name {
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          color: #34d399;
        }
      }
    }
  }
}

.active {
  color: #FFF;
  background-color: #34d399;
}
</style>