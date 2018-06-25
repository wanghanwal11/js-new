lazy.plugins.panel2 = {
	"init" : function(el,data) {
		var arr = data.content;
		for(var i = 0; i < arr.length; i++) {
		    add(arr[i]);
		}
		function add(json) {
		    var tr = lazy.creat("a",".tr ub ub-ver");
		    el.appendChild(tr);
		    var _html = '';
		    _html += '<div class="h1 slh"><span>'+(json.h1?json.h1:"")+'</span></div>';
		    _html += '<div class="h2icon ub"><div class="icon"></div><div class="h2 slh ub-f1"><span>'+(json.h2?json.h2:"")+'</span></div></div>';
		    tr.innerHTML = _html;
		    var img = new Image();
		    img.src = json.icon;
		    img.onload = function() {
		          tr.getElementsByClassName("icon")[0].style.backgroundImage = "url("+img.src+")";
		    }
		    if(json.onclick) {
		        tr.onclick = function() {
		            json.onclick(json);
		        }
		    }
		}
		data.add = add;
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
