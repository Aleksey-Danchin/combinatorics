const path = require('path')

module.exports = {
	entry: {
		combinatorics: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '/dist'),
		publicPath: '/dist',
		library: 'combinatorics',
		libraryTarget: 'umd',
		globalObject: 'this'
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