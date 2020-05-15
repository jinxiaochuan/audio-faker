const path = require('path');
const { override, addBabelPlugin } = require('customize-cra');

// 覆写「入口|出口」配置
const overrideEntryAndOutputConfig = () => (config) => {
  if (config.mode === 'production') {
    config = {
      ...config,
      entry: path.resolve(__dirname, 'src/lib/index'),
      output: {
        ...config.output,
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        chunkFilename: 'chunks/[name].[contenthash:8].chunk.js',
      },
    };
  }
  return config;
};

// 移除指定plugins
const removePlugins = (plugins) => (config) => {
  if (config.mode === 'production') {
    config.plugins = config.plugins.filter((p) => {
      const pluginName = p.constructor.name;
      return Array.isArray(plugins)
        ? !plugins.includes(pluginName)
        : typeof pluginName === 'string'
        ? pluginName !== plugins
        : true;
    });
  }
  return config;
};

const addBabelLoaderRule = () => (config) => {
  config.module.rules.unshift({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [
              'react-app',
              {
                flow: false,
                typescript: true,
              },
            ],
          ],
        },
      },
    ],
  });
  return config;
};

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: override(
    /** babel-loader对应的plugin中添加react-hot-loader/babel插件，支持HMR */
    addBabelPlugin('react-hot-loader/babel'),
    addBabelLoaderRule(),
    overrideEntryAndOutputConfig(),
    removePlugins(['HtmlWebpackPlugin', 'ManifestPlugin']),
  ),
};
