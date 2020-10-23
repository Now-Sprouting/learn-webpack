// !code splitting
// *1.在不做代码分割之前,如果引入库文件如 lodash 第三方库的话如果业务代码和引入第三方库代码写在一起打包,代码体积过大,浏览器会同时加载 lodash 和 业务代码,如果分开打包的话,lodash 库代码不变的情况下,浏览器只加载业务代码(因为第三方库存在浏览器缓存)这就是 code-splitting的意义
// *2.同步导入代码,做下面的optimization的配置,webpack会做出代码分割
// *3.异步的导入第三方库, webpack会自动进行代码分割

// !optimization.splitChunks的参数配置
// *1.chunks: 规定对同步引入方式还是异步引入方式做代码拆分  async:异步  all:都进行代码拆分
// *2.cacheGroups: 配合chunks使用, 检测引入的第三方库是否在node_modules中,如果有, 打包后配置vendors前缀, 可以添加filename字段自定义打包后第三方库文件名
// *3.minSize: 规定当引入包文件大于 minSize时才做代码分割,当引入自己的文件时,大于 minSize 如果 cacheGroups.default 设置成false还是不会做代码分割, 要设置default的参数
// *4.minChunks: 规定引入数必须大于 minChunks才做代码分割
// *5.maxAsyncRequests: 当引入数大于 maxAsyncRequests 时做大于 maxAsyncRequests 的数就不做代码分割了
// *6.priority: 当引入模块同时符合 vendors 和 default 时,规定优先级
// *7.reuseExistingChunk: 当引入时规定是否引用以前拆分过了的包



const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}, {
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			}
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			}
		}, {
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
		}]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	}), new CleanWebpackPlugin()],
	optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: '321.js',
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
				},
				default: {
					// minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
					filename: '456.js'
				}
			}
		}
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	}
}