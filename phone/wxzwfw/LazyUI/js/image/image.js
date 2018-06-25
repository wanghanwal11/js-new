lazy.plugins.image = {
	"init" : function(el,data) {
	    var tr = lazy.creat("div","tr ub ub-ver");
        var tr1 = lazy.creat("div","tr1 ub");
        tr1.innerHTML = '<span>'+(data.label?data.label:'')+'</span>';
        var pic_line = lazy.creat("div","line ub");
        var add = lazy.creat("div","add ub");
        
        
        ///////////////////////////////
        /*
        for(var i =0 ; i<3 ;i++){
            var zu = lazy.creat("div","zu ub");
        
            var pic = lazy.creat("img","pic ub");
            var src = "../LazyUI/images/morenpeople.png";
            pic.setAttribute('src',src);
            
            var cha = lazy.creat("div","cha", {"index":i});
            cha.onclick = function(){
                var index = this.getAttribute("index")*1;
                document.getElementsByClassName("zu")[index].style.display='none';
            }
            
            zu.appendChild(pic);
            zu.appendChild(cha);
            
            pic_line.appendChild(zu);
            
        }
        */
       
        
        ///////////////////////////////
        pic_line.appendChild(add);
        tr.appendChild(tr1);
        tr.appendChild(pic_line);
        
        el.appendChild(tr);
        add.onclick = function() {
            if(data.onclick)data.onclick();
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
