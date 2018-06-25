lazy.plugins.alertdiy = {
	"init" : function(el,data) {
        var arr = data.button;
        var kuang = lazy.creat("div","kuang ub ub-ver");
        
        var table = lazy.creat("div","table");
        var title = lazy.creat("div","title");
        title.innerHTML = '<span>'+data.title+'</span>';
        
        var text = lazy.creat("div","text");
        text.innerHTML = '<span>'+data.text+'</span>';
        
        var tr = lazy.creat("div","tr ub");
        for(var i = 0; i < arr.length; i++) {
            one(arr[i]);
        }
        function one(obj) {
            var btn = lazy.creat("a","ub-f1 button "+(obj.class?obj.class:""));
            btn.innerHTML = '<span>'+obj.label+'</span>';
            tr.appendChild(btn);
            btn.onclick = function(){
                obj.onclick();
            }
        }
        table.appendChild(title);
        table.appendChild(text);
        table.appendChild(tr);
        var f1 = lazy.creat("div","ub-f1");
        var f2 = lazy.creat("div","ub-f1");
        kuang.appendChild(f1);
        kuang.appendChild(table);
        kuang.appendChild(f2);
        el.appendChild(kuang);
        //
        data.hide = function() {
            el.style.display = "none";
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
