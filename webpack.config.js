const path = require('path');
const webpack = require('webpack');

const gsapProvider = new webpack.ProvidePlugin({
  TweenMax: "gsap"
});



module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: ['./index.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'sine-waves.bundle.js',
    library: 'sine-waves',
    libraryTarget: 'umd'

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          plugins: ['lodash'],
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    gsapProvider
  ],
  resolve: {
    extensions: [".js"],
    alias: {
      "TweenMax": "gsap",
      "TweenLite": "gsap",
      "CSSPlugin": "gsap"
    }
  }
};