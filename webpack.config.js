/*
 * @Author: your name
 * @Date: 2021-06-18 10:16:27
 * @LastEditTime: 2021-06-18 17:26:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day-day-up-3\webpack.config.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development', // 指定构建模式
    // 指定构建入口文件
    entry: {
        main: './src/main.js' // main 为 entry 的名称
    },
    output: {
        // 路径中使用 hash，每次构建时会有一个不同 hash 值，可以用于避免发布新版本时浏览器缓存导致代码没有更新
        // 文件名中也可以使用 hash
        path: path.resolve(__dirname, 'dist'), // 指定构建生成文件所在路径
        filename: '[name].js' // 指定构建生成的文件名，使用 [name] 来引用 entry 名称，在这里即为 main
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist') // 开发服务器启动路径
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compileOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: [  
                    'style-loader',
                    // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ] // 从右向左解析原则
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10*1024,
                            publicPath: '../',
                            esModule: false,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]   
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({
            path: './dist'
        }),
        new HtmlWebpackPlugin({
            title: 'hello',
            template: './index.html'
        }),
        // 将 css 文件单独抽离的 plugin
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}