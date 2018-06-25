lazy.plugins.table23456 = {
	"init" : function(el,data) {
	    //标题
        var title = lazy.creat("div","title ub");
        var _html = '<div class="title_icon" style="background-image:url('+data.icon+')"></div><div class="title_title"><span>'+data.title+'</span></div>';
        _html += '<div class="ub-f1"></div>';
        title.innerHTML = _html;
        el.appendChild(title);
	    //
        var arr = data.table;//长度 2,3,4,5,6
        var len = arr.length;
        var table = lazy.creat("div",".table");
        el.appendChild(table);
        
        if(len < 5) {
            var tr = lazy.creat("div","tr ub");
            var iconname = "icon"+len;
            var labelname = "label"+len;
            var tdname = len==2?"td ub-f1 ub":"td ub-f1 ub ub-ver";
            for(var i = 0; i < len; i++) {
                var td = lazy.creat("a",tdname,{"index":i});
                var icon = lazy.creat("div",iconname);
                icon.style.backgroundImage = "url("+arr[i].icon+")";
                td.appendChild(icon);
                var label = lazy.creat("div",labelname);
                label.innerHTML = '<span>'+arr[i].label+'</span>';
                td.appendChild(label);
                tr.appendChild(td);
                if(arr[i].onclick) {
                    td.onclick = function() {
                        var i = parseInt(this.getAttribute("index"));
                        arr[i].onclick();
                    }
                }
                
            }
            table.appendChild(tr);
        }else {
            var tr = lazy.creat("div","tr ub");
            //左
            var tdl = lazy.creat("a","td1",{"index":0});
            var icon = lazy.creat("div","icon51");
            icon.style.backgroundImage = "url("+arr[0].icon+")";
            tdl.appendChild(icon);
            var label = lazy.creat("div","label51");
            label.innerHTML = '<span>'+arr[0].label+'</span>';
            tdl.appendChild(label);
            tr.appendChild(tdl);
            if(arr[0].onclick) {
                tdl.onclick = function() {
                    var i = parseInt(this.getAttribute("index"));
                    arr[i].onclick();
                }
            }
            //右
            var tdr = lazy.creat("a","td ub ub-ver");
            for(var i = 1; i < 3; i++) {
                var td = lazy.creat("a","td2 ub",{"index":i});
                var icon = lazy.creat("div","icon5");
                icon.style.backgroundImage = "url("+arr[i].icon+")";
                td.appendChild(icon);
                var label = lazy.creat("div","label5");
                label.innerHTML = '<span>'+arr[i].label+'</span>';
                td.appendChild(label);
                tdr.appendChild(td);
                if(arr[i].onclick) {
                    td.onclick = function() {
                        var i = parseInt(this.getAttribute("index"));
                        arr[i].onclick();
                    }
                }
            }    
            tr.appendChild(tdr);  
            table.appendChild(tr);
            //剩下的
            var tr = lazy.creat("div","tr trb ub");
            for(var i = 3; i < arr.length; i++) {
                var td = lazy.creat("a","td ub-f1 ub ub",{"index":i});
                var icon = lazy.creat("div","icon5");
                icon.style.backgroundImage = "url("+arr[i].icon+")";
                td.appendChild(icon);
                var label = lazy.creat("div","label5");
                label.innerHTML = '<span>'+arr[i].label+'</span>';
                td.appendChild(label);
                tr.appendChild(td);
                if(arr[i].onclick) {
                    td.onclick = function() {
                        var i = parseInt(this.getAttribute("index"));
                        arr[i].onclick();
                    }
                }
            }
            table.appendChild(tr);
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
