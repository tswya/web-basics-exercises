function animation(obj, target, callback) {
    // 当不断点击按钮，元素速度会越来越快，因为开启了太多定时器
        // 解决方案：让元素只有一个定时器执行
    // 清除以前的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        
        // 步长值改为整数，不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0? Math.ceil(step) : Math.floor(step);  // 记得赋值 step = ...
        if(obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            if(callback) {
                // 调用函数
                callback();
            }
        } 
            obj.style.left = obj.offsetLeft + step + 'px';
                        
    }, 15);
}