lazy.plugins.ppt2 = {
	"init" : function(el,data) {
	    var pages = data.pages;
	    var maxdiv = lazy.create("div","maxdiv ub")
		lazy.for(pages,function(obj,i){
		    var li = lazy.create("div","maxdiv_li "+(i==0?"maxdiv_lid":""));
		    li.setAttribute("index",i);
		    li.style.backgroundImage = "url("+obj.src+")";
		    if(obj.title){
		        var title = lazy.create("div","maxdiv_title");
		        title.innerHTML='<span>'+(obj.title?obj.title:'')+'</span>';
		        li.appendChils(title)
		    }else{
		        var dian = lazy.create("div","dian");
		        var _html = '';
		        lazy.for(pages,function(obj,j){
		            _html+='<span class='+(i==j?'dian1':'dian2')+'>●</span>';
		        })
               dian.innerHTML = _html;
                li.appendChild(dian);
		    }
		    maxdiv.appendChild(li);
		})
		el.appendChild(maxdiv);
		//点击事件
		var list = el.getElementsByClassName("maxdiv_li");
		for(var i = 0; i < list.length; i++) {
		    if(pages[i].onclick) {
		        list[i].onclick = function() {
                    var n = parseInt(this.getAttribute("index"));
                    pages[n].onclick();
                }
		    }
		    
		}
		//轮播
		if(pages.length>1) {
            var k = -1;
            var now = 0;
            
            
            var timer = setInterval(function(){
                 var list = el.getElementsByClassName("maxdiv_li");
                 maxdiv.appendChild(list[0]);
                 if(list.length>=6){
                     maxdiv.removeChild(list[0]);
                 }
                  
                 el.getElementsByClassName("maxdiv_li")[0].className = "maxdiv_li maxdiv_lid";
            },2500)
            
            /*
            var t = null;
            lb();
            function lb() {
                
                if(t)clearInterval(t);
                t = setInterval(function() {
                    if(k<pages.length-1) {
                        el.getElementsByClassName("maxdiv_li")[0].className = "maxdiv_li maxdiv_lid";
                        k++;
                    }else {
                        el.getElementsByClassName("maxdiv_li")[0].className = "maxdiv_li";
                        k = 0;
                    }
                    el.getElementsByClassName("maxdiv_li")[0].style.marginLeft = -(k*100) + "%";
                    
                },2500);
            }*/
           
             var x0,x1,xw;
            
             var now_page = document.getElementById("ppt").getElementsByClassName("maxdiv_lid")[0];
             var index = now_page.getAttribute("index")
             
             var ppt = document.getElementById("ppt").getElementsByClassName("maxdiv")[0];
              ppt.addEventListener("touchstart",function(e){
                 e.preventDefault();
                 x0=e.touches[0].clientX;
             },false);
             ppt.addEventListener("touchmove",function(e){
                 e.preventDefault();
                 x1=e.changedTouches[0].clientX;
                 xw=x1-x0;
                 
             },false);
             ppt.addEventListener("touchend",function(e){
                 if(xw>0){
                     
                     if(k > 0) {
                                 k--;
                                 el.getElementsByClassName("maxdiv_li")[0].className = "maxdiv_li maxdiv_lid";
                                 el.getElementsByClassName("maxdiv_li")[0].style.marginLeft = -(k*100) + "%";
                                 lb()
                             }
                             
                 }else{
                     if(k<pages.length-1) {
                                  k++;
                                  el.getElementsByClassName("maxdiv_li")[0].className = "maxdiv_li maxdiv_lid";
                                  el.getElementsByClassName("maxdiv_li")[0].style.marginLeft = -(k*100) + "%";
                                  lb()
                              }
                 }
                 
             },false);     
            
        }
       
		
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
