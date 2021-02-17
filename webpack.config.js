const path = require('path');
const webpack = require('webpack');
// const json = require('./file.json');

module.exports = {
  mode: 'development', // developmentm, production(ugl & min) and none are the other versions
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/', // front
    historyApiFallback: true,
    inline: true,
    // headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {

      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
        // pathRewrite: { '^/api': '' }
      },
      // '/assets/**': {
      //   target: 'http://localhost:3000',
      //   secure: false,
      //   changeOrigin: true,
      // },
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/, //  --> /\.s?css/

        use: ['style-loader', 'css-loader'],

      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },

    ],
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};
