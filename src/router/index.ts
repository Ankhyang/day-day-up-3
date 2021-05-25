/*
 * @Description: 路由配置
 * @Author: yangzai
 * @Date: 2021-05-18 09:50:49
 * @LastEditTime: 2021-05-25 09:53:39
 * @LastEditors: yangzai
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Lauyout from '@/layout/index.vue'

const constantFiles = require.context('./constantModules', true, /\.ts$/)
let constantModules: Array<RouteRecordRaw> = []
constantFiles.keys().forEach(key => {
    if(key === './index.ts') return
    constantModules = constantModules.concat(constantFiles(key).default)
});

const asyncFiles = require.context('./permissionModules', true, /\.ts$/)
let permissionModules: Array<RouteRecordRaw> = []
asyncFiles.keys().forEach(key => {
    if(key === './index.ts') return
    permissionModules = permissionModules.concat(asyncFiles(key).default)
})

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/redirect',
        component: Lauyout,
        meta: {hidde: true},
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import(/* webpackChunkName: "redirect" */'@/views/redirect/index.vue')
            }
        ]
    },
    {
        path: '/',
        component: Lauyout,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                meta: {
                    title: 'dashboard',
                    icon: '#icondashboard',
                    affix: true
                }
            }
        ]
    },
    ...constantModules
]

export const asyncRoutes: Array<RouteRecordRaw> = [
    ...permissionModules
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export function resetRouter() {
    const newRouter = router;
    (router as any).matcher = (newRouter as any).matcher
}

export default router