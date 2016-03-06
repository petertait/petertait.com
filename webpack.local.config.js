var webpack = require('webpack');

module.exports = {

  // Efficiently evaluate modules with source maps
  devtool: "eval",

  // Include files for hotreload
  entry:  [
    "webpack-dev-server/client?http://localhost:9090",
    "webpack/hot/only-dev-server",
    "./src/index"
  ],

  // Only used by the dev server for dynamic hotreloading.
  output: {
    path: __dirname + "/build/",
    filename: "app.js",
    publicPath: "http://localhost:9090/build/"
  },

  // Plugins for hotreload
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  // Transform source code using Babel and React Hot Loader
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
      { test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      }
    ]
  },

  // Auto transform files with these extensions
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },

  // PostCSS Plugins
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
