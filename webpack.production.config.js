var pkg = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "app/index.jsx"),
        //vendor: Object.keys(pkg.dependencies),
        jsLib: ['react', 'react-dom', 'react-router'],
        uiLib: ['antd'],
    },

    output: {
        path: __dirname + "/public",
        filename: "src/[name].[chunkhash:8].js",
        chunkFilename: 'src/[name].[chunkhash:5].chunk.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {   
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel',
            },
			{
				test: /\.md$/,
				loader: 'babel!markdown-it-react-loader'
			},            
            { 
                test: /\.less$/, 
                exclude: /node_modules/, 
                loader: ExtractTextPlugin.extract('style', 'css!postcss!less', {publicPath: '../'}) ,
            },
            { 
                test: /\.css$/, 
                exclude: /node_modules/, 
                loader: ExtractTextPlugin.extract('style', 'css!postcss', {publicPath: '../'}),
            },
            { 
                test: /\.(png|gif|jpg|svg|jpeg)$/i, 
                exclude: /node_modules/, 
                loader: 'url-loader?limit=8192&name=image/[name].[hash:8].[ext]',
                options: {
                    publicPath: '/'
                }
            },
            { 
                test: /\.(ttf|otf|eot|svg)$/, 
                exclude: /node_modules/, 
                loader: 'url-loader?limit=8192&name=libs/[name].[hash:8].[ext]'
            },
        ]
    },

    postcss: [
        require('autoprefixer')
    ],

    plugins: [
        new webpack.BannerPlugin("Copyright by anohaker"),

        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),

        
//         new webpack.DefinePlugin({
//             'process.env': {
//                 'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
//             }
//         }),
       
       new webpack.DefinePlugin({
           'process.env.NODE_ENV': JSON.stringify('production')
       }),
        new webpack.optimize.UglifyJsPlugin(),

        new webpack.optimize.OccurrenceOrderPlugin(),

        /*
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            }
        }),
        */

        new ExtractTextPlugin('css/[name].[chunkhash:8].css'),

        
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vendor',
//             filename: 'src/[name].[chunkhash:8].js'
//         }),
       
       new webpack.optimize.CommonsChunkPlugin({
           name: 'jsLib',
           filename: 'src/[name].[chunkhash:8].js'
       }),
       new webpack.optimize.CommonsChunkPlugin({
           name: 'uiLib',
           filename: 'src/[name].[chunkhash:8].js'
       }),

        
//         new webpack.DefinePlugin({
//             __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
//         })
       
    ]
}