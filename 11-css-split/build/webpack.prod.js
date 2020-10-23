// !css-split
// *1.默认打包css文件时,不会单独形成一个css文件,会把css文件放到js文件中
// *2.MiniCssExtractPlugin可以实现 css 文件的独立打包,因为它不能实现热更新,所以要在production中使用
// *3.filename 和 chunkFilename 如果打包的css文件被直接引用走的时 filename 如果是间接引用走的时chunkFilename
// *4.MiniCssExtractPlugin默认会把入口文件引入的 css 文件合并到一起
// *5.如果使用代码压缩, 引入 CssMinimizerPlugin 插件
var { merge } = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

var prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
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
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		],
	},
	plugins: [new MiniCssExtractPlugin({
		filename: '[name].css',
		chunkFilename: '[name].chunk.css'
	})],

}

module.exports = merge(commonConfig, prodConfig);