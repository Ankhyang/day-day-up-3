/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-20 10:37:59
 * @LastEditTime: 2021-06-09 15:14:34
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
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    introduction: '',
    roles: [],
    email: ''
}