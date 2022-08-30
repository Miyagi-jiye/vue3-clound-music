<template>
  <div class="comments">
    <!-- 发布评论 -->
    <div class="comment-input">
      <div class="box" contenteditable="true">说说你的看法吧</div>
      <div class="button">
        <div>
          <p>@</p>
          <p>#</p>
        </div>
        <div>
          <icon-smiling-face theme="outline" size="22" title="表情" class="icon" />
          <el-button round type="primary" size="small">发表评论</el-button>
        </div>
      </div>
    </div>
    <!-- 热门评论 -->
    <div class="comment-hot">
      <p class="title">
        <icon-fire theme="two-tone" size="16" :fill="['#d31427', '#ff0021']" strokeLinejoin="miter" />
        热门评论
      </p>
      <div class="grid">
        <div class="box" v-for="item in hotComments" :key="item.user.userId">
          <div class="left">
            <img v-img-lazy="item.user.avatarUrl + '?param=50y50'" :alt="'用户ID=' + item.user.userId">
          </div>
          <div class="right">
            <div class="top">
              <div class="column">
                <div class="nikename">
                  <div class="vip">
                    <p>{{  item.user.nickname  }}</p>
                    <icon-vip-one v-show="item.user.vipType !== 0" theme="outline" size="14" fill="#34d399" />
                  </div>
                  <icon-share-three theme="outline" size="14" class="share" />
                </div>
                <p>{{  timestampToTime(item.time)  }}</p>
              </div>
              <span class="content">{{  item.content  }}</span>
            </div>
            <div class="row">
              <div>
                <icon-thumbs-up theme="outline" size="16" />
                <p>{{  item.likedCount  }}</p>
              </div>
              <div>
                <icon-comment theme="outline" size="16" />
                <p>评论</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 全部评论 -->
    <div class="comment-all">
      <p class="title">全部评论</p>
      <div class="box" v-for="item in comments" :key="item.user.userId">
        <div class="left">
          <img v-img-lazy="item.user.avatarUrl + '?param=50y50'" :alt="'用户ID=' + item.user.userId">
        </div>
        <div class="right">
          <div class="column">
            <div class="nikename">
              <div class="vip">
                <p>{{  item.user.nickname  }}</p>
                <icon-vip-one v-show="item.user.vipType !== 0" theme="outline" size="14" fill="#34d399" />
              </div>
              <icon-share-three theme="outline" size="14" class="share" />
            </div>
            <p>{{  timestampToTime(item.time)  }}</p>
          </div>
          <span class="content">{{  item.content  }}</span>
          <div class="row">
            <div>
              <icon-thumbs-up theme="outline" size="16" />
              <p>{{  item.likedCount  }}</p>
            </div>
            <div>
              <icon-comment theme="outline" size="16" />
              <p>评论</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const prop = defineProps({
  comments: {
    type: Array,
    default: () => []
  },
  hotComments: {
    type: Array,
    default: () => []
  }
})
// 时间戳：1637244864707
/* 时间戳转换为时间 */
function timestampToTime(timestamp) {
  timestamp = timestamp ? timestamp : null;
  let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
}

console.log(prop.comments, prop.hotComments);
</script>

<style lang="less" scoped>
.comments {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 4px;
  box-sizing: border-box;


  .comment-input {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .title {
      font-size: 16px;
      font-weight: bold;
    }

    .box {
      width: 100%;
      height: 80px;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #ececec;
      border-radius: 4px;
      padding: 10px;
      resize: none;
      outline: none;
      overflow: auto;
      line-height: 1.2; //行间距
      // letter-spacing: 2px; //字间距
      font-size: 14px;
      box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
    }

    .button {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      font-size: 18px;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        font-weight: bold;

        p {
          cursor: pointer;
        }

        .icon {
          cursor: pointer;
          color: #34d399;
        }
      }


    }
  }

  .comment-hot {

    .title {
      font-weight: bold;
      border-bottom: 1px solid #10161a4d;
      padding: 10px 0;
      margin-bottom: 10px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;

      .box {
        display: flex;
        flex-direction: row;
        padding: 10px;
        gap: 15px;
        font-size: 14px;
        box-sizing: border-box;
        border-radius: 4px;
        background-color: #ffffff;
        box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;

        .left {
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px;
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;

          .top {
            display: flex;
            flex-direction: column;

            .column {
              display: flex;
              flex-direction: column;
              gap: 4px;
              color: #6b7280;

              .nikename {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                .vip {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 8px;

                  p {
                    cursor: pointer;

                    &:hover {
                      color: #34d399;
                    }
                  }
                }

                .share {
                  cursor: pointer;

                  &:hover {
                    color: #34d399;
                  }
                }
              }
            }

            .content {
              margin: 10px 0;
              line-height: 1.2;
            }
          }

          .row {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;
            color: #6b7280;

            div {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 4px;

              &:nth-child(1) {
                cursor: pointer;

                &:hover {
                  color: #34d399;
                }
              }

              &:nth-child(2) {
                cursor: pointer;

                &:hover {
                  color: #34d399;
                }
              }
            }
          }
        }
      }
    }
  }

  .comment-all {

    .title {
      font-weight: bold;
      border-bottom: 1px solid #10161a4d;
      padding: 10px 0;
    }

    .box {
      display: flex;
      flex-direction: row;
      padding: 10px;
      gap: 15px;
      font-size: 14px;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 14px 0;
      background-color: #ffffff;
      box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;

      .left {
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        flex: 1;

        .column {
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: #6b7280;

          .nikename {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .vip {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 8px;

              p {
                cursor: pointer;

                &:hover {
                  color: #34d399;
                }
              }
            }

            .share {
              cursor: pointer;

              &:hover {
                color: #34d399;
              }
            }
          }
        }

        .content {
          margin: 10px 0;
          line-height: 1.2;
        }

        .row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          color: #6b7280;

          div {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 4px;

            &:nth-child(1) {
              cursor: pointer;

              &:hover {
                color: #34d399;
              }
            }

            &:nth-child(2) {
              cursor: pointer;

              &:hover {
                color: #34d399;
              }
            }
          }
        }
      }
    }

  }
}
</style>