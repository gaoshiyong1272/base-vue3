// see http://vuejs-templates.github.io/webpack for documentation.
"use strict";
const path = require('path');
const merge = require('webpack-merge');
const rreaddir = require('recursive-readdir-sync');
const fs = require('fs-extra');

let packageInfo = fs.readJsonSync(path.resolve(__dirname, '../package.json'));
let configPath = path.resolve(__dirname,'../src/config/config');
const objectConfig = require(configPath);

module.exports = {
    build: {
        buildOutputRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'assets',
        assetsPublicPath: '/',
        entryDirectory: path.resolve(__dirname, '../' + packageInfo['codedir'] + '/entries'),
        packingTemplatesPath: path.resolve(__dirname, '../build/pack-templates'),
        componentsDirectory: path.resolve(__dirname, '../' + packageInfo['codedir'] + '/components'),
        subComponentsDirectory: path.resolve(__dirname, '../' + packageInfo['codedir'] + '/subComponents'),
        helperDirectory: path.resolve(__dirname, '../' + packageInfo['codedir'] + '/helper'),
        modulesDirectory: path.resolve(__dirname, '../' + packageInfo['codedir'] + '/store/modules'),
    },
    prod: {
        env: require('./prod.env'),
        cssSourceMap: true,
        productionHtml: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report,
    },
    dev: {
        env: require('./dev.env'),
        index: objectConfig.index,
        port: objectConfig.port,
        autoOpenBrowser: objectConfig.autoOpenBrowser === undefined ? true : objectConfig.autoOpenBrowser,
        proxyTable: {},
        cssSourceMap: false,
    },
    _debug: true,

    setDebug: function (debug = true) {
        this._debug = debug;
        this.build = merge(this.build, debug ? this.dev : this.prod);
    },

    isDebug: function () {
        return this._debug;
    },
    isProduction: function () {
        return !this.isDebug();
    },
    shouldOutputHtml: function () {
        if (this.isDebug()) {
            return true;
        } else {
            return this.prod.productionHtml;
        }
    },
    shouldOutputTwig() {
        if (this.isDebug()) {
            return false;
        } else {
            return this.prod.productionTwig;
        }
    },

    /**
     * 获取entry目录文件
     */
    getEntries: function () {
        let entries = {};
        let entryFiles = rreaddir(this.build.entryDirectory);
        // noinspection JSUnresolvedFunction
        entryFiles.forEach(entryFile => {
            entryFile = path.relative(this.build.entryDirectory, entryFile);
            let result = (/(.*)\.js$/).exec(entryFile);
            if (result) {
                let name = `${result[1]}`;
                if (name === 'manifest' || name === 'vendor' || name === 'commons') {
                    throw new Error("entry named " + name + " uses a reserved name");
                }
                entries[name] = path.join(this.build.entryDirectory, entryFile);
            }
        });

        return entries;
    },

    /**
     * 获取components目录文件
     */
    getComponentsEntries: function () {
        let components = {};
        let componentsFiles = rreaddir(this.build.componentsDirectory);
        // noinspection JSUnresolvedFunction
        componentsFiles.forEach(componentFile => {
            componentFile = path.relative(this.build.componentsDirectory, componentFile);
            let result = (/(.*)\.vue$/).exec(componentFile);
            if (result) {
                let name = `${result[1]}`;
                if (name === 'manifest' || name === 'vendor' || name === 'commons') {
                    throw new Error("entry named " + name + " uses a reserved name");
                }
                components[name] = path.join(this.build.componentsDirectory, componentFile);
            }
        });
        return components;
    },

    /**
     * 获取components目录文件
     */
    getSubComponentsEntries: function () {
        let components = {};
        let componentsFiles = rreaddir(this.build.subComponentsDirectory);
        // noinspection JSUnresolvedFunction
        componentsFiles.forEach(componentFile => {
            componentFile = path.relative(this.build.subComponentsDirectory, componentFile);
            let result = (/(.*)\.vue$/).exec(componentFile);
            if (result) {
                let name = `${result[1]}`;
                if (name === 'manifest' || name === 'vendor' || name === 'commons') {
                    throw new Error("entry named " + name + " uses a reserved name");
                }
                components[name] = path.join(this.build.subComponentsDirectory, componentFile);
            }
        });
        return components;
    },

    /**
     * 获取helpers目录文件
     */
    getHelpers: function () {
        let helpers = {};
        let helperFiles = rreaddir(this.build.helperDirectory);
        // noinspection JSUnresolvedFunction
        helperFiles.forEach(helperFile => {
            helperFile = path.relative(this.build.helperDirectory, helperFile);
            let result = (/(.*)\.js$/).exec(helperFile);
            if (result && result[1] !== 'autoload') {
                let name = `${result[1]}`;
                if (name === 'manifest' || name === 'vendor' || name === 'commons') {
                    throw new Error("entry named " + name + " uses a reserved name");
                }
                helpers[name] = path.join(this.build.helperDirectory, helperFile);
            }
        });

        return helpers;
    },

    /**
     * 获取helpers目录文件
     */
    getStoreModules: function () {
        let modules = {};
        let files = rreaddir(this.build.modulesDirectory);
        // noinspection JSUnresolvedFunction
        files.forEach(file => {
            file = path.relative(this.build.modulesDirectory, file);
            let result = (/(.*)\.js$/).exec(file);
            if (result && result[1] !== 'autoload') {
                let name = `${result[1]}`;
                if (name === 'manifest' || name === 'vendor' || name === 'commons') {
                    throw new Error("entry named " + name + " uses a reserved name");
                }
                modules[name] = path.join(this.build.modulesDirectory, file);
            }
        });

        return modules;
    },

};
