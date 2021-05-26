/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-26 16:09:40
 * @LastEditTime: 2021-05-26 16:10:20
 * @LastEditors: yangzai
 */
export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)