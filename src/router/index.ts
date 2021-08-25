/*
 * @Description: 路由配置
 * @Author: yangzai
 * @Date: 2021-05-18 09:50:49
 * @LastEditTime: 2021-08-25 14:48:02
 * @LastEditors: yanghuan
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

// 不需要动态判断权限的路由，如登录页、404、等通用页面
const constantFiles = require.context('./constantModules', true, /\.ts$/)
let constantModules: Array<RouteRecordRaw> = []
constantFiles.keys().forEach(key => {
    if(key === './index.ts') return
    constantModules = constantModules.concat(constantFiles(key).default)
});

// 需要动态判断权限并通过 addRoutes 动态添加的页面
const asyncFiles = require.context('./permissionModules', true, /\.ts$/)
let permissionModules: Array<RouteRecordRaw> = []

asyncFiles.keys().forEach(key => {
    if(key === './index.ts') return
    permissionModules = permissionModules.concat(asyncFiles(key).default)
})

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/redirect',
        component: Layout,
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
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */'@/views/dashboard/index.vue'),
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

// 暴露异步路由，根据用户角色权限过滤
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