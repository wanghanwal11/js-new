lazy.plugins.footerbutton = {
	"init" : function(el,data) {
	    var footerbutton = lazy.creat("div", "footerbutton ub");
	    lazy.for(data.table?data.table:[], function(val) {
	        one(val);
	    })
	    function one(obj) {
	       var btn =  lazy.creat("a", "btn ub-f1");
	       if(obj.icon) {
	           btn.innerHTML = '<span class="icon" style="background-image:url('+obj.icon+')">'+obj.label+'</span>';
               btn.onclick = function() {
                    if(obj.onclick)obj.onclick();
               }
           }else {
               btn.innerHTML = '<span>'+obj.label+'</span>';
               if(obj.onclick) {
                   btn.style.backgroundColor = "#f20";
                   btn.style.color = "#fff";
                   btn.onclick = function() {
                        obj.onclick();
                   }
               }else {
                   btn.style.backgroundColor = "#ccc";
                   btn.style.color = "#efefef";
               }
           }
           
           
	       footerbutton.appendChild(btn);
	    }
	    document.body.appendChild(footerbutton);
	    
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
