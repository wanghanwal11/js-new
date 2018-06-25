lazy.plugins.textareanum1 = {
	"init" : function(el,data) {
		var textarea = lazy.creat("textarea","textarea",{
	        "placeholder" : data.placeholder?data.placeholder:""
	    });
	    textarea.rows=5;
	    el.appendChild(textarea);
	    data.getval=function(){
	        return el.getElementsByTagName("textarea")[0].value;
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
