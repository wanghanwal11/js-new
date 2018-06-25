lazy.plugins.button_list1 = {
	"init" : function(el,data) {
		var index = data.index?parseInt(data.index):0;
		var arr = data.button;
		var tr = lazy.creat("div","tr ub");
		for(var i = 0; i < arr.length; i++) {
		    var td = lazy.creat("a","td ub-f1", {"index":i});
		    if(index == i) td.className = "td ub-f1 td_click";
		    td.innerHTML = '<span>'+arr[i]+'</span>';
		    td.onclick = function() {
		        el.getElementsByClassName("td_click")[0].className = "td ub-f1";
		        this.className = "td ub-f1 td_click";
		        index = parseInt(this.getAttribute("index"));
		        if(data.select)data.select(index, data);
		    }
		    tr.appendChild(td);
		}
		el.appendChild(tr);
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
