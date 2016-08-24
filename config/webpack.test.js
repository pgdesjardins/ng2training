var helpers = require('./helpers');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'null'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      }
    ],
    preLoader: [
      {
        // https://github.com/AngularClass/angular2-webpack-starter/blob/master/config/webpack.test.js
        test: /\.(js|ts)$/,
        loader: 'source-map-loader',
        include: helpers.root('src', 'app'),
        exclude: [/\.(e2e|spec)\.ts$/]
      }
    ],
    postLoaders: [
      {
        // https://github.com/AngularClass/angular2-webpack-starter/blob/master/config/webpack.test.js
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter',
        include: helpers.root('src', 'app'),
        exclude: [/\.(e2e|spec)\.ts$/]
      }
    ]
  }
};