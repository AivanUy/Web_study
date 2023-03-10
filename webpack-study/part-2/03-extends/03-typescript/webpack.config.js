/*
 * @Description: ,

 * @Author: Aivan
 * @Date: 2023-02-22 19:19:25
 * @LastEditTime: 2023-02-22 19:24:46
 * @LastEditors:  
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    plugins:[
        new HtmlWebpackPlugin(),
    ]
}