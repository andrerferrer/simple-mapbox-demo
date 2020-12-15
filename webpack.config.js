const path = require("path");

const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, "./lib/app.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  plugins: [
    new Dotenv()
  ],
  devtool: "sourcemap"
};
