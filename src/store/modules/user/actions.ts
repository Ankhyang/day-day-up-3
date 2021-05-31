/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-20 10:38:25
 * @LastEditTime: 2021-05-31 17:13:54
 * @LastEditors: yangzai
 */
import { ActionContext, ActionTree } from 'vuex'
import { UserActionTypes } from './action-type'
import { Mutations } from './mutations'
import { state, UserState } from './state'
import { userInfoRequest } from '@/apis/user'

import { RootState, useStore } from '@/store'
import { UserMutationTypes } from './mutation-type'


const userInfo = {
    token: '090293029302930293',
    name: 'Ankh',
    avatar: '',
    introduction: '我是账户管理员',
    roles: ['admin'],
    email: 'ankh22222@163.com'
}

type AugumentedActionContext = Omit<ActionContext<UserState, RootState>, 'commit'> & 
{
    commit<K extends keyof Mutations> (
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export interface Actions {
    [UserActionTypes.ACTION_LOGIN](
        { commit }: AugumentedActionContext,
        userInfo: { username: string, password: string } 
    ): void
    [UserActionTypes.ACTION_RESET_TOKEN](
        { commit }: AugumentedActionContext,
    ): void
    [UserActionTypes.ACTION_GET_USER_INFO](
        { commit }: AugumentedActionContext
    ): void
    [UserActionTypes.ACTION_CHANGE_ROLES](
        { commit }: AugumentedActionContext
    ): void
    [UserActionTypes.ACTION_LOGIN_OUT](
        { commit }: AugumentedActionContext
    ): void
}
export const actions: ActionTree<UserState, RootState> & Actions = {
    [UserActionTypes.ACTION_LOGIN]({ commit }: AugumentedActionContext, userInfo: { username: string, password: string }) {

    },
    [UserActionTypes.ACTION_RESET_TOKEN]( { commit }: AugumentedActionContext) {
        commit(UserMutationTypes.SET_TOKEN, '')
        commit(UserMutationTypes.SET_ROLES, [])
    },
    [UserActionTypes.ACTION_LOGIN_OUT]({ commit }: AugumentedActionContext) {
        
    },
    async [UserActionTypes.ACTION_GET_USER_INFO]({ commit }: AugumentedActionContext) {
        // if(state.token === '') {
        //     throw Error('token is undefined')
        // }
        // await userInfoRequest().then(res => {
            // if(res.code === 0) {
                commit(UserMutationTypes.SET_ROLES, userInfo.roles)
                commit(UserMutationTypes.SET_AVATAR, userInfo.avatar)
                commit(UserMutationTypes.SET_NAME, userInfo.name)
                commit(UserMutationTypes.SET_INTRODUCTION, userInfo.introduction)
                commit(UserMutationTypes.SET_EMAIL, userInfo.email)
            //     return res
            // }else{
            //     throw Error('Vertification failed, please LOgin again.')
            // }
        // })
    },
    [UserActionTypes.ACTION_CHANGE_ROLES]({ commit }: AugumentedActionContext) {
        
    }
}