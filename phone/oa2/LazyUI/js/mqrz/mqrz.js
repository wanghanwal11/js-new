lazy.plugins.mqrz = {
	"init" : function(el,data) {
	    var arr = data.table?data.table:[];
	    var table = lazy.creat("div","table");
	    for(var i=0;i<arr.length;i++){
	        add(arr[i])
	    }
	    data.add = add;
	    function add(obj){
	        var hangdiv = lazy.creat("div","hang");
	        var top = lazy.creat("div","greendiv ub");
	        var greenleft = lazy.creat("div","greenleft");
	        greenleft.innerHTML = obj.greenleft;
	        top.appendChild(greenleft);
	        var greenright = lazy.creat("div","greenright");
	        greenright.innerHTML = obj.greenright;
	        top.appendChild(greenright);
	        hangdiv.appendChild(top);
	        var center = lazy.creat("div","h1")
	        center.innerHTML = obj.h1;
	        hangdiv.appendChild(center);
	        /*
	        var bottom = lazy.creat("div","h2");
	        bottom.innerHTML = obj.h2;
	        */
	       var bottom = lazy.creat("div","box box_between");
	       var bh2 = lazy.creat("div","h2");
	       bh2.innerHTML = (obj.h2||"");
	       var bh3 = lazy.creat("div","h3");
	       bh3.innerHTML = (obj.h3||"");
	       bottom.appendChild(bh2);
	       bottom.appendChild(bh3);
	        hangdiv.appendChild(bottom);
	        hangdiv.onclick = function(){
	            obj.onclick(obj)
	        }
	        table.appendChild(hangdiv);
	        
	    }
	    el.appendChild(table);
	    data.clean = function(){
	    	el.getElementsByClassName("table")[0].innerHTML = "";
	    }
	},
	"edit" : function(el,data) {
		
	}
}
