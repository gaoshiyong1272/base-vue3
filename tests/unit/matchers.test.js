import {add, cute, fa} from "../../static/math";

/**===真假匹配器=====================================**/
test('+++ 3 + 7', () => {
    /**类型匹配**/
    expect(add(3, 7)).toBe(10);
});


/**测试内容值相等**/
test('内容值相等', () => {
    let a = {a:1};
    expect(a).toEqual({a:1});
});

/**测试值等于Null**/
test('测试值等于Null', () => {
    let a = null;
    expect(a).toBeNull();
});

/**测试值等于Undefined**/
test('测试值等于Undefined', () => {
    const a = undefined;
    expect(a).toBeUndefined();
});

/**测试变量已定义**/
test('测试变量已定义', () => {
    const a = '1';
    expect(a).toBeDefined();
});

/**测试变量真**/
test('测试变量真', () => {
    const a = true;
    expect(a).toBeTruthy();
});

/**测试变量假**/
test('测试变量假', () => {
    const a = false;
    expect(a).toBeFalsy();
});


/**测试变量取反**/
test('测试变量取反', () => {
    const a = true;
    expect(a).not.toBeFalsy();
});

/**===数字匹配器=====================================**/
/**测试数字大于**/
test('测试数字大于', () => {
    const a = 1;
    expect(a).toBeGreaterThan(0);
});

/**测试数字大于等于**/
test('测试数字大于等于', () => {
    const a = 1;
    expect(a).toBeGreaterThanOrEqual(0);
});

test('测试数字小于', () => {
    const a = 1;
    expect(a).toBeLessThan(2);
});

/**测试数字大于等于**/
test('测试数字小于等于', () => {
    const a = 1;
    expect(a).toBeLessThanOrEqual(2);
});


/**测试数字约等于**/
test('测试数字约等于', () => {
    expect(0.3 + 0.2).toBeCloseTo(0.5);
});


/**===字符串匹配器=====================================**/
/**测试字符串匹配**/
test('测试字符串匹配', () => {
    const str = "ccccca";
    expect(str).toMatch(/a/g);
});

/**===Array，Set匹配器=====================================**/
/**测试集合匹配**/
test('测试集合匹配', () => {
    const arr = ['1',3,5,7];
    const set = new Set(arr);
    expect(arr).toContain('1');
    expect(set).toContain(5);
});

/**测试集合匹配**/
test('测试集合匹配', () => {
    const data = {a:1,b:1,c:3};
    expect(data).toHaveProperty('a',1);
});


/**===异常匹配器=====================================**/
const throwNewErrorFunc = () => {
    throw new Error('this is a new error');
};

test('测试程序是否异常', () => {
    /**toThrow参数可以是正则表达试**/
    expect(throwNewErrorFunc).toThrow('this is a new error');
});

/**===return times匹配器=====================================**/
/**使用方法调用有数据返回并有确切次数**/
test('drink returns twice', () => {
    const fb = () => {
        return true;
    };
    const drink = jest.fn(fb);
    drink();
    drink();
    expect(drink).toHaveReturnedTimes(2);
});

test('drink returns', () => {

    const drink = jest.fn(() => {
    });
    drink();
    expect(drink).toReturn();
});




