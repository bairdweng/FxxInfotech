var path = require('path')
var utils = require('./utils')
var config = require('../config')
var merge = require('webpack-merge')
var HappyPack = require('happypack');
var _vueLoaderConfig = require('./vue-loader.conf')
const os = require('os');
var happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
var vueLoaderConfig = merge(_vueLoaderConfig, {
    loaders: {
        js: 'happypack/loader?id=babel',
        css: 'vue-style-loader!happypack/loader?id=css',
        less: 'vue-style-loader!happypack/loader?id=css!happypack/loader?id=less'
    }
});
module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath

    },
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'service': path.resolve(__dirname, '../src/service'),
            'less': path.resolve(__dirname, '../src/less'),
            'tools': path.resolve(__dirname, '../src/tools'),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /vue-scroller.src.*?js$/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'babel',
            threadPool: happyThreadPool,
            loaders: ['babel-loader?cacheDirectory=true']
        }),
        new HappyPack({
            id: 'css',
            cache: false,
            threadPool: happyThreadPool,
            loaders: ['css-loader?importLoaders=1']
        }),
        new HappyPack({
            id: 'less',
            cache: false,
            threadPool: happyThreadPool,
            loaders: ['less-loader']
        })
    ]
}
