lazy.plugins.fgxq = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        var top = lazy.creat("div","top")
        var  str = '<img src='+(data.src)+'>'
        top.innerHTML = str; 
        table.appendChild(top);
        el.appendChild(table);
}
}
