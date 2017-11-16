const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = path.join(__dirname, "dist");

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin([ 'dist' ]),
    new HtmlWebpackPlugin({ title: 'My Barebone Front End App' }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: dist
  },
};
