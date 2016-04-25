const webpack     = require('webpack');
const path        = require('path');
const merge       = require('webpack-merge');
const NpmIPlugin  = require('npm-install-webpack-plugin');


const TARGET  = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
const PATHS   = {
  app: path.join(__dirname, 'app'), 
  build: path.join(__dirname, 'build')
};

const common  = {
  entry: {
    app: PATHS.app
  }, 
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }, 
  resolve: ['', '.js', '.jsx'],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'], 
        include: PATHS.app
      }, 
      {
        test: /\.js|\.jsx$/,
        loader: 'babel', 
        query: {
          cacheDirectory: true
        }, 
        include: PATHS.app
      }
    ]
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      devtool: 'eval-source-map',
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.port
    }, 
    plugins: [
      new webpack.HotModuleReplacementPlugin(), 
      new NpmIPlugin({
        save: true // --save
      })
    ]
  });
} else if (TARGET === 'build') {
  module.exports = merge(common, {});
}
