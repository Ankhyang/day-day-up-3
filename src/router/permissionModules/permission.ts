/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghuan
 * @Date: 2021-08-25 16:55:34
 * @LastEditors: yanghuan
 * @LastEditTime: 2021-08-26 17:07:46
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const permissionRouter: Array<RouteRecordRaw> = [
    {
        path: '/permission',
        component: Layout,
        redirect: '/permission/page',
        meta: {
            title: 'permission',
            icon: '#iconquanxian',
            roles: ['admin', 'editor'],
            alwaysShow: true
        },
        children: [
            {   
                path: 'page',
                component: () => import(/*webpackChunkName: "permission-page" */ '@/views/permission/Page.vue'),
                name: 'PagePermission',
                meta: {
                    title: 'pagePermission',
                    roles: ['admin']
                }
            },
            {
                path: 'directive',
                component: () => import(/*webpackChunkName: "permission-directive" */ '@/views/permission/Directive.vue'),
                name: 'DirectivePermission',
                meta: {
                    title: 'directivePermission'
                }
            },
            {
                path: 'role',
                component: () => import(/*webpackChunkName: "permission-role" */ '@/views/permission/Role.vue'),
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