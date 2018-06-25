lazy.plugins.xinwenlb = {
     "init" : function(el, data){
         lazy.for(data.table,function(val){
             one(val)
         })
         function one(obj){
             var tr = lazy.create("div","tr ub");
             var title = lazy.create("div","title ub-f1");
             title.innerHTML='<span>'+obj.title+'</span>';
             var date = lazy.create("div","date ub");
             date.innerHTML='<span>'+obj.date+'</span>';
             tr.appendChild(title);
             tr.appendChild(date);
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