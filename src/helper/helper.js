/**
 * Created by shiyonggao on 2019/11/28.
 */
import {forIn, forEach, cloneDeep, keys, findKey, isEmpty, unescape, isPlainObject, isFunction, toString} from 'lodash';
import Cookie from "./cookie";
const Config = require('../config/config');


class Helper {
    /***
     * 去掉两端空格
     * @param s
     * @returns {s}
     */
    tirm(s) {
        return s.replace(/^\s+|\s+$/gm, '');
    }

    logout(){

    }


    /**
     * 获取URL参数
     * @param key
     * @returns {string}
     */
    getParamers(key) {
        let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return unescape(r[2]);
        }
        return '';
    }

    /***
     * 解析url地址
     * @param url
     * @returns {}
     */
    parseURL(url) {

    }

    /**
     * object to request params
     * @param o
     * @returns string   b=1&b=2
     */
    paramJSON(o){
        let s = [],
            add = (key, valueOrFunction) => {
                let value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
            },
            buildParams = (prefix, obj) => {
                if (Array.isArray(obj)) {
                    obj.forEach((value, i) => {
                        buildParams(prefix + "[" + (typeof value === "object" && value != null ? i : "") + "]", value);
                    });
                } else if (isPlainObject(obj)) {
                    forIn(obj, (value, key) => {
                        buildParams(prefix + "[" + key + "]", value);
                    });
                } else {
                    add(prefix, obj);
                }
            };

        if (isEmpty(o)) {
            return "";
        }

        forIn(o, (value, prefix) => {
            buildParams(prefix, value);
        });

        return s.join("&");
    }


}

export default new Helper();
