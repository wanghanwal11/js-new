lazy.plugins.tag3 = {
	"init" : function(el,data) {
		//el.style.width = document.body.clientWidth + "px";
		var click = false;
		if(data.click) click = true;
		var table = lazy.create("div", "table box "+(data.direction=="row"?'':"box_v"));
		if(data.content){
		    lazy.for(data.content,function(obj){
		        one(obj);
		    })
		   //one(data.content)
		    
		}
		var arr = lazy.getParameter("tagkey");
		if(arr){
		    lazy.for(arr,function(obj){
                one(obj);
            })
		}
		var add = lazy.create("div","add");
		add.onclick=function(){
		    if(data.addclick) data.addclick()
		}
		table.appendChild(add)
	    el.appendChild(table);
	    function one(obj) {
	        var addnode = add;
	        var zu = lazy.create("div","tagzu box")
            var tag1 = lazy.create("div","tag2 box");
               tag1.innerHTML = '<span>'+obj.title+'</span>';
               tag1.setAttribute("id",obj.id)
           var cha = lazy.create("div",'cha');
           cha.onclick = function(){
              var node = this.parentNode;
              table.removeChild(node);
              setCache()
           }
	       zu.appendChild(tag1)
	       zu.appendChild(cha)
	       //table.appendChild(zu)
	       table.insertBefore(zu, addnode);
	       setCache()
	    }
	    function setCache(){
	        var zu = el.getElementsByClassName("tagzu");
	        var arr = []
	        for(var i=0 ;i<zu.length;i++){
	            var temp = {};
	            temp.id = zu[i].getElementsByClassName("tag2")[0].getAttribute("id");
                temp.title = zu[i].getElementsByTagName("span")[0].innerText;
                arr.push(temp)
	        }
	        lazy.setParameter("tagkey",arr)
	        
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
