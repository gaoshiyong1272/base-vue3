import {add, cute, fa} from "../../static/math";

test('+++ 3 + 7', () => {
    /**类型匹配**/
    expect(add(3,7)).toBe(10);
});


