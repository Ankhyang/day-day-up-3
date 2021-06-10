/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-25 14:37:00
 * @LastEditTime: 2021-06-10 11:21:46
 * @LastEditors: yangzai
 */
import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { PermissionState } from './state'
import { Mutations } from './mutations'
import { PermissionMutationType } from './mutation-type'
import { PermissionActionType } from './action-type'
import { RouteRecordRaw } from 'vue-router'
import { asyncRoutes } from '@/router'

type AugmentedActionContext = {
    commit<K extends keyof Mutations> (
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<PermissionState, RootState>, 'commit'>

// 判断当前路由是否有权限
const hasPermission = (roles: string[], route: RouteRecordRaw) => {
    if(route.meta && route.meta.roles) {
        return roles.some(role => {
            if(route.meta?.roles !== undefined) {
                return (route.meta.roles as string[]).includes(role)
            }
        })
    } else{
        return true
    }
}

// 过滤去权限的数据
export const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]): RouteRecordRaw[] => {
    const res: RouteRecordRaw[] = []
    routes.forEach(route => {
        const r = { ...route }
        if(hasPermission(roles, r)) {
            if(r.children) {
                r.children = filterAsyncRoutes(r.children, roles)
            }
            res.push(r)
        }
    })
    return res
}

export interface Actions {
    [PermissionActionType.ACTION_SET_ROUTES](
        { commit }: AugmentedActionContext,
        roles: string[]
    ): void
}

export const actions: ActionTree<PermissionState, RootState> & Actions = {
    [PermissionActionType.ACTION_SET_ROUTES](
        { commit }: AugmentedActionContext,
        roles: string[]
    ) {
        let accessedRoutes
        if(roles.includes('admin')) {
            accessedRoutes = asyncRoutes
        }else{
            accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }
        commit(PermissionMutationType.SET_ROUTES, accessedRoutes)
    }
}