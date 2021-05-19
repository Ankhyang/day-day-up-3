/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-19 11:38:11
 * @LastEditTime: 2021-05-19 11:49:59
 * @LastEditors: yangzai
 */
import { getSidebarStatus, getSize } from '@/utils/cookies'
import { getLocale } from '@/locales'
import { DeviceType } from '@/constant/settings'

export interface AppState {
    device: DeviceType,
    sidebar: {
        opened: boolean,
        withoutAnimation: boolean
    }
    language: string,
    size: string
}

export const state: AppState = {
    device: DeviceType.Desktop,
    sidebar: {
        opened: getSidebarStatus() !== 'closed',
        withoutAnimation: false
    },
    language: getLocale(),
    size: getSize() || 'medium'
}