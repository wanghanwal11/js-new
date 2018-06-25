lazy.plugins.huodonglist = {
	"init" : function(el,data) {
	    var table = lazy.creat("div", "table");
	    lazy.for(data.table?data.table:[], function(val) {
	        one(val);
	    });
	    el.appendChild(table);
	    function one(obj) {
	        var tr = lazy.creat("div", "tr ub ub-ver");
	        var tr1 = lazy.creat("a", "tr1 ub");
	        var _html = '';
	        _html += ' <div class="icon" style="background-image:url('+obj.icon+')"></div>';
	        _html += ' <div class="h ub-f1">';
	        _html += '     <div class="h1"><span>'+slhfun(obj.h1?obj.h1:"")+'</span></div>';
	        _html += '     <div class="h2 slh"><span>'+(obj.h2?obj.h2:"")+'</span>';
	        if(obj.pl){
	         _html +='<span class="ping pl" >'+obj.pl+'</span>'
	        }
	        _html += '</div>';
	        _html += ' </div>';
            tr1.innerHTML = _html; 
            var ent=tr1.getElementsByClassName("h1")[0];
            ent.onclick = function() {
                if(obj.onclick)obj.onclick(obj);
            }
            if(obj.pl){
                var pl=tr1.getElementsByClassName("pl")[0];  
                pl.onclick = function() {
                    if(obj.pinglun)obj.pinglun(obj);
                }  
            } 
            tr.appendChild(tr1);
	        table.appendChild(tr);
	    }
	    function slhfun(str) {
	        var len = lazy.getStringByteLength(str) / 2 * lazy.fontSize;
	        var len2 = (document.body.clientWidth - (6.75 + 5) * lazy.fontSize) * 2;
	        if(len > len2) {
	            str = str.substring(0, parseInt(len2/lazy.fontSize)) + "...";
	        }
	        return str;
	    }
	    data.add = one;
	    data.clean = function() {
	        table.innerHTML = '';
	    }
	    
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
