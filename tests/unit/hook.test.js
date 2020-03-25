import Hook from "../../static/hook";

let hook = null;


/**==hook===================================**/
/**在测试用例开始前处理方法**/
beforeAll(() => {
    //console.log('beforeAll');
});

/**在测试用例结束后处理方法**/
afterAll(() => {
    //console.log('afterAll');
});

/**在每个测试用例开始前处理方法**/
beforeEach(() => {
    //console.log('beforeEach');
    hook = new Hook();
});

/**在每个测试用例结束后处理方法**/
afterEach(() => {
    //console.log('beforeEach');
    //hook = new Hook();
});

/**==用例===================================**/
test('Hook=> addOne',() => {
    //console.log('Hook=> addOne');
    hook.addOne();
    expect(hook.number).toBe(1);
});

test('Hook=> minusOne', () => {
    //console.log('Hook=> minusOne');
    hook.minusOne();
    expect(hook.number).toBe(-1);
});

/**==用例分组===================================**/
describe('计数器测试代码',() => {
    describe('计数器测试加法代码',() => {

    });

    describe('计数器测试减法法代码', () => {

    });
});







