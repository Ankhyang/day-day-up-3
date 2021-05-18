/*
 * @Description: cookie缓存
 * @Author: yangzai
 * @Date: 2021-05-18 15:11:02
 * @LastEditTime: 2021-05-18 15:14:32
 * @LastEditors: yangzai
 */

import Keys from '@/constant/key'
import Cookies from 'js-cookie'


export const getLanguage = () => Cookies.get(Keys.languageKey)
export const setLanguage = (language: string) => Cookies.set(Keys.languageKey, language)