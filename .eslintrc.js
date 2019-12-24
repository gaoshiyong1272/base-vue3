module.exports = {
    root          : true,
    parser        : 'babel-eslint',
    parserOptions : {
        sourceType : 'module',
    },
    env           : {
        browser : true,
    },
    extends       : 'standard',
    plugins       : [ 'html'],
    // add your custom rules here
    'rules'       : {
        'semi'                        : [2, "always", {"omitLastInOneLineBlock" : false}],
        'comma-dangle'                : [2, 'only-multiline'],
        'arrow-parens'                : 0,
        'generator-star-spacing'      : 0,
        'no-debugger'                 : process.env.NODE_ENV === 'production' ? 2 : 0,
        'key-spacing'                 : 0,
        'indent'                      : [2, 4, {SwitchCase : 1}],
        'no-unused-vars'              : 0,
        'quotes'                      : 0,
        'no-trailing-spaces'          : 0,
        'no-multi-spaces'             : 0,
        'brace-style'                 : [2, '1tbs', {"allowSingleLine": true}], //大括号风格
        'padded-blocks'               : 0,
        'one-var'                     : 0,
        "no-console"                  : "off",
        "spaced-comment"              : 0,//注释风格不要有空格什么的
        "default-case"                : 2,  // switch语句强制default分支，也可添加 // no default 注释取消此次警告
        "func-style"                  : 0,
        "eqeqeq"                      : [2, "allow-null"], // 使用 === 替代 ==
        "func-names"                  : 0, // 方法表达式是否需要命名
        "no-spaced-func"              : 1,//函数调用时 函数名与()之间不能有空格
        "space-before-blocks"         : [0, "always"],//不以新行开始的块{前面要不要有空格
        "space-before-function-paren" : [0, "always"],//函数定义时括号前面要不要有空格
        "no-multiple-empty-lines"     : [1, {"max": 4}],//空行最多不能超过2行
        "no-useless-escape"           : 1, // 禁用不必要的转义字符\
        "no-new"                      : 1, // 禁止在非赋值或条件语句中使用 new 操作符\
        "no-new-func"                 : 1, // 禁止对 Function 对象使用 new 操作符
        "no-new-wrappers"             : 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
        "new-cap"                     : [2, {"newIsCap": true, "capIsNew": true}], //类必须大写
        "curly"                       : [2, "all"],//必须使用 if(){} 中的{}
        'keyword-spacing'             : [0, {"after": false}], //0关闭if，for格式检查
        'comma-spacing'               : [0, {"before": false, "after": false}], //关闭参数空格处理
        'no-unreachable'              : [0, {"before": false, "after": false}],
        'no-cond-assign'              : 0, // 取消条件表达式中出现赋值操作符
        'no-unneeded-ternary'         : [0, {'defaultAssignment': false}], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
        'no-throw-literal'            : 0, // 禁止抛出异常字面量 0关闭 2开启
        'no-return-await'             : 0, // 禁止在 return 语句里使用 await
    }
};
