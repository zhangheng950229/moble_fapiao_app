let path = require("path");
let HtmlwebpackPlugin = require("html-webpack-plugin");
let webpack = require("webpack");

module.exports = {
  entry: {
    main: [path.resolve(__dirname,'../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  resolve: {
          extensions: ['.css','.js', '.vue'],
          alias: {
            'vue': 'vue/dist/vue.js'
          }
      },
  module: {
    rules: [
          {
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader',
            options: {
              loaders: {
                scss: 'style-loader!css-loader!sass-loader',
                sass: 'style-loader!css-loader!sass-loader?indentedSyntax',
              }
            }
          },
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use:['style-loader','css-loader','postcss-loader','sass-loader']
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use:['style-loader','css-loader','postcss-loader']
          },
          {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            exclude: /node_modules/,
            use: [
              {
                loader:'file-loader',
                query: {
                  name: 'images/[name].[ext]'
                }
              }
            ],
    },
        ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname,'../index.html'),
      inject: true
    })
  ]
};
