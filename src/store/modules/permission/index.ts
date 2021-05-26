/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-25 14:36:35
 * @LastEditTime: 2021-05-26 11:38:30
 * @LastEditors: yangzai
 */
import {
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    Module,
} from 'vuex'

import { RootState } from '@/store'
import { mutations, Mutations } from './mutations'
import { actions, Actions } from './actions'
import { state } from './state'

import type { PermissionState } from './state'
export { PermissionState }

export type PermissionStore<S = PermissionState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> &
{
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} &
{
    dispatch<K extends keyof Actions> (
        key: K,
        payload: Parameters<Actions[K]>[1],
        commit?: DispatchOptions
    ): ReturnType<Actions[K]>
}

export const store: Module<PermissionState, RootState> = {
    state,
    mutations,
    actions
}