const db = require('../db/index');
const bcrypt = require('bcryptjs');
const { result } = require('@hapi/joi/lib/base');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.regUser = (req,res) => {
    //获取客户端提交到服务器的用户信息
    const userinfo = req.body;
    /* if(!userinfo.username || !userinfo.password) {
        return res.send({status:1, message: '用户名或密码不能为空！'})
    } */
    const sqlStr = 'select * from ev_users where username=?';
    db.query(sqlStr, userinfo.username, (err,results) => {
        //执行sql语句失败
        if(err) {
            // return res.send({status:1, message:err.message})
            return res.cc(err)
        }
        //判断用户名是否被占用
        if(results.length > 0) {
            // return res.send({status:1, message:'用户名被占用，请更换其他用户名！'})
            return res.cc('用户名被占用，请更换其他用户名!')
        }
        //对密码进行加密
        // console.log(userinfo);
        userinfo.password = bcrypt.hashSync(userinfo.password, 10);
        // console.log(userinfo);

        //定义插入新用户的sql语句
        const sql = 'insert into ev_users set ?';
        db.query(sql, {username: userinfo.username, password: userinfo.password}, (err,results) => {
            if(err) {
                // return res.send({ status:1, message: err.message});
                return res.cc(err)
            }
            if(results.affectedRows !== 1) {
                // return res.send({ status:1, message: '注册用户失败，请稍后再试！'});
                return res.cc('注册用户失败，请稍后再试！')
            }
            // res.send({status:0, message:'注册成功'})
            res.cc('注册成功', 0)
        })
    })
    // res.send('reguser ok')
}

exports.login = (req,res) => {
    const userinfo = req.body;
    const sql = 'select * from ev_users where username=?';
    db.query(sql, userinfo.username, (err,results) => {
        if(err) return res.cc(err);
        if(results.length !== 1) return res.cc('登录失败！');

        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password);
        if(!compareResult) {
            return res.cc('登陆失败！')
        }

        // 在服务器端生成token字符串
        const user = { ...results[0], password:'', user_pic:''}
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {expiresIn: config.expiresIn});
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr
        })
        // res.send(results);
        // res.send('login ok')
    })
    
}