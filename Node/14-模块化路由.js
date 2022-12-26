const express = require('express');
const userRouter = require('./14-router.js');

const app = express();
//注册路由模块
app.use(userRouter)

app.listen(80, () => {
    console.log('http://127.0.0.1');
})