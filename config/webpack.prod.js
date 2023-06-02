const webpack = require('webpack');
const config = require('./main');
const webpackConfig = require('./webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(webpackConfig, {
  mode: 'production',
  entry: {
    app: [
      config.src + '/App.tsx'
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[fullhash].min.css',
      chunkFilename: '[id]-[fullhash].min.css'
    })
  ],
  output: {
    path: config.dist,
    filename: '[name]-[fullhash].min.js',
    publicPath: './'
  }
});
