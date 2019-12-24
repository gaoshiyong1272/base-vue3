const conf = require('../config');
const autoload = require('./autoload');
const lodash = require('lodash');

module.exports = {
    helperCount: Object.assign({}, conf.getHelpers()),

    init(){
        console.log('开始检查文件', '\n');
        //console.log(conf.build, this.helperCount);
        this.helper();
        console.log('\n' + '结束检查文件', '\n');

    },

    helper(){
        let oldComponents = lodash['keysIn'](this.helperCount);
        let newComponents = lodash['keysIn'](conf.getHelpers());
        if (oldComponents.length === newComponents.length) {
            console.log('helper无变化');
            return;
        }
        autoload.helper();
        this.helperCount = Object.assign({}, conf.getHelpers());
    }

};
