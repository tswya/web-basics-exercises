var tabs = document.getElementById("tabs").getElementsByTagName("li")
var lists = document.getElementById("lists").getElementsByTagName("ul")

for (var i = 0; i < tabs.length; i++){
    tabs[i].onclick = showlist;
}



function showlist() {
    for (var i = 0; i < tabs.length; i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active"; 
        }
        else{
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
    }
}
var seckillNav = document.getElementById("seckillNav")
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(scrollTop >= 260){
        seckillNav.className = "seckill-nav seckill-navfixed"
    }
    else{
        seckillNav.className = "seckill-nav"
    }
}

window.onload  = setInterval(function countDown() {
    var nowtime = new Date(),
        endtime = new Date("2022/12/12");
    var lefttime = endtime.getTime() - nowtime.getTime(),
        d = Math.floor(lefttime/(1000*60*60*24)),
        h = Math.floor(lefttime/(1000*60*60)%24),
        m = Math.floor(lefttime/(1000*60)%60),
        s = Math.floor(lefttime/1000%60);
    return  document.getElementById("count").innerHTML = "<em>抢购中<br/>"+"距结束"+d+"天"+h+":"+m+":"+s+"</em>";},
    1000);
    
