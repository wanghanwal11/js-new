lazy.plugins.logo = {
	"init" : function(el,data) {
	    //190 * 190
	    if(data.radius) {
	       el.innerHTML = '<div class="icon" style="background-image:url('+data.icon+')"></div>'; 
	    }else {
	       el.style.backgroundImage = "url("+data.icon+")";
	    }
	 },
	"edit" : function(parentElement,el,data) {
		
	}
}
