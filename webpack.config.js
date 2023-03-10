const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode
  mode: "production", // development
  // entry
  entry: {
    main: path.resolve(__dirname, "./src/js/main.js"),
  },
  // output
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  // devServer
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3005,
    compress: true,
    open: true,
    hot: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Dictionary Web App",
      template: "./src/indexTemp.html",
      filename: "index.html",
      chunks: ["main"],
    }),
  ],
};
