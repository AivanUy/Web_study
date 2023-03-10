/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-22 12:50:03
 * @LastEditTime: 2023-02-22 12:59:30
 * @LastEditors:  
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/app.js',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                   {
                    loader:  'css-loader',
                    options:{
                        module: true,
                    }
                   },
                    'postcss-loader',
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(),
    ]
}