lazy.plugins.erweima = {
	"init" : function(el,data) {
	    el.style.backgroundImage = 'url('+data.bg+')';
	    
		if(data.src){
		    //var content = lazy.create("div","content");
		    //content.style.backgroundImage = 'url('+data.src+')';
		    var content = lazy.create('img',"content2");
            content.src = val
		    el.appendChild(content)
		}
        
        data.add=function(val){
            //var content = lazy.create("div","content");
            //content.style.backgroundImage = 'url('+val+')';
            var content = lazy.create('img',"content2");
            content.src = val
            el.appendChild(content)
        }
        
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
