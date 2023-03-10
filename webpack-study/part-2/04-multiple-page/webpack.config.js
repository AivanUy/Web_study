/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-22 19:38:28
 * @LastEditTime: 2023-02-23 12:17:34
 * @LastEditors:  
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    //entry: [ './src/app.js', './src/app2.js','lodash'],
    /* entry: {
        main: ['./src/app.js','./src/app2.js'],
        lodash: 'lodash'
    }, */

    entry: {
        main: {
            import: ['./src/app.js', './src/app2.js'],
            dependOn: 'lodash',
            filename: 'channel_1/[name].js'
        },
        main2: {
            import: './src/app3.js',
            dependOn: 'lodash',
            filename: 'channel_2/[name].js'
        },
        //lodash: 'lodash'
        lodash: {
            import: 'lodash',
            filename: 'common/[name].js'
        }
    },

    output: {
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '多页面应用',
            template: './index.html',
            inject: 'body',
            filename: 'channel_1/index.html',
            chunks: ['main', 'lodash'],
            publicPath: 'http://www.a.com'
        }),
        new HtmlWebpackPlugin({
            template: './index2.html',
            inject: 'body',
            filename: 'channel_2/index2.html',
            chunks: ['main', 'lodash'],
            publicPath: 'http://www.b.com'
        })
    ],
}