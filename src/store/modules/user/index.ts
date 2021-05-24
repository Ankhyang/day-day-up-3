/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-20 10:38:44
 * @LastEditTime: 2021-05-20 11:36:48
 * @LastEditors: yangzai
 */
import {
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    Module
} from 'vuex'

import { state } from './state'
import { Actions, actions } from './actions'
import { Mutations, mutations } from './mutations'

import type { UserState } from './state'
import { RootState } from '@/store'
export { UserState }

export type UserStore<S = UserState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> 
& {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]> (
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
}
& {
    dispatch<K extends keyof Actions> (
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
}

export const store: Module<UserState, RootState> = {
    state,
    mutations,
    actions
}