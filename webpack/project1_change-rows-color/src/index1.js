// 1.使用ES6导入语法 导入jquery
import $ from 'jquery'; // 有兼容性问题
// 导入样式 在webpack中一切皆模块，都可以通过es6导入语法进行导入和使用
import './css/index.css'
import './css/index.less'  // 如果某个模块中，使用 from 接收到的成员为undefined 则不用进行接收

import './js/test/info.js'

// 1.导入图片
import logo from './img/logo.png'

// 2.给img标签的src动态赋值
$('.box').attr('src', logo)


// 2.定义jquery的入口函数
$(function(){
    // 3.实现奇偶行变色
    $('li:odd').css('background-color','lightpink')
    $('li:even').css('background-color','lightblue')
})

// 定义装饰器函数
function info(target) {
    target.info = 'Person info.'
}
// 定义一个普通的类
@info
class Person {};

console.log(Person.info);