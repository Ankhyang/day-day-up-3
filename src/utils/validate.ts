/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-26 16:09:40
 * @LastEditTime: 2021-05-27 09:50:32
 * @LastEditors: yangzai
 */

// 判断字符串是否是https?:|mailto:|tal: 开头的
export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)