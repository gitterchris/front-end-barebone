const path = require('path');
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
    compress: true,
    port: 3000
  },
  output: {
    filename: '[name].bundle.js',
    path: dist
  },
  plugins: [
    new CleanWebpackPlugin([ 'dist' ]),
    new HtmlWebpackPlugin({ title: 'My Barebone Front End App' })
  ]
};
