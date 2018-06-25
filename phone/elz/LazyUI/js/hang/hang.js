lazy.plugins.hang = {
	"init" : function(el,data) {
	    var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
	    function one(obj) {
	        var html="";
	        var tr = lazy.creat("div", "tr ub ub-ver");
	        html+="<div class='hang'>";
	        if(obj.icon){
	             html+="<span class='icon' style='background:url("+obj.icon+") no-repeat;background-size:1.4rem;background-position-y:0.2rem'></span>"
	        }
	             html+="<span class='txt slh'>"+obj.txt+"</span>"
	        html+="</div>";
	        tr.innerHTML=html;
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
