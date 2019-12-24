/**
 * Created by shiyonggao on 2019/2/25.
 */

module.exports = {
    getJsTamelate(type = 'i',args){

        let note = this.note();
        let content;

        if(type === 'i') {
            content = this.import(args);
        }

        if(type === 'm'){
            content = this.module();
        }

        return `${note}

${content}
`;

    },

    note(){
        let name = __dirname.split('/')[2];
        let now = new Date();
        let time = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDay()}`;
        return `/**
* Created by ${name} on ${time}
*/`;
    },

    module(){
        return `module.exports = {

};`;
    },

    import({name}){
        return `class __CodeClassFn {
    constructor(options = {}){
        this.options = Object.assign({}, options);
    }
    
    initialization(){
        console.log(this.options);
    }
}

const ${name} = (options = {}) => {
    return new __CodeClassFn(options);
};

export default ${name};
`;
    }

};



