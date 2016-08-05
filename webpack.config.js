var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var failPlugin = require('webpack-fail-plugin');;

module.exports = {
  entry: './src/app.ts',
  output: {
    path: './dist',
    filename: 'app.[hash].js'
  },

  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  plugins: [
    failPlugin,
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      baseHref: '/',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      { test: /\.ts$/,
        loader: 'ts'
      },
      { test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      }
    ]
  },
  tslint: {
    emitErrors: true,
    failOnHint: true
  }
}
