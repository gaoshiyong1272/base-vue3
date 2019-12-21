module.exports = {
    init(config, conf){
        this.devServer(config, conf);
    },



    /**
     * 开发环境node http 配置
     * @param config
     * @param conf
     */
    devServer(config, conf){
        config.devServer = {
            open: conf.build.autoOpenBrowser,
            host: conf.build.host, // 允许外部ip访问
            port: conf.build.port, // 端口
            index: `${conf.build.index}.html`, //默认打开页面
            https: false, // 启用https
        };
    }
};
