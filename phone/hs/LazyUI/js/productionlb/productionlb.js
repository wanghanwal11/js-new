lazy.plugins.productionlb = {
     "init" : function(el, data){
         lazy.for(data.table,function(val){
             one(val)
         })
         function one(obj){
             var tr = lazy.create("div","tr ub");
             var icon = lazy.create("div","icon ub");
             icon.style.backgroundImage="url("+obj.icon+")"
             var td = lazy.create("div","td ub-f1 ub-ver");
             var h1 = lazy.create("div","h1 ub");
             h1.innerHTML='<span>'+obj.h1+'</span>';
             var h2 = lazy.create("div","h2 ub");
             h2.innerHTML='<span>'+obj.h2+'</span>';
             
             td.appendChild(h1);
             td.appendChild(h2);
             tr.appendChild(icon);
             tr.appendChild(td);
             tr.onclick=function(){
                 lazy.setParameter("content",obj.content);
                 lazy.openWin("xinwenxq.html");
             }
             el.appendChild(tr);
         }
         
         
    },
    "edit" : function(parentEl, el, data){
       
    }
}