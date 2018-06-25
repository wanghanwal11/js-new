lazy.plugins.xinwen = {
	"init" : function(el,data) {
		var arr = data.content;
		for(var i = 0; i < arr.length; i++) {
		    add(arr[i]);
		}
		function add(json) {
		    var tr = lazy.creat("a",".tr ub");
		    el.appendChild(tr);
		    var _html = '';
		    _html += '<div class="icon"></div>';
		    _html += '<div class="h ub-f1">';
		    _html += '    <div class="h1 hh"><span>'+(json.h1?json.h1:"")+'</span></div>';
		    _html += '    <div class="h2 hh"><span>'+(json.h2?json.h2:"")+'</span></div>';
		    _html += '    <div class="h3 hh"><span>'+(json.h3?json.h3:"")+'</span></div>';
		    _html += '</div>';
		    _html = _html.replace(/null/g,"");
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
		data.clear=function(){
		    el.innerHTML=" ";
		    arr=[];
		}
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
