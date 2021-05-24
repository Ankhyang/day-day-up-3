/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-17 09:55:26
 * @LastEditTime: 2021-05-24 15:24:29
 * @LastEditors: yangzai
 */
const { resolve } = require('path')
const path = require('path')
const webpackbar = require('webpackbar')

const {
    publicPath,
    assetsDir,
    outputDir,
    lintOnSave,
    transpileDependencies,
    title,
    devPort
} = require('./src/config/default/vue.custom.config.js')

module.exports = {
    publicPath, // 部署应用包时的基本URL
    outputDir, // 打包时生成的生产环境构建稳健的目录
    assetsDir,
    lintOnSave, 
    devServer: {
        // 在 server 启动后打开浏览器。默认禁用
        open: true,
        hot: true,
        host: '127.0.0.1',
        port: devPort,
        // 输出 cli 信息，默认启用
        noInfo: false,
        // 通过设置让浏览器 overlay 同时显示警告和错误
        overlay: {
            warnings: true,
            errors: true
        }
    },
    // 第三方插件配置
    pluginOptions: {
        // 配置全局scss变量
        "style-resources-loader": {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, 'src/styles/_variables.scss'),
                path.resolve(__dirname, 'src/styles/element-variables.scss')
            ]
        }
    },
    configureWebpack() {
        return {
            resolve: {
                alias: {
                    '@': resolve('src'),
                    '*': resolve(''),
                    'Assets': resolve('src/assets')
                }
            },
            module: {
                rules: [
                    {
                        test: /\.(json5?|ya?ml)$/, // target json, json5, yaml and yml files
                        loader: '@intlify/vue-i18n-loader',
                        include: [ // Use `Rule.include` to specify the files of locale messages to be pre-compiled
                          path.resolve(__dirname, 'src/lang')
                        ]
                    },
                ]
            },
            plugins: [
                new webpackbar({
                    name: title
                })
            ]
        }
    }
}