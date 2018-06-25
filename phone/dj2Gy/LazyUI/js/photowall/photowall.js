lazy.plugins.photowall = {
	"init" : function(el,data) {
	    var arr = data.table;
	    for(var i = 0; i < arr.length; i++) {
	        var tr = lazy.creat("div","tr");
	        var td = lazy.creat("a","td ub-f1 ub-ver");
            td.setAttribute("index",i);
            var icon = lazy.creat("div","icon");
            icon.style.backgroundImage = "url("+arr[i].icon+")";
            td.appendChild(icon);
            var title = lazy.creat("div","title");
            title.innerHTML = '<span>'+arr[i].title+'</span>';
            td.appendChild(title);
            tr.appendChild(td);
	        el.appendChild(tr);
	        if(arr[i].onclick) {
	            td.onclick = function() {
	                var index = parseInt(this.getAttribute("index"));
	                arr[index].onclick(arr[index]);
	            }
	        }
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
