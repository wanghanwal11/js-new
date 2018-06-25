lazy.plugins.label2 = {
	"init" : function(el,data) {
	    var tr = lazy.creat("a","tr ub");
	    var _html = '';
	    _html += '<div class="ub-f1 h1"><span>'+(data.h1?data.h1:"")+'</span></div>';
	    if(data.h2)
	    _html += '<div class="h2"><span>'+data.h2+'</span></div>';
	    tr.innerHTML = _html;
	    el.appendChild(tr);
	    tr.onclick = function() {
            if(data.onclick)data.onclick(data);
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
