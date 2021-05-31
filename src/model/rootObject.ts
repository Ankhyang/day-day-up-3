/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-28 11:30:50
 * @LastEditTime: 2021-05-28 11:31:47
 * @LastEditors: yangzai
 */
export interface RootObject<T> {
    code: number,
    msg: string,
    data: T
}