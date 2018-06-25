lazy.plugins.titlebtnlist2 = {
	"init" : function(el,data) {
		var arr = data.table;
		var tr = lazy.creat('div','tr');
		for(var i = 0; i < arr.length; i++) {
		    add(arr[i]);
		}
		function add(obj) {
		    var tr;
		    if(obj.onclick) {
		        tr = lazy.creat('a','tr ub',{
                    "style" : "background-image:url("+lazy.url+"LazyUI/js/titlebtnlist1/images/jian.png)"
                });
		    }else {
		        tr = lazy.creat('a','tr ub');
		    }
		    var _html = '<div class="icon" style="background-image:url('+obj.icon+')"></div><div class="td ub-f1">';
		    _html += '<div class="h1 slh"><span>'+(obj.h1?obj.h1:"")+'</span></div>';
		    _html += '<div class="h2 hh"><span>'+(obj.h2?obj.h2:"")+'</span></div>';
		    _html += '</div>';
            tr.innerHTML = _html;
            el.appendChild(tr);
            
            if(obj.onclick) {
                tr.onclick = function() {
                    obj.onclick(obj);
                }
            }
		}
		data.add = add;
		data.clean = clean;
		function clean() {
            el.innerHTML = "";
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
