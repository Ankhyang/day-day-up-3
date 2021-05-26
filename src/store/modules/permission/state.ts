/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-25 14:36:12
 * @LastEditTime: 2021-05-26 11:33:48
 * @LastEditors: yangzai
 */
import { RouteRecordRaw } from 'vue-router'
export interface PermissionState {
    routes: RouteRecordRaw[]
    dynamicRoutes: RouteRecordRaw[]
}

export const state: PermissionState = {
    routes: [],
    dynamicRoutes: []
}