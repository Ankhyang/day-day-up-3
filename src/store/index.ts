import { createStore, createLogger } from 'vuex'
import { store as tagViews, TagsStore, TagsViewState } from '@/store/modules/tagsview'

export interface RootState {
    tagViews: TagsViewState
}

export type Store = TagsStore<Pick<RootState, 'tagViews'>>

const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

export const store = createStore({
    plugins,
    modules: {
        tagViews
    }
})

export function useStore(): Store{
    return store as Store
}