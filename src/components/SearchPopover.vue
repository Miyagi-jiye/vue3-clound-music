<template>
  <div>
    <el-popover v-model:visible="showSearchView" placement="bottom" popper-style="max-width:auto;padding:0;"
      :width="200">
      <template #reference>
        <el-input v-model="searchKeyword" placeholder="搜索音乐、MV、歌单" :prefix-icon="Search" :clearable='true'
          @focus="showSearchView = true" @focusout="showSearchView = false" @input="searchInput" />
      </template>
      <template #default>
        <div style="height: 300px;">
          <el-scrollbar>
            <!-- 输入框为空时显示 -->
            <div v-if="showHot">
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
            <div v-else v-if="suggestData">
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
                <div v-for="item in suggestData.artists" :key="item.id" v-show="order === 'artists'" class="searchItem "
                  @click="routerPush('artistDetail', item.id)">
                  <el-avatar size="small" :src="item.img1v1Url" class="truncate" />
                  <span style="color:#34d399;margin-left:8px" class="truncate">{{ item.name }}</span>
                </div>
                <!-- 歌单 -->
                <div v-for="item in suggestData.playlists" :key="item.id" v-show="order === 'playlists'"
                  class="searchItem " @click="toPlayList(item.id)">
                  <el-avatar size="small" :src="item.coverImgUrl" class="truncate" />
                  <div style="color:#34d399;margin-left:8px;" class="truncate">{{ item.name }}</div>
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
import { onMounted } from "vue";
import { storeToRefs } from "pinia";//解决state数据解构丢失响应式的问题
import { useSearchStore } from "@/pinia/module/search.js";//状态管理暴露出的store方法
import { Search } from '@icon-park/vue-next'//字节跳动图标组件
import { useRouter } from "vue-router";
import { playCountFilter } from "@/utils/playCountFilter.js"//过滤播放量
import { debounce } from "@/utils/debounce.js"
import useStore from "@/pinia/index.js"
const { Playlist } = useStore()

const router = useRouter()

const { showSearchView, searchKeyword, showHot, searchHot, suggestData } = storeToRefs(useSearchStore())
const { get_searchSuggest, get_searchHotDetail, get_songDetail } = useSearchStore()//获取搜索建议，热门搜索详情，函数或方法不会丢失响应式

// 路由跳转到专辑页面
const routerPush = (name, id) => {
  router.push({ name: name, params: { id: id } })
}
// 路由跳转到歌单列表页
const toPlayList = async (id) => {
  await Playlist.get_songlistDetail(id)//歌单详情
  await Playlist.get_songlistComment(id)//歌单评论
  router.push({ name: 'playlist' })//跳转歌单详情页
  showSearchView.value = false;//关闭热门搜索
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

// 获取热门搜索详情
onMounted(async () => {
  await get_searchHotDetail()
})
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
  font-size: 12px;
  padding: 4px 8px;
}

.hover {
  // color: #999;
  cursor: pointer;

  &:hover {
    color: #34d399;
  }
}

.searchTitle {
  font-size: 14px;
  padding: 8px;
  font-weight: 600;
}

.searchItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    background-color: #e5e7eb;
  }
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>