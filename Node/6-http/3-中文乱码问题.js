const http = require('http');
const server = http.createServer();

server.on('request', (req,res) => {
    const str = `请求地址是 ${req.url}, 请求方法是 ${req.method}`;
    // console.log(str);
    res.setHeader('Content-Type','text/html; charset=utf-8')

    res.end(str);
})
server.listen(80, () => {
    console.log('server running at http://127.0.0.1:80');
})