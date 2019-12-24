const path = require('path');
const config = require('../config');
const fs = require("fs");

/**
 * 递归创建目录
 * @param dirname
 * @returns {boolean}
 */
let mkdirsSync = dirname => {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
};


let autoload = {

    /**
     * 自动加载Helper模块
     */
    helper: function(){
        let helperImportStr = '';
        let helperExportStr = '';
        let count = 0;
        Object.keys(config.getHelpers()).forEach((helper) => {
            /**多层关系加载**/
            if(helper.indexOf('bak') === -1) {
                let moduleName = helper;
                let modulePath = helper;
                if (helper.indexOf('/') !== -1) {
                    let temp = [];
                    let arr = helper.split('/');
                    let len = arr.length;
                    for (let i = 0; i < len; i++) {
                        if (i === 0) {
                            temp = arr[i];
                        } else {
                            temp += arr[i].replace(arr[i][0], arr[i][0].toLocaleUpperCase());
                        }
                    }
                    moduleName = temp;
                }

                let str = '';
                if (count === 0) {
                    str = `import ${moduleName} from './${modulePath}';`;
                    helperExportStr += `${moduleName}`;
                } else {
                    str = `
import ${moduleName} from './${modulePath}';`;
                    helperExportStr += `,
    ${moduleName}`;
                }
                helperImportStr += str;
                count++;
            }
        });

        /**读取文件，并替换文件内容**/
        let buffer = fs.readFileSync(path.join(config.build.packingTemplatesPath, 'auto-load-modules-template.txt'));
        let content = String(buffer);
        content = content.replace(/@import_modules@/g, helperImportStr);
        content = content.replace(/@modules_name@/g, helperExportStr);

        /**写文件**/
        let fd = fs.openSync(path.join(config.build.helperDirectory, 'autoload.js'), 'w');
        fs.writeFileSync(fd, content);
        fs.closeSync(fd);

        console.log('Hepler autoload file updated or created');
    },

};

module.exports = autoload;

