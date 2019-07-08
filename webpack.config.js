const path = require('path')

module.exports = {
	entry: {
		combinatorics: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '/dist'),
		publicPath: '/dist'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}]
	},
	devServer: {
		overlay: true
	}
}