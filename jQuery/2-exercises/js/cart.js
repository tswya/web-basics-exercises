$(function(){
    // 1.全选 / 全不选
    $(".checkall").change(function(){
        // $(this).prop("checked");
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if($(this).prop("checked")){
            $(".cart-item").addClass("check-cart-item")
        } else {
            $(".cart-item").removeClass("check-cart-item")
        }
    });

    $(".j-checkbox").change(function(){
        // console.log($(".j-checkbox:checked").length);
        if($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)
        };

        if($(this).prop("checked")){
            $(this).parents(".cart-item").addClass("check-cart-item")
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item")
        }
    });

    $(".decrement").on("click", function(){
        var n = $(this).siblings(".itxt").val();
        /* n--;
        if(n >= 0) {
           $(this).siblings(".itxt").val(n); 
        } */
        if(n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n); 

        // var p = $(this).parent().parent().siblings(".p-price").text().substr(1);
        var p = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        console.log(p);
        $(this).parent().parent().siblings(".p-sum").text('￥' + (n * p).toFixed(2));
        getSum();
    });

    $(".increment").click(function(){
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);

        var p = $(this).parent().parent().siblings(".p-price").text().substr(1);
        console.log(p);
        $(this).parent().parent().siblings(".p-sum").text('￥' + (n * p).toFixed(2));
        getSum();
    });

    // 修改表单元素值
    $(".itxt").change(function(){
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text('￥' + (n * p).toFixed(2));
        getSum();
    })

    getSum();
    // 总计
    function getSum(){
        var count = 0;
        var money = 0;
        $(".itxt").each(function(i, ele){
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);

        $(".p-sum").each(function(i, ele){
            money += parseFloat($(ele).text().substr(1));
        })
        $(".price-sum em").text("￥" + money.toFixed(2));
    }

    $(".p-action a").click(function(){
        $(this).parents(".cart-item").remove();
        getSum();
    });

    $(".remove-batch").click(function(){
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    })

    $(".clear-all").click(function(){
        $(".j-checkbox").parents(".cart-item").remove();
        getSum();
    })

    // 添加和删除背景

})