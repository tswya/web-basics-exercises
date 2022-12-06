// 使用node.js中的导出语法，向外导出一个webpack的配置对象
const path = require('path');
module.exports = {
    // mode代表webpack运行的模式
    mode: "development",

    // entry：'指定要处理那个文件'
    entry:path.join(__dirname, './src/index1.js'),
    // 指定生成的文件 存放位置
    output: {
        // 指定存放目录
        path: path.join(__dirname, './dist'),

        // 生成文件名
        filename: 'bundle.js'
    }

}