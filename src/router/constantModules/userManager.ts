/*
 * @Description: 用户管理相关路由
 * @Author: yangzai
 * @Date: 2021-05-18 10:50:29
 * @LastEditTime: 2021-05-25 09:54:15
 * @LastEditors: yangzai
 */
import { RouteRecordRaw } from 'vue-router'

const UserManagerRouter: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "userManager" */'@/views/user-manager/login/index.vue')
    }
]

export default UserManagerRouter