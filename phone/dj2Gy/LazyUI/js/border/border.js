lazy.plugins.border = {
	"init" : function(el,data) {
	    var index = data.index?data.index:0;
        el.style.backgroundImage = 'url('+lazy.url+'LazyUI/js/border/border.png)';
        el.style.backgroundPosition = "0rem "+(-2.15*index)+"rem";
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
