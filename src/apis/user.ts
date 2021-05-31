/*
 * @Description: 用户相关接口
 * @Author: yangzai
 * @Date: 2021-05-27 13:39:39
 * @LastEditTime: 2021-05-28 14:26:41
 * @LastEditors: yangzai
 */
import { RequestParams, ContentType, Method } from 'axios-mapper'

import { RootObject } from '@/model/rootObject'
import { UserInfoModel, Users } from '@/model/userModel'
import { LoginModel } from '@/model/loginModel'
import https from '@/utils/https'

export const loginRequest = (userInfo: RequestParams) => {
    // 自动化产生model
    return https(false).request<RootObject<LoginModel>>('user/login', Method.POST, userInfo, ContentType.json)
}

export const userInfoRequest = () => {
    return https().request<RootObject<UserInfoModel>>('user/userInfo', Method.GET, undefined, ContentType.form)
}

export const getUsers = (user: any) => {
    return https().request<RootObject<Users>>('user/getUsers', Method.GET, user, ContentType.form)
}