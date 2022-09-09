import { defineStore } from "pinia";
import { useSearchSuggest, useSearch, useSearchDefault, useSearchHotDetail, useSongDetail } from "@/api/index.js";

export const useSearchStore = defineStore("search", {
    state: () => {
        return {
            showSearchView: false,//显示popover
            searchKeyword: '',//搜索关键字
            suggestData: {},//搜索建议
            searchHot: [],//热门搜索详情
            searchData: null
        }
    },
    getters: {
        // 判断输入关键字是否为空，返回布尔值
        showHot: (state) => {
            return state.searchKeyword == ''
        },
        // 判断搜索详情是否为空
        showSuggest: (state) => {
            if (JSON.stringify(state.suggestData) === '{}') {
                return true
            }
        }
    },
    actions: {
        // 获取搜索详情
        async get_searchSuggest() {
            const res = await useSearchSuggest(this.searchKeyword)
            this.suggestData = res.data.result
            console.log("获取搜索详情", res.data);
        },
        // 获取搜索建议
        async get_searchHotDetail() {
            const res = await useSearchHotDetail()
            this.searchHot = res.data.data
            console.log("获取搜索建议", res.data);
        },
        // 获取歌曲详情
        async get_songDetail(id) {
            const res = await useSongDetail(id)
            console.log("获取歌曲详情", res.data);
            return res.data.songs[0]
        },
    }
})
