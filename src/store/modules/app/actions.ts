/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-19 11:37:37
 * @LastEditTime: 2021-05-19 17:29:23
 * @LastEditors: yangzai
 */
import { ActionTree, ActionContext } from 'vuex'
import { AppMutationTypes } from './mutation-type'
import { AppActionTypes } from './action-type'
import { AppState } from './state'
import { DeviceType } from '@/constant/settings'
import { Mutations } from './mutations'
import { RootState } from '@/store'

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<AppState, RootState>, 'commit'>

export interface Actions {
    [AppActionTypes.ACTION_TOGGLE_SIDEBAR](
        { commit }: AugmentedActionContext,
        withoutAnimation: boolean
    ): void
}

export const actions: ActionTree<AppState, RootState> & Actions = {
    [AppActionTypes.ACTION_TOGGLE_SIDEBAR]({ commit }, withoutAnimation: boolean) {
        commit(AppMutationTypes.TOGGLE_SIDEBAR, withoutAnimation)
    }
}