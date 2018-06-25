lazy.plugins.bannertitle = {
	"init" : function(el,data) {
	    el.style.backgroundImage = "url("+data.src+")";
	    if(data.text) {
	        var textdiv = lazy.creat("div","textdiv");
            textdiv.innerHTML = '<span>'+data.text+'</span>';
            el.appendChild(textdiv);
	    }
		
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
