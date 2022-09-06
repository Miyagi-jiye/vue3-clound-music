<template>
  <div class="filter">
    <div class="top">
      <div class="area">
        <el-button round size="small" class="type-item" :class="{ active: params.area == item.name }"
          v-for="item in options.area" @click="areaClick(item.name)">
          {{ item.name }}
        </el-button>
      </div>
      <div class="type">
        <el-button round size="small" class="type-item" :class="{ active: params.type == item.name }"
          v-for="item in options.type" @click="typeClick(item.name)">
          {{ item.name }}
        </el-button>
      </div>
      <div class="order">
        <el-button round size="small" class="type-item" :class="{ active: params.order == item.name }"
          v-for="item in options.order" @click="orderClick(item.name)">
          {{ item.name }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"
// area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 
// type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
// order: 排序,可选值为上升最快,最热,最新,不填则为上升最快
// limit: 取出数量 , 默认为 30
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
const emit = defineEmits(['clickEmit'])

const params = reactive({
  type: "全部",
  area: "全部",
  order: "上升最快"
})

const options = reactive({
  type: [
    { name: '全部' },
    { name: '官方版' },
    { name: "原声" },
    { name: "现场版" },
    { name: "网易出品" }
  ],
  area: [
    { name: '全部' },
    { name: '内地' },
    { name: '港台' },
    { name: '欧美' },
    { name: '日本' },
    { name: '韩国' },
  ],
  order: [
    { name: '上升最快' },
    { name: '最热' },
    { name: '最新' },
  ]
})

// 筛选类型
function typeClick(item) {
  params.type = item
  emit('clickEmit', params)
}
// 筛选地区
function areaClick(item) {
  params.area = item
  emit('clickEmit', params)
}
// 筛选排序
function orderClick(item) {
  params.order = item
  emit('clickEmit', params)
}
</script>

<style lang="less" scoped>
:deep(.el-button+.el-button) {
  margin-left: 0 !important;
}

.filter {
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

    .order {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      // display: grid;
      // grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    }
  }
}

.active {
  color: #FFF;
  background-color: #34d399;
}
</style>