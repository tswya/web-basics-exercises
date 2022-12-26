const path = require('path');

const fpath = '/a/b/c/index.html';

const fN = path.basename(fpath);
const fN1 = path.basename(fpath, '.html');
console.log(fN);
console.log(fN1);