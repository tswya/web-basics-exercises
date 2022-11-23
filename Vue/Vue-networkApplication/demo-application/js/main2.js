/*
歌曲搜索接口
请求地址：https://autumnfish.cn/search
请求方法：get
请求参数：keywords（查询的关键字）
响应内容：歌曲搜索结果
*/

var app = new Vue({
    el:'#player',
    data:{
        //查询关键词
        query:'',
        //歌曲数组
        musicList:[],
        //歌曲地址
        musicUrl:'',
        //歌曲封面
        musicCover:'',
        //评论数组
        hotComments:[],
        //动画播放状态
        isPlaying:false,
        //遮罩层的显示状态
        isShow:false,
        //mv地址
        mvUrl:''
    },  
    methods:{
        searchMusic:function(){
            var that = this;
            axios.get('https://autumnfish.cn/search?keywords='+this.query)
            .then(function(response){
                //console.log(response);
                //console.log(response.data.result.songs);
                that.musicList = response.data.result.songs;
            },function(err){})
        },
        playMusic:function(musicId){
            var that = this;
            axios.get('https://autumnfish.cn/song/url?id='+musicId).then(function(response){
                //console.log(response);
                that.musicUrl = response.data.data[0].url;
            },function(err){})
            //歌曲详情获取
            axios.get('https://autumnfish.cn/song/detail?ids='+musicId).then(function(response){
                //console.log(response);
                //console.log(response.data.songs[0].al.picUrl);
                that.musicCover = response.data.songs[0].al.picUrl;
            },function(err){})
            //评论获取
            axios.get('https://autumnfish.cn/comment/hot?type=0&id='+musicId).then(function(response){
                //console.log(response);
                //console.log(response.data.hotComments);
                that.hotComments = response.data.hotComments;
            },function(err){})
        },
        play:function(){
            //console.log('play');
            this.isPlaying = true;
        },
        pause:function(){
            //console.log('pause');
            this.isPlaying = false;
        },
        playMV:function(mvid){
            var that = this;
            axios.get('https://autumnfish.cn/mv/url?id='+mvid)
            .then(function(response){
                //console.log(response.data);
                console.log(response.data.data.url);
                that.isShow=true;
                that.mvUrl=response.data.data.url;
            },function(err){});
        },
        //隐藏
        hide:function(){
            this.isShow=false;
        }
    },
})