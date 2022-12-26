const express = require('express');
const app = express();
const custombodyParser = require('./20-custom_bodyParser');
app.use(custombodyParser);

app.post('/user',(req,res) => {
    res.send(req.body)
})
app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
})