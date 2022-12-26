const express = require('express');
const app = express();

app.get('/api/jsonp', (req, res) => {
    const funcName = req.query.callback;
    const data = { name:'anna', age:20 };
    const scriptStr = `${funcName}(${JSON.stringify(data)})`;
    res.send(scriptStr)
})
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({extended: false}));
const router = require('./21-apiRouter');

app.use('/api', router);


app.listen(80, () => {
    console.log('http://127.0.0.1');
})