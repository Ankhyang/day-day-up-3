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

export const store: Module<TagsViewState, RootState> = {
    state,
    mutations,
    actions
}