## 安装
```
npm install init-tool
```

## 导入
```js
const initTool = require('init-tool')
```

## 格式化时间
```js
//调用dateFormat对时间进行格式化
const dtStr = initTool.dateFormat(new Date());
//转换结果 2020-12-23 10:34:01
console.log(dtStr);
```

## 转义 HTML 中的特殊字符
```js
//带转换的HTML字符串
const htmlStr = '<h1 title="abc">h1标签<span>123</span></h1>';
//调用htmlEscape方法进行转换
const str = initTool.htmlEscape(htmlStr);
//转换结果&lt;h1 title=&quot;abc&quot;&gt;h1标签&lt;span&gt;123&lt;/span&gt;&lt;/h1&gt;
console.log(str);
```

## 还原HTML中的特殊字符
```js
//待还原的HTML字符串
const str2 = initTool.htmlUnEscape(str);
//输出结果 <h1 title="abc">h1标签<span>123</span></h1>
console.log(str2);
```

## 开源协议
ISC