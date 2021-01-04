const path = require('path');
const webpack = require('webpack');
const nodeModulesDir = path.resolve(__dirname, '../node_modules');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    entry1: './src/main.ts',
    entry2: './src/main2.ts',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['entry1', 'runtime','styles','polyfills','vendor'],
      template: './src/index.html',
      filename: "entry1.html"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['entry2', 'runtime','styles','polyfills','vendor'],
      template: './src/index2.html',
      filename: "entry2.html"
    }),
  ]
};

module.exports = config;