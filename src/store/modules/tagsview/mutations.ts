import { MutationTree } from 'vuex'
import { TagsViewState, TagView } from './state'
import { TagsMutationTypes } from './mutation-type'

export type Mutations<S = TagsViewState> = {
    [TagsMutationTypes.ADD_CACHED_VIEW](state: S, view: TagView): void
    [TagsMutationTypes.ADD_VISITED_VIEW](state: S, view: TagView): void
}

export const mutations: MutationTree<TagsViewState> & Mutations = {
    [TagsMutationTypes.ADD_VISITED_VIEW](state: TagsViewState, view: TagView) {
        if(state.visitedViews.some(v => v.path === view.path)) return 
        state.visitedViews.push(
            Object.assign({}, view, {title: view.meta?.title || 'no-name'})
        )
    },
    [TagsMutationTypes.ADD_CACHED_VIEW](state: TagsViewState, view: TagView) {
        if(view.name === null) return 
        if(state.cachedViews.includes(view.name?.toString())) return
        if(!view.meta?.noCache) {
            state.cachedViews.push(view.name?.toString())
        }
    }
}