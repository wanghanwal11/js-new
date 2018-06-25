lazy.plugins.table9 = {
	"init" : function(el,data) {
	    var col = data.col?data.col:3;
	    var arr = data.table?data.table:[];
	    var len = arr.length;
	    var row =  parseInt((len-1)/col) + 1;//行数
	    var table = lazy.creat("div","table ub ub-ver");
    
	    for(var i = 0; i < row; i++) {
	        tr = lazy.creat("div","ub tr");
	        for(var j = 0; j < col; j++) {
	            var n = j + i * col;
                one(arr[n],tr);
            }
            table.appendChild(tr);
	    }
	    el.appendChild(table);
	    function one(obj, tr) {
	        var td;
	        if(obj) {
	            if(obj.class) {
	               td = lazy.creat("a","td ub-f1 "+obj.class);
	            }else {
	               td = lazy.creat("a","td ub-f1"); 
	            }
                var icon = lazy.creat("div","icon");
                icon.style.backgroundColor = obj.color;
                icon.style.backgroundImage = "url("+obj.icon+")";
                var label = lazy.creat("div","label");
                label.innerHTML = '<span>'+obj.label+'</span>';
                td.appendChild(icon);
                td.appendChild(label);
                if(obj.onclick) {
                    td.onclick = function() {
                        obj.onclick(obj);
                    }
                }
	        }else {
	            td = lazy.creat("div","td ub-f1");
	        }
	        tr.appendChild(td);
	    }
	    
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
