const initTool = require('./3-initTool');

const dtStr = initTool.dateFormat(new Date());
console.log(dtStr);
console.log('----------------');

const htmlStr = '<h1 title="abc">h1标签<span>123</span></h1>';
const str = initTool.htmlEscape(htmlStr);
console.log(str);
console.log('----------------');

const str2 = initTool.htmlUnEscape(str);
console.log(str2);
