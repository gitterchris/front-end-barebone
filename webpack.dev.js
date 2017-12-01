const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

const dist = path.join(__dirname, 'dist');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    contentBase: dist,
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].[hash].js',
    path: dist
  },
});
