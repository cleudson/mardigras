const path = require('path');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  entry: {index: './index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: "mdg",
    libraryTarget: "var"
  },
  plugins: [
    new EsmWebpackPlugin()
  ]
};