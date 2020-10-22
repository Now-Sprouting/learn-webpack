// *webpack的基本配置

// !loader配置参数
// *rules定义规则, test定义格式, use定义使用什么loader
// *loader中use的执行顺序 从下至上, 从左至右
// !style-loader作用:将打包后的css加入到html中的head中,形成style
// !css-loader作用:可以引入css文件
// *css-loader参数: importLoaders:默认0代表只有index.js中引入的scss经过 postcss-loader --> sass-loader,在style.scss中引入的scss文件不经过 postcssc-loader等处理, 手写二代表在style.scss中引入的其他样式文件所有都经过 postcss-loader --> sass-loader处理
// *css-loader参数: modules: 默认false,假如a文件引入了css文件 a文件中引入的b文件也受css文件的影响,当设置成true时,谁引入css文件就只作用与当前文件,不与其他文件耦合了 注:为true后 样式文件只能一 import from 的形式导入了
// !scss-loader作用:可以引入scss文件
// !postcss-loader使用以及作用
// *使用:postcss必须引入postcss.config.js文件,在文件中可以使用autoprefixer插件
// *作用:使css属性加上不同内核的前缀来做到兼容的css

const path = require('path')
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [{
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			} 
		},{
            test: /\.scss$/,
            use: [  
                'style-loader',
                {
                    loader: 'css-loader',
                    options:{
                        importLoaders: 2,
                        modules: true
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}