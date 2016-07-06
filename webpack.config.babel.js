import path from 'path'
import webpack from 'webpack'
import WebpackNotifierPlugin from 'webpack-notifier'

let config = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'build/scripts'),
    publicPath: 'scripts/',
    filename: 'app.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'build',
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(jpg|png|ttf|eot|woff|woff2|svg)$/,
        exclude: /node_modules/,
        loader: 'url?limit=100000'
      }
    ]
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
  ],

  plugins: [
    new WebpackNotifierPlugin()
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map'
  config.devServer = {}
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}

export default config
