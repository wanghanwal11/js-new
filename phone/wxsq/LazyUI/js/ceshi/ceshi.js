lazy.plugins.ceshi = {
	"init" : function(el,data) {
		//el.style.width = document.body.clientWidth + "px";
		var table = lazy.create("div", "table");
	    lazy.for(data.table?data.table:[], function(val) {
	        one(val);
	    });
	    el.appendChild(table);
	    function one(obj) {
	        var tr = lazy.create("div", "tr box box_v");
	        var tr1 = lazy.create("a", "tr1 box");
	        var _html = '';
	        _html += ' <div class="icon" style="background-image:url(\''+obj.icon+'\')"></div>';
	        _html += ' <div class="h box_f1">';
	        if(obj.h1){
	             _html += '<div class="h1 slh"><span>'+(obj.h1?obj.h1:"")+'</span></div>';   
	        }
	         if(obj.h2){
                 _html += '<div class="h2 slh"><span>'+(obj.h2?obj.h2:"")+'</span></div>';
            }
             if(obj.h3){
                 _html += '<div class="h3 slh"><span>'+(obj.h3?obj.h3:"")+'</span></div>';
            }
	        _html += '</div>';
	        _html += ' </div>';
            tr1.innerHTML = _html; 
            tr.appendChild(tr1);
	        table.appendChild(tr);
	        tr1.onclick=function(){
	            if(obj.onclick)obj.onclick(obj);
	        }
	    }
	    data.add = one;
	    data.clean = function() {
	        table.innerHTML = '';
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
