/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghuan
 * @Date: 2021-08-25 14:27:34
 * @LastEditors: yanghuan
 * @LastEditTime: 2021-08-25 17:27:50
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const errorRouter: Array<RouteRecordRaw> = [
    {
        path: '/error',
        component: Layout,
        redirect: 'no-redirect',
        meta: {
            title: 'errorPages',
            icon: '#icon404'
        },
        children: [
            {
                path: '401',
                name: '401Page',
                component: () => import(/*webpackChunkName: "error-page-401" */ '@/views/error-page/401.vue'),
                meta: {
                    title: 'page401',
                    noCache: true
                }
            },
            {
                path: '404',
                name: '404Page',
                component: () => import(/*webpackChunkName: "error-pahe-404" */ '@/views/error-page/404.vue'),
                meta: {
                    title: 'page404',
                    noCache: true
                }
            }
        ]
    }
]

export default errorRouter