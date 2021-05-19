/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-19 10:57:05
 * @LastEditTime: 2021-05-19 11:16:31
 * @LastEditors: yangzai
 */
import { MutationTree } from 'vuex'
import { SettingsState } from './state'
import { SettingsMutationTypes } from './mutation-type'

export type Mutations<S = SettingsState> = {
    [SettingsMutationTypes.CHANGE_SETTING](state: S, payload: {key: string, value: any}): void
}

export const mutations: MutationTree<SettingsState> & Mutations = {
    [SettingsMutationTypes.CHANGE_SETTING](state: SettingsState, payload: {key: string, value: any}) {
        const { key, value } = payload
        switch(key) {
            case 'theme':
                state.theme = value
                break
            case 'fixedHeader':
                state.fixedHeader = value
                break
            case 'showSettings':
                state.showSettings = value
                break
            case 'showSidebarLogo':
                state.showSidebarLogo = value
                break
            case 'showTagsView':
                state.showTagsView = value
                break
            case 'sidebarTextTheme':
                state.sidebarTextTheme = value
                break
            default: 
                break
        }
    }
}
