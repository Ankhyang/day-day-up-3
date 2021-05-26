/*
 * @Description: settings state
 * @Author: yangzai
 * @Date: 2021-05-19 10:41:49
 * @LastEditTime: 2021-05-25 14:24:41
 * @LastEditors: yangzai
 */

import elementVariables from '@/styles/element-variables.scss'
import layoutSettings from '@/config/default/layout'

export interface SettingsState {
    theme: string,
    fixedHeader: boolean,
    showSettings: boolean,
    showTagsView: boolean,
    showSidebarLogo: boolean,
    sidebarTextTheme: boolean
}

export const state: SettingsState = {
    theme: elementVariables.theme,
    fixedHeader: layoutSettings.fixedHeader,
    showSettings: layoutSettings.showSettings,
    showTagsView: layoutSettings.showTagsView,
    showSidebarLogo: layoutSettings.showSidebarLogo,
    sidebarTextTheme: layoutSettings.sidebarTextTheme
}