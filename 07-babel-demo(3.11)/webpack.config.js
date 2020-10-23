// *webpack的基本配置
// !babel
// !普通项目
// *babel的webpack配置参考babel官网
// *babel-loader只是对es6语法翻译成es5的语法,一些高版本的函数(如map)还是无法再低版本浏览器上面运行,这时候需要引入polyfill实现对高阶函数的补充
// *引入polyfill时把所有补充代码都进行了引入,加上 useBuiltIns: 'usage' 实现对补充代码的按需引入
// *targets属性可以针对某些特定的浏览器打包出的体积也会适当的减小
// !构建第三方插件库
// *构建第三方插件库的时候,我们不希望polyfill污染全局环境,这时候就得引入 transform-runtime, index.js就不需要引入polyfill了
// !当bebel options参数过多时,可以新建.babelrc文件将options参数移除到外面去

var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'hidden-source-map',
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    //* 正常项目
                    // options: {
                    //     presets: [['@babel/preset-env', {
                    //         targets: {
                    //             chrome: "67"
                    //         },
                    //         useBuiltIns: 'usage'
                    //     }]]
                    // }
                    //* 第三方库
                    // options: {
                    //     "plugins": [
                    //         [
                    //           "@babel/plugin-transform-runtime",
                    //           {
                    //             "corejs": 2,
                    //             "helpers": true,
                    //             "regenerator": true,
                    //             "useESModules": false,
                    //           }
                    //         ]
                    //       ]
                    // }
                }
            },
            {
                test: /\.png$/,
                use: {
                    // loader : 'file-loader',
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'image/',
                        limit: 10240
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }]
    },
    output: {
        filename: 'boundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }), new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })]
}