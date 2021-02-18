const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin //引入webpack-bundle-analyzer
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/', // 部署应用包时的基本URL
    outputDir: 'dist', // 打包时生成的生产环境构建稳健的目录
    assetsDir: 'static', // 放置生成的静态资源的目录
    filenameHashing: true,
    lintOnSave: true, // eslint-loader会将lint错误输出为编译警告
    productionSourceMap: false, // 如果你不需要生产环境的source map，可以将其设置为false，以加速生产环境的构建
    configureWebpack: {
      // 简单/基础配置，比如引入一个新插件
      plugins: []
    },
    chainWebpack: config => {
      // 链式配置
    //   config.plugin('ignore')
    //     .use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)); //忽略/moment/locale下的所有文件
      config.plugin('analyzer')  
        .use(new BundleAnalyzerPlugin())//使用webpack-bundle-analyzer 生成报表
      config.plugin("loadshReplace")
        .use(new LodashModuleReplacementPlugin());//优化lodash
    },
    css: {
      // css预设器配置项
      loaderOptions: {
        css: {
   
        },
        postcss: {
   
        }
      }
    },
    devServer: {
      open: true,
      host: '127.0.0.1',
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: null,
      // proxy: {
      //     '/api': {
      //         target: '<url>',
      //         ws: true,
      //         changOrigin: true
      //     }
      // },
      before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {}
}