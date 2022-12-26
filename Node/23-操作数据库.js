const mysql = require('mysql');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

/* db.query('SELECT 1',(err, results) => {
    if(err) return console.log(err.message)
    //只要能打印出 [ RowDataPacket { '1':1 } ] 的结果，就证明数据库连接正常
    console.log(results)
}) */

/* const sqlStr = 'select * from users';
db.query(sqlStr, (err, results) => {
    if(err) return console.log(err.message)
    console.log(results); //执行结果是数组
}) */

/* const user = { username: 'anna', password: 'spdm123' };
const sqlStr = 'INSERT INTO users (username, password) VALUES (?, ?)';
db.query(sqlStr, [user.username, user.password], (err, results) => {
    if(err) return console.log(err.message);
    if(results.affectedRows === 1) { 
        console.log('插入成功');
        // console.log(results);
    }
}) */
/* const user = { username: 'anna2', password: 'spdm234' };
const sqlStr = 'INSERT INTO users SET ?';
db.query(sqlStr, user, (err, results) => {
    if(err) return console.log(err.message);
    if(results.affectedRows === 1) { 
        console.log('插入成功');
        // console.log(results);
    }
}) */

/* const user = { id:6, username: 'aaa', password: '000000'};
const sqlStr = 'UPDATE users SET username=?, password=? WHERE id=?';
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if(err) return console.log(err.message);
    if(results.affectedRows === 1) { 
        console.log('更新成功')
    }
}) */
/* const user = { id:7, username: 'bbb', password: '111111'};
const sqlStr = 'UPDATE users SET ? WHERE id=?';
db.query(sqlStr, [user, user.id], (err, results) => {
    if(err) return console.log(err.message);
    if(results.affectedRows === 1) { 
        console.log('更新成功')
    }
}) */

/* const sqlStr = 'DELETE FROM users WHERE id=?';
db.query(sqlStr, 7, (err,results) => {
    if(err) return console.log(err.message);
    if(results.affectedRows === 1) { 
        console.log('删除成功')
    }
}) */

db.query('UPDATE users SET status=1 WHERE id=?', 6, (err,results) => {
    if(err) return console.log(err.message);
    if(results.affectedRows === 1) { 
        console.log('删除成功')
    }
})