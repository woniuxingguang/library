var path = require('path')
var webpack = require('webpack')

var libraryName = 'sparrow'
// var mode = require('yargs').argv.mode
//plugins uglifyPlugin作用把开发代码压缩生产环境下使用
var uglifyPlugin = webpack.optimize.UglifyJsPlugin

// var plugins = []
// var filename = ''
// if(mode === 'production'){
//   plugins.push(new uglifyPlugin({minimize：true}))
//   //sparrow.min.js 生产环境
//   filename = libraryName + '.min.js'
// }else {
//   //sparrow.js 开发环境
//     filename = libraryName + '.js'
// }


// console.log(mode)

var config = {
  //页面入口文件配置
  entry: path.resolve(__dirname,'./src/index.js'),
  //入口文件输出配置
  output: {
    path: path.resolve(__dirname,'./lib'),
    filename: libraryName + '.js',
    //打包输出umd模块
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  //开发调试
  "devtool": 'cheap-source-map',
  //其他解决方案配置： 有问题？？？
  // resolve: {
  //   //导入目标文件时后缀可以省略
  //   extensions: ['', '.js', '.json', '.vue', '.scss', '.css']
  //   //root: path.resolve('./src')
  // },
  module: {
    //加载器配置
    loaders: [
      {
        test: /.\js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.\js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  // plugins: plugins


}

module.exports = config
