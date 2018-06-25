lazy.plugins.piczw = {
	 "init" : function(el, data){
	    
         var trzw = lazy.creat("div","trzw");
         trzw.innerHTML = '<img src="'+lazy.url+'LazyUI/js/piczw/images/'+(data.pic)+'"/>';
         el.appendChild(trzw);
         //显示和关闭按钮
         el.onclick = function() {
             data.onclick&&data.onclick();
         }
    },
    "edit" : function(parentEl, el, data){
       
    }
}