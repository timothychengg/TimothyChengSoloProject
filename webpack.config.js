const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './src/index.js', // Main JS file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file
    publicPath: '/', // Public path for serving files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Handle CSS imports
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/, // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'public'), // Serve from public folder
    port: 9000, // You can specify the port here
    hot: true, // Enable hot reloading
    historyApiFallback: true, // Fallback to index.html for SPAs
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve file extensions
  },
};
