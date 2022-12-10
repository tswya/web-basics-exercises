// 使用node.js中的导出语法，向外导出一个webpack的配置对象
const path = require('path');

// 1. 导入HTML插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2. 创建HTML插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',  // 指定原文件的存放路径
    filename: './index.html',  // 指定生成的文件的存放路径
})
// 左侧花括号 解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()


module.exports = {
    // mode代表webpack运行的模式
    mode: "development",
    // devtool: 'eval-source-map',

    // 实际发布的时候使用下一行代码或关闭sourcemap
    devtool: 'nosources-source-map',
    // entry：'指定要处理那个文件'
    entry:path.join(__dirname, './src/index1.js'),
    // 指定生成的文件 存放位置
    output: {
        // 指定存放目录
        path: path.join(__dirname, './dist'),

        // 生成文件名
        filename: 'js/bundle.js'
    },

    // 插件的数组，将来webpack运行时会加载并调用这些插件
    plugins: [htmlPlugin, cleanPlugin], 

    devServer: {
        open: true,
        port: 80,
        static: {
            directory: path.join(__dirname, './'),
            watch: true
        }
    },


    module: { // 所有第三方文件模块的匹配规则
        rules: [ // 文件后缀名的匹配规则
            { test:/\.css$/, use: ['style-loader', 'css-loader']},
            { test:/\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            // 在配置url-loader时  多个参数之间使用 & 进行分隔
            { test:/\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=img'},
            { test:/\.js$/, use: 'babel-loader', exclude: /node_modules/}, 
        ]
    },

    resolve: {
        alias: {
            // 告诉webpack @符号表示src这一层目录
            '@': path.join(__dirname, './src/')
        }
    }

}