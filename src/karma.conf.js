var webpack = require("webpack");
module.exports = function(config) {
  config.set({

    files: [
      // all files ending in "_test"
      {pattern: 'test/*test.js', watched: false},
      {pattern: 'test/**/*.js', watched: false}
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'test/test.js': ['webpack'],
      'test/**/*.js': ['webpack']
    },

    // frameworks to use
    frameworks: ['mocha'],

  
    reporters: ['spec', 'coverage'],

    coverageReporter: {

      dir: 'build/coverage/',
      reporters: [
          { type: 'html' },
          { type: 'text' },
          { type: 'text-summary' }
      ]
    },

   
    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },


    plugins: [
      require("karma-webpack"),
      require("istanbul-instrumenter-loader"),
      require("karma-mocha"),
      require("karma-coverage"),
      require("karma-phantomjs-launcher"),
      require("karma-spec-reporter")
    ],

    browsers: ['PhantomJS']
  });
};
