lazy.plugins.phb = {
	"init" : function(el,data) {
		var arr = data.table;
		var table = lazy.creat("div","table");
        el.appendChild(table);
        for(var i = 0; i < arr.length; i++) {
            add(arr[i]);
        }
        data.clean=function(){
            table.innerHTML="";
        }
		function add(json) {
           var tr = lazy.creat("a","tr ub");
           var num =  lazy.creat("div","num");
           num.innerHTML = '<span>'+json.num+'</span>';
           var icon =  lazy.creat("img","icon",{
               "src" : json.icon
           });
           var h12 = lazy.creat("div","h12 ub-f1");
           h12.innerHTML = '<div class="h1 slh"><span>'+json.h1+'</span></div><div class="h2 slh"><span>'+json.h2+'</span></div>';
           var h3 = lazy.creat("div","h3");
           h3.innerHTML = '<span>'+json.h3+'</span>';
           
           tr.appendChild(num);
           tr.appendChild(icon);
           tr.appendChild(h12);
           tr.appendChild(h3);
           table.appendChild(tr);
           icon.onerror = function() {
               this.src = lazy.url+"LazyUI/js/phb/mr.jpg";
           }
        }
        data.add = add;
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
