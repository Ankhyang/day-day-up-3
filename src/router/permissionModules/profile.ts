/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghuan
 * @Date: 2021-08-26 16:23:36
 * @LastEditors: yanghuan
 * @LastEditTime: 2021-08-26 16:28:49
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const ProfileRouter: Array<RouteRecordRaw> = [
    {
        path: '/profile',
        component: Layout,
        redirect: '/profile/index',
        meta: {
            hidden: true
        },
        children: [
            {
                path: 'index',
                component: () => import(/*webpackChunkName: "profile" */ '@/views/profile/Index.vue'),
                name: 'Profile',
                meta: {
                    title: 'profile',
                    icon: 'user',
                    noCache: true
                }
            }
        ]
    }
]

export default ProfileRouter