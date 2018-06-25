lazy.plugins.btn = {
	"init" : function(el,data) {
        var buttondiv = lazy.creat("a","buttondiv");
        buttondiv.innerHTML = '<span style="letter-spacing: 0.1em;">'+(data.label?data.label:'')+'</span>';
        el.appendChild(buttondiv);
        buttondiv.onclick = function() {
            if(data.onclick)data.onclick();
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
