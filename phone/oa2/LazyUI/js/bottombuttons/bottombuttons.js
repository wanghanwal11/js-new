lazy.plugins.bottombuttons = {
	"init" : function(el,data) {
		var table = lazy.creat("div","table ub");
        var arr = data.table?data.table:[];
        for(var i = 0; i < arr.length; i++) {
            one(arr[i], i);
        }
        el.appendChild(table);
        var zw = lazy.creat("div","bottombuttons_zw");
        document.body.appendChild(zw);
        function one(obj, i) {
            var tr = lazy.creat("a","tr ub-f1");
            tr.innerHTML = '<span>'+obj.label+'</span>';
            table.appendChild(tr);
            var trlist = table.getElementsByClassName("tr");
            tr.onclick = function() {
                if(obj.onclick)obj.onclick(obj);
            }
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
