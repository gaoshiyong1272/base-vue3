const config = require('../../config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

let patterns = [
    {
        from   : path.resolve(__dirname, '../../static'),
        to     : path.join(config.build.buildOutputRoot, 'static'),
        ignore : ['.*'],
    },
];

module.exports = new CopyWebpackPlugin(patterns);
