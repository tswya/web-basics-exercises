//在外界使用require导入一个自定义模块的时候，得到的成员就是那个模块中通过 module.exports 指向的那个对象
const m = require('./8-module');

console.log(m);