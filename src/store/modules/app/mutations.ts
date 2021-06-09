/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-19 11:37:53
 * @LastEditTime: 2021-06-08 15:16:15
 * @LastEditors: yangzai
 */
import { MutationTree } from 'vuex'
import { AppState } from './state'
import { DeviceType } from '@/constant/settings'
import { AppMutationTypes } from './mutation-type'
import { setLanguage, setSidebarStatus, setSize } from '@/utils/cookies'

export type Mutations<S = AppState> = {
    [AppMutationTypes.TOGGLE_SIDEBAR](state: S, withoutAnimation: boolean): void
    [AppMutationTypes.CLOSE_SIDEBAR](state: S, withoutAnimation: boolean): void
    [AppMutationTypes.TOGGLE_DEVICE](state: S, device: DeviceType): void
    [AppMutationTypes.SET_LANGUAGE](state: S, language: string): void
    [AppMutationTypes.SET_SIZE](state: S, size: string): void
}

export const mutations: MutationTree<AppState> & Mutations = {
    [AppMutationTypes.TOGGLE_SIDEBAR](state: AppState, withoutAnimation: boolean) {
        state.sidebar = {
            opened: !state.sidebar.opened,
            withoutAnimation
        }
        setSidebarStatus(state.sidebar.opened ? 'opened':'closed')
    },
    [AppMutationTypes.CLOSE_SIDEBAR](state: AppState, withoutAnimation: boolean) {
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = withoutAnimation
        setSidebarStatus('closed')
    },
    [AppMutationTypes.TOGGLE_DEVICE](state: AppState, device: DeviceType) {
        state.device = device
    },
    [AppMutationTypes.SET_LANGUAGE](state: AppState, language: string) {
        state.language = language
        setLanguage(language)
    },
    [AppMutationTypes.SET_SIZE](state: AppState, size: string) {
        state.size = size
        setSize(size)
    }
}