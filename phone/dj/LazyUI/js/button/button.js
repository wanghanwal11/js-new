lazy.plugins.button = {
	"init" : function(el,data) {
        var buttondiv = lazy.creat("a","buttondiv");
        buttondiv.innerHTML = '<span>'+(data.label?data.label:'')+'</span>';
        el.appendChild(buttondiv);
        buttondiv.onclick = function(event) {
            if(data.onclick)data.onclick(event);
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
