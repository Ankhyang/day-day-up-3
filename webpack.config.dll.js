/*
 * @Author: your name
 * @Date: 2021-06-21 09:49:06
 * @LastEditTime: 2021-06-21 10:43:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day-day-up-3\webpack.ddl.js
 */
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const dllPath = 'static'

module.exports = {
    entry: {
        vendor: ['axios', 'ant-design-vue']
    },
    output: {
        path: path.join(__dirname, dllPath),
        filename: '[name].dll.js',
        library: '[name]_[hash]'
    },
    plugins: [
        new CleanWebpackPlugin({
            path: './static'
        }),
        new webpack.DllPlugin({
            path: path.join(__dirname, dllPath, '[name]-manifest.json'),
            name: '[name]_[hash]', // 同output.library
            context: __dirname
        })
    ]
}