import { RouteLocationNormalized } from 'vue-router'

export interface TagView extends Partial<RouteLocationNormalized> {
    title?: string
}

export interface TagsViewState {
    visitedViews: TagView[], // 使用接口来表示数组
    cachedViews: (string | undefined)[] // 多类型数组
}

export const state: TagsViewState = {
    visitedViews: [],
    cachedViews: []
}