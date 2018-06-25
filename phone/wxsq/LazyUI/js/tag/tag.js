lazy.plugins.tag = {
	"init" : function(el,data) {
		//el.style.width = document.body.clientWidth + "px";
		var table = lazy.create("div", "table");
		if(data.content){
		    one(data.content);
		}
	   
	    el.appendChild(table);
	    function one(obj) {
	        var length = obj.length;
	        lazy.for(obj,function(str,i){
	            var tag1 = lazy.create("div","tag tag"+length+i);
                   tag1.innerHTML = '<span>'+obj[i]+'</span>';
                   table.appendChild(tag1)
	        })
	        /*switch(obj.length){
	            case 1:
	               var tag1 = lazy.create("div","tag tag1");
	               tag1.innerHTML = '<span>'+obj[0]+'</span>';
	               table.appendChild(tag1)
	               break;
	             case 2:
	               var tag1 = lazy.create("div","tag tag21");
                   tag1.innerHTML = '<span>'+obj[0]+'</span>';
                   table.appendChild(tag1)
                   var tag2 = lazy.create("div","tag tag22");
                   tag2.innerHTML = '<span>'+obj[0]+'</span>';
                   table.appendChild(tag2)
                   break;
	        }*/
	    }
	    data.add = one;
	    data.clean = function() {
	        table.innerHTML = '';
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
