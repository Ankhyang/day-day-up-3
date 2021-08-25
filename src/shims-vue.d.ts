/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-17 09:57:07
 * @LastEditTime: 2021-05-21 15:22:11
 * @LastEditors: yangzai
 */
/**
 * 为了 typescript 做的适配定义文件，因为.vue 文件不是一个常规的文件类型，ts 是不能理解 vue 文件是干嘛的，
    加这一段是是告诉 ts，vue 文件是这种类型的。
    这一段删除，会发现 import 的所有 vue 类型的文件都会报错
 */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '*.gif' {
    export const gif: any
}
declare module 'vue-count-to'
declare module 'vue-image-crop-upload'