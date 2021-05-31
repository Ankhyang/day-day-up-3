/*
 * @Description: 权限
 * @Author: yangzai
 * @Date: 2021-05-17 09:57:07
 * @LastEditTime: 2021-05-31 17:48:44
 * @LastEditors: yangzai
 */
import NProgress from 'nprogress'
import "nprogress/nprogress.css"

import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
import { useStore } from '@/store'
import { UserActionTypes } from '@/store/modules/user/action-type'
import { PermissionActionType } from '@/store/modules/permission/action-type'
import { ElMessage } from 'element-plus'
import whitelist from './config/default/whitelist'

// 隐藏进度环
NProgress.configure({ showSpinner: false })

router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
    NProgress.start()
    const store = useStore()
    if(store.state.user.token) {
        if(to.path === '/login') {
            // 已登录， 跳转主界面
            next({ path: '/' })
            NProgress.done()
        }else{
            if(store.state.user.roles.length === 0) {
                try{
                    await store.dispatch(UserActionTypes.ACTION_GET_USER_INFO, undefined)
                    const roles = store.state.user.roles || ['admin', 'editor']
                    store.dispatch(PermissionActionType.ACTION_SET_ROUTES, roles)
                    store.state.permission.dynamicRoutes.forEach(route => {
                        router.addRoute(route)
                    })
                    // replace: true只是一个设置信息，告诉VUE本次操作后，不能通过浏览器后退按钮，返回前一个路由
                    next({ ...to, replace: true })
                }catch(err) {
                    store.dispatch(UserActionTypes.ACTION_RESET_TOKEN, undefined)
                    ElMessage.error(err || 'Has Error')
                    // next(`/login?redirect=${to.path}`)
                    next({ path: '/' })
                    NProgress.done()
                }
            }else{
                next()
            }
        }
    }else{
        if(whitelist.includes(to.path)) {
            next()
        }else{
            // next(`login?redirect=${to.path}`)
            next({ path: '/' })
            NProgress.done()
        }
    }
})

router.afterEach((to: RouteLocationNormalized) => {
    NProgress.done()
})