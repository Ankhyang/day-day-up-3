import {
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    Module
} from 'vuex'

import { RootState } from '@/store'
import { state } from './state'
import { actions, Actions } from './actions'
import { mutations, Mutations } from './mutations'
import type { TagsViewState } from './state'

export { TagsViewState }

export type TagsStore<S = TagsViewState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> 
& {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
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
// 第一个泛型参数为当前子模块的state类型定义, 第二个参数为根级state的类型定义，
// 只要定义了state的类型，在所有使用state的地方均会自动推断，不需要在定义
export const store: Module<TagsViewState, RootState> = {
    state,
    mutations,
    actions
}