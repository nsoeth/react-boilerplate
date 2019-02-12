const config = require('./main');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  resolve: {
    extensions: config.extensions,
  },
  plugins: plugins,
  module: {
    rules: loaders
  }
};
