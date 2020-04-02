const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const extractCss = new ExtractTextPlugin({
  filename: "app.css",
  disable: process.env.NODE_ENV === 'deveopment'
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
    },
    {
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      use: {
          loader: "babel-loader",
          options: {
              presets: ['@babel/preset-react']
          }
      }
    },
  ]
};

console.log( process.env.NODE_ENV,' process.env.NODE_ENV');
const publicPath = process.env.NODE_ENV === 'production'
    ? config.build.assetsPublicPath
    : config.dev.assetsPublicPath;

console.log(publicPath,'publicPath');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry:'./src/main.js',
  output:{
    path: config.build.assetsRoot,
    publicPath
  },
  resolve: {
    extensions: ['.js','jsx','.vue','.json'],
    alias: {
      '@': resolve('src'),
      '@/components': resolve('src/components'),
      '@/pages': resolve('src/pages')
    }
  },
  module:moduleRules,
  plugins: [
    extractCss
  ]
}
