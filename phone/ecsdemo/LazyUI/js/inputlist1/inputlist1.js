lazy.plugins.inputlist1 = {
	"init" : function(el,data) {
		var table = lazy.creat("div","table");
		var arr = data.table;
		for(var i = 0; i < arr.length; i++) {
		    var tr = lazy.creat("div","tr ub");
		    var _html = '';
		    _html += '<div class="title"><span class="fontsize">'+arr[i].title+'<span></div>';
		    var _type = arr[i].type?arr[i].type:"text";
		    if(_type == "number") {
		       _html += '<div class="inputdiv ub-f1"><input type="text" onfocus="this.type=\'number\'" onblur="this.type=\'text\'" placeholder="'+(arr[i].placeholder?arr[i].placeholder:"")+'" class="input fontsize" /></div>';
		    }else {
		       _html += '<div class="inputdiv ub-f1"><input type="'+_type+'" placeholder="'+(arr[i].placeholder?arr[i].placeholder:"")+'" class="input fontsize" /></div>';  
		    }
		    tr.innerHTML = _html;
		    table.appendChild(tr);
		}
		el.appendChild(table);
		data.getValue = function() {
		    var list = el.getElementsByClassName("input");
		    var arr = [];
		    for(var i = 0; i < list.length; i++) {
		        arr.push(list[i].value);
		    }
		    return arr;
		}
		data.clear = function() {
		    var list = el.getElementsByClassName("input");
		    for(var i = 0; i < list.length; i++) {
		        list[i].value = "";
		    }
		}
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
