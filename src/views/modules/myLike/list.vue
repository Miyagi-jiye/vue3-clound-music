<template>
  <div :style="`height:${viewH}px;overflow-y:scroll`" @scroll="handleScroll" class="out">
    <div :style="`height:${scrollH}px`" class="list">
      <div class="item_box" :style="`transform:translateY(${offsetY}px)`">
        <div class="item vfor" :style="`height: ${itemH}px`" v-for="(item, index) of list" :key="index">

          <div class="left">{{index+1}}</div>
          <img v-lazy="item.al.picUrl+'?param=50y50'" :alt="'歌曲ID='+item.id" class="img hidden-less-400">
          <div class="center">
            <div class="top">
              <p>{{item.name}}</p>
              <p v-if="item.alia[0]">（{{item.alia[0]}}）</p>
            </div>
            <div class="bottom">
              <SongListTag :mySongData="item" />
              <div class="artist">
                <p v-for="ar in item.ar" class="ar">{{ar.name}}</p>
              </div>
              <p class="al">{{item.al.name}}</p>
            </div>
          </div>
          <div class="right">
            <icon-play theme="outline" size="20" class="play" @click="play(item)" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SongListTag from "@/components/SongListTag.vue";//歌曲列表tag

export default {
  name: "virtualList",
  props: {
    data: Array,   // 列表总数据
    viewH: {
      type: Number,
      default: document.documentElement.clientHeight
    }, // 外部高度
    itemH: Number, // 单项高度
  },
  data() {
    return {
      scrollH: '', // 整个滚动列表高度
      list: [],    // 每次显示的数据
      showNum: '',
      offsetY: '',// 动态偏移量- 外层的盒子进行滚动设置
      lastTime: '',
    }
  },
  mounted() {
    // 初始化计算
    this.scrollH = this.data.length * this.itemH;
    // 计算可视化高度一次能装几个列表, 多设置几个防止滚动时候直接替换
    this.showNum = Math.floor(this.viewH / this.itemH) + 4;
    // 默认展示几个
    this.list = this.data.slice(0, this.showNum);
    this.lastTime = new Date().getTime();
  },
  methods: {
    handleScroll(e) {
      if (new Date().getTime() - this.lastTime > 10) {
        let scrollTop = e.target.scrollTop; // 滚动条的宽度
        // 每一次滚动后根据scrollTop值获取一个可以整除itemH结果进行偏移
        // 例如: 滚动的scrllTop = 1220  1220 % this.itemH = 20  offsetY = 1200
        this.offsetY = scrollTop - (scrollTop % this.itemH);
        console.log(scrollTop, scrollTop % this.itemH);
        this.list = this.data.slice(
          Math.floor(scrollTop / this.itemH),  // 计算卷入了多少条
          Math.floor(scrollTop / this.itemH) + this.showNum
        )
        this.lastTime = new Date().getTime();
      }
    }
  },
  components: {
    SongListTag
  }
}
</script>

<style lang="less" scoped>
// 激活歌曲
.activeSong {
  color: #16da92 !important;
  background-color: var(--my-hover-background-color) !important;
}

.myLike {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
  // padding: 20px;

  .vfor {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;

    &:hover {
      background-color: var(--my-hover-background-color);
      border-radius: 4px;
    }

    .left {
      width: 30px;
      color: #999;
    }

    .img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      margin-right: 10px;
      margin-left: 10px;
      border-radius: 4px;
      box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 15%);
    }

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

    .right {
      // width: 80px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end; //右对齐
      gap: 4px;
      font-size: 14px;
      color: #6a6a6a;

      .play {
        cursor: pointer;

        &:hover {
          color: #34d399;
        }
      }
    }
  }
}
</style>