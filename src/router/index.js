import {createRouter, createWebHashHistory} from 'vue-router'
import routers from "./mock";
const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/layout/index.vue'),
            meta: {
                index: 1
            },
            children: routers.children
        }
    ]
})

export default router