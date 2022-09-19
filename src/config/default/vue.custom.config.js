/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-21 16:04:08
 * @LastEditTime: 2021-05-31 17:22:52
 * @LastEditors: yangzai
 */
// interface con{
//     publicPath: string,
//     outputDir: string,
//     assetsDir: string,
//     lintOnSave: boolean,
//     transpileDependencies: string[],
//     title: string,
//     titleSeparator: string,
//     titleReverse: boolean,
//     devePort: string,
//     abbreviation: string,
//     providePlugin: object,
//     build7z: boolean,
//     startMessage: string
// }

const vueDefaultConfig  = {
    // baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' 
    publicPath: '/',
    // 输出文件目录：在npm run build时，生成文件的目录名称 
    outputDir: 'dist',
    // 放置生成的静态资源的目录
    assetsDir: 'static',
    // 代码保存时进行eslint检测
    lintOnSave: false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    transpileDependencies: ['vue-echarts', 'resize-detector'],
    // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'vue3-ts-composition-admin-template',
    titleSeparator: '-',
    titleReverse: false,
    devePort: '8085',
    abbreviation: 'vt2at',
    providePlugin: {},
    build7z: false,
    startMessage: '欢迎使用vue3-ts-composition-admin-template,使用composition API和TS 玩转最潮技术'
}

// export default vueDefaultConfig
module.exports = vueDefaultConfig