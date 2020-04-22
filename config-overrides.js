const { override, addBabelPlugin } = require('customize-cra');

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: override(
    /** babel-loader对应的plugin中添加react-hot-loader/babel插件，支持HMR */
    addBabelPlugin('react-hot-loader/babel'),
  ),
};
