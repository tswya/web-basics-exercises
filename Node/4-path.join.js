const path = require('path')
const fs = require('fs');

const pathStr = path.join('/a','/b/c','../','./d','e');
console.log(pathStr);

// fs.readFile(__dirname + '/files/test.txt');
fs.readFile(path.join(__dirname,'/files/test.txt'), 'utf8', function(err,dataStr) {
    if(err){
        return console.log(err.message);
    }
    console.log(dataStr);
})