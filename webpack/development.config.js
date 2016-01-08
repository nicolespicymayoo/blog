var path = require('path');
var webpack = require('webpack');

var babelSettings = {
  stage: 0,
  plugins: [
    'react-transform'
  ],
  extra: {
    'react-transform': [{
      target: 'react-transform-hmr',
      imports: ['react'],
      locals: ['module']
    }, {
      target: 'react-transform-catch-errors',
      imports: ['react', 'redbox-react']
    }]
  }
};

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, '..'),
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3500/__webpack_hmr',
    './react/index.js',
  ],
  output: {
    path: path.join(__dirname, '..', 'meteor', 'react-build-generated'),
    filename: 'main.js',
    publicPath: 'http://localhost:3500/assets/'
  },
  externals: {
    'moment': 'moment',
    'underscore.string': 's'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        query: babelSettings,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.json?$/,
        loader: 'json',
      },
      {
        test: /\.css?$/,
        loader: 'style!css!postcss',
      },
    ]
  },
  postcss: function () {
    return [
      require('precss'),
      require('autoprefixer')({ browsers: ['> 5%'] }),
    ];
  }
};
