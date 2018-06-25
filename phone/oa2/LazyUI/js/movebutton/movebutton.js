lazy.plugins.movebutton = {
	"init" : function(el,data) {
		var table = lazy.creat("div","table ub");
        var index = data.index?data.index:0;
        var arr = data.table?data.table:[];
        for(var i = 0; i < arr.length; i++) {
            one(arr[i], i);
        }
        var line = lazy.creat("div","line");
        line.innerHTML = '<div></div>';
        line.style.width = (document.body.clientWidth / arr.length) + "px";
        line.style.left = (index * 100 / arr.length) + "%";
        el.appendChild(table);
        el.appendChild(line);
        function one(obj, i) {
            var tr = lazy.creat("div","tr ub-f1");
            if(index == i)tr.className = "tr ub-f1 change";
            tr.innerHTML = '<span>'+obj.label+'</span>';
            table.appendChild(tr);
            var trlist = table.getElementsByClassName("tr");
            tr.onclick = function() {
                if(index != i) {
                    line.style.left = (i * 100 / arr.length) + "%";
                    trlist[index].className = "tr ub-f1";
                    trlist[i].className = "tr ub-f1 change";
                    index = i;
                    obj.onclick();
                }
            }
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
