var {merge} = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

var prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map'
}

module.exports = merge(commonConfig, prodConfig);