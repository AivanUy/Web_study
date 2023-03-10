/*
 * @Description:
 * @Author: Aivan
 * @Date: 2023-02-20 15:05:31
 * @LastEditTime: 2023-02-20 16:43:41
 * @LastEditors:  
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/app.js',

  module: {
    test: /\.js$/,
    use: ['bable-loader', 'eslint-loader'],
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
