/**
* Created by shiyonggao on 2019/12/2
*/
function HelloWorldPlugin(options) {
    console.log('aaaa',options);
}

HelloWorldPlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function () {
        console.log('Hello World!');
    });
};


module.exports = new HelloWorldPlugin();
