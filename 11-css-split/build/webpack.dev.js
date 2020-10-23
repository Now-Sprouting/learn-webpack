const {merge} = require('webpack-merge')
const commonConfug = require('./webpack.common')

const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 8081,
        open: true,
        hot: true
    },
}

module.exports = merge(devConfig, commonConfug)