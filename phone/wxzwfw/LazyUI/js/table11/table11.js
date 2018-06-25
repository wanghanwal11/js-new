lazy.plugins.table11= {
	"init" : function(el,data) {
	    var col = data.col?data.col:3;
	    var arr = data.table?data.table:[];
	    var len = arr.length;
	    var tit=data.title?data.title:[{"text":"标题","icon":"moren.png"}];
	    var row =  parseInt((len-1)/col) + 1;//行数
	    var title = lazy.creat("div","title");
	    var table = lazy.creat("div","table");
        title.innerHTML="<div class='icons' style='background:url("+tit[0].icon+");background-size: cover;background-position-y: -0.3rem;'></div>"+tit[0].text
	    for(var i = 0; i < arr.length; i++) {
    		one(arr[i]);
	    }
	    el.appendChild(title);
	    el.appendChild(table);
	    function one(obj) {
	        var td=lazy.creat("div","td");
	        var icon = lazy.creat("div","icon");
                icon.style.backgroundColor = obj.color;
                icon.style.backgroundImage = "url("+obj.icon+")";
                var label = lazy.creat("div","label");
                label.innerHTML = '<span>'+obj.label+'</span>';
                td.appendChild(icon);
                td.appendChild(label);
                if(obj.onclick) {
                    td.onclick = function() {
                        obj.onclick(obj);
                    }
                }
	        table.appendChild(td);
	    }
	    data.adds=one;
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
