/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-19 10:56:39
 * @LastEditTime: 2021-06-10 11:19:34
 * @LastEditors: yangzai
 */
import {
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    Module
} from 'vuex'

import { RootState } from '@/store'
import { state } from './state'
import { Actions, actions } from './actions'
import { Mutations, mutations } from './mutations'

import type { SettingsState } from './state'
export { SettingsState }

export type SettingStore<S = SettingsState> = Omit<VuexStore<S>, 'gettters' | 'commit' | 'dispatch'>
& {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]> (
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
}
& {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
}

export const store: Module<SettingsState, RootState> = {
    state,
    mutations,
    actions
}

