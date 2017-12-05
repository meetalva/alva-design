const webpackEntry = require("@patternplate/webpack-entry");

module.exports = {
  devtool: "source-map",
  entry: webpackEntry.sync(["patterns/**/**/demo.tsx"]),
  resolve: {
    extensions: ['.ts', '.tsx', ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
	loader: 'ts-loader'
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "components.bundle.js",
    libraryTarget: "commonjs"
  }
};
