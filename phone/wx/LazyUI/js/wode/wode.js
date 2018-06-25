lazy.plugins.wode = {
    "init" : function(el,data) {
        var table = lazy.create("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
        	var tr = lazy.create("div", "tr box");
        	var _html = '';
        	_html += ' <div class="jf" style="background:url('+obj.icon+');background-position: 0 center;background-size: 1.5rem;background-repeat: no-repeat"><span>'+obj.h1+'</span></div>';
            _html += ' <a class="text box_f1"><span>'+(obj.h2?obj.h2:"")+'</span></a>';
            tr.innerHTML = _html; 
            if(obj.onclick){
                tr.getElementsByClassName("text")[0].onclick = function() {
                    obj.onclick(obj);
                }
            }
            
            table.appendChild(tr);
        	
        }
        data.add = one;
        data.clean = function() {
            table.innerHTML = '';
        }
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
