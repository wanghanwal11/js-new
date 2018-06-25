lazy.plugins.tool = {
	 "init" : function(el, data){
	    
	     var status_left = 1;
	     var status_right = 0;
	     //var src = data.button[0].src;
	     if(data.on == "right"){
	         status_left = 0;
            status_right = 1;
	     }
         var tr = lazy.creat("div","tr2 ub");
         tr.style.backgroundColor=data.backgroundColor;
         tr.style.backgroundSize="100%";
         tr.style.backgroundImage='url('+(data.backgroundImage)+')';
        
         var trzw = lazy.creat("div","trzw");
         //左
         
         //中
         var td_center = lazy.creat("div","title2 ub-f1");
         
         
         
        
             var td_middle = lazy.creat("div","middle2 ub");
             if(status_left==0){
                 var left = lazy.creat("div","common2 ub-f1");
             left.innerHTML = '<span>'+data.button[0].content+'</span>';
             var right = lazy.creat("div","common2 choose ub-f1");
             right.innerHTML = '<span>'+data.button[1].content+'</span>';
             }else{
                var left = lazy.creat("div","common2 choose ub-f1");
             left.innerHTML = '<span>'+data.button[0].content+'</span>';
             var right = lazy.creat("div","common2 ub-f1");
             right.innerHTML = '<span>'+data.button[1].content+'</span>'; 
             }
             
             td_middle.appendChild(left);
             td_middle.appendChild(right);
             td_center.appendChild(td_middle);
             left.onclick = function(){
                 
                 if(!status_left){
                     status_left = 1;
                     status_right = 0;
                     left.setAttribute("class", "common2 choose ub-f1"); 
                     right.setAttribute("class", "common2 ub-f1"); 
                     data.button[0].onclick();
                 }
                 
             }
             right.onclick = function(){
                 if(!status_right){
                     status_right = 1;
                     status_left = 0;
                     left.setAttribute("class", "common2 ub-f1"); 
                     right.setAttribute("class", "common2 choose ub-f1"); 
                     data.button[1].onclick();
                 }
                 
             } 
         
        
        
         tr.appendChild(td_center);
        
       
         el.appendChild(tr);
         el.appendChild(trzw);
         //显示和关闭按钮
         
        
    },
    "edit" : function(parentEl, el, data){
       
    }
}