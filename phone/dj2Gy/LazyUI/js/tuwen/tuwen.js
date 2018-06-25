lazy.plugins.tuwen = {
	"init" : function(el,data) { 
	    var tuwen=lazy.creat("div","tuwen");
	    var html='';
	    html+='<div class="left"><img src='+data.img+'></div>'
	    html+='<div class="right"><p class="h1">'+data.h1+'</p><p class="h2">'+data.h2+'</p></div>'
	    tuwen.innerHTML=html;
	    el.appendChild(tuwen)
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
