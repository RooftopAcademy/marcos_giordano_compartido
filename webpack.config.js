const path = require("path");

module.exports = {
  entry: "./src-front-end/app.ts",
  output: {
    chunkFormat: "commonjs",
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/js"),
    publicPath: "public",
    libraryTarget: "umd",
    libraryExport: "default",
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  mode: "production",
};
