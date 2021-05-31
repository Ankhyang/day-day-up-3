/*
 * @Description: 请求配置
 * @Author: yangzai
 * @Date: 2021-05-28 10:48:48
 * @LastEditTime: 2021-05-28 11:21:21
 * @LastEditors: yangzai
 */
import { ContentType, Device } from '@/constant/headers'
import { InfoShowType } from '@/constant/network'

interface Headers {
    token: string,
    contentType: string,
    version: string,
    device: Device
}

const _header: Headers = {
    token: '',
    contentType: ContentType.JSON,
    version: '1.0',
    device: Device.PC
}

export interface NetworkConfig {
    host?: string,
    timeout?: number,
    loading?: false,
    errorShowType?: InfoShowType,
    headers?: Headers
}

const networkConfig: NetworkConfig = {
    host: process.env.VUE_APP_BASE_API,
    timeout: 10000,
    loading: false,
    errorShowType: InfoShowType.LOG,
    headers: _header
}

export default networkConfig