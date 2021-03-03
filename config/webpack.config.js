const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const VueLoader = require('vue-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env) => {
  // load environment variables to use
  const envKeys = require('./env')(env)

  // file paths
  const configPath = path.join(__dirname); // path for webpack.config.js
  const appPath = path.join(configPath, '..', 'src', 'app');
  const buildPath = path.join(configPath, '..', 'build', 'app');
  const srcPath = path.join(appPath, 'src');
  const publicPath = process.env.PUBLIC_PATH; // './', '/'

  const config = {
    entry: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      `${srcPath}/main.ts`
    ],
    output: {
      publicPath: publicPath ? publicPath : '/',
      filename: 'js/[name].js',
      path: buildPath,
    },
    target: 'electron-main',
    mode: 'production',
    resolve: {
      extensions: [".ts", ".js", ".vue"],
      alias: {
        '@': srcPath,
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/node_modules',
          use: 'babel-loader',
        },
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                esModule: false,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                esModule: false,
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.ts$/, // .ts파일을
          loader: 'ts-loader', // ts-loader로 해석
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: `${appPath}/public/index.html`,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          minifyJS: true,
        },
        hash: true
      }),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin(envKeys.stringified),
      new NodePolyfillPlugin(),
    ],
  };

  return config;
}
