/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-23 12:56:53
 * @LastEditTime: 2023-02-23 13:08:37
 * @LastEditors:  
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,//快速启用
            skipWaiting: true,//不允许遗留旧的 servers
        }),
    ],

    devServer: {
        devMiddleware: {
            writeToDisk: true
        }
    }
}