const fs = require('fs');
fs.readFile('./files/test1.txt', 'utf8', function(err, dataStr){
    //1.
    /* console.log(err); //读取成功，err返回null；读取成败，err结果为错误对象
    console.log('-----');
    console.log(dataStr); //读取成败，dataStr结果为 undefined */

    //2.判断文件是否读取成功
    if(err){
        return console.log('文件读取失败！' + err.message)
    }
    console.log('文件读取成功，内容是：' + dataStr)
})