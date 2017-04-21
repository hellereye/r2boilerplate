var webpack = require('webpack');
//var Dashboard = require('webpack-dashboard');
//var DashboardPlugin = require('webpack-dashboard/plugin');
//var dashboard = new Dashboard();
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const lessToJs = require('less-vars-to-js');

var publicPath = 'http://0.0.0.0:3333/dist/';
//在server.js中使用hot：true不起作用，所以entry中设置热加载配置
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
var primaryC='#5B83AD';

const theme= require('./theme');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        hotMiddlewareScript,
        __dirname + "/src/app/index.js"
    ],
    // entry: __dirname+"/src/app/index.js",
    output: {
        path: path.join(__dirname, '/dist'),
        //TODO: publicPath
        filename: "app-[hash].js"
    },
    //import组件时可以不写文件后缀
    resolve: {
      extensions: ['.js', '.jsx', '.css','.less','.scss'],
      modules: [path.join(__dirname, '/dist'), 'node_modules']
    },
    module: {
        rules: [

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, '/src/app'),
                use: 'babel-loader' //在webpack的module部分的loaders里进行配置即可
            },
            {
              // test: /\.(less|css)$/,
              // use: [
              //   {
              //     loader: "style-loader" // creates style nodes from JS strings
              //   },
              //   {
              //     loader: "css-loader?modules" // translates CSS into CommonJS
              //   },
              //   {
              //     loader: "less-loader" // compiles Less to CSS
              //   }
              // ]
              //ExtractTextPlugin.extract()中第一个参数是可选项一般是style-loader (第一个参数的文档说明为:notExtractLoader (optional) the loader(s) that should be used when the css is not extracted
              //,即css不提取时的loader,通过style-loader可以将css用style标签放到头部)
              test: /\.(css|less)$/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  //loader: ['css-loader', 'less-loader']
                  use: [
                    {
                      loader:"css-loader",
                    },{
                      loader:'less-loader',
                      // 开放sourceMap会对antd的table造成影响，原因（？？？）
                      // options:{
                      //   //'@primary-color': '#5B83AD'
                      //   // sourceMap: true,
                      //   // modifyVars: {
                      //   //     "primary-color": JSON.stringify(primaryC)
                      //   // }
                      // }
                    }
                  ]
              })
            },
            {
              //匹配后缀为jpe?g|png|gif|svg的image
              test: /\.(jpe?g|png|gif|svg)$/,
              use: [
               //配置url-loader 使得图片大于40000bytes时被单独分开打包
               {
                 loader: 'url-loader',
                 options: { limit: 40000 }
               },
               'image-webpack-loader'
              ]
            }
        ]
    },

    // devServer: {
    // 	contentBase: "./dist",//本地服务器所加载的页面所在的目录
    // 	//colors: true,//终端中输出结果为彩色
    // 	historyApiFallback: true,//不跳转
    // 	inline: true,//实时刷新
    // 	hot:true
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/app/index.tpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        //new DashboardPlugin(dashboard.setData),
        new ExtractTextPlugin("app.css"),
        // new webpack.DefinePlugin({
        //   PRODUCTION: JSON.stringify(true),
        //   VERSION: JSON.stringify("5fa3b9"),
        //   BROWSER_SUPPORTS_HTML5: true,
        //   TWO: "1+1",
        //   theme:'"primary-color": "#1088ae"'
        // }),
        new webpack.HotModuleReplacementPlugin() //热加载插件
    ]

}
