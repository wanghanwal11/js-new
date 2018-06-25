lazy.plugins.table12= {
	"init" : function(el,data) {
	    var col = data.col?data.col:3;
	    var arr = data.table?data.table:[];
	    var len = arr.length;
	    var tit=data.title?data.title:[{"text":"标题","icon":""}];
	    var row =  parseInt((len-1)/col) + 1;//行数
	    var title = lazy.create("div","title");
	    var table = lazy.create("div","table");
	    if(tit[0].icon){
	        title.innerHTML="<div class='icons' style='background:url("+tit[0].icon+");background-size: cover;background-position-y: -0.3rem;'></div>"+tit[0].text
	    }else{
	        title.innerHTML=tit[0].text;
	    }
	    if(tit[0].onclick){
	        title.onclick = function(){
	            tit[0].onclick(data.id)
	        }
	    }
	    for(var i = 0; i < arr.length; i++) {
    		one(arr[i],i);
	    }
	    
	    el.appendChild(title);
	    el.appendChild(table);
	    function one(obj) {
	        var td=lazy.create("div","td box box_i");
	        if(obj.icon){
	             var icon = lazy.create("div","icon");
                icon.style.backgroundColor = obj.color;
                icon.style.backgroundImage = "url("+obj.icon+")";
                 td.appendChild(icon);
	        }
	       
                var label = lazy.create("div","label");
                //label.innerHTML = '<span>'+obj.label+'</span>';
                label.innerHTML = obj.label;
               if(obj.color) label.style.color= obj.color;
                td.appendChild(label);
                var xian = lazy.create("div","xian");
                td.appendChild(xian);
                if(obj.onclick) {
                    td.onclick = function() {
                        obj.onclick(obj,el);
                    }
                }
	        table.appendChild(td);
	    }
	    function more(obj) {
            var td=lazy.create("div","tdmore more box box_i");
            /*
            var icon = lazy.create("div","icon");
                icon.style.backgroundColor = obj.color;
                icon.style.backgroundImage = "url("+obj.icon+")";*/
                var label = lazy.create("div","labelmore");
                label.innerHTML = '<span>'+obj.label+'</span>';
                //td.appendChild(icon);
                td.appendChild(label);
                if(obj.onclick) {
                    td.onclick = function() {
                        obj.onclick(obj,el);
                    }
                }
            table.appendChild(td);
        }
	    data.adds=one;
	    data.addmore = more;
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
