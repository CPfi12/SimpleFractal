module.exports = {
  entry: './browser/index.js', 
  output: {
    path: __dirname,
    filename: './bundlefold/bundle.js' 
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015','stage-0'] 
        }npm run start-dev

      }
    ]
  }
};

