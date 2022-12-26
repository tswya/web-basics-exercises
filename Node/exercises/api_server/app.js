const express = require('express');
const cors = require('cors');
const userRouter = require('./router/user');
const Joi = require('joi');
const app = express();
const config = require('./config');
const expressJWT = require('express-jwt');
const userinfoRouter = require('./router/userinfo');

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use('/uploads', express.static('./uploads'));
//路由之前封装res cc函数
app.use((req,res,next) => {
    res.cc = function(err, status=1) { //status默认值为1 表示失败的情况；err的值可能是一个错误对象也可能是一个错误的描述字符串
        res.send({
            status,
            message: err instanceof Error? err.message : err,
        })
    }
    next()
})

app.use(expressJWT({secret: config.jwtSecretKey}).unless({path:[/^\/api\//]}));

app.use('/api', userRouter)
app.use('/my', userinfoRouter)
//导入并使用文章分类的路由模块
const artCateRouter = require('./router/artcate');
app.use('/my/article', artCateRouter);

const articleRouter = require('./router/article');
app.use('my/article', articleRouter);


app.use((err,req,res,next) => {
    if(err instanceof Joi.ValidationError) return res.cc(err);
    if(err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    res.cc(err);
    
})

app.listen(3007, () => {
    console.log('api server running at http://127.0.0.1:3007');
})