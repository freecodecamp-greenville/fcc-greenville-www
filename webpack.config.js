module.exports = {
  entry: ['./css/main.css', './js/index.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
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
