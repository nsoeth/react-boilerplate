const config = require('./main');
const webpackConfig = require('./webpack');
const webpack = require('webpack');
const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(webpackConfig, {
  mode: 'development',
  entry: config.src + '/App.tsx',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    path: config.tmp,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      /scss\.d\.ts$/,
      /css\.d\.ts$/
    ]),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") })
  ]
});
