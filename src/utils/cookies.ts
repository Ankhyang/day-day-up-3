/*
 * @Description: cookie缓存
 * @Author: yangzai
 * @Date: 2021-05-18 15:11:02
 * @LastEditTime: 2021-05-19 11:46:32
 * @LastEditors: yangzai
 */

import Keys from '@/constant/key'
import Cookies from 'js-cookie'

// 语言
export const getLanguage = () => Cookies.get(Keys.languageKey)
export const setLanguage = (language: string) => Cookies.set(Keys.languageKey, language)

// 侧边栏状态
export const getSidebarStatus = () => Cookies.get(Keys.sidebarStatusKey)
export const setSidebarStatus = (status: string) => Cookies.set(Keys.sidebarStatusKey, status)

// 尺寸
export const getSize = () => Cookies.get(Keys.sizeKey)
export const setSize = (size: string) => Cookies.set(Keys.sizeKey, size) 

// token信息
export const getToken = () => Cookies.get(Keys.tokenKey)
export const setToken = (token: string) => Cookies.set(Keys.tokenKey, token)
export const removeToken = () => Cookies.remove(Keys.tokenKey)