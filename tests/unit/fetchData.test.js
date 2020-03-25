import {fetchDataPromise, fetchDataPromise404, fetchData} from "../../static/math";

/**异步请求回调函数测试用例编写**/
test('fetchData(callback) 返回结果：{"success": true}',(done) => {
    fetchData((res) => {
        expect(res.status).toEqual(200);
        expect(res.statusText).toEqual('OK');
        expect(res.data).toHaveProperty('success', true);
        done();
    });
});

/**异步请求返回Promise对象测试用例编写**/
test('retrun Promise fetchData() 返回结果：key = "success" value = true', () => {
    return fetchDataPromise().then((res) => {
        expect(res.status).toEqual(200);
        expect(res.statusText).toEqual('OK');
        expect(res.data).toHaveProperty('success', true);
    });
});

/**异步请求返回Promise对象测试用例编写**/
test('retrun Promise fetchData() 返回结果：404', () => {
    expect.assertions(1);
    return fetchDataPromise404().catch((e) => {
        let errorStatus = e.toString().indexOf('404') === -1 ? false : true;
        console.log(errorStatus);
        expect(errorStatus).toBe(true);
    });
});

/**异步请求返回Promise对象测试用例编写**/
test('retrun Promise.resolves fetchData() 返回结果：{"success": true}', () => {
    return expect(fetchDataPromise()).resolves.toMatchObject({
        data: {
            success: true
        }
    });
});


/**异步请求返回Promise对象测试用例编写**/
test('retrun Promise.resolves fetchData() 返回结果：404', () => {
    return expect(fetchDataPromise404()).rejects.toThrow();
});


/**异步请求返回Promise对象测试用例编写,使用async和await关键字**/
test('retrun Promise.resolves fetchData() 返回结果：{"success": true}', async () => {
    await expect(fetchDataPromise()).resolves.toMatchObject({
        data: {
            success: true
        }
    });
});

/**异步请求返回Promise对象测试用例编写，使用async和await关键字**/
test('retrun Promise.resolves fetchData() 返回结果：404', async () => {
    await expect(fetchDataPromise404()).rejects.toThrow();
});


/**异步请求返回Promise对象测试用例编写,使用async和await，try catch关键字**/
test('Promise fetchData() 返回结果：{"success": true}', async () => {
    let data = await fetchDataPromise();
    expect(data.data).toEqual({"success": true});
});

/**异步请求返回Promise对象测试用例编写，使用async和await,try catch关键字**/
test('try{}catch(e){} Promise fetchData() 返回结果：404', async () => {
    expect.assertions(1);
    try{
        await fetchDataPromise404();
    }catch (e) {
        expect(e.toString().indexOf('404') > -1).toBe(true);
    }
});





