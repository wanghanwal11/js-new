lazy.plugins.shadow = {
    "init" : function(el,data) {
        if(data.height) el.style.height = data.height;
        if(data.color) el.style.backgroundColor = data.color;
    }
}