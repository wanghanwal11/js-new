lazy.plugins.label = {
	"init" : function(el,data) {
		el.innerHTML = '<span>'+(data.text?data.text:"")+'</span>';
		if(data.onclick) {
		    el.onclick = function() {
		        data.onclick();
		    }
		}
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
