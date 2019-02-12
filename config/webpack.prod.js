const webpack = require('webpack');
const config = require('./main');
const webpackConfig = require('./webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(webpackConfig, {
  mode: 'production',
  entry: {
    app: [
      'babel-polyfill',
      config.src + '/App.tsx'
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimize: true,
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['*.js', '*.css'], {
      root: config.dist
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].min.css',
      chunkFilename: '[id]-[hash].min.css'
    }),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })
  ],
  output: {
    path: config.dist,
    filename: '[name]-[hash].min.js'
  }
});