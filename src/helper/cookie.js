/**
* Created by shiyonggao on 2019/12/6
*/

class __codeClassFn {
    constructor(options = {}){
        this.options = Object.assign({}, options);
    }
    
    initialization(){
        console.log(this.options);
    }
}

const cookie = (options = {}) => {
    return new __codeClassFn(options);
};

export default cookie;

