const obj = {
    title: '高阶函数',
    children: [
        {
            path: '/cache_func',
            name: 'cache_func', 
            title: '缓存函数',
            component: () => import('@/views/higher_order_funcs/cache_func.vue')
        },
        {
            path: '/curry_func',
            name: 'curry_func', 
            title: '柯里化函数',
            component: () => import('@/views/higher_order_funcs/curry_func.vue')
        },
        {
            path: '/inertia_func',
            name: 'inertia_func', 
            title: '惰性载入函数',
            component: () => import('@/views/higher_order_funcs/inertia_func.vue')
        },
        {
            path: '/partial_func',
            name: 'partial_func', 
            title: '偏函数',
            component: () => import('@/views/higher_order_funcs/partial_func.vue')
        }
    ]
}

export default obj