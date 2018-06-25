lazy.plugins.jfph = {
	"init" : function(el,data) {
	    var table = lazy.creat("div", "table");
	    lazy.for(data.table?data.table:[], function(val) {
	        one(val);
	    });
	    el.appendChild(table);
	    function one(obj) {
	        var tr = lazy.creat("div", "tr ub");
	        var _html = '';
	        _html+='<div class="left">'+obj.left+'</div>'
	        if(obj.src){
	            _html += ' <div class="icon slh"><img class="img" src='+obj.src+' />'+obj.name+'</div>';
	        }
	        if(obj.title){
                _html += ' <div class="icon slh"><span class="txt">'+obj.title+'&nbsp;&nbsp;</span><span>'+obj.name+'</span></div>';
            }
            _html+='<div class="right">'+obj.right+'</div>'
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
