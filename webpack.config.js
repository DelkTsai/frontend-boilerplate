var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var precss = require('precss');

var providePlugin = new webpack.ProvidePlugin({
  $: 'jquery'
  //这个可以使jquery变成全局变量，妮不用在自己文件require('jquery')了
});

var vendor = new webpack.optimize.CommonsChunkPlugin('vendor', 'bundle.vendor.js');
//这是第三方库打包生成

var compressjs = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
});

// 添加环境变量，以控制react采取开发版本还是正式版本，因为这个影响到proptypes是否进行校验
var env = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});

exports.dev = {
  entry: {
    index: './src/index.js',
    vendor: ['jquery', 'jquery.cookie']
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader?presets[]=react&presets[]=es2015&presets[]=stage-0"
      },
      {test: /\.scss$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass?sourceMap'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  postcss: [autoprefixer, precss],
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.png', 'jpg', 'gif']
  },
  plugins: [providePlugin, vendor],

};

exports.production = {
  entry: {
    index: './src/index.js',
    vendor: ['jquery', 'jquery.cookie']
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.js$/, loader: 'jsx-loader?harmony'},
      {test: /\.scss$/, loader: 'style!css-loader?minimize!sass?sourceMap'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.png', 'jpg']
  },
  plugins: [providePlugin, vendor, compressjs, env]
};
