lazy.plugins.list = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.create("div", "tr box");
            var _html = '';
            _html += '<div class="title slh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            
            tr.innerHTML = _html; 
            tr.onclick = function() {
                if(obj.onclick)
                obj.onclick(obj);
            } 
            table.appendChild(tr);
            
        }
        data.add = one;
        data.clean = function() {
            table.innerHTML = '';
        }
        data.getValue = function() {
            return tr.getElementsByTagName("span")[0].innerText;
        }
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
