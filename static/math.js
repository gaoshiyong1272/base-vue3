import Axios from "axios";

export function add(a , b) {
    return a + b;
}

export function cute(a, b) {
    return a - b;
}

export function fa(a, b) {
    return a * b;
}

export function fetchData(fn) {
    Axios.get('http://127.0.0.1:8092/static/demo.json').then((res) => {
        if(typeof fn === 'function') {
            fn(res);
        }
    });
}

export function fetchDataPromise(fn) {
    return Axios.get('http://127.0.0.1:8092/static/demo.json');
}

export function fetchDataPromise404(fn) {
    return Axios.get('http://127.0.0.1:8092/static/demo1.json');
}




