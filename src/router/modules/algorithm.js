const obj = {
    title: '算法',
    children: [{
        path: '/two_nums_sum',
        name: 'two_nums_sum',
        title: '两数之和',
        component: () => import('@/views/algorithm/two_nums_sum.vue')
    }]
}

export default obj