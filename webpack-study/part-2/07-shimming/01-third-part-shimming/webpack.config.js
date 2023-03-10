/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-23 13:39:46
 * @LastEditTime: 2023-02-23 14:04:21
 * @LastEditors:  
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.ProvidePlugin({
            _: 'lodash'
        })
    ],
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: require.resolve('./src/index.js'),
                use: 'imports-loader?wrapper=window'
            },
            {
                test: require.resolve('./src/global.js'),
                use: 'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse'
            }
        ]
    }
}