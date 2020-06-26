const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bandle.js',
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({filename:'[name].css'})
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
      },
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      },
      mode: 'production'
};