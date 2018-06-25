lazy.plugins.lazyframe = {
     "init" : function(el, data){
         var left = lazy.create("div","left");
         setData(data.left, function (el1){
           left.appendChild(el1);
         })
         var right = lazy.create("div","right");
         setData(data.right,function(el2){
             right.appendChild(el2)
         })
         el.appendChild(left);
         el.appendChild(right);
         
    },
    "edit" : function(parentEl, el, data){
       
    }
}