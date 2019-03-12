const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./main');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = [
  new HtmlWebpackPlugin({
    template: config.html
  }),
  new CopyWebpackPlugin([
    // { from: 'src/assets', to: './assets' }
  ]),
  new ForkTsCheckerWebpackPlugin()
];