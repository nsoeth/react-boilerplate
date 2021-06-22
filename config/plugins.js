const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./main');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const {TypedCssModulesPlugin} = require('typed-css-modules-webpack-plugin');

module.exports = [
  new HtmlWebpackPlugin({
    template: config.html
  }),
  // new CopyWebpackPlugin([
  //   { from: 'src/assets', to: './assets' }
  // ]),
  new TypedCssModulesPlugin({
    globPattern: 'src/**/*.module.scss',
  }),
  new ForkTsCheckerWebpackPlugin()
];
