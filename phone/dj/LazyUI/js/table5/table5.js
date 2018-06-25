lazy.plugins.table5= {
	"init" : function(el,data) {
	    //标题
	    if(data.title){
	        var title = lazy.creat("div","title ub");
            var _html = '<div class="title_title"><span>'+data.title+'</span></div>';
            title.innerHTML = _html;
            el.appendChild(title);
	    }
	    //表格
        var arr = data.table;
        var table = lazy.creat("div",".table");
        el.appendChild(table);
        
        var jlen = 3;
        var ilen = parseInt((arr.length - 1) / jlen) + 1;
        var len = arr.length > 3? 3 : arr.length;
        for(var i = 0; i < ilen; i++) {
            var tr = lazy.creat("div","tr ub");
            for(var j = 0; j < 3; j++) {
                var n = i * jlen + j;
                var td = lazy.creat("a","td ub-f1");
                td.setAttribute("index",n);
                var icon = lazy.creat("div","icon");
                icon.style.backgroundImage = "url("+(arr[n]?arr[n].icon:"")+")";
                td.appendChild(icon);
                var label = lazy.creat("div","label");
                
                var str = arr[n]?arr[n].label:"";
                if(lazy.getStringByteLength(str)>12) {
                    label.innerHTML = '<span class="spanx">'+(arr[n]?arr[n].label:"")+'</span>';
                }else {
                    label.innerHTML = '<span>'+(arr[n]?arr[n].label:"")+'</span>';
                }
                td.appendChild(label);
                if(arr[n]) {
                    if(arr[n].onclick) {
                        td.onclick = function() {
                            var i = parseInt(this.getAttribute("index"));
                            arr[i].onclick(arr[i]);
                        }
                    }
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        
        
        
        function getNum(i, j, n) {
            return i * n + j;
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
