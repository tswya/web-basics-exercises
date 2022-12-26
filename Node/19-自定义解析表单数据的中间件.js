const express = require('express');
const app = express();
const qs = require('querystring');

app.use((req, res, next) => {
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
        // console.log(str);
        const body = qs.parse(str);
        // console.log(body);
        req.body = body;
        next();
    })
})
app.post('/user',(req,res) => {
    res.send(req.body)
})
app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
})