lazy.plugins.address = {
	"init" : function(el,data) {
	    var table = data.table?data.table:[];
	    var addressDom = lazy.creat("div","addressDom");
	    for(var i=0;i<table.length;i++){
	        add(table[i],null,i)
	    }
	    function add(obj,id,i,level){
	        var hang1 = null;
	        if(id&&document.getElementById(id)) hang1 = document.getElementById(id);
	        var hang = lazy.creat("div","hang");
	        hang.setAttribute("id",obj.id);
	        hang.setAttribute("type",obj.type);
	        if(obj.type=='org'){
	            var orgDom = lazy.creat("div","org sq");
    	        orgDom.setAttribute("orgid",obj.id);
	            orgDom.setAttribute("chose","nodata");
	            orgDom.innerHTML = obj.title;
	            orgDom.onclick = function(){
	                if(this.getAttribute("chose")=="nodata"){
                        this.setAttribute("chose","up");
                        this.className = "org up";
                        obj.onclick(this.getAttribute("orgid"));
                    }else if(this.getAttribute("chose")=="up"){
                        this.setAttribute("chose","close");
                        this.className = "org sq";
                       this.nextSibling.style.display = "none";
                    }else{
                        this.setAttribute("chose","up");
                        this.className = "org up";
                        this.nextSibling.style.display = "inline";
                    }
	            }
	            hang.appendChild(orgDom);
	            
	            var nextDom = lazy.creat("div","next");
	            hang.appendChild(nextDom);
	            
	        }
	        if(obj.type=="person"){
	            var personDom = lazy.creat("div","person ub");
	            personDom.setAttribute("personid",obj.id);
                personDom.setAttribute("personobj",obj);
	            var icon = getIcon(obj.icon,obj.title,i);
	            personDom.appendChild(icon);
	            
	            var name = lazy.creat("div","name");
	            name.innerHTML = obj.title;
	            personDom.appendChild(name);
    	        personDom.onclick = function(){
    	           obj.onclick(this.getAttribute("personid"),obj);
                }
	            
	            hang.appendChild(personDom);
	        }
	        if(hang1!=null){
	            hang.className = "hang child";
	            hang.style.paddingLeft = 1*level+"rem";
	            hang1.getElementsByClassName("next")[0].appendChild(hang)
	        }else{
	            hang.className = "hang perent";
    	        addressDom.appendChild(hang);
	        }
	    }
	    el.appendChild(addressDom);
	    data.add = add;
	    
	    data.addtable = function(table){
	        for(var i=0;i<table.length;i++){
                add(table[i],null,i)
            }
	    }
	    
	    data.clean = function(){
	        addressDom.innerHTML = "";
	    }
	    
	    function getIcon(src,title,i){
	        if(src&&src.indexOf("http")<0) src = getIP() + src;
	        var img = new Image();
            img.src = src;
            var icon = lazy.creat("div","icon");
            img.onerror = function() {
                var icontitle1 = lazy.creat("div","icontitle bcolor"+parseInt(i%7));
                icontitle1.innerHTML = '<span>'+title.substring((title.length>2?1:0),3)+'</span>';
                icon.appendChild(icontitle1);
            }
            img.onload = function() {
                var iconimg = lazy.creat("div","iconimg");
                iconimg.style.backgroundImage = "url("+src+")";
                icon.appendChild(iconimg);
            }
            return icon;
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
