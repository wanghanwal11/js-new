lazy.plugins.title = {
     "init" : function(el, data){
         
         var trzw = lazy.creat("div","trzw");
         var tr = lazy.creat("div","tr ub");
         
         var ps = data.ps;
         if(ps == "center"){
             //左
             var td_left = lazy.creat("div","ub-f1");
             td_left.innerHTML=data.left[0].content;
             //中
             var td_center = lazy.creat("div","choose ub-f1");
             td_center.innerHTML=data.center[0].content;
             
             
             //右
             var td_right = lazy.creat("div","ub-f1");
             td_right.innerHTML=data.right[0].content;
         }else if(ps == "right"){
             //左
             var td_left = lazy.creat("div","ub-f1");
             td_left.innerHTML=data.left[0].content;
            
             //中
             var td_center = lazy.creat("div","ub-f1");
             td_center.innerHTML=data.center[0].content;
             
             
             //右
             var td_right = lazy.creat("div","choose ub-f1");
             td_right.innerHTML=data.right[0].content;
         }else{
             //左
             var td_left = lazy.creat("div","choose ub-f1");
             td_left.innerHTML=data.left[0].content;
            
             //中
             var td_center = lazy.creat("div","ub-f1");
             td_center.innerHTML=data.center[0].content;
             
             
             //右
             var td_right = lazy.creat("div","ub-f1");
             td_right.innerHTML=data.right[0].content;
         }
         
         
         //点击事件
         td_left.onclick = function() {
                td_left.setAttribute("class", "choose ub-f1"); 
                td_center.setAttribute("class", "ub-f1"); 
                td_right.setAttribute("class", "ub-f1"); 
                data.left[0].onclick(data);
         } 
         td_center.onclick = function() {
                td_left.setAttribute("class", "ub-f1"); 
                td_center.setAttribute("class", "choose ub-f1"); 
                td_right.setAttribute("class", "ub-f1"); 
                data.center[0].onclick(data);
         } 
         td_right.onclick = function() {
                td_left.setAttribute("class", "ub-f1"); 
                td_center.setAttribute("class", "ub-f1"); 
                td_right.setAttribute("class", "choose ub-f1"); 
                data.right[0].onclick(data);
         } 
         
         tr.appendChild(td_left);
         tr.appendChild(td_center);
         tr.appendChild(td_right);
         
         el.appendChild(tr);
         el.appendChild(trzw);
         
         
        
    },
    "edit" : function(parentEl, el, data){
       
    }
}