<template>
  <div class="Tag">
    <template v-if="show==true">
      <div class="vfor" v-for="item in myData" :key="item.id" :class="{'active':item.name==activeTag}"
        @click="activeTag=item.name">
        <div class="name">{{item.name}}</div>
      </div>
      <!-- 收起 -->
      <div class="vfor" @click="show=false">
        <div class="name">
          <icon-to-top theme="filled" size="18" fill="#34d399" :strokeWidth="3" />
          <p>收起</p>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="vfor" v-for="item in (myData.slice(0, prop.end))" :key="item.id"
        :class="{'active':item.name==activeTag}" @click="activeTag=item.name">
        <div class="name">{{item.name}}</div>
      </div>
      <!-- 全部 -->
      <div class="vfor" @click="show=true">
        <div class="name">
          <icon-all-application theme="filled" size="18" fill="#34d399" :strokeWidth="3" />
          <p>全部</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"

const prop = defineProps({
  myData: {
    type: Array,
    default: () => []
  },
  activeTag: {
    type: String,
  },
  end: {
    type: Number,
    default: 8
  }
})

const emit = defineEmits(['emitClick'])

const show = ref(false)// 是否展开

watch(() => prop.activeTag, (val) => {
  console.log("激活tag", val);
  emit('emitClick', val)
})
</script>

<style lang="less" scoped>
.Tag {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 10px;
  margin-bottom: 20px;

  .vfor {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35px;
    border-radius: 8px;
    background-color: #f5f5f5;
    cursor: pointer;

    &:hover {
      background-color: #e6e6e6;

      .name {
        color: #34d399;
      }
    }

    .name {
      font-size: 14px;
      font-weight: 800;
      color: #7a7a7b;
      // 水平居中
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
}

.active {
  background-color: #34d399 !important;

  .name {
    color: #fff !important;
  }
}
</style>