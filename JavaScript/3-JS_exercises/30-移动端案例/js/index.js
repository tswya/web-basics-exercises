window.addEventListener('load', function(){
    var focus = document.querySelector('.focus');

    var ul = focus.children[0];
    var ol = focus.children[1];

    var w = focus.offsetWidth;
    var index = 0;
    var timer = setInterval(function(){
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    },2000);
    ul.addEventListener('transitionend', function(){
        //无缝滚动
        if(index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if(index < 0){
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });

    var startX = 0;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function(e){
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    })
    ul.addEventListener('touchmove', function(e){
        moveX = e.targetTouches[0].pageX - startX;

        var translatex = -index * w + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true; // 如果用户手指移动过再去判断
        e.preventDefault();
    })
    ul.addEventListener('touchend',function(){
       if(flag){
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--;
                } else  {
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                var translatex = -index * w;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            
            }
       }
        clearInterval(timer);
        timer = setInterval(function(){
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        },2000);
    });

    // goBack
    var goback = document.querySelector('.goBack');
    var navTop = document.querySelector('.navbar');
    window.addEventListener('scroll', function(){
        if(window.pageYOffset >= navTop.offsetTop ) {
            goback.style.display = 'block';
        } else {
            goback.style.display = 'none';
        }
    });
    goback.addEventListener('click', function(){
        window.scroll(0,0);
    })
})