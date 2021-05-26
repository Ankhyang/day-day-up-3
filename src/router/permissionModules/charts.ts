/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-26 16:12:48
 * @LastEditTime: 2021-05-26 17:53:11
 * @LastEditors: yangzai
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const chartsRouter: Array<RouteRecordRaw> = [
    {
        path: '/charts',
        component: Layout,
        name: 'Charts',
        meta: {
            title: 'charts',
            icon: '#iconchart1'
        },
        children: [
            {
                path: 'bar-chart',
                name: 'BarChartDemo',
                component: () => import('@/views/charts/BarChartDemo.vue'),
                meta: {
                    title: 'barChart',
                    noCache: true
                }
            }
        ]
    }
]
export default chartsRouter