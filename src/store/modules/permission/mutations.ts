/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-25 14:36:45
 * @LastEditTime: 2021-08-25 14:45:43
 * @LastEditors: yanghuan
 */
import { MutationTree } from 'vuex'
import { PermissionState } from './state'
import { PermissionMutationType } from './mutation-type'
import { RouteRecordRaw } from 'vue-router'
import { constantRoutes } from '@/router'

export type Mutations<S = PermissionState> = {
    [PermissionMutationType.SET_ROUTES](state: S, routes: RouteRecordRaw[]): void
}

export const mutations: MutationTree<PermissionState> & Mutations = {
    [PermissionMutationType.SET_ROUTES](state: PermissionState, routes: RouteRecordRaw[]) {
        // 可见路由加上权限路由
        state.routes = constantRoutes.concat(routes)
        // 动态路由
        state.dynamicRoutes = routes
    }
}