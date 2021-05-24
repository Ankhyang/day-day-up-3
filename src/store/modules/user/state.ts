/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-20 10:37:59
 * @LastEditTime: 2021-05-20 10:41:14
 * @LastEditors: yangzai
 */
import { getToken } from '@/utils/cookies'

export interface UserState {
    token: string,
    name: string,
    avatar: string,
    introduction: string,
    roles: string[],
    email: string
}

export const state: UserState = {
    token: getToken() || '',
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    email: ''
}