const obj = {
    title: '样式特效',
    children: [{
        path: '/content_attr',
        name: 'content_attr',
        title: '属性值运用',
        component: () => import('@/views/css/content_attr.vue')
    },
    {
        path: '/css_border',
        name: 'css_border',
        title: '边框',
        component: () => import('@/views/css/css_border.vue')
    },
    {
        path: '/content_floating_ball',
        name: 'content_floating_ball',
        title: '进度悬浮球',
        component: () => import('@/views/css/content_floating_ball.vue')
    }]
}

export default obj
