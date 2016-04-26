const webpack     = require('webpack');
const path        = require('path');
const merge       = require('webpack-merge');
const NpmIPlugin  = require('npm-install-webpack-plugin');


const TARGET  = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
const PATHS   = {
  app: path.join(__dirname, 'app'), 
  build: path.join(__dirname, 'build'), 
  style: path.join(__dirname, 'app/style.css'),
  test: path.join(__dirname, 'tests')
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
    // entry: {
    //   style: PATHS.style
    // },
    // devtool: 'eval-source-map',
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
} else if (TARGET === 'test') {
  module.exports = merge(common, {
    devtool: 'inline-source-map',
    resolve: {
      alias: {
        'app': PATHS.app
      }
    }, 
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['isparta-instrumenter'],
          include: PATHS.app
        }
      ], 
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: PATHS.test
        }
      ]
    }
  });
}
