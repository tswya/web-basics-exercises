$(function(){

    resetui();

    $('#btnSend').on('click', function(){
        var text = $('#ipt').val().trim();
        if(text.length <= 0) {
            return $('#ipt').val('');
        }
        $('#talk_list').append('<li class="right_word"><img src="img/person02.png"><span>' 
            + text + '</span></li>')
        $('#ipt').val('');
        // 重置滚动条位置
        resetui();
        getMsg(text);  // 记得加形参
    });

 
    // 获取聊天机器人发送回来的消息
    function getMsg(text) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: function(res) {
                console.log(res);
                if(res.message === 'success') {
                    // 接收聊天消息
                    var msg = res.data.info.text;
                    $('#talk_list').append('<li class="left_word"><img src="img/person01.png"><span>' 
                        + msg + '<span></li>')
                    resetui();

                    getVoice(msg);
                }
            }
        })
    }

    function getVoice(text) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: function(res) {
                console.log(res);
                if(res.status === 200) {
                    $('#voice').attr('src', res.voiceUrl);
                    
                }
            }
        })
    }

    
    $('#ipt').on('keyup', function(e){
        // console.log(e.keyCode); 
        if(e.keyCode === 13) {

            $('#btnSend').click();
        }
    })
})