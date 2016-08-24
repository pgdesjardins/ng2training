var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./config/webpack.test');
var wallabyPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {
  return {
    files: [
      {
        pattern: '**/*.scss',
        load: false
      },
      {
        pattern: 'src/**/*.css',
        load: false
      },
      {
        pattern: 'src/**/*.html',
        load: false
      },
      {
        pattern: 'src/**/*.ts',
        load: false
      },
      {
        pattern: 'src/**/*spec.ts',
        ignore: true
      }
    ],

    tests: [
      {
        pattern: 'src/**/*spec.ts',
        load: false
      }
    ],

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
