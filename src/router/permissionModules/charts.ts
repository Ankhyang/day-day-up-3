/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-26 16:12:48
 * @LastEditTime: 2021-06-09 09:33:40
 * @LastEditors: yangzai
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const chartsRouter: Array<RouteRecordRaw> = [
    {
        path: '/charts',
        component: Layout,
        redirect: 'no-redirect',
        name: 'Charts',
        meta: {
            title: 'charts',
            icon: '#iconchart1',
            // roles: ['admin', 'editor'],
        },
        children: [
            {
                path: 'bar-chart',
                name: 'BarChartDemo',
                component: () => import(/* webpackChunkName: "BarChart" */ '@/views/charts/BarChartDemo.vue'),
                meta: {
                    title: 'barChart',
                    noCache: true
                }
            },
            {
                path: 'line-chart',
                name: 'LineChartDemo',
                component: () => import(/* webpackChunkName: "BarChart" */ '@/views/charts/LineChartDemo.vue'),
                meta: {
                    title: 'lineChart',
                    noCache: true
                }
            }
        ]
    }
]
export default chartsRouter