'use strict';

const webpack = require('webpack');

// const path = require('path');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname + '/src',
  devtool: debug ? 'inline-sourcemap' : null,
  entry:  './js/client.js',
  module: {
    test: /\.js?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    query: {
      presets: [],
      plugins: []
    }
  }, 
  output: {
    path: __dirname + '/build',
    filename: 'client.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
  ]
}
