<template>
  <div style="height:calc(100vh - 70px - 56px)">
    <el-auto-resizer>
      <template #default="{ height, width }">
        <el-table-v2 :columns="columns" :data="data" :width="width" :height="height" fixed :cache="2">
          <!-- 头部插槽 -->
          <!-- <template #header="{ cells,columns,headerIndex }">
            <span>=>{{columns}}=>{{headerIndex}}</span>
          </template> -->
          <!-- 行插槽 -->
          <template #row='props'>
            <Row :item="props.rowData" :index="props.rowIndex" />
          </template>
        </el-table-v2>
      </template>
    </el-auto-resizer>
  </div>
</template>

<script setup>
import Row from "@/views/modules/test/row.vue";
import { useMyLikeStore } from "@/pinia/module/myLike.js"
import { storeToRefs } from "pinia";

const { likeListSongs } = storeToRefs(useMyLikeStore())// 我喜欢

const generateColumns = (length = 10, props) =>
  Array.from({ length }).map(() => (
    {
      ...props,//列属性
      title: '我喜欢的音乐',//表头
      width: 150,//列宽
    }
  ))

const columns = generateColumns(1)
const data = likeListSongs.value//数据
</script>

<style lang="less" scoped>
:deep(.el-table-v2__row) {
  border-bottom: none;
  display: flex;
  align-items: normal;
  transition: none;
}
</style>
