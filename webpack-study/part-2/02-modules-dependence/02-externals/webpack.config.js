/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-22 11:52:07
 * @LastEditTime: 2023-02-22 12:03:58
 * @LastEditors:  
 */
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: './app.js',

    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ],

    externals: {
        jquery : 'jQuery'
    }
}