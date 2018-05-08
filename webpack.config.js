const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

let isDev = process.env.NODE_ENV

let config = {
  mode: isDev,
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-[hash:8].[ext]',
              outputPath: 'imgs/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeAttributeQuotes: true //去掉html中的引号
      },
      hash: true
    }),
    new webpack.DefinePlugin({
      production: isDev === 'production'
        ? JSON.stringify(true)
        : JSON.stringify(false)
    })
  ]
}

if (isDev === 'development') {
  config.devServer = {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    host: "0.0.0.0",
    hot: true,
    historyApiFallback: true,
    // clientLogLevel: "none",
    // quiet: true
  }
  config.module.rules.push({
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"]
  });

  config.plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  config.entry = {
    vendor: [
      "vue", "vue-router", "vuex"
    ],
    app: path.join(__dirname, './src/index.js')
  };

  config.output = {
    path: path.join(__dirname, 'dist'),
    filename: '[chunkHash].js',
    publicPath: './'
  },

  config.module.rules.push({
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"]
  }, {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
  });
  config.optimization = {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
  config.plugins.push(new CleanWebpackPlugin(['dist']),
  // new webpack.optimize.CommonsChunkPlugin({name: "vendor", minChunks: Infinity}),
  new MiniCssExtractPlugin({filename: "[hash:10].css", chunkFilename: "[id].css"}));

}

module.exports = config
