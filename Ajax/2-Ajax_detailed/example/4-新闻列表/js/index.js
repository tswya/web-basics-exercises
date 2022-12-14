$(function(){
    /* function padZero(n){
        if(n < 10) {
            return '0' + n
        } else {
            return n
        }
    } */
    // 定义格式化时间的过滤器
    template.defaults.imports.dateFormat = function(date){
        var dt = new Date(date); //根据给定字符串得到一个时间对象
        var y = dt.getFullYear();
        var m = dt.getMonth() + 1;
        m = m < 10? '0' + m : m;
        var d = dt.getDate();
        d = d < 10? '0' + d : d;
        var hh = dt.getHours();
        hh = hh < 10? '0' + hh : hh;
        var mm = dt.getMinutes();
        mm = mm < 10? '0' + mm : mm;
        var ss = dt.getSeconds();
        ss = ss < 10? '0' + ss : ss;
        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss

    }
    function getNewList(){
        $.get('http://www.liulongbin.top:3006/api/news', function(res){
            if(res.status !== 200) {
                return alert('获取失败！')
            } 
            console.log(res);
            for(var i = 0; i <res.data.length; i++){
                res.data[i].tags = res.data[i].tags.split(',')
            }
            var htmlStr = template('tpl-news', res);
            $('#news-list').html(htmlStr)
        })
    }

    getNewList();
})