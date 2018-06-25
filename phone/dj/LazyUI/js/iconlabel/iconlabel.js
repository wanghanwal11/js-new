lazy.plugins.iconlabel = {
	"init" : function(el,data) {
	    var tr = lazy.creat("a","a ub");
		tr.innerHTML = '<div class="icon" style="background-image: url('+data.icon+');"></div><div class="ub-f1 title"><span class="as">'+(data.text?data.text:"")+'</span></div>';
		el.appendChild(tr);
	    tr.onclick = function() {
	       if(data.onclick)data.onclick();
	    }
	    data.value=function(a){
	         el.getElementsByClassName("as")[0].innerHTML=a;
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
