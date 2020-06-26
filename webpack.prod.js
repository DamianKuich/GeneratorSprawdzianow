const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const path = require("path");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "production",
  resolve: {
    alias: {
      fs: "pdfkit/js/virtual-fs.js",
    },
  },
  optimization: {
    // splitChunks: {
    //     chunks: 'all',
    // },
    minimize: true,
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  entry: path.resolve(__dirname, "djsr/frontend/src/index.js"),
  output: {
    // options related to how webpack emits results

    // where compiled files go
    path: path.resolve(__dirname, "djsr/frontend/static/frontend/public/"),

    // 127.0.0.1/static/frontend/public/ where files are served from
    publicPath: "/static/frontend/public/",
    filename: "main.js", // the same one we import in index.html
  },
  module: {
    // configuration regarding modules
    rules: [
        {
        enforce: "post",
        test: /fontkit[/\\]index.js$/,
        loader: "transform-loader?brfs",
      },
      {
        enforce: "post",
        test: /unicode-properties[/\\]index.js$/,
        loader: "transform-loader?brfs",
      },
      {
        enforce: "post",
        test: /linebreak[/\\]src[/\\]linebreaker.js/,
        loader: "transform-loader?brfs",
      },
      { test: /src[/\\]assets/, loader: "arraybuffer-loader" },
      { test: /\.afm$/, loader: "raw-loader" },
      {
        test: /\.bundle\.js$/,
        use: "bundle-loader",
      },
      {
        // regex test for js and jsx files
        test: /\.(js|jsx)?$/,
        // don't look in the node_modules/ folder
        exclude: /node_modules/,
        // for matching files, use the babel-loader
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // After all CSS loaders we use plugin to do his work.
            // It gets all transformed CSS and extracts it into separate
            // single bundled file
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // This loader resolves url() and @imports inside CSS
            loader: "css-loader",
          },
          {
            // Then we apply postCSS fixes like autoprefixer and minifying
            loader: "postcss-loader",
          },
          {
            // First we transform SASS to standard CSS
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
