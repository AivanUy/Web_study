/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-20 14:06:20
 * @LastEditTime: 2023-02-20 14:48:45
 * @LastEditors:  
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',

    entry: './app.js',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    devServer: {
        hot: true,
        liveReload:true
    }
}