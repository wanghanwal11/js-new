lazy.plugins.renyuan = {
	"init" : function(el,data) {
	    var arr = data.table;
	    var editarr = [];
	    var table = lazy.creat("div","table");
	    for(var i=0;i<arr.length;i++){
	        add(arr[i])
	    }
	    el.appendChild(table)
	    data.add = add;
	    function add(obj){
	        var bol = obj.edit?obj.edit:false;
	        var tr = lazy.creat("a","tr ub");
	        var lefttop = lazy.creat("div","rynum");
	        lefttop.innerHTML = obj.rynum;
	        tr.appendChild(lefttop);
	        //var icon = getIcon(obj.icon);
	        var imgdiv = lazy.creat("div","imgdiv ub-f1");
	        imgdiv.setAttribute("src",obj.icon);
	        var img = new Image();
	        img.src = obj.icon;
	        img.onerror = function() {
	            if(data.louyu){
    	            imgdiv.className = "imgdiv louyu ub-f1"
	            }else{
	                imgdiv.className = "imgdiv renyuan ub-f1"
	            }
            }
            img.onload =  function(){
                imgdiv.style.backgroundImage = "url("+obj.icon+")";
            }
            imgdiv.onclick = function(){
                lazy.showImage(this.getAttribute("src"))
            }
	        tr.appendChild(imgdiv);
	        var td = lazy.creat("a","td ub-f1");
	        //var
	        for(var j=0;j<obj.h1.length;j++){
	            var hangdiv = lazy.creat("div","hang");
	            hangdiv.innerHTML = obj.h1[j];
	            td.appendChild(hangdiv);
	        }
	        if(bol==false){
    	        td.onclick = function(){
    	            obj.onclick(obj);
    	        }
	        }else{
	            td.onclick = function(){
                    //obj.onclick(obj);
                }
	        }
	        tr.appendChild(td);
	        if(bol==true){
	            var floatdiv = lazy.creat("div","edit false");
	            floatdiv.setAttribute("obj",JSON.stringify(obj));
	            floatdiv.onclick = function(){
	                if(this.className=="edit false") {
	                    this.className = "edit true";
	                    editarr.push(JSON.parse(this.getAttribute("obj")));
	                }else {
	                    this.className = "edit false";
	                    if(editarr.indexOf(JSON.parse(this.getAttribute("obj")))) {
	                        var n = editarr.indexOf(JSON.parse(this.getAttribute("obj")));
	                        editarr.splice(n,1);
	                    }
	               }
	            }
    	        tr.appendChild(floatdiv);
	        }
	        table.appendChild(tr);
	        
	    }
	    data.returnEdit = function(){
	        return editarr;
	    }
	    data.clean = function(){
	        table.innerHTML = "";
	    }
	    function getIcon(path){
	        var img = new Image();
            img.src = path;
            var icon = lazy.creat("div","icon ub-f1");
            img.onerror = function() {
                 var iconimg = lazy.creat("div","iconimg1");
                 icon.appendChild(iconimg);
            }
            img.onload = function() {
                 var iconimg = lazy.creat("div","iconimg");
                 iconimg.style.backgroundImage = "url("+path+")";
                 icon.appendChild(iconimg);
            }
            return icon;
	    }
	},
	"edit" : function(parentElement,el,data) {
	}
}
