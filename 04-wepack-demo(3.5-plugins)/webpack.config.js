// *webpack的基本配置
// !插件HtmlWebpackPlugin
// *作用: 在dist中生成一个html文件并引入dist文件夹中的boundle.js文件, 可以增加对象{template}生成模板html
// !CleanWebpackPlugin
// *作用: 在打包之前删除掉以前生成对的打包文件(CleanWebpackPlugin属于第三方库)
// !更改入口和出口文件
// *入口文件可以添加多入口,出口文件也要随之改变,要不然两个入口一个出口会发生错误

var HtmlWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        main:'./src/index.js',
        app: './src/index.js'
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
        }]
    },
    output: {
        // filename: 'boundle.js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }), new CleanWebpackPlugin()]
}