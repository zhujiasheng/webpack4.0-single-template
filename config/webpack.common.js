const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const utils = require('./utils.js');
const {isDev} = utils;

const extractCss = new ExtractTextPlugin({
  filename: "app.css",
  disable: isDev
})

const moduleRules = {
  rules: [
    {
      test: /\.css$/,
      use: extractCss.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    },
    {
      test: /\.scss$/,
      use: extractCss.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // 在开发环境使用 style-loader
        fallback: "style-loader"
    })
    },
    {
      test: /\.(jpg|jpeg|png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }
  ]
};

const entry =  () => new Promise((resolve) => resolve(['./src/index.js']));

module.exports = {
  entry,
  output:{
    path:path.resolve(__dirname,'../build'),
    filename:'app.js',
    publicPath: '/static/'
  },
  module:moduleRules,
  plugins: [
    extractCss
  ]
}
