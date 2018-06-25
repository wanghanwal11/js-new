lazy.plugins.group = {
    "init" : function(el,data) {
        if(data.widgethide){
            el.style.display='none';
        }
        data.height && (el.style.minHeight = data.height);
        data.renderer = function(list, back) {
            el.innerHTML = '';
            setData(list, function(_el) {
                el.appendChild(_el);
                if(data.gap) {
                    var list = el.querySelectorAll('div[type=plugins]>div');
                    for(var i = 0; i < list.length; i++) {
                        list[i].style.marginBottom = data.gap;
                    }
                }
                back&&back();
            });
            
        };
        data.renderer(data.list||[]);
        data.clear = function() {
            el.innerHTML = '';
        }
        data.add = function(obj,id) {
            var after = null;
            var pel = el;
            if(id) {
                after = document.getElementById(id);
                pel = after.parentNode;
            }
            setData(obj, function(_el) {
               pel.insertBefore(_el, after);
            });
        }
        
        
    }
}