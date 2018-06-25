lazy.plugins.item = {
    "nocss" : true,
    "init" : function(el,data) {
        setData(data.list||[], function(pel) {
            el.appendChild(pel);
        });
        
    }
}