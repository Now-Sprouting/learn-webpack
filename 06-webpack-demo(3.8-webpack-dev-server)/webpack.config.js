// *webpack的基本配置
//! watch
// *wacth模式可实现热更新(注: watch模式下) new CleanWebpackPlugin中要加{cleanStaleWebpackAssets: false}否则html文件消失
//! webpack-dev-server
// *注:webpack-cli 4.0以上缺少文件导致不能运行webpack-dev-server,应该把cli降到3.**版本
//! Hot Module Replacement
// *模块热替换需要在webpack-dev-server中配置hot: true属性
// *css中 css-loader已经在内部实现了热更新
// *js中 我们需要手动的通过accept实现热更新
var HtmlWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
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
        },
        {
            test: /\.css$/,
            use:  [
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
    }), new CleanWebpackPlugin({cleanStaleWebpackAssets: false})]
}