/*
 * @Description: 用户相关接口
 * @Author: yangzai
 * @Date: 2021-05-27 13:39:39
 * @LastEditTime: 2021-06-09 15:02:35
 * @LastEditors: yangzai
 */
import { RequestParams, ContentType, Method } from 'axios-mapper'

import { RootObject } from '@/model/rootObject'
import { UserInfoModel, Users } from '@/model/userModel'
import { LoginModel } from '@/model/loginModel'
import https from '@/utils/https'

const userInfo = {
    token: '090293029302930293',
    name: 'Ankh',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    introduction: '我是账户管理员',
    roles: ['admin'],
    email: 'ankh22222@163.com'
}

export const loginRequest = (userInfo: RequestParams) => {
    // 自动化产生model
    return https(false).request<RootObject<LoginModel>>('user/login', Method.POST, userInfo, ContentType.json)
}

export const userInfoRequest = () => {
    // return https().request<RootObject<UserInfoModel>>('user/userInfo', Method.GET, undefined, ContentType.form)
    return new Promise((resolve, reject) => resolve({code: 0, data: userInfo, msg: 'SUCCESS'}))
}

export const getUsers = (user: any) => {
    return https().request<RootObject<Users>>('user/getUsers', Method.GET, user, ContentType.form)
}