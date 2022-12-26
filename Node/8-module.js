// console.log(module); 

//在一个自定义模块中，默认情况下，module.exports = {}
const age = 2;

module.exports.username = 'zs';
module.exports.sayHi = function() {
    console.log('Hi')
};
module.exports.age = age;