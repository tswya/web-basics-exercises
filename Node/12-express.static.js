const express = require('express');

const app = express();

app.use(express.static('./6-http/clock'));
// app.use('/clock', express.static('./6-http/clock'));

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})
