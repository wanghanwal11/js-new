lazy.plugins.footer = {
    
	 "init" : function(el, data){
	     var tr = lazy.create("div","tr ub");
	    lazy.for(data.table,function(arr,i){
	        var td = lazy.create("div","td ub-f1 "+(i==0?"choose":""));
	        td.innerHTML='<span>'+arr.text+'</span>';
	        td.style.backgroundImage = "url("+arr.icon+".png)";
	        td.onclick = function(){
	            if(el.getElementsByClassName("choose")[0]){
	                el.getElementsByClassName("choose")[0].className = "td ub-f1";
	            }
	            this.className = "td ub-f1 choose";
	            if(arr.onclick)
	            arr.onclick()
	        }
            tr.appendChild(td); 
	    })
	    
	     el.appendChild(tr);  
	     if(data.select){
	        
            if(el.getElementsByClassName("choose")[0]){
                    el.getElementsByClassName("choose")[0].className = "td ub-f1";
                }
            el.getElementsByClassName("td")[data.select].className = "td ub-f1 choose";
        }
    },
    "edit" : function(parentEl, el, data){
        
    }
}