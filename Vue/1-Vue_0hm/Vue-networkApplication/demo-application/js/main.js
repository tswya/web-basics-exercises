/*
天气接口
请求地址：http://wthrcdn.etouch.cn/weather_mini
请求方法：get
请求参数：city(查询的城市名)
响应内容：天气信息
*/
var app = new Vue({
    el:"#app",
    data:{
        city:'',
        weatherList:[]
    },
    methods:{
        searchWeather:function(){
            //console.log('chaxun')
            //console.log(this.city),
            //保存this
            var that = this;
            axios.get("https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=58576923&appsecret=aS2a3idQ&city="+this.city)
            .then(function(response){
                console.log(response.data.data);
                that.weatherList = response.data.data;
            })
            .catch(function(err){})
        },
        changeWeather:function(city){
            this.city = city;
            this.searchWeather();
        }
    }
})