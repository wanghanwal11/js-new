lazy.plugins.yanzheng = {
	"init" : function(el,data) {
	    var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj){
            var tr = lazy.creat("div","tr ub");
            var _html = '';
            _html += '<div class="title ub">'+(obj.title)+'</div>';
            _html += '<input class="content ub" type="number" id="idcard" value="" placeholder="'+(obj.content)+'">';
            
            tr.innerHTML = _html;
            if(obj.button){
                var button = lazy.creat("a","btn");
                button.innerHTML = '<span>'+(obj.button)+'</span>';
                tr.appendChild(button);
                button.onclick = function(){
                     if(obj.onclick)
                        obj.onclick(obj);
                }
            }
            
            table.appendChild(tr);
        }
        
       
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
