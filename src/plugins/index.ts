/*
 * @Description: 加载所有插件文件
 * @Author: yangzai
 * @Date: 2021-05-18 14:39:10
 * @LastEditTime: 2021-05-18 14:42:15
 * @LastEditors: yangzai
 */

import { createApp } from 'vue'

export function loadAllPlugins(app: ReturnType<typeof createApp>) {
    const files = require.context('.', true, /\.ts$/)
    files.keys().forEach(key => {
        if(typeof files(key).default === 'function') {
            if(key !== './index.ts') files(key).default(app)
        }
    })
}
