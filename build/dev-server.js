var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.dev.config.js");
var path = require("path");
var router = require("./routes");

var app = express();
app.use('/',router);

var compiler = webpack(config);
var devMiddleware = require("webpack-dev-middleware")(compiler,{
  publicPath: config.output.publicPath,
  stats:{
    chunks:false,
    colors: true
  },
});
var hotMiddleware = require('webpack-hot-middleware')(compiler);

compiler.plugin('compilation',compilation => {
  compilation.plugin('html-webpack-plugin-after-emit',(data,cb) => {
    hotMiddleware.publish({action:'reload'});
    cb();
  });
});


app.use(devMiddleware);
app.use(hotMiddleware);

app.listen(8888,err => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log("sucess set server in http://localhost:8888/");
});
