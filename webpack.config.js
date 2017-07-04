const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.NODE_ENV === "production" || process.argv.indexOf('-p') !== -1;

const extractText = new ExtractTextPlugin({
  disable: !isProd
});

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: ["react-hot-loader/webpack", {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }]
    }, {
      test: /\.scss$/,
      use: extractText.extract({
        use: [
          { loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              plugins: (loader) => [
                // require('postcss-import')({ root: loader.resourcePath }),
                // require('postcss-cssnext')(),
                // require('autoprefixer')(),
                // require('cssnano')()
              ],
              sourceMap: true
            }
          },
          { loader: "sass-loader",
            options: { sourceMap: true } }
        ],
        // use style-loader in development
        fallback: {
          loader: "style-loader", options: { sourceMap: true }
        }
      })
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: isProd,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractText,
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: '',
      minify: {
        collapseWhitespace: isProd
      }
    })
  ]
};
