const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = path.join(__dirname, "dist");

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: dist,
    hot: true,
    port: 3000
  },
  output: {
    filename: '[name].bundle.js',
    path: dist
  },
  plugins: [
    new CleanWebpackPlugin([ 'dist' ]),
    new HtmlWebpackPlugin({ title: 'My Barebone Front End App' }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
