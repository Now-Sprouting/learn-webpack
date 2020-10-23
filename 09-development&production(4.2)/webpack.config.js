// *webpack的基本配置
// !tree-shaking
// *1.tree-sharking摇树的意思,它实际上就是把一个模块上没用的东西给摇晃掉,就像我们在math.js中定义了两个函数,但是我们砸死index.js中只引入了一个函数,但是在development打包下,两个模块都被引入了进来,我们引入tree-shaking的作用就是把不想要的模块摇晃下去
// *2.tree-shaking只支持静态的引入方式,ES Module(静态), Common JS(动态)
// *3.在生产环境下,默认不存在tree-shaking,我们需要在plugins下面,新建otimization属性,并在package.json里面添加sideEffects: false属性,sideEffects: false 代表引入所有文件时都进行tree-sharking操作,如果有些文件例如css文件我们不想要使用tree-sharking,这时候我们要把false改为数组并把不需要使用tree-shrking的文件放入其中
// *4.在development环境中,treeshaking并不会把没用的的模块移除掉,而是告诉你使用了哪些模块
// *5.在production环境中,treeshaking直接把没导入的模块直接删除掉了

var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'production',
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
    }), new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })],
    optimization: {
        usedExports: true
    }
}