lazy.plugins.list_xq = {
	"init" : function(el,data) {
        var table = lazy.creat("div","table");
        if(data.title) {
            var tr = lazy.creat("div","tr ub");
            var title = lazy.creat("div","title slh ub-f1");
            title.innerHTML = '<span class="titlespan">'+data.title+'</span>';
            if(data.icon) {
                tr.innerHTML = '<div class="icon" style="background-image: url('+data.icon+')"></div>';
            }
            tr.appendChild(title);
            table.appendChild(tr);
        }
        if(data.h) {
            if(typeof data.h == "string") {
                var content = lazy.creat("div","content hh");
                content.innerHTML = '<span>'+data.h+'</span>';
                table.appendChild(content);
            }else {
                for(var i = 0; i < data.h.length; i++) {
                    var content = lazy.creat("div","content hh");
                    content.innerHTML = '<span>'+data.h[i]+'</span>';
                    table.appendChild(content);
                }
            }
        }
        el.appendChild(table);
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
