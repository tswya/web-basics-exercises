const fs = require('fs');
/* fs.readFile('./files/test1.txt', 'utf8', function(err, dataStr){
    
    if(err){
        return console.log('文件读取失败！' + err.message)
    }
    console.log('文件读取成功，内容是：' + dataStr)
}) */

// __dirname
fs.readFile(__dirname + '/files/test1.txt', 'utf8', function(err, dataStr){
    
    if(err){
        return console.log('文件读取失败！' + err.message)
    }
    console.log('文件读取成功，内容是：' + dataStr)
})