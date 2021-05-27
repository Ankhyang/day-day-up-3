/*
 * @Description: 权限
 * @Author: yangzai
 * @Date: 2021-05-17 09:57:07
 * @LastEditTime: 2021-05-27 11:14:06
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
                    
                }catch(err) {

                }
            }else{
                next()
            }
        }
    }else{
        if(whitelist.includes(to.path)) {
            next()
        }else{
            next(`login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach((to: RouteLocationNormalized) => {
    NProgress.done()
})