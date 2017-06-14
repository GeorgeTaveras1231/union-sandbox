const HTMLPlugin = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const path = require('path');

const extractText = new ExtractText({ filename: 'style.css', ignoreOrder: true });

module.exports = {
  entry: './index.jsx',
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: [
      '.cssm',
      '.jsx',
      '.js'
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    extractText
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.cssm$/,
        issuer: /\.jsx?$/,
        use: extractText.loader()
      }
    ]
  }
}
