lazy.plugins.table4 = {
	"init" : function(el,data) {
	    //标题
	    var title = lazy.creat("div","title ub");
	    var _html = '<div class="title_icon" style="background-image:url('+data.icon+')"></div><div class="title_title"><span>'+data.title+'</span></div>';
	    _html += '<div class="ub-f1"></div>';
	    title.innerHTML = _html;
	    el.appendChild(title);
	    //表格
        var arr = data.table;
        var table = lazy.creat("div",".table");
        el.appendChild(table);
        
        var jlen = 4;
        var ilen = parseInt((arr.length - 1) / jlen) + 1;
        var len = arr.length > 4? 4 : arr.length;
        for(var i = 0; i < ilen; i++) {
            var tr = lazy.creat("div","tr ub");
            for(var j = 0; j < len; j++) {
                var n = i * jlen + j;
                var td = lazy.creat("a","td ub-f1");
                td.setAttribute("index",n);
                var icon = lazy.creat("div","icon");
                icon.style.backgroundImage = "url("+(arr[n]?arr[n].icon:"")+")";
                td.appendChild(icon);
                var label = lazy.creat("div","label");
                label.innerHTML = '<span>'+(arr[n]?arr[n].label:"")+'</span>';
                td.appendChild(label);
                if(arr[n]) {
                    if(arr[n].onclick) {
                        td.onclick = function() {
                            var i = parseInt(this.getAttribute("index"));
                            arr[i].onclick();
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
