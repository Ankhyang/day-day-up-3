import {createRouter, createWebHashHistory} from 'vue-router'
const router = createRouter({
    history: createWebHashHistory, // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home'),
            meta: {
                index: 1
            }
        }
    ]
})