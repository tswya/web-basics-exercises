// var that;
class Tab {
    constructor(id) {
        // that = this;
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.firstnav ul');
        this.fsection = this.main.querySelector('.tabscon');
        
        this.init();
        // console.log(this.ul);
    }
    init() {
        this.updateNode();
        //初始化操作 让相关的元素绑定事件
        this.add.onclick = this.addTab.bind(this.add, this);
        for(var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i],this);
            this.remove[i].onclick = this.removeTab.bind(this.remove[i],this);
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
        
    }
    //动态添加元素需重新获取对应的元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child')
    }

    toggleTab(that) {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass(){
        for(var i = 0; i < this.lis.length; i++){
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    addTab(that) {
        that.clearClass();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">新测试</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend',section);
        that.init();
    }
    removeTab(that,e) {
        //阻止冒泡，防止触发li的切换点击事件
        e.stopPropagation();
        var index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        //如果删除的元素未选定，则原来的选中状态保持不变
        if(document.querySelector('.liactive')) return;

        index--;
        that.lis[index] && that.lis[index].click(); //手动调用点击事件
    }
    editTab() {
        var str = this.innerHTML;
        window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function(e){
            if(e.keyCode === 13)
            this.blur();
        }
    }
}
var tab = new Tab('#tab');