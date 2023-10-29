const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'js/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
      },
      module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]
    },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src', 'index.html'),
          filename: 'index.html',
        }),
        new FileManagerPlugin({
            events: {
            onStart: {
            delete: ['dist'],
            },
          },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
      ],
    devServer: {
     watchFiles: path.join(__dirname, 'src'),
     port: 9000,
   },
};