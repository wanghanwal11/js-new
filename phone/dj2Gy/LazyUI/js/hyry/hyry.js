lazy.plugins.hyry = {
	"init" : function(el,data) {
	    var table = lazy.creat("div", "table");
	    lazy.for(data.table?data.table:[], function(val) {
	        one(val);
	    });
	    el.appendChild(table);
	    function one(obj) {
	        var tr = lazy.creat("div", "tr ub ub-ver");
	        var _html = '';
	        if(obj.src){
	            _html += ' <div class="icon"><img class="img" src='+obj.src+' />'+obj.name+'</div>';
	        }
	        if(obj.title){
                _html += ' <div class="icon"><span class="txt">'+obj.title+'&nbsp;&nbsp;</span><span>'+obj.name+'</span></div>';
            }
	        tr.innerHTML=_html;
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
