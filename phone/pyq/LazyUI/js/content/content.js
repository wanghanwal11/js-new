lazy.plugins.content= {
	"init" : function(el,data) {
	    var arr =  data.content.split(';')
	    var content = lazy.creat("div","content ub ub-ver");
	    for(var i = 0 ; i < arr.length ; i++){
	        var line = lazy.creat("textarea","line ub");
	        line.innerHTML= arr[i];
	        line.readOnly = true;
	        content.appendChild(line);
	    }
        
	    el.appendChild(content);
	    
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
