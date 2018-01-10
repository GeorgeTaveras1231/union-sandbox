const { NamedModulesPlugin } = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
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
    new NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.cssm$/,
        use: 'style-loader'
      }
    ]
  }
}
