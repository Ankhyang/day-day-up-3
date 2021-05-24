/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-19 11:37:37
 * @LastEditTime: 2021-05-20 09:55:26
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
    [AppActionTypes.ACTION_CLOSE_SIDEBAR](
        { commit }: AugmentedActionContext,
        withoutAnimation: boolean
    ): void
    [AppActionTypes.ACTION_SET_LANGUAGE](
        { commit }: AugmentedActionContext,
        language: string
    ): void
    [AppActionTypes.ACTION_SET_SIZE](
        { commit }: AugmentedActionContext,
        size: string
    ):void
    [AppActionTypes.ACTION_TOGGLE_DEVICE](
        { commit }: AugmentedActionContext,
        device: DeviceType
    ): void
}

export const actions: ActionTree<AppState, RootState> & Actions = {
    [AppActionTypes.ACTION_TOGGLE_SIDEBAR]({ commit }, withoutAnimation: boolean) {
        commit(AppMutationTypes.TOGGLE_SIDEBAR, withoutAnimation)
    },
    [AppActionTypes.ACTION_CLOSE_SIDEBAR]({ commit }, withoutAnimation: boolean) {
        commit(AppMutationTypes.CLOSE_SIDEBAR, withoutAnimation)
    },
    [AppActionTypes.ACTION_SET_LANGUAGE]({ commit }, language: string) {
        commit(AppMutationTypes.SET_LANGUAGE, language)
    },
    [AppActionTypes.ACTION_SET_SIZE]({ commit }, size: string) {
        commit(AppMutationTypes.SET_SIZE, size)
    },
    [AppActionTypes.ACTION_TOGGLE_DEVICE]({ commit }, device: DeviceType) {
        commit(AppMutationTypes.TOGGLE_DEVICE, device)
    }
}