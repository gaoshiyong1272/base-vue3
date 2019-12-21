const resolve = require('./build/resolve.conf');
const conf = require('./config');

//检查项目发生变化处理逻辑
const devCompilerCompilation = require('./build/dev.compiler.compilation');

module.exports = {
    configureWebpack: config => {
        Object.assign(config, {
            resolve: resolve.config,
        });

        /**编译是检查**/
        if (process.env.NODE_ENV === 'production') {

        }
        else {
            conf.setDebug();
            //console.log(conf.build);

            // 为开发环境修改配置...
            config.plugins.push({
                apply: (compiler) => {
                    compiler.hooks.done.tap('compilation', () => {
                        devCompilerCompilation.init();
                    });
                }
            });
        }
    }
};
