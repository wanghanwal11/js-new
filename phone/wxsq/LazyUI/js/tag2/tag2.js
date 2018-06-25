lazy.plugins.tag2 = {
	"init" : function(el,data) {
		//el.style.width = document.body.clientWidth + "px";
		var click = false;
		if(data.click) click = true;
		var table = lazy.create("div", "table box "+(data.direction=="row"?'':"box_v"));
		if(data.content){
		    one(data.content);
		}
	    el.appendChild(table);
	    function one(obj) {
	        var length = obj.length;
	        lazy.for(obj,function(str,i){
	            var tag1 = lazy.create("div","tag2 box "+(obj[i].choose==1?'choose':''));
                   tag1.innerHTML = '<span>'+obj[i].title+'</span>';
                   tag1.setAttribute("choose",obj[i].choose)
                   tag1.setAttribute("id",obj[i].id)
                   table.appendChild(tag1)
                if(click){
                    tag1.onclick = function(){
                        if(this.getAttribute('choose')==1){
                            this.className="tag2 box"
                            this.setAttribute("choose",0)
                        }else{
                            this.className="tag2 box choose"
                            this.setAttribute("choose",1)
                        }
                        
                    }
                }
	        })
	        /*switch(obj.length){
	            case 1:
	               var tag1 = lazy.create("div","tag tag1");
	               tag1.innerHTML = '<span>'+obj[0]+'</span>';
	               table.appendChild(tag1)
	               break;
	             case 2:
	               var tag1 = lazy.create("div","tag tag21");
                   tag1.innerHTML = '<span>'+obj[0]+'</span>';
                   table.appendChild(tag1)
                   var tag2 = lazy.create("div","tag tag22");
                   tag2.innerHTML = '<span>'+obj[0]+'</span>';
                   table.appendChild(tag2)
                   break;
	        }*/
	    }
	    data.add = one;
	    data.return = function() {
	        var value = [];
	        var tags = el.getElementsByClassName("tag2");
	        lazy.for(tags,function(obj,i){
	            if(i<tags.length){
                    var str = obj.className;
                    var num = str.indexOf('choose')
                    if(num>-1){
                        //value.push(obj.getElementsByTagName("span")[0].innerText);
                        value.push(obj.getAttribute("id"));
                    }
	            }
	            
	        })
	        return value;
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
