import { createStore, createLogger } from 'vuex'
import { store as tagViews, TagsViewState } from '@/store/modules/tagsview'

export interface RootState {
    tagViews: TagsViewState
}

const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
export const store = createStore({
    plugins,
    modules: {
        tagViews
    }
})