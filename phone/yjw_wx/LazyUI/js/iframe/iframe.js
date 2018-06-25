lazy.plugins.iframe = {
    "init" : function(el,data) {
        var iframe = lazy.create("iframe", "iframe");
        iframe.src = data.src;
        el.appendChild(iframe);
//window.history.pushState({},"","post-1.html");        
        data.show_change = function() {
            
        }
        data.hide_change = function() {
            
        }
        data.src_change = function() {
            
        }
    }
}