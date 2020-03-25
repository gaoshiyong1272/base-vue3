const resolve = require('./build/resolve.conf');
const conf = require('./config');
const dev = require('./build/dev.lib.config');
const plugins = require('./build/plugins');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const entry = require('./build/entries.lib.page');

/**设置参数**/
let develop =  true;
if(process.env.NODE_ENV === 'production') {
    develop = false;
}
conf.setDebug(develop);


/**检查项目发生变化处理逻辑**/
const devCompilerCompilation = require('./build/dev.compiler.compilation');

module.exports = {
    /**  配置目录 **/
    outputDir: conf.build.buildOutputRoot,
    assetsDir: conf.build.assetsSubDirectory,
    publicPath: conf.build.assetsPublicPath,

    /**
     * 配置入口文件
     */
    pages : entry.init(conf),

    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: conf._debug,

    chainWebpack(config) {
        /**
         * 设置别名
         */
        for(let key in resolve.config.alias){
            config.resolve.alias.set(key, resolve.config.alias[key]);
        }
    },

    /**
     * configureWebpack  配置
     */
    configureWebpack: (config) => {

        /**生产模式**/
        if (process.env.NODE_ENV === 'production') {
            config.mode = 'production';

            //关闭 webpack 的性能提示
            config.performance = {
                hints: 'warning', //'warning',
                maxEntrypointSize: 50000000, //入口起点的最大体积
                maxAssetSize: 30000000, //生成文件的最大体积
                //只给出 js 文件的性能提示
                assetFilter: function (assetFilename) {
                    return assetFilename.endsWith('.js');
                }
            };


            /**文件压缩**/
            config.plugins = [
                ...config.plugins,
                new CompressionPlugin({
                    test: /\.js$|\.html$|.\css/, //匹配文件名
                    threshold: 10240,//对超过10k的数据压缩
                    deleteOriginalAssets: false //不删除源文件
                }),
                new UglifyJsPlugin({
                    uglifyOptions: {
                        warnings: false,
                        errors: true,
                        compress: {
                            pure_funcs: ['console.log', 'console.debug', 'console.error']//移除console
                        }
                    }
                })
            ];
        /**开发模式**/
        } else {
            config.mode = 'development';

            /**开发模式检测文件变化回调**/
            config.plugins.push({
                apply: (compiler) => {
                    /**Webpack编译时候**/
                    compiler.hooks.compile.tap('compilation', () => {
                        devCompilerCompilation.init();
                    });

                }
            });


            /**设置开发模式config**/
            dev.init(config, conf);
        }

        /**设置第三方插件**/
        Object.assign(config, {
            plugins: [
                ...config.plugins,
                ...plugins
            ]
        });
    }
};
