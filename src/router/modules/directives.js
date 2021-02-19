const obj = {
    title: '自定义指令',
    children: [{
        path: '/custome_directives',
        name: 'custome_directives',
        title: '自定义指令',
        component: () => import('@/views/custome_directives/index.vue')
    }]
}

export default obj