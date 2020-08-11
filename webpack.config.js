const path = require ('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	// Este elemento resulve las extensiones que vamos a utilizar
	resolve: {
		extensions: ['.js','.jsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node.modules/,
				use: {
					loader:"babel-loader"
				}
			},
			{
				test:/\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		})
	]
}