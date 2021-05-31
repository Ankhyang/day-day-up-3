/*
 * @Description: 封装网络请求
 * @Author: yangzai
 * @Date: 2021-05-28 10:46:32
 * @LastEditTime: 2021-05-28 11:29:06
 * @LastEditors: yangzai
 */
import { useStore } from '@/store'
import HttpClient, { HttpClientConfig } from 'axios-mapper'

import networkConfig from '@/config/default/net.config'

const https = (hasToken: boolean = true) => {
    const config: HttpClientConfig = {
        baseURL: networkConfig.host,
        headers: {
            token: hasToken ? useStore().state.user.token : ''
        }
    }
    return new HttpClient(config)
}
export default https