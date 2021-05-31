/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-28 11:35:03
 * @LastEditTime: 2021-05-28 11:36:14
 * @LastEditors: yangzai
 */
export interface UserInfoModel {
    id: number,
    username: string,
    password: string,
    name: string,
    avatar: string,
    introduction: string,
    email: string,
    phone: string,
    roles: string[]
}

export interface Users {
    items: any
}