const obj = {
    title: '样式特效',
    children: [
    {
        path: '/css_border',
        name: 'css_border',
        title: '边框',
        component: () => import('@/views/css/css_border.vue')
    },
    {
        path: '/skeleton',
        name: 'skeleton',
        title: '骨架屏',
        component: () => import('@/views/css/skeleton.vue')
    },{
        path: '/content_attr',
        name: 'content_attr',
        title: '属性值运用',
        component: () => import('@/views/css/content_attr.vue')
    },
    {
        path: '/content_floating_ball',
        name: 'content_floating_ball',
        title: '进度悬浮球',
        component: () => import('@/views/css/content_floating_ball.vue')
    },
    {
        path: '/text_slide_in',
        name: 'text_slide_in',
        title: '文字缓慢渐入',
        component: () => import('@/views/css/text_slide_in.vue')
    },
    {
        path: '/css_transition',
        name: 'css_transition',
        title: 'transition过渡使用',
        component: () => import('@/views/css/css_transition.vue')
    },
    {
        path: '/magnifying_glass',
        name: 'magnifying_glass',
        title: '放大镜效果',
        component: () => import('@/views/css/magnifying_glass.vue')
    },
    {
        path: '/punk_btn',
        name: 'punk_btn',
        title: '赛博朋克故障风按钮',
        component: () => import('@/views/css/punk_btn.vue')
    }]}

export default obj
