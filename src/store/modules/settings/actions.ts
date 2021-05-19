/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-19 10:56:50
 * @LastEditTime: 2021-05-19 11:23:48
 * @LastEditors: yangzai
 */
import { ActionContext, ActionTree } from 'vuex'

import { RootState } from '@/store'
import { SettingsState } from './state'
import { Mutations } from './mutations'
import { SettingsActionTypes } from './action-type' 
import { SettingsMutationTypes } from './mutation-type'

type AugmentedActionContext = {
    commit<K extends keyof Mutations> (
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<SettingsState, RootState>, 'commit'>

export interface Actions {
    [SettingsActionTypes.ACTION_CHANGE_SETTING](
        { commit }: AugmentedActionContext,
        payload: { key: string, value: any }
    ): void
}

export const actions: ActionTree<SettingsState, RootState> & Actions = {
    [SettingsActionTypes.ACTION_CHANGE_SETTING](
        { commit }: AugmentedActionContext,
        payload: { key: string, value: any } 
    ) {
        commit(SettingsMutationTypes.CHANGE_SETTING, payload)
    }
}