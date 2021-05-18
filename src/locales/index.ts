/*
 * @Description: 语言切换控制
 * @Author: yangzai
 * @Date: 2021-05-18 14:59:32
 * @LastEditTime: 2021-05-18 15:22:26
 * @LastEditors: yangzai
 */
import { createI18n } from 'vue-i18n'
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'

import { getLanguage } from '@/utils/cookies'

import enLocale from './en'
import zhLocale from './zh-cn'

const messages = {
    'en': {
        ...enLocale,
        ...elementEnLocale
    },
    'zh-cn': {
        ...zhLocale,
        ...elementZhLocale
    }
}

export const getLocale = () => {
    const cookieLanguage = getLanguage()
    if(cookieLanguage) {
        return cookieLanguage
    }
    // 获取浏览器对象上的语言属性
    const language = navigator.language.toLowerCase()
    const locales = Object.keys(messages)
    for(const locale of locales) {
        if(language.indexOf(locale) > -1) {
            return locale
        }
    }
    return 'zh'
}

const i18n = createI18n({
    locale: getLocale(),
    messages
})

export default i18n