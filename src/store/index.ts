/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-17 09:57:07
 * @LastEditTime: 2021-05-26 11:40:19
 * @LastEditors: yangzai
 */
import { createStore, createLogger } from 'vuex'
import { store as tagViews, TagsStore, TagsViewState } from '@/store/modules/tagsview'
import { store as app, AppState, AppStore } from '@/store/modules/app'
import { store as settings, SettingsState, SettingsStore } from '@/store/modules/settings'
import { store as user, UserState, UserStore } from '@/store/modules/user'
import { store as permission, PermissionState, PermissionStore } from '@/store/modules/permission' 

export interface RootState {
    tagViews: TagsViewState,
    app: AppState,
    settings: SettingsState,
    user: UserState,
    permission: PermissionState
}

export type Store = TagsStore<Pick<RootState, 'tagViews'>> & AppStore<Pick<RootState, 'app'>> &
                    SettingsStore<Pick<RootState, 'settings'>> & UserStore<Pick<RootState, 'user'>> &
                    PermissionStore<Pick<RootState, 'permission'>> 

const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

export const store = createStore({
    plugins,
    modules: {
        tagViews,
        app,
        settings,
        user,
        permission
    }
})

export function useStore(): Store{
    return store as Store
}