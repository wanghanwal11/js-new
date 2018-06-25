lazy.plugins.label = {
	"init" : function(el,data) {
	    if(data.class)el.className = data.class;
	    var _html = '<div class="ub">';
		_html += '<div class="first slh"><span class="title slh">'+(data.text?data.text:"")+'</span></div>';
		if(data.edit){
		   _html  += '<div class="edit"></div>';
		}
	    _html +='</div>';
	    el.innerHTML = _html;
	    if(data.edit){
    	    el.getElementsByClassName("edit")[0].onclick = function(){
    	        data.edit();
    	    }
	    }
		if(data.onclick) {
		    el.onclick = function() {
		        data.onclick();
		    }
		}
		data.setTitle = function(str){
		    el.getElementsByClassName("title")[0].innerHTML = str;
		}
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
