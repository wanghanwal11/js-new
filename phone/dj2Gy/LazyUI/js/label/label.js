lazy.plugins.label = {
	"init" : function(el,data) {
		el.innerHTML = '<span>'+data.text+'</span>';
        data.hide=function(){
            el.style.display="none";
        }
        data.show=function(){
            el.style.display="block";
        }
        if(data.onclick) {
            el.onclick = function() {
                data.onclick();
            }
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
