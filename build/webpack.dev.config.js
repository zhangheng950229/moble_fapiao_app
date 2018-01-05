let HtmlwebpackPlugin = require("html-webpack-plugin");
let path = require("path");
let webpack = require("webpack");

let config = require("./webpack.config.js");

config.output.publicPath = '/';

config.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new HtmlwebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname,'../index.html'),
    inject: true
  })
];
let devClient = './build/dev-client';

Object.keys(config.entry).forEach(function (name,i) {
  let extras = [devClient];
  config.entry[name] = extras.concat(config.entry[name]);
});
module.exports = config;
