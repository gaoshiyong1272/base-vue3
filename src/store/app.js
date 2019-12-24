/**
 * Created by shiyonggao on 2019/1/28.
 */
import Vue  from 'vue';
import Vuex from 'vuex';
const MD5 = require('md5.js');

import {Base64} from 'js-base64';
import Lodash from "lodash";
import Jquery from "jquery";
import Helper from "../helper/autoload";
const Config = require('../config/config');

/**
 * 注册vuex
 */
Vue.use(Vuex);

/**root vuex**/
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import modules from './modules/autoload';


/**
 * md5算法
 * @param str
 * @param hex
 * @returns {*}
 */
const md5Fn = (str, hex = 'hex') => {
    return new MD5()['update'](str)['digest'](hex);
};

const state = {
    $md5 : md5Fn,
    $base64: Base64,
    $page : 'index',
    $config : Config,
    $lodash: Lodash,
    $jquery: Jquery,
    $helper : Helper,
    $loading: true,
    $vue: null,
};


const store = new Vuex.Store({
    modules,
    state,
    actions,
    mutations,
    getters
});

export default store;
