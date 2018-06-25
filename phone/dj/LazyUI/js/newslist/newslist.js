lazy.plugins.newslist = {
	"init" : function(el,data) {
		var list = data.list;
		for(var i = 0; i < list.length; i++) {
		    add(list[i]);
		}
		function add(json) {
		    var tr = lazy.creat("a","tr ub");
		    var _html = '';
		    var h1 = json.h1?json.h1:"";
		    if(lazy.getStringByteLength(h1) > 38) {
		        h1 = h1.substring(0, 20) + "...";
		    }
		    _html += '<div class="icon" style="background-image: url('+json.icon+')"></div>';
		    _html += '<div class="h ub-f1 ub ub-ver">';
		    _html += '<div class="h1 hh"><span>'+h1+'</span></div>';
		    _html += '<div class="h2 slh"><span>'+(json.h2?json.h2:"")+'</span></div>';
		    _html += '</div>';
		    //
		    _html = _html.replace(/null/g,"");
		    tr.innerHTML = _html;
            var img = new Image();
            img.src = json.icon;
            var icon = tr.getElementsByClassName("icon")[0];
            img.onload = function() {
                icon.style.backgroundImage = 'url('+json.icon+')';
            }
            img.onerror = function() {
                var str = lazy.url + "LazyUI/js/newslist/mrdq.png";
                icon.style.backgroundImage = 'url('+str+')';
            }
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
