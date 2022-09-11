<template>
  <div>
    <el-popover v-model:visible="showSearchView" placement="bottom" popper-style="max-width:auto;padding:0;"
      width="300px">
      <template #reference>
        <el-input v-model="searchKeyword" placeholder="搜索音乐、MV、歌单" :prefix-icon="Search" :clearable='true'
          @focus="showSearchView = true" @focusout="showSearchView = false" @input="searchInput"
          @keyup.enter.native="routerPush('searchDetail',searchKeyword)" />
      </template>
      <template #default>
        <div style="height: 400px;">
          <el-scrollbar>
            <!-- 输入框为空时显示 -->
            <div v-show="showHot==true">
              <div class="searchTitle">热门搜索</div>
              <div>
                <div v-for="(item, index) in searchHot" :key="item.searchWord" class="hotItem"
                  @click="hotClick(item.searchWord)">
                  <div class="hover">
                    <span style="margin-right:4px;">{{ index + 1 }}.</span>
                    <span>{{ item.searchWord }}</span>
                  </div>
                  <div style="color:#fdb6b6">{{ playCountFilter(item.score) }}</div>
                </div>
              </div>
            </div>
            <!-- 输入框有值时显示 -->
            <div v-show="showHot==false">
              <div v-if="suggestData">
                <div v-for="order in suggestData.order">
                  <div class="searchTitle">{{ getTitle(order) }}</div>
                  <!-- 单曲 -->
                  <div v-for="item in suggestData.songs" :key="item.id" v-show="order === 'songs'" class="searchItem "
                    @click="playMusic(item.id)">
                    <span style="color:#34d399" class="truncate">{{ item.name }}</span>
                    <span style="margin-left:8px" class="truncate"> - {{ item.artists.at(0)?.name }}</span>
                  </div>
                  <!-- 专辑 -->
                  <div v-for="item in suggestData.albums" :key="item.id" v-show="order === 'albums'" class="searchItem "
                    @click="routerPush('albumDetail', item.id)">
                    <span style="color:#34d399" class="truncate">{{ item.name }}</span>
                    <span style="margin-left:8px" class="truncate"> - {{ item.artist.name }}</span>
                  </div>
                  <!-- 歌手 -->
                  <div v-for="item in suggestData.artists" :key="item.id" v-show="order === 'artists'"
                    class="searchItem " @click="routerPush('artistDetail', item.id)">
                    <el-avatar size="small" :src="item.img1v1Url" class="truncate" />
                    <span style="color:#34d399;margin-left:8px" class="truncate">{{ item.name }}</span>
                  </div>
                  <!-- 歌单 -->
                  <div v-for="item in suggestData.playlists" :key="item.id" v-show="order === 'playlists'"
                    class="searchItem " @click="routerPush('playlist',item.id)">
                    <el-avatar size="small" :src="item.coverImgUrl" class="truncate" />
                    <div style="color:#34d399;margin-left:8px;" class="truncate">{{ item.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";//解决state数据解构丢失响应式的问题
import { useSearchStore } from "@/pinia/module/search.js";//状态管理暴露出的store方法
import { Search } from '@icon-park/vue-next'//字节跳动图标组件
import { useRouter } from "vue-router";
import { playCountFilter } from "@/utils/playCountFilter.js"//过滤播放量
import { debounce } from "@/utils/debounce.js"
import useStore from "@/pinia/index.js"
const { Playlist } = useStore()

const router = useRouter()

const { showSearchView, searchKeyword, showHot, showSuggest, searchHot, suggestData } = storeToRefs(useSearchStore())
const { get_searchSuggest, get_searchHotDetail, get_songDetail } = useSearchStore()//获取搜索建议，热门搜索详情，函数或方法不会丢失响应式

// 初始化获取热门搜索详情
get_searchHotDetail()

// 路由跳转到详情页面
const routerPush = (name, id) => {
  showSearchView.value = false//关闭搜索建议
  router.push({ name: name, params: { id: id }, query: { id: id } })
}
// 播放点击音乐，拿到歌曲id，获取歌曲详情，添加到播放列表，改变播放对象
const playMusic = async (id) => {
  const item = await get_songDetail(id)
  Playlist.change_playMusic(item)
  Playlist.push_toPlayList(item)
}
// 点击热门推荐，获取搜索建议
const hotClick = async (keyword) => {
  searchKeyword.value = keyword
  await get_searchSuggest()
  showSearchView.value = true
}
// 动态标题
const getTitle = (name) => {
  switch (name) {
    case 'songs':
      return '单曲';
    case 'albums':
      return '专辑';
    case 'artists':
      return '歌手';
    case 'playlists':
      return '歌单';
    default:
      return name;
  }
}
// 输入框输入触发事件
const searchInput = debounce(() => {
  get_searchSuggest()
}, 1000, false)//初始触发立即执行一次，后面每1000毫秒执行一次


</script>

<style lang="less" scoped>
.el-input {
  width: 200px;
}

.hotItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  font-size: 14px;
  padding: 4px 12px;

  &:hover {
    background-color: rgba(153, 153, 153, 0.164);
  }
}

.hover {
  // color: #999;
  cursor: pointer;

  &:hover {
    color: #34d399;
  }
}

.searchTitle {
  font-size: 16px;
  padding: 8px 12px;
  font-weight: 600;
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
}

.searchItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  padding: 4px 12px;
  cursor: pointer;

  &:hover {
    background-color: #e5e7eb;
  }
}

// 溢出隐藏不换行
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>