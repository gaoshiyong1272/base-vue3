const clean = require('./clean-plugin');
const copy = require('./copy-files-plugin');
const autoload = require('./autoload-file-plugins');
const conf = require('../../config');


let plugins = ([]);
if(conf.build._debug) {
    plugins = plugins.concat(copy, autoload);
}else{
    plugins = plugins.concat(copy, autoload);
}

module.exports = plugins;
