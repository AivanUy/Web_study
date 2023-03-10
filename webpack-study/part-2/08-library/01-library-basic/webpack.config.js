const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    // experiments: {
    //     outputModule: true
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mylib2.js',
        //library: 'mylib2',
        library: {
            name: "mylib2",
            type: 'commonjs'//'window' ,commonjs' , 'module' (module 只能配置experiments:{outputModule: true} 才有效，并且不需要name), 'umd'
        },
        clean: true
    }
}