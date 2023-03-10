/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-22 12:26:52
 * @LastEditTime: 2023-02-22 12:40:31
 * @LastEditors:  
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
        app2: './src/app2.js'
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ]
}