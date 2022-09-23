<template>
  <div class="song">
    <div class="center">
      <div class="top">
        <p>{{item.name}}</p>
        <p v-if="item.al[0]">（{{item.al[0]}}）</p>
      </div>
      <div class="bottom">
        <!-- <SongListTag :mySongData="item" /> -->
        <div class="artist">
          <p v-for="ar in item.ar" class="ar">{{ar.name}}</p>
        </div>
        <p class="al">{{item.al.name}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  item: {
    type: Object,
    required: true,
  },
})

</script>

<style lang="less" scoped>
.song {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  .center {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;

    .top {
      display: flex;
      flex-direction: row;
      font-size: 14px;

      p:nth-child(1) {
        white-space: nowrap;
      }

      p:nth-child(2) {
        color: #999;
        // 溢出省略号
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }

    .bottom {
      display: flex;
      flex-direction: row;
      align-items: center;

      .artist {
        display: flex;
        flex-direction: row;
        font-size: 12px;
        color: #6a6a6a;
        //英文字母显示不全
        line-height: 16px;
        // 不换行
        white-space: nowrap;

        // 除最后一个之外的
        .ar {
          &:hover {
            cursor: pointer;
          }

          &:not(:last-child):after {
            content: "/";
            display: inline;
            margin: 4px;
          }
        }
      }

      .al {
        font-size: 12px;
        color: #6a6a6a;
        //英文字母显示不全
        line-height: 16px;
        // 溢出省略号 
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

        &:hover {
          cursor: pointer;
        }

        &::before {
          content: "-";
          display: inline;
          margin: 8px;
        }
      }
    }
  }
}
</style>