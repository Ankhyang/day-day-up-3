const obj = {
    title: '使用技巧',
    children: [{
        path: '/about_proxy',
        name: 'about_proxy',
        title: '关于proxy的使用',
        component: () => import('@/views/skills/about_proxy.vue')
    }]
}

export default obj