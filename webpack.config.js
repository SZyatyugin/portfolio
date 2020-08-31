const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [miniCss.loader, 'css-loader', 'postcss-loader','sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader?name=./style/scss/images/[name].[ext]',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader?name=./style/scss/fonts/[name].[ext]',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCss({
      filename: 'style.css',
    }),
    new CopyWebpackPlugin({
      patterns:[
        {from:'./src/style/images',to:'./style/scss/images/'}
      ]
    })
  ],
};
