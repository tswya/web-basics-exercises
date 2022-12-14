// 1. import express
const { response } = require('express');
const express = require('express');

// 2. create app object
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装，response 是对响应报文的封装
app.get('/server',(request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('Hello Ajax');
}) ;

app.post('/server',(request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('Hello Ajax POST');
}) ;

// 可以接收任意类型的请求
app.all('/server',(request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('Hello Ajax POST');
}) ;

// JSON.html
app.all('/json-server',(request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        name: 'atgz'
    };
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
}) ;

// 针对IE缓存
app.get('/ie',(request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('Hello IE');
}) ;

// 延时响应
app.get('/delay',(request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
    // 设置响应体
    response.send('延时响应');
    }, 3000)
}) ;
    //jQuery超时
app.all('/delay',(request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
        //设置自定义header
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
    // 设置响应体
    response.send('延时响应');
    }, 1000)
}) ;

// jQuery服务

//app.get('/jquery-server',(request, response)=>{
    // 设置响应头 设置允许跨域
    //response.setHeader('Access-Control-Allow-Origin','*');
    //response.send('Hello jQuery AJAX');
    //const data = {name: 'atgz'};
    //response.send(JSON.stringify(data));
//}) ;

app.all('/jquery-server',(request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置自定义header
    response.setHeader('Access-Control-Allow-Headers', '*');
    //response.send('Hello jQuery AJAX');
    const data = {name: 'atgz'};
    response.send(JSON.stringify(data));
}) ;

// axios服务
app.all('/axios-server',(request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置自定义header
    response.setHeader('Access-Control-Allow-Headers', '*');
    //response.send('Hello jQuery AJAX');
    const data = {name: 'atgz'};
    response.send(JSON.stringify(data));
}) ;

// fetch服务
app.all('/fetch-server',(request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置自定义header
    response.setHeader('Access-Control-Allow-Headers', '*');
    //response.send('Hello jQuery AJAX');
    const data = {name: 'atgz'};
    response.send(JSON.stringify(data));
}) ;

//jsonp服务
app.all('/jsonp-server',(request,response)=>{
    //response.send('console.log("hello jsonp")');

    const data = {
        name: 'atgz',
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
})

//用户名检测是否存在
app.all('/check-username',(request,response)=>{
    //response.send('console.log("hello jsonp")');

    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
})

//jQuery-JSONP
app.all('/jquery-jsonp-server',(request,response)=>{
    //response.send('console.log("hello jsonp")');

    const data = {
        name: 'atgz',
        city: ['gz', 'sh', 'sz']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收callback参数
    let cb = request.query.callback;
    //返回结果
    response.end(`${cb}(${str})`);
})


//CORS
app.all('/cors-server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    //response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Method', '*');

    response.send('hello cors');
})
// 4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000 端口监听中....");
})