import { ActionContext, ActionTree } from 'vuex'

import { RootState } from '@/store'
import { TagView, TagsViewState } from './state'
import { Mutations } from './mutations'
import { TagsMutationTypes } from './mutation-type'
import { TagsActionTypes } from './action-type'

type AugmentedActionContext = {
    commit<K extends keyof Mutations> (
        key: K,
        payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<TagsViewState, RootState>, 'commit'>

type NoAugmentedActionContext = {
    commit<K extends keyof Mutations> (
        key: K
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<TagsViewState, RootState>, 'commit'>


export interface Actions {
    [TagsActionTypes.ACTION_ADD_VIEW] (
        {commit}: AugmentedActionContext,
        view: TagView
    ): void
    [TagsActionTypes.ACTION_ADD_VISITED_VIEW] (
        {commit}: AugmentedActionContext,
        view: TagView
    ): void
}

export const actions: ActionTree<TagsViewState, RootState> & Actions = {
    [TagsActionTypes.ACTION_ADD_VIEW]({commit}, view: TagView) {
        commit(TagsMutationTypes.ADD_VISITED_VIEW, view)
        commit(TagsMutationTypes.ADD_CACHED_VIEW, view)
    },
    [TagsActionTypes.ACTION_ADD_VISITED_VIEW]({commit}, view: TagView) {
        commit(TagsMutationTypes.ADD_VISITED_VIEW, view)
    }
}