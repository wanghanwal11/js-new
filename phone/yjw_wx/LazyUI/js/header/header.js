lazy.plugins.header = {
    "init" : function(el,data) {
        var dom = lazy.create('div','.header_div');
        el.parentNode.appendChild(dom);
        el.innerHTML = '<div class="headerdiv">标题</div>';
    }
}