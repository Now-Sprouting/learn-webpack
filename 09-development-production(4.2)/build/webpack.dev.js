const {merge} = require('webpack-merge')
const commonConfug = require('./webpack.common')

const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        port: 8081,
        open: true,
        hot: true
    },
    optimization: {
        usedExports: true
    }
}

module.exports = merge(devConfig, commonConfug)