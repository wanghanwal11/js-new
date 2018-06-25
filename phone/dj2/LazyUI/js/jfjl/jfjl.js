lazy.plugins.jfjl = {
    "init" : function(el,data) {
        var table = lazy.creat("div","table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        function one(obj) {
            var h = lazy.creat("div","h ub");
            var _html = '';
            _html += '<div class="left ub-f1">';
            if(obj.h1){
                _html += '<div class="h1">'+obj.h1+'</div>';
            }
            if(obj.h2){
                _html += '<div class="h2">'+obj.h2+'</div>';
            }
            _html += '</div>';
            if(obj.right){
                 _html += '<div class="right">'+obj.right+'</div>';
            }
            h.innerHTML = _html;
            table.appendChild(h);
        }
        el.appendChild(table);
        data.one=one;   
        data.clean = function() {
            table.innerHTML = '';
        }    
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
