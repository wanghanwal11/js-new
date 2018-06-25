lazy.plugins.wdxq = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        var  str = '<img src='+(data.src)+' style="width:100%">'
        table.innerHTML = str; 
        el.appendChild(table);

    },

}
