const { override, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  // Ignore fs module
  addWebpackPlugin(
    new webpack.IgnorePlugin({
      resourceRegExp: /^fs$/,
    })
  ),
  // Add fallbacks for path, crypto, and stream modules if necessary
  (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        path: require.resolve('path-browserify'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        vm: require.resolve('vm-browserify'),
      },
    };
    return config;
  }
);const { override, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  // Ignore fs module
  addWebpackPlugin(
    new webpack.IgnorePlugin({
      resourceRegExp: /^fs$/,
    })
  ),
  // Add fallbacks for path, crypto, and stream modules if necessary
  (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        path: require.resolve('path-browserify'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        vm: require.resolve('vm-browserify'),
      },
    };
    return config;
  }
);