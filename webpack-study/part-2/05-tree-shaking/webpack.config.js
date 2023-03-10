/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-23 12:24:35
 * @LastEditTime: 2023-02-23 12:31:45
 * @LastEditors:  
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin()
    ],
    optimization: {
        usedExports: true,//没使用的 就不导出？
    }
}