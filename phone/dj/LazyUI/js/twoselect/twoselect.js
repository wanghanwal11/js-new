lazy.plugins.twoselect = {
	"init" : function(el,data) {
	    var table = data.table;
	    var twoselectdiv = lazy.creat("div","twoselectdiv ub");
	    for(var i=0;i<table.length;i++){
	        var tablediv = lazy.creat("a","tablediv ub-f1");
	        tablediv.setAttribute("index",i);
	        tablediv.innerHTML = "<span class='tablespan'>" + table[i].title + "</span>";
	        tablediv.onclick = function(event){
	            var _el = event.target;
	            if(_el.className=="tablespan"||_el.className.indexOf("tablediv")>-1){
	                if(this.getElementsByClassName("fd")[0].style.display == ""||this.getElementsByClassName("fd")[0].style.display == "none"){
    	               var fds = document.getElementsByClassName("fd");
                       for(var s=0;s<fds.length;s++){
                         document.getElementsByClassName("fd")[s].style.display = "none"
                       }
    	               this.getElementsByClassName("fd")[0].style.display = "block";
    	               document.body.onclick = function(e2){
    	                   var _el2 = e2.target
    	                   if(_el2.className!="tablespan"&&_el2.className.indexOf("tablediv")<0){
    	                       var fds = document.getElementsByClassName("fd");
                               for(var s=0;s<fds.length;s++){
                                 document.getElementsByClassName("fd")[s].style.display = "none"
                               }
    	                   }
    	               }
	                }else {
    	               document.body.onclick = function(){}
    	               this.getElementsByClassName("fd")[0].style.display = "none"
    	            }
	            }else{
	                this.getElementsByClassName("fd")[0].style.display = "none"
	            }
	            //table[i].onclick();
	        }
	        twoselectdiv.appendChild(tablediv);
	        var content = table[i].content;
	        var fddiv = lazy.creat("div","fd");
	        for(var j=0;j<content.length;j++){
	            var afddiv = lazy.creat("a","adiv");
	            afddiv.setAttribute("index",j);
	            afddiv.innerHTML = content[j];
	            afddiv.onclick = function(){
	                if(data.select){data.select(this.parentNode.parentNode.getAttribute("index"),this.innerHTML)}
	                this.parentElement.parentElement.getElementsByTagName("span")[0].innerHTML = this.innerHTML;
	                this.parentNode.style.display = "none";
	            }
	            fddiv.appendChild(afddiv)
	        }
	        tablediv.appendChild(fddiv);
	    }
	    el.appendChild(twoselectdiv);
	    
	},
	"edit" : function(parentElement,el,data) {
	}
}
