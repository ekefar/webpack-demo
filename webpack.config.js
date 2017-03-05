var debug = process.env.NODE_ENV == "debug";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/app.js",
  output: {
    path: __dirname + "/js",
    filename: "app.min.js"
  },
  
  plugins: debug ? [] : [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
