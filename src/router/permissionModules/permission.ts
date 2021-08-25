/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghuan
 * @Date: 2021-08-25 16:55:34
 * @LastEditors: yanghuan
 * @LastEditTime: 2021-08-25 17:31:45
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const permissionRouter: Array<RouteRecordRaw> = [
    {
        path: '/permission',
        componnet: Layout,
        redirect: '/permission/directive',
        meta: {
            title: 'permission',
            icon: '#iconquanxian',
            roles: ['admin', 'editor'],
        },
        children: [
            {   
                path: 'page',
                component: () => import(/*webpackChunkName: "permission-page" */ '@/views/permission/page.vue'),
                name: 'PagePermission',
                meta: {
                    title: 'pagePermission',
                    roles: ['admin']
                }
            },
            {
                path: 'directive',
                component: () => import(/*webpackChunkName: "permission-directive" */ '@/views/permission/directive.vue'),
                name: 'DirectivePermission',
                meta: {
                    title: 'directivePermission'
                }
            },
            {
                path: 'role',
                component: () => import(/*webpackChunkName: "permission-role" */ '@/views/permission/role.vue'),
                name: 'RolePermission',
                meta: {
                    title: 'rolePermission',
                    roles: ['admin']
                }
            },
        ]
    }
]

export default permissionRouter