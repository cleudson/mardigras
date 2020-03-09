const path = require('path');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, '../src/'),
  entry: {index: './index.js'},
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    library: "mdg",
    libraryTarget: "var"
  },
  plugins: [
    new EsmWebpackPlugin()
  ]
};