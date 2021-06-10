import { MutationTree } from 'vuex'
import { TagsViewState, TagView } from './state'
import { TagsMutationTypes } from './mutation-type'

export type Mutations<S = TagsViewState> = {
    [TagsMutationTypes.ADD_CACHED_VIEW](state: S, view: TagView): void
    [TagsMutationTypes.ADD_VISITED_VIEW](state: S, view: TagView): void
    [TagsMutationTypes.DEL_VISITED_VIEW](state: S, view: TagView):void
    [TagsMutationTypes.DEL_CACHED_VIEW](state: S, view: TagView):void
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
    },
    [TagsMutationTypes.DEL_CACHED_VIEW](state: TagsViewState, view: TagView) {
        if(view.name === null) return 
        const index = state.cachedViews.indexOf(view?.name?.toString())
        index > -1 && state.cachedViews.splice(index, 1)
    },
    [TagsMutationTypes.DEL_VISITED_VIEW](state: TagsViewState, view: TagView) {
        for(const [i, v] of state.visitedViews.entries()) {
            if(v.path === view.path) {
                state.visitedViews.splice(i, 1)
                break
            }
        }
    }
}