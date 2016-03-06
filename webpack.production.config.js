var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/index",

  output: {
    path: __dirname + "/build/",
    filename: "app.js"
  },

  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },

  postcss: [
    require('postcss-for'),
    require('postcss-conditionals'),
    require('postcss-color-function'),
    require('postcss-nesting'),
    require('postcss-grid')({
      columns: 10,
      maxWidth: 800,
      gutter: 20
    }),
    require('rucksack-css'),
    require('postcss-advanced-variables')({
      variables: require('./src/vars')
    })
  ]
}
