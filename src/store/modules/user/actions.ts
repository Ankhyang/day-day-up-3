/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-20 10:38:25
 * @LastEditTime: 2021-05-20 13:59:48
 * @LastEditors: yangzai
 */
import { ActionContext, ActionTree } from 'vuex'
import { UserActionTypes } from './action-type'
import { UserMutationTypes } from './mutation-type'
import { Mutations } from './mutations'
import { UserState } from './state'

import type { state } from './state'
import { RootState } from '@/store'
export {state} 

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
    [UserActionTypes.ACTION_RESET_LOGIN](
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
    [UserActionTypes.ACTION_RESET_LOGIN]( { commit }: AugumentedActionContext) {

    },
    [UserActionTypes.ACTION_LOGIN_OUT]({ commit }: AugumentedActionContext) {

    },
    [UserActionTypes.ACTION_GET_USER_INFO]({ commit }: AugumentedActionContext) {

    },
    [UserActionTypes.ACTION_CHANGE_ROLES]({ commit }: AugumentedActionContext) {
        
    }
}