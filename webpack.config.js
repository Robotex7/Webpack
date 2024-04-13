const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  return {
    mode: env.mode,
    entry: path.resolve(__dirname, 'src', 'js', 'app.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'index.html' }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
  }
};