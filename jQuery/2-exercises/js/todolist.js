$(function(){
    load();
    var todolist = [];
    $("#title").on('keydown', function(e){
        if(e.keyCode === 13) {
            if($(this).val() === "") {
                alert("您未输入任何值")
            } else {
                var local = getData();
                local.push({title: $(this).val(), done: false});
                saveData(local);
                load();
                $(this).val("")
            }
        }
    });
    $("ol, ul").on("click", "a", function(){
        var data = getData();
        var index = $(this).attr("id");
        data.splice(index, 1);
        saveData(data);
        load();
        
    });
    $("ol, ul").on("click", "input", function(){
        var data = getData();  //是个数组，要修改数组中对象里的属性，需要用到索引号
        var index = $(this).siblings("a").attr("id");
        console.log(data);
        data[index].done = $(this).prop("checked");
        saveData(data);
        load();
    });

    function getData(){
        var data = localStorage.getItem("todolist");
        if(data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    };
    function saveData(data){
        localStorage.setItem("todolist", JSON.stringify(data))
    };
    function load(){
        var data = getData();
        $("ol, ul").empty();
        var todoCount = 0;
        var doneCount = 0;
        // $("ol").html("");
        $.each(data, function(i, n){
            if(n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked'><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>")
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox'> <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "></a></li>")
                todoCount++;
            }
            
        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount)
    };
    
})