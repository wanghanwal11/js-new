lazy.plugins.div2 = {
	"init" : function(el,data) {
		if(data.text){
		    el.innerHTML = '<div class="content">'+data.text+'</div>';
		}
        data.hide=function(){
            el.style.display="none";
        }
        data.show=function(){
            el.style.display="block";
        }
        data.addtext=function(txt){
            if(txt){ el.innerHTML = '<div class="content">'+txt+'</div>';}
        }
        el.onclick=function(){
            if(data.onclick){data.onclick()}
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
