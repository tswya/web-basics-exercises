const express = require('express');

const app = express();

// 4. 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get('/user', (req,res) => {
    res.send({ name: 'an', age: 10, gender: 'male' })
})
app.post('/user', (req, res) => {
    res.send('请求成功')
})
app.get('/', (req, res) => {
    console.log(req.query);
    res.send(req.query)
})
app.get('/user/:id', (req,res) => {  //'http://127.0.0.1/user/1'
    console.log(req.params);
    res.send(req.params)
})
// 3. 启动web服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})