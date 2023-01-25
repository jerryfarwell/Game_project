const path = require('path')

module.exports = {
  mode: 'development',
  entry: ['./js/Home.js','./js/index.js','./js/PageList.js','./js/PageDetail.js','./js/routes.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),

      },
    ],
  },
}