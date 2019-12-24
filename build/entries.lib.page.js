const  path = require('path');

module.exports = {
    init(conf){
        return this.pages(conf);
    },

    commonParamter(){
        let time = new Date();
        let version = parseInt(time.getTime() / 1000);
        return {
            version : version,
        };

    },
    pages(conf){
        let entries = conf.getEntries();
        let pages = {};
        Object.keys(entries).forEach((entry) => {
            pages[entry] = {};
            pages[entry]['entry'] = path.resolve(conf['build'].entryDirectory, `${entry}.js`);
            pages[entry]['template'] = path.resolve(conf['build'].packingTemplatesPath, 'index.html');
            pages[entry]['filename'] = `${entry}.html`;
            pages[entry]['title'] = entry;
            pages[entry]['paramters'] = this.commonParamter();
            pages[entry]['chunks'] = ['chunk-vendors', 'chunk-common', entry];
        });

        return pages;
    }
};
