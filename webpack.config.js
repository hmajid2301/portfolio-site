const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Haseeb Majid | Software Developer",
      template: "src/index.html"
    }),
    new CopyWebpackPlugin([{ from: `favicon.ico`, to: "favicon.ico" }]),
    isProd
      ? new CompressionPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.(js|css|html|svg)$/,
          threshold: 8192,
          minRatio: 0.8
        })
      : false,
    isProd
      ? new BrotliPlugin({
          asset: "[path].br[query]",
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8
        })
      : false
  ].filter(Boolean)
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()]
  };
} else {
  // for more information, see https://webpack.js.org/configuration/dev-server
  config.devServer = {
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true
  };
}

module.exports = config;
