<template>
  <div class="dailySongs">
    <Info :myData="dailySongs" />
    <List :myData="dailySongs" />
  </div>
</template>

<script setup>
import Info from "@/views/modules/dailySongs/info.vue";
import List from '@/views/modules/dailySongs/list.vue';
import { useDiscoverStore } from "@/pinia/module/discover.js"
import { storeToRefs } from "pinia"

const { get_recommendSongs } = useDiscoverStore()
const { dailySongs, recommendReasons } = storeToRefs(useDiscoverStore())

await get_recommendSongs()// 获取每日推荐歌曲
</script>

<style scoped>

</style>