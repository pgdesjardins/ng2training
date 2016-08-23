module.exports = require('./config/webpack.dev.js');



// var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var failPlugin = require('webpack-fail-plugin');
//
// module.exports = {
//   entry: {
//     app: './src/app.ts',
//     vendor: 'src/vendor.ts'
//   },
//
//   output: {
//     path: './dist',
//     filename: '[name].[hash].js'
//   },
//
//   devtool: 'source-map',
//   resolve: {
//     extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
//   },
//
//   plugins: [
//     failPlugin,
//     new webpack.optimize.UglifyJsPlugin(),
//     new HtmlWebpackPlugin({
//       baseHref: '/',
//       template: './src/index.html',
//       inject: 'body'
//     })
//   ],
//   module: {
//     preLoaders: [
//       {
//         test: /\.ts$/,
//         loader: 'tslint'
//       }
//     ],
//     loaders: [
//       {
//         test: /\.ts$/,
//         loader: 'ts'
//       },
//       {
//         test: /\.scss$/,
//         loader: 'style!css!postcss!sass'
//       }
//     ]
//   },
//   tslint: {
//     emitErrors: true,
//     failOnHint: true
//   }
// };
