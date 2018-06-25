lazy.plugins.textlist = {
	"init" : function(el,data) {
		var arr = data.table;
		var index = data.index?parseInt(data.index):0;
		var open = data.open?data.open:false;
		for(var i = 0; i < arr.length; i++) {
		    var tr = lazy.creat("a","tr ub",{"index":i});
		    var iconname = "icon icon0";
		    var hdivname = "hdiv ub-f1 ub ub-ver";
		    if(open) {
                hdivname = "hdiv hdiv3 ub-f1 ub ub-ver";
                if(arr[i].onclick) {
                    tr.onclick = function() {
                        var n = parseInt(this.getAttribute("index"));
                        arr[n].onclick(n,arr[n]);
                    }
                }
		    }else if(i < index) {
                iconname = "icon icon1";
                hdivname = "hdiv hdiv1 ub-f1 ub ub-ver";
                if(arr[i].onclick) {
                    tr.onclick = function() {
                        var n = parseInt(this.getAttribute("index"));
                        arr[n].onclick(n,arr[n]);
                    }
                }
		    }else if(i == index){
		       hdivname = "hdiv hdiv1 ub-f1 ub ub-ver";
               iconname = "icon icon2"; 
               if(arr[i].onclick) {
                    tr.onclick = function() {
                        var n = parseInt(this.getAttribute("index"));
                        arr[n].onclick(n,arr[n]);
                    }
                }
		    }else {
		        if(arr[i].onclick) {
		        tr.onclick = function() {
                   lazy.alert2("学完上一节才能点击");
                }
            }
		    }
		    
		    
		    var icon = lazy.creat("div",iconname);
		    var hdiv = lazy.creat("div",hdivname);
		    var h1 = lazy.creat("div","h1 slh");
		    h1.innerHTML = '<span>'+(arr[i].h1?arr[i].h1:"")+'</span>';
		    var h2 = lazy.creat("div","h2");
		    h2.innerHTML = '<span>'+(arr[i].h2?arr[i].h2:"")+'</span>';
		    hdiv.appendChild(h1);
		    hdiv.appendChild(h2);
		    tr.appendChild(icon);
		    tr.appendChild(hdiv);
		    el.appendChild(tr);
		}
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
