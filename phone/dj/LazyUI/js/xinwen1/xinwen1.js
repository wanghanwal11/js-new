lazy.plugins.xinwen1 = {
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
		    _html += '    <div class="h1">'+(json.h1?json.h1:"")+'</div>';
		    _html += '    <div class="h2">'+(json.h2?json.h2:"")+'</div>';
		    _html += '</div>';
		    _html = _html.replace(/null/g,"");
		    tr.innerHTML = _html;
		    var img = new Image();
		    img.src = json.icon;
		    img.onload = function() {
		          tr.getElementsByClassName("icon")[0].style.backgroundImage = "url("+img.src+")";
		    }
		    if(json.onclick) {
		        tr.getElementsByClassName("h1")[0].onclick = function() {
		            json.onclick(json);
		        }
		    }
	        tr.getElementsByClassName("h2")[0].onclick = function() {
                uexCall.dial(json.h2);
            }
		}
		data.add = add;
		data.clear=function(){
		    arr=[];
		}
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
