// *webpack的基本配置

// !loader配置参数
// *rules定义规则, test定义格式, use定义使用什么loader
// !file-loader
// *file-loader打包出来的文件格式不变
// *file-loader配置参数: name: 生成文件名字, outputPath: 生成文件的所在位置
// !url-loader
// *url-loader可以做file-loader的一切事情,只不过url-loader打包出来的图片是base-64格式的,储存在打包后的js文件中,
// *优点:小图片可以放在js文件中来省略网络请求, 缺点:大图片执行时间过长影响js继续执行
// *url-loader配置参数: name: 同file-loader, outputPath: 同file-loader, limit:小于limit(单位B)图片按<base-64>方式打包,超出limit按照 file-loader方式打包
const path = require('path')
module.exports = {
    mode: 'production',
    entry: './src/index.js',
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
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}