const path = require('path');
const fs = require('fs');

const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, './2-index.html'), 'utf8', (err,dataStr)=>{
    if(err) return console.log('读取失败！' + err.message);
    resolveCSS(dataStr);
    resolveHTML(dataStr);
    resolveJS(dataStr);
})

function resolveCSS(htmlStr){
    const r1 = regStyle.exec(htmlStr);  //r1为数组
    const newCSS = r1[0].replace('<style>','').replace('</style>','');
    fs.writeFile(path.join(__dirname,'./2-files/2-index.css'), newCSS, err => {
        if(err) return console.log('写入失败！' + err.message);
        console.log('写入CSS成功！');
    })
};

function resolveJS(htmlStr){
    const r2 = regScript.exec(htmlStr);
    const newJS = r2[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'./2-files/2-index.js'),newJS, err => {
        if(err) return console.log('写入失败！' + err.message);
        console.log('写入JS成功！');
    })
};

function resolveHTML(htmlStr){
    const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./2-index.css">').replace(regScript,'<script src="./2-index.js"></script>')
    fs.writeFile(path.join(__dirname,'./2-files/2-index.html'),newHTML, err => {
        if(err) return console.log('写入失败！' + err.message);
        console.log('写入HTML成功！');
    })
}