const webpack = require('webpack');
const path = require('path');

module.exports = {
  
  entry: './src/index.js',
  
  output: {
    libraryTarget: 'umd',
    filename: 'index.js',
    library: 'copyr',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, 'src')
      ],
      options: {
        presets: ['env']
      }
    }]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]

};