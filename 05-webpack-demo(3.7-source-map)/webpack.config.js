// *webpack的基本配置
// !devtool
// *source-map:主要作用:打包之后的文件出错后,控制台会产生错误映射关系映射到打包前文件中
// * 具体推荐详情去官网查看
var HtmlWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'production',
    devtool: 'hidden-source-map',
    entry: 
        './src/index.js',
    module: {
        rules: [{
            test: /\.png$/,
            use: {
                // loader : 'file-loader',
                loader : 'url-loader',
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'image/',
                    limit: 10240
                }
            }
        }]
    },
    output: {
        filename: 'boundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }), new CleanWebpackPlugin()]
}