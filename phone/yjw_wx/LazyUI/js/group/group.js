lazy.plugins.group = {
    "init" : function(el,data) {
        data.renderer = function(list) {
            el.innerHTML = '';
            setData(list, function(_el) {
                el.appendChild(_el);
            });
        };
        data.renderer(data.list||[]);
    }
}