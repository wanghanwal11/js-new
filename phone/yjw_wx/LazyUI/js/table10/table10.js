lazy.plugins.table10= {
	"init" : function(el,data) {
	    var col = data.col?data.col:3;
	    var arr = data.table?data.table:[];
	    var len = arr.length;
	    var tit=data.title?data.title:[{"text":"标题","icon":"moren.png"}];
	    var row =  parseInt((len-1)/col) + 1;//行数
	    var title = lazy.create("div","title");
	    var table = lazy.create("div","table box box_v");
        title.innerHTML="<div class='icons' style='background:url("+tit[0].icon+");background-size: cover;background-position-y: -0.3rem;'></div>"+tit[0].text
	    for(var i = 0; i < row; i++) {
	        tr = lazy.create("div","box box_around tr");
	        for(var j = 0; j < col; j++) {
	            var n = j + i * col;
                one(arr[n],tr);
            }
            table.appendChild(tr);
	    }
	    el.appendChild(title);
	    el.appendChild(table);
	    function one(obj, tr) {
	        var td;
	        if(obj) {
	            if(obj.class) {
	               td = lazy.create("a","td box_f1 "+obj.class);
	            }else {
	               td = lazy.create("a","td box_f1 "); 
	            }
                var icon = lazy.create("div","icon");
                icon.style.backgroundColor = obj.color;
                icon.style.backgroundImage = "url("+obj.icon+")";
                var label = lazy.create("div","label");
                label.innerHTML = '<span>'+obj.label+'</span>';
                td.appendChild(icon);
                td.appendChild(label);
                if(obj.onclick) {
                    td.onclick = function() {
                        obj.onclick(obj);
                    }
                }
	        }else {
	            td = lazy.create("div","td box_f1");
	        }
	        tr.appendChild(td);
	    }
	    data.hide=function(){
	        el.style.display="none";
	    }
	    data.show=function(){
            el.style.display="block";
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
