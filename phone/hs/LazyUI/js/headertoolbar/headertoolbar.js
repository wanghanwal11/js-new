lazy.plugins.headertoolbar = {
	 "init" : function(el, data){
	     var leftarr = data.left?data.left:[];
	     var rightarr = data.right?data.right:[];
         var tr = lazy.create("div","tr ub");
         tr.style.backgroundColor = data.backgroundColor;
         //左
         var td_left = lazy.create("div","td td_left ub-f1");
         td_left.style.backgroundImage = "url("+data.left+")";
         td_left.onclick = function(){
             data.onclick()
         }
         //
         
         //右
         var td_right = lazy.create("div","td td_right ub-f1");
         td_right.style.backgroundImage = "url("+data.right+")";
         td_right.onclick = function(){
             data.onclick()
         }
        
         //
         tr.appendChild(td_left);
         //tr.appendChild(td_center);
         tr.appendChild(td_right);
         
         el.appendChild(tr);
         
    },
    "edit" : function(parentEl, el, data){
       
    }
}