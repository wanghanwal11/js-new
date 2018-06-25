lazy.plugins.title2 = {
     "init" : function(el, data){
         
         var trzw = lazy.create("div","trzw");
         var tr = lazy.create("div","tr box");
         
         var ps = data.ps;
         if(ps == 1){
             //左
             var td_left = lazy.create("div","box_f1");
             td_left.innerHTML=data.left[0].content;
            
             //右
             var td_right = lazy.create("div","choose box_f1");
             td_right.innerHTML=data.right[0].content;
         }else{
             //左
             var td_left = lazy.create("div","choose box_f1");
             td_left.innerHTML=data.left[0].content;
            
             
             //右
             var td_right = lazy.create("div","box_f1");
             td_right.innerHTML=data.right[0].content;
         }
         
         
         //点击事件
         td_left.onclick = function() {
                td_left.setAttribute("class", "choose box_f1"); 
                td_right.setAttribute("class", "box_f1"); 
                data.left[0].onclick(data);
         } 
         
         td_right.onclick = function() {
                td_left.setAttribute("class", "box_f1");
                td_right.setAttribute("class", "choose box_f1"); 
                data.right[0].onclick(data);
         } 
         
         tr.appendChild(td_left);
         tr.appendChild(td_right);
         
         el.appendChild(tr);
         el.appendChild(trzw);
         
         
        
    },
    "edit" : function(parentEl, el, data){
       
    }
}