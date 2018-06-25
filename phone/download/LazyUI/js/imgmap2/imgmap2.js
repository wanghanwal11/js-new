lazy.plugins.imgmap2 = {
	"init" : function(el,data) {
	    
	    var img = lazy.create("img","");
	    img.src= data.src;
	    var s = document.body.clientWidth / 720 ;
	    lazy.for(data.rect,function(obj){
	        var arr = obj.coords.split(",");
	        var div = lazy.create("div","")
	        
	        div.style.position = "fixed";
	       
	        div.style.top = d(arr[1])+"px";
	        div.style.width = "720px";
	        var height = d(arr[3])-d(arr[1]);
	        
	        div.style.height = height+"px";
	        div.ontouchstart = function(){
	            
	            if(obj.onclick)
	            obj.onclick()
	        }
	        
	        el.appendChild(div)
	    })
	    el.appendChild(img)
	    
            function d(a) {
                
                if(s<0)return a/s;
                else return a*s;
            }
            function c(a,top) {
                if(s<0)return a/s;
                else return (a*s-top);
            }
           
	   
	    
        
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
