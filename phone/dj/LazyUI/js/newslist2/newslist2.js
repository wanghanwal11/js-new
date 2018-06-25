lazy.plugins.newslist2 = {
	"init" : function(el,data) {
		var list = data.list;
		for(var i = 0; i < list.length; i++) {
		    add(list[i]);
		}
		function add(json) {
		    var tr = lazy.creat("a","tr ub");
		    var _html = '';
		    _html += '<div class="h ub-f1 ub ub-ver">';
		    _html += '<div class="h1 ub"><div class="ub-f1 slh"><span>'+(json.h1?json.h1:"")+'</span></div><div class="h3"><span>'+(json.h3?json.h3:"")+'</span></div></div>';
		    _html += '<div class="h2 slh"><span>'+(json.h2?json.h2:"")+'</span></div>';
		    _html += '</div>';
		    tr.innerHTML = _html;
		    el.appendChild(tr);
		    tr.onclick = function() {
		        if(json.onclick)json.onclick(json);
		    }
		}
		data.add = add;
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
