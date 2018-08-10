const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: { styles: './css/main.css', app: './js/index.js' },
  output: {
    filename: '[name].js',
    path: __dirname + '/src'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          devMode
            ? { loader: 'style-loader' }
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '/'
                }
              },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
};
