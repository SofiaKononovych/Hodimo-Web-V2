const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    hot: true, // Enable hot reload
    open: true, // Open browser automatically
    historyApiFallback: true, // Fixes routing issues
    watchFiles: ['src/**/*'],
    port: 8080,
  },
  entry: './src/index.js', // Main entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process .js and .jsx files with Babel
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use Babel presets for React and ES6
          },
        },
      },
      {
        test: /\.css$/, // Handling CSS files
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/, // For handling SCSS/SASS files
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handling image files
        type: 'asset/resource', // Newer way to handle assets
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for HTML
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Extract CSS into a separate file
    }),
  ],
};
