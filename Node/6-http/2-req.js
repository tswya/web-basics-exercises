const http = require('http');
const server = http.createServer();

server.on('request', (req,res) => {
    const str = `Request url is ${req.url}, and request method is ${req.method}`;

    console.log(str);
    res.end(str);
})
server.listen(80, () => {
    console.log('server running at http://127.0.0.1:80');
})