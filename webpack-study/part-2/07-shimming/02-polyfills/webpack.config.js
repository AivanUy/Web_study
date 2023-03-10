/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-23 14:10:13
 * @LastEditTime: 2023-02-23 14:22:21
 * @LastEditors:  
 */
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env',
                                {
                                    targets: [
                                        '> 1%',
                                        'last 1 version'
                                    ],
                                    useBuiltIns: 'usage',
                                    corejs: 3
                                }
                            ],

                        ],

                    },

                }
            }
        ]
    }
}