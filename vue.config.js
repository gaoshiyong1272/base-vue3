const resolve = require('./build/resolve.conf');
const conf = require('./config');
const dev = require('./build/dev.lib.config');
const plugins = require('./build/plugins');

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
    outputDir : conf.build.buildOutputRoot,
    assetsDir : conf.build.assetsSubDirectory,
    publicPath : conf.build.assetsPublicPath,

    /**
     * configureWebpack  配置
     */
    configureWebpack: config => {

        /** 设置别名 **/
        Object.assign(config, {
            resolve: resolve.config,
        });

        /**生产模式**/
        if (process.env.NODE_ENV === 'production') {


        /**开发模式**/
        } else {
            conf.setDebug();

            /**设置开发模式config**/
            dev.init(config,conf);

            /**开发模式检测文件变化回调**/
            config.plugins.push({
                apply: (compiler) => {
                    compiler.hooks.done.tap('compilation', () => {
                        devCompilerCompilation.init();
                    });
                }
            });
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
