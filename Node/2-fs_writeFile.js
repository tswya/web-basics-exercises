const fs = require('fs');

fs.writeFile('./files/test1.txt', 'hello node.js', function(err){
    console.log(err);
    if(err){
        return console.log('文件写入失败！' + err.message);
    }
    console.log('文件写入成功');
})