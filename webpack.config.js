var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, "app/index.jsx"),
	output: {
		filename: "bundle.js",
		chunkFilename: '[name].[chunkhash:5].chunk.js'
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.md$/,
				loader: 'babel!markdown-it-react-loader'
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: 'style!css!postcss!less'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style!css!postcss'
			},
			{
				test: /\.(png|gif|jpg|svg|jpeg)$/i,
				exclude: /node_modules/,
				loader: 'file-loader'
			},
			{
				test: /\.(ttf|otf|eot|svg)$/,
				exclude: /node_modules/,
				loader: 'file-loader'
			},
		]
	},

	postcss: [
		require('autoprefixer')
	],

	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'
		}),

		new webpack.HotModuleReplacementPlugin(),

		new OpenBrowserPlugin({
			url: 'http://localhost:8080'
		}),

		new webpack.DefinePlugin({
			__DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
		})
	],

	devServer: {
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
		contentBase: './app/',
	}
}
