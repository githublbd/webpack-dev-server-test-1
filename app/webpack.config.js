var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    // app: ["./app/main.js"]
    app: "./app/main.js"
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    publicPath: "/assets/",
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'This is greate',
      template: './app/template.html',
      filename: 'app.html'
    })
  ]
};
