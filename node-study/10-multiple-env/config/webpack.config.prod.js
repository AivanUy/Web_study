/*
 * @Description:
 * @Author: Aivan van@gmail.com
 * @Date: 2023-02-16 15:11:37
 * @LastEditTime: 2023-02-18 16:31:33
 * @LastEditors: Aivan van@gmail.com
 * @FilePath: \node-study\10-multiple-env\config\webpack.config.prod.js
 * 
 * Copyright (c) 2023 by ${git_name_Email}, All Rights Reserved.
 */
const path = require('path')
//html
const HtmlWebpackPlugin = require('html-webpack-plugin')
//抽离 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//压缩css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')


const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')

const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'


        /* index: {
            import: './src/index.js',
            dependOn: 'shared'
        },
 
        another: {
            import: './src/another-module.js',
            dependOn: 'shared'
        },
 
        shared: 'lodash' */



    },

    output: {
        filename: 'scripts/[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext]',
        publicPath: 'http://localhost:8080'
    },

    //development
    //production
    mode: 'production' ,

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html',
            inject: 'body'
        }),

        new MiniCssExtractPlugin({
            filename: 'style/[contenthash].css'
        })
    ],
    
    module: {
        rules: [
            {
                test: /\.jpg$/,
                type: 'asset/resource',
                /* 优先级高于 上面的 assetModuleFilename */
                generator: {
                    filename: 'images/[contenthash][ext]'
                }
            },
            {
                test: /\.svg$/,
                type: 'asset/inline'
            },
            {
                test: /\.txt$/,
                type: 'asset/source'
            },
            {
                test: /\.png$/,
                type: 'asset',//通用资源类型，再asset/resource 和 asset/inline 直接切换，默认是大于8k 使用asset/resource 否则使用 asset/inline。默认大小可以修改
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024 // 4M 才用asset/resource
                    }
                }
            },

            /* {
                test:/\.(css|less)$/,
                use: ['style-loader','css-loader','less-loader']
            } */

            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },

            {
                test: /\.(woff|woff2|eot|tff|otf)$/,
                type: 'asset/resource'
            },

            {
                test: /\.(csv|tsv)$/,
                use: 'csv-loader'
            },

            {
                test: /\.xml$/,
                use: 'xml-loader'
            },

            {
                test: /\.toml$/,
                type: 'json',
                parser: {
                    parse: toml.parse
                }
            },
            {
                test: /\.yaml$/,
                type: 'json',
                parser: {
                    parse: yaml.parse
                }
            },
            {
                test: /\.json5$/,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }
            }
        ]
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],

        splitChunks: {
            // chunks: 'all'
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}
